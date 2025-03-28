import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { EMAIL, EMAILPASSWORD, LOGIN } from '@/utils/authTypes'
import { ItemFromPayload } from '@/utils'
import RequestStates from '@/utils/requestStates'

interface AuthState {
  user?: any | null
  loading?: string
  tabData?: string
  step?: string
  form?: string
  isData?: boolean
  error?: string | null
  userProfile?: any
  isLoggedIn?: boolean
  sessionList?: any
  leadsDetails?: any
}

const initialState: AuthState = {
  user: null,
  loading: RequestStates.init,
  tabData: EMAIL,
  step: EMAILPASSWORD,
  form: LOGIN,
  isData: false,
  userProfile: {},
  isLoggedIn: false,
  sessionList: {},
  leadsDetails: {},
}

// export const createUser = createAsyncThunk('auth/register', async (body: any) => {
//   try {
//     const res = await api.post('users/v1/user/register', body)
//     return res
//   } catch (error: any) {
//     return error.response.data
//   }
// })

// export const loginUser = createAsyncThunk('auth/login', async (body: any) => {
//   try {
//     const res = await api.post('users/v1/user/login', body)
//     return res
//   } catch (error: any) {
//     return error.response.data
//   }
// })

// export const forgotPassword = createAsyncThunk('auth/password', async (body: any) => {
//   try {
//     const res = await api.put('users/v1/user/forget-password', body)
//     return res
//   } catch (error: any) {
//     return error.response.data
//   }
// })

// export const sendOtp = createAsyncThunk('auth/sendotp', async (body: any) => {
//   try {
//     const res = await api.post('users/v1/otp', body)
//     return res
//   } catch (error: any) {
//     return error.response.data
//   }
// })

// export const verifyOtp = createAsyncThunk('auth/verifyotp', async (body: any) => {
//   try {
//     const res = await api.post('users/v1/otp/verify', body)
//     return res
//   } catch (error: any) {
//     return error.response.data
//   }
// })
// export const getUserProfile = createAsyncThunk('auth/getUserProfile', async () => {
//   try {
//     const res = await api.get('users/v1/user')
//     return res
//   } catch (error: any) {
//     return error.response.data
//   }
// })
// export const getSessionList = createAsyncThunk(
//   'auth/getSessionList',
//   async ({ id }: { id: string }, { rejectWithValue }) => {
//     try {
//       const res = await api.get(`users/v1/session/${id}`)
//       return res.data // Return the actual data
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data || 'An error occurred')
//     }
//   },
// )
// export const deleteSessions = createAsyncThunk(
//   'auth/deleteSessions',
//   async ({ query }: { query: string }, { rejectWithValue }) => {
//     try {
//       const res = await api.delete(`users/v1/session?${query}`)
//       return res.data // Return the actual data
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data || 'An error occurred')
//     }
//   },
// )

// export const addLeads = createAsyncThunk(
//   'auth/addLeads',
//   async ({ body }: { body: any }, { rejectWithValue }) => {
//     try {
//       const res = await api.post(`users/v1/lead`, body)
//       return res.data // Return the actual data
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data || 'An error occurred')
//     }
//   },
// )

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleAuthNav: (state: any, action: PayloadAction<Partial<AuthState>>) => {
      if (action.payload) {
        Object.keys(action.payload).forEach((key) => {
          const typedKey = key as keyof AuthState
          if (typedKey in state) {
            state[typedKey] = action.payload[typedKey]
          }
        })
      }
    },
    setIsData: (state, action) => {
      state.isData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
    // .addCase(createUser.pending, (state) => {
    //   state.loading = RequestStates.loading
    // })
    // .addCase(createUser.fulfilled, (state, action) => {
    //   state.loading = RequestStates.success
    //   state.user = ItemFromPayload(action.payload, 'payload')
    //   state.isLoggedIn = true
    //   state.error = null
    // })
    // .addCase(createUser.rejected, (state, action) => {
    //   state.loading = RequestStates.failure
    //   state.error = action.error.message
    // })
    // .addCase(loginUser.pending, (state) => {
    //   state.loading = RequestStates.loading
    // })
    // .addCase(loginUser.fulfilled, (state, action) => {
    //   state.loading = RequestStates.success
    //   state.user = ItemFromPayload(action.payload, 'payload')
    //   state.isLoggedIn = true
    //   state.error = null
    // })
    // .addCase(loginUser.rejected, (state, action) => {
    //   state.loading = RequestStates.failure
    //   state.error = action.error.message
    // })
    // .addCase(forgotPassword.pending, (state) => {
    //   state.loading = RequestStates.loading
    // })
    // .addCase(forgotPassword.fulfilled, (state) => {
    //   state.loading = RequestStates.success
    // })
    // .addCase(forgotPassword.rejected, (state, action) => {
    //   state.loading = RequestStates.failure
    //   state.error = action.error.message
    // })
    // .addCase(sendOtp.pending, (state) => {
    //   state.loading = RequestStates.loading
    // })
    // .addCase(sendOtp.fulfilled, (state, action) => {
    //   state.loading = RequestStates.success
    // })
    // .addCase(sendOtp.rejected, (state, action) => {
    //   state.loading = RequestStates.failure
    //   state.error = action.error.message
    // })
    // .addCase(verifyOtp.pending, (state) => {
    //   state.loading = RequestStates.loading
    // })
    // .addCase(verifyOtp.fulfilled, (state, action) => {
    //   state.loading = RequestStates.success
    // })
    // .addCase(verifyOtp.rejected, (state, action) => {
    //   state.loading = RequestStates.failure
    //   state.error = action.error.message
    // })
    // .addCase(getUserProfile.pending, (state) => {
    //   state.loading = RequestStates.loading
    // })
    // .addCase(getUserProfile.fulfilled, (state, action) => {
    //   state.loading = RequestStates.success
    //   state.userProfile = ItemFromPayload(action.payload, 'payload')
    // })
    // .addCase(getUserProfile.rejected, (state, action) => {
    //   state.loading = RequestStates.failure
    //   state.error = action.error.message
    // })
    // .addCase(getSessionList.pending, (state) => {
    //   state.loading = RequestStates.loading
    // })
    // .addCase(getSessionList.fulfilled, (state, action) => {
    //   state.loading = RequestStates.success
    //   state.sessionList = action.payload?.payload
    // })
    // .addCase(getSessionList.rejected, (state, action) => {
    //   state.loading = RequestStates.failure
    //   state.error = action.error.message
    // })
    // .addCase(deleteSessions.pending, (state) => {
    //   state.loading = RequestStates.loading
    // })
    // .addCase(deleteSessions.fulfilled, (state) => {
    //   state.loading = RequestStates.success
    // })
    // .addCase(deleteSessions.rejected, (state, action) => {
    //   state.loading = RequestStates.failure
    //   state.error = action.error.message
    // })
    // .addCase(addLeads.pending, (state) => {
    //   state.loading = RequestStates.loading
    // })
    // .addCase(addLeads.fulfilled, (state, action) => {
    //   state.loading = RequestStates.success
    //   state.leadsDetails = action?.payload?.payload
    // })
    // .addCase(addLeads.rejected, (state, action) => {
    //   state.loading = RequestStates.failure
    //   state.error = action.error.message
    // })
  },
})

export const { handleAuthNav, setIsData } = authReducer.actions

export default authReducer.reducer
