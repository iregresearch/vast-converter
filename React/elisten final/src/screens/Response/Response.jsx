import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { Sidebar } from "../../components/Sidebar";
import { TopBar } from "../../components/TopBar";
import "./style.css";

export const Response = () => {
  return (
    <div className="response">
      <div className="div-9">
        <Sidebar
          className="sidebar-instance"
          divClassName="sidebar-3"
          frame="/img/frame-1000005887-168.svg"
          frame1="/img/frame-1000005887-237.svg"
          frameClassName="sidebar-2"
          img="/img/frame-1000005887-15.svg"
          sidebarBtnVariantClassName="design-component-instance-node"
        />
        <div className="frame-13">
          <p className="set-up-a-new">
            <span className="span">Set Up a New </span>
            <span className="text-wrapper-12">Listener</span>
          </p>
          <div className="text-wrapper-13">Select Your Response</div>
          <p className="p">You can select multiple destinations</p>
          <Nav property1="response" />
          <img className="line-3" alt="Line" src="/img/line-1-15.svg" />
          <div className="frame-14">
            <div className="overlap-group-wrapper">
              <div className="overlap-2">
                <div className="block">
                  <div className="overlap-group-2">
                    <div className="rectangle-3" />
                    <div className="rectangle-4" />
                  </div>
                </div>
                <div className="text-wrapper-14">Responses</div>
                <div className="send-email-with">Send Email With Gmail</div>
                <div className="text-wrapper-15">Last Updated on 10/05/2024</div>
                <img className="image-2" alt="Image" src="/img/image-1.png" />
                <div className="frame-15">
                  <div className="group-4">
                    <img className="img-2" alt="Vector" src="/img/vector-3.svg" />
                    <div className="text-wrapper-16">Edit</div>
                  </div>
                  <div className="group-5">
                    <div className="group-6">
                      <div className="text-wrapper-17">Duplicate</div>
                      <img className="img-2" alt="Copy solid" src="/img/copy-solid-1.svg" />
                    </div>
                  </div>
                  <div className="group-7">
                    <div className="group-8">
                      <div className="text-wrapper-18">Delete</div>
                    </div>
                    <img className="img-2" alt="Trash solid" src="/img/trash-solid-1.svg" />
                  </div>
                  <div className="group-9" />
                </div>
                <img className="line-4" alt="Line" src="/img/line-2.svg" />
                <div className="frame-16">
                  <div className="frame-17">
                    <div className="text-wrapper-19">+add Another Response</div>
                  </div>
                  <div className="frame-18">
                    <div className="frame-17">
                      <div className="text-wrapper-19">Previous</div>
                    </div>
                    <div className="frame-19">
                      <div className="text-wrapper-20">Continue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-20">
            <div className="group-10">
              <div className="overlap-group-3">
                <div className="create-PDF-file">Create Pdf File</div>
                <div className="text-wrapper-21">Last Updated on 10/05/2024</div>
                <div className="frame-21">
                  <div className="group-4">
                    <img className="img-2" alt="Vector" src="/img/vector-4.svg" />
                    <div className="text-wrapper-16">Edit</div>
                  </div>
                  <div className="group-5">
                    <div className="group-6">
                      <div className="text-wrapper-17">Duplicate</div>
                      <img className="img-2" alt="Copy solid" src="/img/copy-solid-1-1.svg" />
                    </div>
                  </div>
                  <div className="group-7">
                    <div className="group-8">
                      <div className="text-wrapper-18">Delete</div>
                    </div>
                    <img className="img-2" alt="Trash solid" src="/img/trash-solid-1-1.svg" />
                  </div>
                  <div className="group-9" />
                </div>
                <img className="line-5" alt="Line" src="/img/line-2-1.svg" />
                <div className="frame-22">
                  <div className="frame-17">
                    <div className="text-wrapper-19">+add Another Response</div>
                  </div>
                  <div className="frame-18">
                    <div className="frame-17">
                      <div className="text-wrapper-19">Previous</div>
                    </div>
                    <div className="frame-19">
                      <div className="text-wrapper-20">Continue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-23">
            <div className="frame-24">
              <div className="text-wrapper-22">Back</div>
            </div>
            <Link className="frame-24" to="/save-u38-run">
              <div className="text-wrapper-22">Save</div>
            </Link>
          </div>
        </div>
        <TopBar
          className="top-bar-instance"
          overlapGroupClassName="top-bar-2"
          shape="/img/shape-2.svg"
          vector="/img/vector-90.svg"
          vectorClassName="top-bar-3"
        />
      </div>
    </div>
  );
};
