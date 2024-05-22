import React from "react";
import { Buttons } from "../../components/Buttons";
import { InputVariants } from "../../components/InputVariants";
import { Nav } from "../../components/Nav";
import { Sidebar } from "../../components/Sidebar";
import { TopBar } from "../../components/TopBar";
import "./style.css";

export const ResponseScreen = () => {
  return (
    <div className="response-screen">
      <div className="response-2">
        <div className="overlap-4">
          <div className="frame-37">
            <p className="set-up-a-new-3">
              <span className="text-wrapper-31">Set Up a New </span>
              <span className="text-wrapper-32">Listener</span>
            </p>
            <div className="text-wrapper-33">Select Your Response</div>
            <p className="text-wrapper-34">You can select multiple destinations</p>
            <Nav className="nav-instance" property1="response" />
            <img className="line-7" alt="Line" src="/img/line-1-15.svg" />
            <div className="frame-38">
              <div className="frame-39">
                <div className="text-wrapper-35">Create File</div>
              </div>
            </div>
            <img className="line-7" alt="Line" src="/img/line-4.svg" />
            <div className="field-5">
              <div className="frame-40">
                <div className="frame-41">
                  <div className="text-wrapper-35">Merge Template</div>
                </div>
                <div className="frame-42">
                  <p className="text-wrapper-36">
                    Choose A Template From Your Google Drive That Would Be Used For Merge
                  </p>
                </div>
              </div>
              <div className="input-variants-wrapper">
                <InputVariants property1="browse" text="Document Template:" text1="Select Template" />
              </div>
              <img className="line-8" alt="Line" src="/img/line-2-2.svg" />
              <div className="frame-43">
                <div className="frame-41">
                  <div className="text-wrapper-35">Save Files</div>
                </div>
                <div className="frame-42">
                  <p className="text-wrapper-36">Where Would You Like To Store The Merged Documents In Google Drive?</p>
                </div>
              </div>
              <div className="frame-44">
                <InputVariants
                  className="design-component-instance-node-2"
                  property1="browse"
                  text="Google Drive Folder:"
                  text1=""
                />
                <InputVariants
                  className="design-component-instance-node-2"
                  property1="simple"
                  text2="Subfolder Path"
                  text3=""
                />
                <InputVariants
                  className="design-component-instance-node-2"
                  property1="simple"
                  text2="Output File Name"
                  text3="File Name"
                />
                <InputVariants property1="simple-drop-down" text4="Export Format" text5="Select Format" />
              </div>
              <img className="line-8" alt="Line" src="/img/line-2-2.svg" />
              <div className="frame-43">
                <div className="frame-41">
                  <div className="text-wrapper-35">Share Files</div>
                </div>
                <div className="frame-42">
                  <p className="text-wrapper-36">Share The Merged Files With Anyone Through Google Drive</p>
                </div>
              </div>
              <div className="group-15">
                <InputVariants
                  className="input-variants-instance"
                  property1="simple-drop-down"
                  text4="Viewers"
                  text5="Select Email List"
                />
                <InputVariants
                  className="input-variants-2"
                  property1="simple-drop-down"
                  text4="Editors"
                  text5="Select Email List"
                />
              </div>
              <div className="input-variants-wrapper">
                <InputVariants property1="simple-drop-down" text4="Commenters" text5="Select Email List" />
              </div>
              <img className="line-8" alt="Line" src="/img/line-2-2.svg" />
              <div className="frame-45">
                <Buttons className="design-component-instance-node-2" property1="outline-btn" text="Cancel" />
                <Buttons className="design-component-instance-node-2" property1="outline-btn" text="Preview" />
                <Buttons className="design-component-instance-node-2" property1="small-btn" text1="Done" />
              </div>
            </div>
          </div>
          <div className="group-16">
            <div className="group-17">
              <div className="group-18">
                <div className="overlap-5">
                  <div className="chevron-down-2">
                    <div className="alarm-copy-wrapper">
                      <div className="alarm-copy-2">
                        <div className="img-wrapper">
                          <img className="shape-2" alt="Shape" src="/img/shape-6-2.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ellipse-2" />
                </div>
              </div>
            </div>
          </div>
          <img className="vector-16" alt="Vector" src="/img/vector-15.svg" />
          <TopBar
            className="top-bar-7"
            overlapGroupClassName="top-bar-8"
            shape="/img/shape-2.svg"
            vector="/img/vector-90.svg"
            vectorClassName="top-bar-9"
          />
        </div>
        <div className="sidebar-wrapper">
          <Sidebar
            className="sidebar-8"
            divClassName="sidebar-11"
            frame="/img/frame-1000005887-168.svg"
            frame1="/img/frame-1000005887-237.svg"
            frame2="/img/frame-1000005887-11.svg"
            frameClassName="sidebar-10"
            img="/img/frame-1000005887-29-2.svg"
            sidebarBtnVariantClassName="sidebar-9"
          />
        </div>
        <div className="marlene-sasoeur-2">John</div>
      </div>
    </div>
  );
};
