import React from "react";
import { Input } from "../../components/Input";
import { Nav } from "../../components/Nav";
import { Sidebar } from "../../components/Sidebar";
import { TopBar } from "../../components/TopBar";
import "./style.css";

export const DashboardEmail = () => {
  return (
    <div className="dashboard-email">
      <div className="div-12">
        <Sidebar
          className="sidebar-16"
          divClassName="sidebar-19"
          frame="/img/frame-1000005887-168.svg"
          frame1="/img/frame-1000005887-44.svg"
          frame2="/img/frame-1000005887-11.svg"
          frameClassName="sidebar-18"
          img="/img/frame-1000005887-43.svg"
          sidebarBtnVariantClassName="sidebar-17"
        />
        <div className="frame-54">
          <p className="set-up-a-new-5">
            <span className="text-wrapper-42">Set Up a New </span>
            <span className="text-wrapper-43">Listener</span>
          </p>
          <div className="text-wrapper-44">Select Your Data Source</div>
          <p className="text-wrapper-45">You can select a single source</p>
          <Nav className="navbar-3" property1="source" />
          <img className="line-10" alt="Line" src="/img/line-1-15.svg" />
          <div className="frame-55">
            <div className="part-title-3">
              <div className="inputs-4">
                <Input
                  className="input-7"
                  partBaseDivClassName="input-8"
                  partBaseDivClassNameOverride="input-9"
                  partBaseFieldClassName="input-10"
                  partBaseHelperText={false}
                  partBaseLabelText="Communication / Email Clients"
                  partBaseLeftIcon={false}
                  partBaseTitle="Category"
                  placeholder={false}
                  size="medium"
                  stateProp="default"
                  type="single-line"
                />
              </div>
            </div>
            <div className="part-title-3">
              <div className="inputs-4">
                <div className="input-11">
                  <div className="part-base-5">
                    <input className="title-text-6" htmlFor="input-1" placeholder="Search Source" type="text" />
                    <div className="field-7">
                      <div className="placeholder-hint-4">
                        <input
                          className="label-hint-4"
                          id="input-1"
                          placeholder="Search for email or file name"
                          type="email"
                        />
                        <img
                          className="material-symbols-3"
                          alt="Material symbols"
                          src="/img/material-symbols-light-search-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-56">
            <div className="div-13">
              <div className="frame-57">
                <img className="image-11" alt="Image" src="/img/image-1-2.png" />
              </div>
              <div className="frame-58">
                <div className="text-wrapper-46">Gmail</div>
              </div>
            </div>
            <div className="div-13">
              <div className="frame-57">
                <img className="image-12" alt="Image" src="/img/image-33-1.png" />
              </div>
              <div className="frame-58">
                <div className="text-wrapper-46">Outlook</div>
              </div>
            </div>
            <div className="div-13">
              <div className="frame-57">
                <img className="image-11" alt="Image" src="/img/image-48.png" />
              </div>
              <div className="frame-58">
                <div className="text-wrapper-46">Yahoo</div>
              </div>
            </div>
            <div className="div-13">
              <div className="frame-57">
                <img className="image-11" alt="Image" src="/img/image-49.png" />
              </div>
              <div className="frame-58">
                <div className="text-wrapper-46">Hotmail</div>
              </div>
            </div>
            <div className="div-13">
              <div className="frame-57">
                <img className="image-11" alt="Image" src="/img/image-2.png" />
              </div>
              <div className="frame-58">
                <div className="text-wrapper-46">SMS</div>
              </div>
            </div>
          </div>
        </div>
        <TopBar
          className="top-bar-13"
          overlapGroupClassName="top-bar-14"
          shape="/img/shape-44.svg"
          vector="/img/vector-90.svg"
          vectorClassName="top-bar-15"
        />
      </div>
    </div>
  );
};
