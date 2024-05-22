/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Sidebar = ({
  className,
  sidebarBtnVariantClassName,
  frameClassName,
  frame = "/img/frame-1000005887.svg",
  divClassName,
  img = "/img/frame-1000005887-14.svg",
  frame1 = "/img/frame-1000005887-10.svg",
  frame2 = "/img/frame-1000005887-11.svg",
  divClassNameOverride,
  divClassName1,
  divClassName2,
  divClassName3,
  APIConfigurationClassName,
  sidebarBtnVariantClassNameOverride,
  frame3 = "/img/frame-1000005887-3.svg",
  unifiedInboxClassName,
  divClassName4,
  sidebarBtnVariantClassName1,
}) => {
  return (
    <div className={`sidebar ${className}`}>
      <div className="frame">
        <div className="div">
          <div className="e-listener">E-listener</div>
          <img className="vector" alt="Vector" src="/img/vector-1.svg" />
        </div>
      </div>
      <Link className={`sidebar-btn-variant ${sidebarBtnVariantClassName}`} to="/dashboard-social-media">
        <img className={`img ${frameClassName}`} alt="Frame" src={frame} />
        <div className={`text-wrapper ${divClassName}`}>Dashboard</div>
      </Link>
      <div className="sidebar-btn-variant">
        <img className="frame-2" alt="Frame" src="/img/frame-1000005887-1.svg" />
        <div className={`text-wrapper-2 ${divClassNameOverride}`}>Accounts</div>
      </div>
      <div className="sidebar-btn-variant">
        <img className="frame-3" alt="Frame" src="/img/frame-1000005887-2.svg" />
        <div className={`text-wrapper-2 ${divClassName1}`}>My Listeners</div>
      </div>
      <Link className={`sidebar-btn-variant ${sidebarBtnVariantClassName1}`} to="/contacts">
        <img className="frame-4" alt="Frame" src={img} />
        <div className={`text-wrapper-2 ${divClassName2}`}>Contacts</div>
      </Link>
      <div className="sidebar-btn-variant">
        <img className="frame-5" alt="Frame" src={frame1} />
        <div className={`text-wrapper-2 ${divClassName3}`}>Billing</div>
      </div>
      <div className="sidebar-btn-variant">
        <img className="frame-6" alt="Frame" src={frame2} />
        <div className={`API-configuration ${APIConfigurationClassName}`}>Api Configuration</div>
      </div>
      <Link className={`sidebar-btn-variant ${sidebarBtnVariantClassNameOverride}`} to="/unified-inbox">
        <img className="frame-4" alt="Frame" src={frame3} />
        <div className={`text-wrapper ${unifiedInboxClassName}`}>Unified Inbox</div>
      </Link>
      <Link to="/login-desktop">
        <button className="button">
          <img className="frame-2" alt="Frame" src="/img/frame-1000005887-4.svg" />
          <div className={`text-wrapper-2 ${divClassName4}`}>Logout</div>
        </button>
      </Link>
    </div>
  );
};

Sidebar.propTypes = {
  frame: PropTypes.string,
  img: PropTypes.string,
  frame1: PropTypes.string,
  frame2: PropTypes.string,
  frame3: PropTypes.string,
};
