import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: 'header',
    initialState:{
        headerName:"Education Dashboard",
        removeBeforeAfterClass:'main-card-home',
        isViewDataByShow:true,
        regionName:"States",
        showDistricts:false,
        currentIndex:0,
       show:false
    },
    reducers: {
      handleShowDistrict(state,action){
        state.showDistricts=action.payload
      },
      updateHeaderName(state,action) {
        state.headerName=action.payload;
      },
      removeBeforeAfterClass(state,action){
        state.removeBeforeAfterClass=action.payload
      },
      handleViewDataByShow(state,action){
        state.isViewDataByShow=action.payload
      },
      handleRegionName(state,action){
        state.regionName=action.payload
      },
      handleCurrentIndex(state,action){
        state.currentIndex=action.payload
      },
      handleShowFilter(state,action){
        state.show=action.payload
      },
    },
  })
  
  export const { updateHeaderName,removeBeforeAfterClass,handleViewDataByShow,handleRegionName,handleShowDistrict,handleCurrentIndex,handleDisableBtn,handleShowFilter } = headerSlice.actions
  export default headerSlice.reducer