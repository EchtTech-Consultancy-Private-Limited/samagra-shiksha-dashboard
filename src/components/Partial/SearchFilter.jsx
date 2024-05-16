import React, { useState } from "react";
import { Select } from 'antd';


const OPTIONS = ['2023-2024', '2022-2023', '2021-2022', '2020-2021'];
export default function SearchFilter() {
  const [show, setShow] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <>

      <div className="Side_filter">
        <div className="open-btn" onClick={() => setShow(!show)}>
          {
            !show ? <span className="material-icons-round">sort</span> : <span className="material-icons-round">expand_more</span>
          }
        </div>
      </div>

      <div className={`custmize-filter-column ${show ? "show" : ""}`} id="customize_filter">

        <div className="search-f-box">
          <div className="heading-sm main-title d-flex align-items-center">
            <span className="material-icons-round text-blue me-3">sort</span> Apply Filters
          </div>

          <div className="box-cont-cust">         

            <div className="search-box-div mb-3">
              <span className="select-lable-title">Select Year</span>
              <Select
                mode="multiple"
                placeholder="Inserted are removed"
                value={selectedItems}
                onChange={setSelectedItems}
                style={{
                  width: '100%',
                }}
                options={filteredOptions.map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </div>

            <div className="search-box-div mb-3">
              <span className="select-lable-title">Select State</span>
              <Select
                mode="multiple"
                placeholder="Inserted are removed"
                value={selectedItems}
                // onChange={setSelectedItems}
                style={{
                  width: '100%',
                }}
                options={filteredOptions.map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </div>

            <div className="search-box-div mb-3">
              <span className="select-lable-title">Select District</span>
              <Select
                mode="multiple"
                placeholder="Inserted are removed"
                value={selectedItems}
                onChange={setSelectedItems}
                style={{
                  width: '100%',
                }}
                options={filteredOptions.map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </div>

            <div className="search-box-div">
              <span className="select-lable-title">Select Block</span>
              <Select
                mode="multiple"
                placeholder="Inserted are removed"
                value={selectedItems}
                onChange={setSelectedItems}
                style={{
                  width: '100%',
                }}
                options={filteredOptions.map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </div>

          </div>


        </div>


      </div>

    </>
  );
}
