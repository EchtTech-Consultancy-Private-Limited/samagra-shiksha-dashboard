import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./slice/headerSlice";
import districtSlice from "./slice/districtSlice";
import yearSlice from "./slice/yearSlice";
import stateSlice from "./slice/stateSlice";
import blockSlice from './slice/blockSlice';
import archiveServicesSlice from "./slice/archiveServicesSlice";
import schoolFilterSlice from "./slice/schoolFilterSlice";
import testschoolFilterSlice from "./slice/testschoolFilterSlice";
import darkLightMode from "./slice/darkLightModeSlice";
import dataGridAPISlice from "./slice/dataGridAPISlice";
import dashboardSlice from "./slice/dashboardSlice";
import dashboardFilterSlice from "./slice/dashboardFilter.slice";
import Column3016Slice from "./slice/Column3016Slice";
import DistBlockWiseSlice from "./slice/DistBlockWiseSlice";
import schoolFilterSlice3016 from "./slice/schoolFilterSlice3016";
import mapSlice from "./slice/mapSlice";
import dashboardTeacherStatSlice from "./slice/dashboardTeacherStatSlice";
import dashboardSchoolStatsSlice from "./slice/dashboardSchoolStatsSlice";
import dashboardStudentsSlice from "./slice/dashboardStudentsSlice";
import dashboardAllStateSchemesSlice from "./slice/dashboardAllStateSchemesSlice";

const store = configureStore({
    reducer:{
        header:headerSlice,
        mapData:mapSlice,
        schoolFilter:schoolFilterSlice,
        schoolFilter3016:schoolFilterSlice3016,
        state:stateSlice,
        distrct:districtSlice,
        block:blockSlice,
        year:yearSlice,
        school:archiveServicesSlice,
        toggle:darkLightMode,
        column:dataGridAPISlice,
        column3016:Column3016Slice,
        testschoolFilter:testschoolFilterSlice,
        dashboard:dashboardSlice,
        dashboardFilter: dashboardFilterSlice,
        distBlockWise:DistBlockWiseSlice,
        schoolStats:dashboardSchoolStatsSlice,
        teacherStats:dashboardTeacherStatSlice,
        studentStats:dashboardStudentsSlice,
        schemesAllState:dashboardAllStateSchemesSlice
        
    }
  });

export default store;