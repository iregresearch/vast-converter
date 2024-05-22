import React from "react";
import { Input } from "../../components/Input";
import { Nav } from "../../components/Nav";
import { Sidebar } from "../../components/Sidebar";
import { TopBar } from "../../components/TopBar";
import "./style.css";

export const DashboardFile = () => {
  return (
    <div className="dashboard-file">
      <div className="div-10">
        <Sidebar
          className="sidebar-12"
          divClassName="sidebar-15"
          frame="/img/frame-1000005887-168.svg"
          frame1="/img/frame-1000005887-20.svg"
          frame2="/img/frame-1000005887-11.svg"
          frameClassName="sidebar-14"
          img="/img/frame-1000005887-35.svg"
          sidebarBtnVariantClassName="sidebar-13"
        />
        <div className="frame-46">
          <p className="set-up-a-new-4">
            <span className="text-wrapper-37">Set Up a New </span>
            <span className="text-wrapper-38">Listener</span>
          </p>
          <div className="text-wrapper-39">Select Your Data Source</div>
          <p className="text-wrapper-40">You can select a single source</p>
          <Nav className="navbar-2" property1="source" />
          <img className="line-9" alt="Line" src="/img/line-1-15.svg" />
          <div className="frame-47">
            <div className="part-title-2">
              <div className="inputs-3">
                <Input
                  className="input-instance"
                  partBaseDivClassName="input-3"
                  partBaseDivClassNameOverride="input-4"
                  partBaseFieldClassName="input-5"
                  partBaseHelperText={false}
                  partBaseLabelText="File Storage and Sharing"
                  partBaseLeftIcon={false}
                  partBaseTitle="Category"
                  placeholder={false}
                  size="medium"
                  stateProp="default"
                  type="single-line"
                />
              </div>
            </div>
            <div className="part-title-2">
              <div className="inputs-3">
                <div className="input-6">
                  <div className="part-base-4">
                    <input className="title-text-5" htmlFor="input-1" placeholder="Search Source" type="text" />
                    <div className="field-6">
                      <div className="placeholder-hint-3">
                        <input
                          className="label-hint-3"
                          id="input-1"
                          placeholder="Search for email or file name"
                          type="email"
                        />
                        <img
                          className="material-symbols-2"
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
          <div className="frame-48">
            <div className="div-11">
              <div className="frame-49" />
              <div className="frame-50">
                <div className="text-wrapper-41">Google Drive</div>
              </div>
            </div>
            <div className="div-11">
              <div className="frame-51">
                <img className="image-7" alt="Image" src="/img/image-25-1.png" />
              </div>
              <div className="frame-50">
                <div className="text-wrapper-41">Microsoft 365</div>
              </div>
            </div>
            <div className="div-11">
              <div className="frame-51">
                <img className="image-8" alt="Image" src="/img/image-41.png" />
              </div>
              <div className="frame-50">
                <div className="text-wrapper-41">Tresorit</div>
              </div>
            </div>
            <div className="div-11">
              <div className="frame-51">
                <img className="image-8" alt="Image" src="/img/image-38.png" />
              </div>
              <div className="frame-50">
                <div className="text-wrapper-41">Dropbox</div>
              </div>
            </div>
            <div className="div-11">
              <div className="frame-51">
                <img className="image-7" alt="Image" src="/img/image-42-1.png" />
              </div>
              <div className="frame-50">
                <div className="text-wrapper-41">pcloud</div>
              </div>
            </div>
            <div className="div-11">
              <div className="frame-51">
                <img className="image-8" alt="Image" src="/img/image-39.png" />
              </div>
              <div className="frame-50">
                <div className="text-wrapper-41">Apple iCloud</div>
              </div>
            </div>
            <div className="div-11">
              <div className="frame-51">
                <img className="image-8" alt="Image" src="/img/image-15.png" />
              </div>
              <div className="frame-50">
                <div className="text-wrapper-41">OneDrive</div>
              </div>
            </div>
            <div className="div-11">
              <div className="frame-51">
                <img className="image-8" alt="Image" src="/img/image-40.png" />
              </div>
              <div className="frame-50">
                <div className="text-wrapper-41">Mega</div>
              </div>
            </div>
            <div className="div-11">
              <img className="frame-52" alt="Frame" src="/img/frame-6-2.svg" />
              <div className="frame-50">
                <div className="text-wrapper-41">Google Cloud SQL</div>
              </div>
            </div>
            <div className="div-11">
              <div className="frame-51">
                <img className="image-9" alt="Image" src="/img/image-46.png" />
              </div>
              <div className="frame-50">
                <div className="text-wrapper-41">Amazon S3</div>
              </div>
            </div>
            <div className="div-11">
              <div className="frame-53">
                <img className="image-9" alt="Image" src="/img/image-47.png" />
              </div>
              <div className="frame-50">
                <div className="text-wrapper-41">Microsoft Access DB</div>
              </div>
            </div>
            <div className="div-11">
              <div className="frame-51">
                <img className="image-10" alt="Image" src="/img/image-44.png" />
              </div>
              <div className="frame-50">
                <div className="text-wrapper-41">Custom Database</div>
              </div>
            </div>
          </div>
        </div>
        <TopBar
          className="top-bar-10"
          overlapGroupClassName="top-bar-11"
          shape="/img/shape-44.svg"
          vector="/img/vector-90.svg"
          vectorClassName="top-bar-12"
        />
      </div>
    </div>
  );
};
