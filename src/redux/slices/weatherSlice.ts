import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataTypes, DayInfoTypes, WeekTypes } from '../../tipes';



type weatherSliceTypes = {
  data: DataTypes | [],
  weatherInfo: DayInfoTypes | null,
  payloadDays: number[],
  filter: number,
  week: WeekTypes,
  isLoading: 'idle' | 'loaded' | 'loading' | 'error'
}

export const fetchFindCity = createAsyncThunk<DataTypes, void | string, { rejectValue: string }
>("api/findByName", async (value, { rejectWithValue }) => {
  if (value) {
    const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=258cd37c6560484eafb182142242103&q=${value}&days=10&aqi=no&alerts=no`);
    if (!data) {
      rejectWithValue("error fetchFindCity")
    }
    return data
  }
  else {
    const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=258cd37c6560484eafb182142242103&q=Новороссийск&days=10&aqi=no&alerts=no`);
    if (!data) {
      rejectWithValue("error fetchFindCity")
    }
    console.log(data, 'fetchFindCity');
    return data
  }
})


const week: WeekTypes = {
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
  week,
  isLoading: "idle",
}

export const weatherSlice = createSlice({
  name: 'wearher',
  initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload
    },
    setWeatherInfo: (state, action) => {
      state.weatherInfo = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      ///fetchFindCity
      .addCase(fetchFindCity.pending, (state) => {
        state.data = [];
        state.weatherInfo = null;
        state.isLoading = "loading";
      })
      .addCase(fetchFindCity.fulfilled, (state, action) => {
        state.data = action.payload;
        state.weatherInfo = action.payload.forecast.forecastday[0];
        state.isLoading = "loaded";
      })
      .addCase(fetchFindCity.rejected, (state) => {
        state.data = [];
        state.weatherInfo = null;
        state.isLoading = "loading";
      })
  }
});

export default weatherSlice.reducer