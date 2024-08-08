import api from "@/components/util/apiPath";
import DomainNames from "@/components/util/domainSliceNames";
import addParams from "@/components/util/paramsConfig";
import getRequestConfig from "@/components/util/requestConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data:[],   
    loaded:'idle',
    error:null
  }

export const getForecastData = createAsyncThunk(DomainNames.weather.concat('/')  , async (initialData) => {
    const response = await axios.get(api.weather.get.concat(addParams(initialData.data)),getRequestConfig());
    
      return response.data
  })

 

  const weatherSlice = createSlice({
    name: DomainNames.weather,
    initialState,
    reducers: {
      
    },
    extraReducers(builder) {
        builder
            // -----получение форм-отчетов компании--------------------
          .addCase(getForecastData.pending, (state, action) => {
            state.loading = 'loading'
          })
          .addCase(getForecastData.fulfilled, (state, action) => {
            state.loading = 'succeeded';

            state.data = action.payload

            state.error = null;
          })
          .addCase(getForecastData.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error
          })
          //-------------------------------------------------------
         
    }
  })

  export function getReports(state){

        return state[DomainNames.documents].reports;

  }
  export default weatherSlice.reducer

  