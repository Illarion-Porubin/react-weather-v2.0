import axios from 'axios';
import { CitysList, Week } from '../../tipes';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type weatherSliceTypes = {
  data: any,
  weatherInfo: any,
  payloadDays: number[],
  citysList: CitysList[],
  filter: number,
  week: Week,
  hId: number,
  isLoading: 'idle' | 'loaded' | 'loading' | 'error'
}

export const fetchFindByName = createAsyncThunk<any, void, { rejectValue: string }
>("api/findByName", async (_, { rejectWithValue }) => {
  const {data} = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=258cd37c6560484eafb182142242103&q=Novorossiysk&days=5&aqi=no&alerts=no`);
  if (!data) {
    rejectWithValue("error fetchFindByName")
  }
  return data
})

const week = {
  Mon: "ПН",
  Tue: "ВТ",
  Wed: "СР",
  Thu: "ЧТ",
  Fri: "ПТ",
  Sat: "СБ",
  Sun: "ВС",
}

const initialState: weatherSliceTypes = {
  data: [],
  weatherInfo: null,
  payloadDays: [],
  filter: Number(),
  citysList: [{ value: "city-1", label: "Новороссийск" }, { value: "city-2", label: "Сочи" }],
  week,
  hId: 0,
  isLoading: "idle",
}

export const weatherSlice = createSlice({
  name: 'wearher',
  initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload
    },
    addCity(state, action) {
      const citysListLength = state.citysList.length + 1
      state.citysList.push({ value: `city-${citysListLength}`, label: action.payload })
    },
    setCurentDay: (state, action) => {
      state.weatherInfo = action.payload
    },
    changeId: (state, action) => {
      state.hId = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      ///fetchFindByName
      .addCase(fetchFindByName.pending, (state) => {
        state.data = [];
        state.weatherInfo = null;
        state.isLoading = "loading";
      })
      .addCase(fetchFindByName.fulfilled, (state, action) => {
        console.log(action.payload, 'fetchFindByName');
        state.data = action.payload;
        state.weatherInfo = action.payload.forecast.forecastday[0];
        state.isLoading = "loaded";
      })
      .addCase(fetchFindByName.rejected, (state) => {
        state.data = [];
        state.weatherInfo = null;
        state.isLoading = "loading";
      })
  }
});

export default weatherSlice.reducer