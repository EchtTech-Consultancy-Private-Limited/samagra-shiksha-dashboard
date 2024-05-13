import { createSlice } from "@reduxjs/toolkit";

const MapSlice = createSlice({
    name: 'Map',
    initialState:{
        mapData:[],
        stateMapDetails:{},
        mapLoaded:false,
        grossEData:"intial name",
        
    },
    reducers: {
      updateMapData(state,action) {
        state.mapData=action.payload;
      },
      updateMapSession(state,action) {
        state.stateMapDetails=action.payload;
      },
      updateMapLoaded(state,action) {
        state.mapLoaded=action.payload;
      },
      filterGrossEvent(state,action) {
        state.grossEData=action.payload;
      },
     
    },
  })
  
  export const { updateMapData,updateMapSession,updateMapLoaded,filterGrossEvent } = MapSlice.actions
  export default MapSlice.reducer