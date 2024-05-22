import React from 'react';
import { AndOperation } from '../../components/AndOperation';
import { Nav } from '../../components/Nav';
import { Sidebar } from '../../components/Sidebar';
import { TopBar } from '../../components/TopBar';
import { WhatsappOr } from '../../components/WhatsappOr';
import './style.css';

export const SmsTriggers = () => {
  const regexText = '^\\d{"{"}5,6{"}"}(?:[-\\s]\\d{"{"}4{"}"})?$';
  return (
    <div className="SMS-triggers">
      <div className="div-19">
        <Sidebar
          className="sidebar-44"
          divClassName="sidebar-47"
          frame="/img/frame-1000005887-168.svg"
          frame1="/img/frame-1000005887-237.svg"
          frame2="/img/frame-1000005887-11.svg"
          frame3="/img/frame-1000005887-3.svg"
          frameClassName="sidebar-46"
          img="/img/frame-1000005887-389.svg"
          sidebarBtnVariantClassName="sidebar-45"
        />
        <div className="frame-106">
          <p className="set-up-a-new-9">
            <span className="text-wrapper-86">Set Up a New </span>
            <span className="text-wrapper-87">Listener</span>
          </p>
          <div className="text-wrapper-88">Select Your Data Source</div>
          <p className="text-wrapper-89">You can select a single source</p>
          <Nav className="navbar-7" property1="trigger" />
          <img className="line-16" alt="Line" src="/img/line-1-15.svg" />
          <div className="frame-107">
            <div className="frame-108">
              <div className="frame-109">
                <img className="image-17" alt="Image" src="/img/image-2.png" />
              </div>
              <div className="frame-110">
                <div className="text-wrapper-90">SMS</div>
              </div>
            </div>
          </div>
          <div className="frame-111">
            <div className="frame-112">
              <div className="text-wrapper-91">SMS Triggers Conditioning</div>
            </div>
          </div>
          <div className="AND-group-wrapper">
            <div className="AND-group">
              <WhatsappOr
                className="whatsapp-or-operatoins"
                dataDestinationClassName="whatsapp-or-2"
                dataDestinationClassNameOverride="whatsapp-or-3"
                divClassName="whatsapp-or-operatoins-instance"
                divClassNameOverride="design-component-instance-node-3"
                groupClassName="whatsapp-or-instance"
                property1="default"
                text="Username / ID"
                text1="John215"
                text2="Is any of"
                vector="/img/vector-211.svg"
              />
              <AndOperation
                className="design-component-instance-node-4"
                dataDestinationClassName="and-operation-2"
                dataDestinationClassNameOverride="and-operation-3"
                divClassName="design-component-instance-node-3"
                groupClassName="and-operation-instance"
                hasDiv={false}
                property1="default"
                text="Body"
                text1={regexText}
                text2="Matches regex"
              />
              <WhatsappOr
                className="design-component-instance-node-4"
                dataDestinationClassName="whatsapp-or-4"
                property1="default"
                text="Choose Field"
                text1="Enter Inputs / Select File"
                text2="Choose Condition"
                vector="/img/vector-78.svg"
              />
              <div className="frame-113">
                <div className="data-destination-10">
                  <div className="text-wrapper-92">+</div>
                  <div className="text-wrapper-93"> OR</div>
                </div>
                <div className="data-destination-10">
                  <div className="text-wrapper-92">+</div>
                  <div className="text-wrapper-93"> AND</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-114">
            <div className="frame-115">
              <div className="text-wrapper-94">Back</div>
            </div>
            <div className="frame-115">
              <div className="text-wrapper-94">Save</div>
            </div>
          </div>
        </div>
        <TopBar
          className="top-bar-32"
          image="/img/image-3-3.png"
          overlapGroupClassName="top-bar-33"
          shape="/img/shape-44.svg"
          text="Dashboard"
          vector="/img/vector-217.svg"
          vectorClassName="top-bar-34"
        />
      </div>
    </div>
  );
};
