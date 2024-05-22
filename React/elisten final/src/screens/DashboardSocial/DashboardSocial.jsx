import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { Sidebar } from "../../components/Sidebar";
import { TopBar } from "../../components/TopBar";
import { HeroOutlineCheveronDown28 } from "../../icons/HeroOutlineCheveronDown28";
import "./style.css";

export const DashboardSocial = () => {
  return (
    <div className="dashboard-social">
      <Sidebar
        className="sidebar-4"
        divClassName="sidebar-7"
        frame="/img/frame-1000005887-168.svg"
        frame1="/img/frame-1000005887-20.svg"
        frame2="/img/frame-1000005887-21.svg"
        frameClassName="sidebar-6"
        img="/img/frame-1000005887-19.svg"
        sidebarBtnVariantClassName="sidebar-5"
      />
      <div className="group-14">
        <div className="frame-31">
          <div className="set-up-a-new-wrapper">
            <p className="set-up-a-new-2">
              <span className="text-wrapper-26">Set Up a New </span>
              <span className="text-wrapper-27">Listener</span>
            </p>
          </div>
          <div className="text-wrapper-28">Select Your Data Source</div>
          <p className="text-wrapper-29">You can select a single source</p>
          <img className="line-6" alt="Line" src="/img/line-1-1.svg" />
          <Nav className="navbar" property1="source" />
          <div className="frame-32">
            <div className="part-inputs-title">
              <div className="inputs-2">
                <div className="input-2">
                  <div className="part-base-3">
                    <div className="title-wrapper">
                      <div className="title-3">Category</div>
                    </div>
                    <div className="field-3">
                      <input className="label-wrapper" />
                      <HeroOutlineCheveronDown28 className="hero-outline-cheveron-down-28" color="#2C3236" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="part-inputs-title">
              <div className="inputs-2">
                <div className="input-2">
                  <div className="part-base-3">
                    <input className="title-text-4" htmlFor="input-1" placeholder="Search Source" type="text" />
                    <div className="field-4">
                      <div className="placeholder-hint-2">
                        <input className="label-hint-2" id="input-1" />
                        <img
                          className="material-symbols"
                          alt="Material symbols"
                          src="/img/material-symbols-light-search.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-33">
            <div className="frame-34">
              <div className="frame-35" />
              <div className="frame-36">
                <div className="text-wrapper-30">Whatsapp</div>
              </div>
            </div>
            <div className="frame-34">
              <div className="image-wrapper">
                <img className="image-5" alt="Image" src="/img/image-22-1.png" />
              </div>
              <div className="frame-36">
                <div className="text-wrapper-30">X / Twitter</div>
              </div>
            </div>
            <div className="frame-34">
              <div className="image-wrapper">
                <img className="image-6" alt="Image" src="/img/image-23.png" />
              </div>
              <div className="frame-36">
                <div className="text-wrapper-30">We Chat</div>
              </div>
            </div>
            <div className="frame-34">
              <div className="image-wrapper">
                <img className="image-6" alt="Image" src="/img/image-21.png" />
              </div>
              <div className="frame-36">
                <div className="text-wrapper-30">Linkedin</div>
              </div>
            </div>
            <Link className="frame-34" to="/api-authorization">
              <div className="image-wrapper">
                <img className="image-6" alt="Image" src="/img/image-20-1.png" />
              </div>
              <div className="frame-36">
                <div className="text-wrapper-30">Instagram</div>
              </div>
            </Link>
            <div className="frame-34">
              <div className="image-wrapper">
                <img className="image-5" alt="Image" src="/img/image-19-1.png" />
              </div>
              <div className="frame-36">
                <div className="text-wrapper-30">Facebook Messenger</div>
              </div>
            </div>
            <div className="frame-34">
              <div className="image-wrapper">
                <img className="image-6" alt="Image" src="/img/image-30.png" />
              </div>
              <div className="frame-36">
                <div className="text-wrapper-30">Youtube</div>
              </div>
            </div>
            <div className="frame-34">
              <div className="image-wrapper">
                <img className="image-6" alt="Image" src="/img/image-45.png" />
              </div>
              <div className="frame-36">
                <div className="text-wrapper-30">Snapchat</div>
              </div>
            </div>
          </div>
        </div>
        <TopBar
          className="top-bar-4"
          overlapGroupClassName="top-bar-5"
          shape="/img/shape-4.svg"
          vector="/img/vector-8.svg"
          vectorClassName="top-bar-6"
        />
      </div>
    </div>
  );
};
