import React from "react";
import { Input } from "../../components/Input";
import { Nav } from "../../components/Nav";
import { Sidebar } from "../../components/Sidebar";
import { TopBar } from "../../components/TopBar";
import "./style.css";

export const ConnectorTransport = () => {
  return (
    <div className="connector-transport">
      <div className="div-14">
        <Sidebar
          className="sidebar-20"
          divClassName="sidebar-23"
          frame="/img/frame-1000005887-168.svg"
          frame1="/img/frame-1000005887-52.svg"
          frame2="/img/frame-1000005887-11.svg"
          frameClassName="sidebar-22"
          img="/img/frame-1000005887-51.svg"
          sidebarBtnVariantClassName="sidebar-21"
        />
        <div className="frame-59">
          <p className="set-up-a-new-6">
            <span className="text-wrapper-47">Set Up a New </span>
            <span className="text-wrapper-48">Listener</span>
          </p>
          <div className="text-wrapper-49">Select Your Response</div>
          <p className="text-wrapper-50">You can select multiple destinations</p>
          <Nav className="navbar-4" property1="response" />
          <img className="line-11" alt="Line" src="/img/line-1-15.svg" />
          <div className="frame-60">
            <div className="part-title-4">
              <div className="inputs-5">
                <Input
                  className="input-12"
                  partBaseDivClassName="input-13"
                  partBaseDivClassNameOverride="input-14"
                  partBaseFieldClassName="input-15"
                  partBaseHelperText={false}
                  partBaseLabelText="Connector-Transport Data"
                  partBaseLeftIcon={false}
                  partBaseTitle="Category"
                  placeholder={false}
                  size="medium"
                  stateProp="default"
                  type="single-line"
                />
              </div>
            </div>
            <div className="part-title-4">
              <div className="inputs-5">
                <div className="input-16">
                  <div className="part-base-6">
                    <input className="title-text-7" htmlFor="input-1" placeholder="Search Source" type="text" />
                    <div className="field-8">
                      <div className="placeholder-hint-5">
                        <input
                          className="label-hint-5"
                          id="input-1"
                          placeholder="Search for email or file name"
                          type="email"
                        />
                        <img
                          className="material-symbols-4"
                          alt="Material symbols"
                          src="/img/material-symbols-light-search-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-61">
            <div className="gmail">
              <div className="frame-62">
                <img className="image-13" alt="Image" src="/img/image-27.png" />
              </div>
              <div className="frame-63">
                <div className="frame-64">
                  <div className="text-wrapper-51">Zappier</div>
                  <div className="frame-65">
                    <p className="text-wrapper-52">Automate workflows and connect apps with Zappier integration.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gmail">
              <div className="frame-62">
                <img className="image-14" alt="Image" src="/img/image-76.png" />
                <div className="image-15" />
              </div>
              <div className="frame-63">
                <div className="frame-64">
                  <div className="text-wrapper-51">Make</div>
                  <div className="frame-65">
                    <p className="text-wrapper-52">Automate workflows and connect apps with Make integration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopBar
          className="top-bar-16"
          overlapGroupClassName="top-bar-17"
          shape="/img/shape-44.svg"
          vector="/img/vector-33.svg"
          vectorClassName="top-bar-18"
        />
      </div>
    </div>
  );
};
