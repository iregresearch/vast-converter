import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { Sidebar } from "../../components/Sidebar";
import { TopBar } from "../../components/TopBar";
import "./style.css";

export const ApiAuthorization = () => {
  return (
    <div className="API-authorization">
      <div className="div-18">
        <Sidebar
          className="sidebar-40"
          divClassName="sidebar-43"
          frame="/img/frame-1000005887-168.svg"
          frame1="/img/frame-1000005887-196.svg"
          frame2="/img/frame-1000005887-11.svg"
          frame3="/img/frame-1000005887-3.svg"
          frameClassName="sidebar-42"
          img="/img/frame-1000005887-302.svg"
          sidebarBtnVariantClassName="sidebar-41"
        />
        <div className="frame-99">
          <p className="set-up-a-new-8">
            <span className="text-wrapper-80">Set Up a New </span>
            <span className="text-wrapper-81">Listener</span>
          </p>
          <div className="text-wrapper-82">Select Your Data Source</div>
          <p className="text-wrapper-83">You can select a single source</p>
          <Nav className="navbar-6" property1="account" />
          <img className="line-15" alt="Line" src="/img/line-1-15.svg" />
          <div className="frame-100">
            <div className="frame-101">
              <div className="frame-102">
                <img className="image-16" alt="Image" src="/img/image-20-1.png" />
              </div>
              <div className="frame-103">
                <div className="text-wrapper-84">Instagram</div>
              </div>
              <div className="frame-104">
                <div className="text-wrapper-85">Authorize</div>
              </div>
            </div>
            <div className="frame-105">
              <Link className="frame-104" to="/dashboard-social-media">
                <div className="text-wrapper-85">Back</div>
              </Link>
            </div>
          </div>
        </div>
        <TopBar
          className="top-bar-29"
          image="/img/image-3-3.png"
          overlapGroupClassName="top-bar-30"
          shape="/img/shape-44.svg"
          text="Dashboard"
          vector="/img/vector-90.svg"
          vectorClassName="top-bar-31"
        />
      </div>
    </div>
  );
};
