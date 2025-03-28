import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import RequestStates from '@/utils/requestStates'
import { insightServiceEndpoint } from '@/lib/redux/RESTful/axiosInstances'
import { axiosGetWithQueryParams } from '../RESTful/axiosUtils'

interface PaymentState {
  loading: string
  openModel: boolean
  error?: string | null
  allCategorys: any
  tagsContent: any
  articlesList: any
  articleById: any
}

const initialState: PaymentState = {
  loading: RequestStates.init,
  openModel: false,
  error: '',
  allCategorys: {}, // Ensure rows is always an array
  tagsContent: [],
  articlesList: {}, // Ensure rows is always an array
  articleById: {},
}

export const getCategory = createAsyncThunk<any, Record<string, any>>(
  'articleReducer/getCategory',
  async (filterParams) => {
    try {
      const res = await axiosGetWithQueryParams(insightServiceEndpoint, '/category', filterParams)
      console.log(res)
      return res
    } catch (error: any) {
      return error.response.data
    }
  },
)

export const getArticles = createAsyncThunk<any, Record<string, any>>(
  'articleReducer/getArticles',
  async (filterParams) => {
    try {
      const res = await axiosGetWithQueryParams(insightServiceEndpoint, 'insights', filterParams)
      return res
    } catch (error: any) {
      return error.response.data
    }
  },
)

export const getTagsContent = createAsyncThunk<
  any,
  { id: string; filterParams: Record<string, any> }
>('articleReducer/getTagsContent', async ({ id, filterParams }) => {
  try {
    const res = await axiosGetWithQueryParams(
      insightServiceEndpoint,
      `insight-contents/insights/${id}`,
      filterParams,
    )
    return res
  } catch (error: any) {
    return error.response.data
  }
})

export const getArticleById = createAsyncThunk<any, string>(
  'articleReducer/getArticleById',
  async (id) => {
    try {
      const res = await axiosGetWithQueryParams(insightServiceEndpoint, `insights/${id}`)
      return res
    } catch (error: any) {
      return error.response.data
    }
  },
)

const articleReducer = createSlice({
  name: 'article',
  initialState: initialState,
  reducers: {
    handleArticles: (state) => {
      state.tagsContent = {}
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = RequestStates.loading
        state.error = null
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = RequestStates.success
        state.allCategorys = action.payload
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = RequestStates.failure
        state.error = action.error.message
      })
      .addCase(getArticles.pending, (state) => {
        state.loading = RequestStates.loading
        state.error = null
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.loading = RequestStates.success
        state.articlesList = action.payload || { payload: { rows: [] } }
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.loading = RequestStates.failure
        state.error = action.error.message
      })
      .addCase(getTagsContent.pending, (state) => {
        state.loading = RequestStates.loading
        state.error = null
      })
      .addCase(getTagsContent.fulfilled, (state, action) => {
        state.loading = RequestStates.success
        state.tagsContent = action.payload.data.payload
      })
      .addCase(getTagsContent.rejected, (state, action) => {
        state.loading = RequestStates.failure
        state.error = action.error.message
      })
      .addCase(getArticleById.pending, (state) => {
        state.loading = RequestStates.loading
        state.error = null
      })
      .addCase(getArticleById.fulfilled, (state, action) => {
        state.loading = RequestStates.success
        state.articleById = action.payload.data.payload
      })
      .addCase(getArticleById.rejected, (state, action) => {
        state.loading = RequestStates.failure
        state.error = action.error.message
      })
  },
})

export const { handleArticles } = articleReducer.actions
export default articleReducer.reducer
