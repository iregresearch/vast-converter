import React from "react";
import { Nav } from "../../components/Nav";
import { Sidebar } from "../../components/Sidebar";
import { TopBar } from "../../components/TopBar";
import "./style.css";

export const SaveRun = () => {
  return (
    <div className="save-run">
      <div className="div-15">
        <Sidebar
          className="sidebar-24"
          divClassName="sidebar-27"
          frame="/img/frame-1000005887-168.svg"
          frame1="/img/frame-1000005887-46.svg"
          frame2="/img/frame-1000005887-29.svg"
          frameClassName="sidebar-26"
          img="/img/frame-1000005887-27.svg"
          sidebarBtnVariantClassName="sidebar-25"
        />
        <div className="frame-66">
          <p className="set-up-a-new-7">
            <span className="text-wrapper-53">Set Up a New </span>
            <span className="text-wrapper-54">Listener</span>
          </p>
          <div className="text-wrapper-55">Select Your Response</div>
          <p className="text-wrapper-56">You can select multiple destinations</p>
          <Nav className="navbar-5" property1="save" />
          <img className="line-12" alt="Line" src="/img/line-1-15.svg" />
          <div className="frame-67">
            <div className="frame-68">
              <div className="frame-69">
                <div className="text-wrapper-57">Automatic Trigger</div>
              </div>
            </div>
          </div>
          <div className="frame-70">
            <div className="frame-71">
              <div className="frame-72">
                <div className="frame-73">
                  <div className="rectangle-5" />
                  <div className="frame-74">
                    <div className="run-workflow-every">Run Workflow Every Hour</div>
                    <p className="text-wrapper-58">
                      Automatically process new rows that are added to google sheets every hour
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-71">
              <div className="frame-75">
                <div className="frame-74">
                  <div className="frame-76">
                    <div className="rectangle-5" />
                    <div className="frame-74">
                      <div className="run-workflow-every">Run Workflow Every Day</div>
                      <p className="text-wrapper-58">
                        Automatically process new rows that are added to google sheets every day
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-71">
              <div className="frame-75">
                <div className="frame-74">
                  <div className="frame-76">
                    <div className="rectangle-5" />
                    <div className="frame-74">
                      <div className="text-wrapper-59">Run Workflow Every Week</div>
                      <p className="text-wrapper-58">
                        Automatically process new rows that are added to google sheets every week
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-71">
              <div className="frame-75">
                <div className="frame-74">
                  <div className="frame-76">
                    <div className="rectangle-5" />
                    <div className="frame-74">
                      <div className="text-wrapper-59">Add A Time Delay</div>
                      <p className="text-wrapper-58">
                        Dynamically adjust the timing of this workflow based on data fields
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-77">
            <div className="frame-78">
              <div className="frame-79">
                <div className="text-wrapper-60">Previous</div>
              </div>
              <div className="frame-80">
                <div className="frame-79">
                  <div className="text-wrapper-60">Preview</div>
                </div>
                <div className="frame-81">
                  <div className="frame-82">
                    <div className="text-wrapper-61">Save</div>
                    <div className="frame-83">
                      <img className="vector-17" alt="Vector" src="/img/vector-20.svg" />
                    </div>
                  </div>
                  <div className="frame-84">
                    <div className="text-wrapper-60">Run</div>
                  </div>
                  <div className="frame-84">
                    <div className="text-wrapper-60">Save &amp; Run</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopBar
          className="top-bar-19"
          overlapGroupClassName="top-bar-20"
          shape="/img/shape-7.svg"
          vector="/img/vector-90.svg"
          vectorClassName="top-bar-21"
        />
      </div>
    </div>
  );
};
