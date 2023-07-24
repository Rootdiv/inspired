import { GOODS_URL } from '@/const';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGender = createAsyncThunk('goods/fetchGender', async gender => {
  const url = new URL(GOODS_URL);
  url.searchParams.append('gender', gender);
  const response = await fetch(url);
  return await response.json();
});

export const fetchCategory = createAsyncThunk('goods/fetchData', async param => {
  const url = new URL(GOODS_URL);
  for (const key in param) {
    url.searchParams.append(key, param[key]);
  }
  const response = await fetch(url);
  return await response.json();
});

const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
    status: '',
    goodsList: [],
    page: 1,
    pages: 1,
    totalCount: null,
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGender.pending, state => {
        state.status = 'loading';
        state.totalCount = null;
      })
      .addCase(fetchGender.fulfilled, (state, action) => {
        state.status = 'success';
        state.goodsList = action.payload;
        state.page = 0;
        state.totalCount = null;
      })
      .addCase(fetchGender.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCategory.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = 'success';
        state.goodsList = action.payload.goods || action.payload;
        state.pages = action.payload.pages || 1;
        state.totalCount = action.payload.totalCount || null;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage } = goodsSlice.actions;

export default goodsSlice.reducer;
