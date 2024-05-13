import { createAsyncThunk } from "@reduxjs/toolkit";

import externalUtilityv1 from "../../services/external-utilityv1";

const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchDashboardData",
  
  async ({yearId, dashboardRegionType, dashboardRegionCode}) => {
    const response = await externalUtilityv1.get(`summarised-stats/public/${yearId}/${dashboardRegionType}/${dashboardRegionCode}`);
    return response.data;
  }
);

const fetchSchoolStatsData = createAsyncThunk(
  "dashboard/fetchSchoolStatsData",
  
  async ({yearId, dType, dCode}) => {
    const response = await externalUtilityv1.post(`schools-summarised-stats/public`,{
      yearId:yearId,
      regionType:dType,
      regionCode:dCode
    });
    return response.data;
  }
);
const fetchTeachersStatsData = createAsyncThunk(
  "dashboard/fetchTeachersStatsData",
  
  async ({yearId, dType, dCode}) => {
    const response = await externalUtilityv1.post(`teachers-summarised-stats/public`,
    {
      yearId:yearId,
      regionType:dType,
      regionCode:dCode
    });
    return response.data;
  }
);
const fetchStudentStatsData = createAsyncThunk(
  "dashboard/fetchStudentsStatsData",
  
  async ({yearId, dType, dCode}) => {
    const response = await externalUtilityv1.post(`students-summarised-stats/public`,
      {
        yearId:yearId,
        regionType:dType,
        regionCode:dCode
      }
    );
    return response.data;
  }
);

const fetchAllStateSchemesData = createAsyncThunk(
  "dashboard/fetchAllStateSchemesData",
  
  async ({yearId, regionType, dCode}) => {
    const response = await externalUtilityv1.post(`students-summarised-stats/public`,
      {
        yearId:yearId,
        regionType:regionType,
        regionCode:dCode
      }
    );
    return response.data;
  }
);


export  {fetchDashboardData,fetchSchoolStatsData,fetchTeachersStatsData,fetchStudentStatsData,fetchAllStateSchemesData};