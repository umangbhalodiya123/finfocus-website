const thunkHandler = async (asyncFn: any, thunkAPI: any) => {
  try {
    const response = await asyncFn
    return response.data
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data)
  }
}

export default thunkHandler
