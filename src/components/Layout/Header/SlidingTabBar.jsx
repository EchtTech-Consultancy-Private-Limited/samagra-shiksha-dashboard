import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch } from "react-redux";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { urls } from "../../../constants/constants";
import { useSelector } from "react-redux";
import {useTranslation} from "react-i18next";

export default function SlidingTabBar() {
  const header_name = useSelector((state) => state.header);

  const location = useLocation();
  const navigate = useNavigate();
  const path_name = location.pathname.split("-")[0]?.toUpperCase()?.slice(1);
  
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <>
      {urls.includes(location.pathname) ? (
        <>
          <div className="header-breadcrumb">
            <div className="title-brd">
              <Link to="/dashboard"
                className="text-black">
                Dashboard
              </Link>{" "}
              <span className="material-icons-round">chevron_right</span>{" "}
              <span className="internalpagename">Early Childhood Care And Education</span>{" "}
            </div>
          </div>
        </>
      ) : (
        <Tabs
          defaultActiveKey="Dashboard"
          id="uncontrolled-tab-example">
          <Tab eventKey="Dashboard" title="Dashboard"></Tab>          
        </Tabs>
      )}
    </>
  );
}
