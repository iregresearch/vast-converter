import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Component } from "../../components/Component";
import "./style.css";

export const LoginDesktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="login-desktop">
      <div
        className="login-mobile"
        style={{
          width: screenWidth < 1440 ? "725px" : screenWidth >= 1440 ? "1440px" : undefined,
        }}
      >
        <div
          className="overlap-3"
          style={{
            left: screenWidth >= 1440 ? "0" : screenWidth < 1440 ? "-19px" : undefined,
            width: screenWidth >= 1440 ? "1584px" : screenWidth < 1440 ? "1603px" : undefined,
          }}
        >
          {screenWidth < 1440 && (
            <>
              <img className="image-3" alt="Image" src="/img/image.png" />
              <img className="vector-11" alt="Vector" src="/img/vector-142.svg" />
            </>
          )}

          <div
            className="background-content"
            style={{
              height: screenWidth < 1440 ? "1px" : screenWidth >= 1440 ? "1117px" : undefined,
              left: screenWidth < 1440 ? "163px" : screenWidth >= 1440 ? "0" : undefined,
              width: screenWidth < 1440 ? "1440px" : screenWidth >= 1440 ? "1584px" : undefined,
            }}
          >
            {screenWidth >= 1440 && (
              <>
                <img className="image-4" alt="Image" src="/img/image-1-1.png" />
                <img className="vector-12" alt="Vector" src="/img/vector-144-1.svg" />
                <img className="vector-13" alt="Vector" src="/img/vector-142.svg" />
                <div className="background-content-2" />
                <div className="e-signature-wrapper">
                  <div className="e-signature">
                    <div className="e-listener-2">E-listener</div>
                  </div>
                </div>
                <img className="bell-solid" alt="Bell solid" src="/img/bell-solid-1-1.svg" />
              </>
            )}
          </div>
          <div
            className="frame-25"
            style={{
              left: screenWidth >= 1440 ? "696px" : screenWidth < 1440 ? "0" : undefined,
            }}
          >
            <div className="group-11">
              <div className="overlap-group-4">
                <div className="form-bg" />
                <div className="frame-26">
                  <div className="frame-27">
                    <div className="frame-28">
                      <div className="welcome">WELCOME</div>
                      <p className="please-login-to-your">PLEASE LOGIN TO YOUR ACCOUNT</p>
                    </div>
                    <div className="frame-29">
                      <div className="part-title">
                        <div className="inputs">
                          <div className="part-base-wrapper">
                            <div className="part-base-2">
                              <input className="title-text-2" htmlFor="input-1" placeholder="Email" type="email" />
                              <div className="label-text-wrapper">
                                <input className="enter-your-email" id="input-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="part-title">
                        <div className="inputs">
                          <div className="part-base-wrapper">
                            <div className="part-base-2">
                              <div className="title-text-3">
                                <label className="text-wrapper-23" htmlFor="input-5">
                                  Password
                                </label>
                              </div>
                              <div className="label-text-wrapper">
                                <div className="label-text-2">
                                  <input className="enter-the-password" id="input-5" />
                                  <img className="vector-14" alt="Vector" src="/img/vector.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Component className="component-1" property1="button-large" text="Login" />
                  </div>
                  <div className="text-wrapper-24">- OR -</div>
                  <div className="frame-wrapper">
                    <div className="frame-30">
                      <div className="component-2">
                        <img
                          className="img-3"
                          alt="Search"
                          src={
                            screenWidth >= 1440
                              ? "/img/search-2-13.svg"
                              : screenWidth < 1440
                              ? "/img/search-2-12.svg"
                              : undefined
                          }
                        />
                        <div className="text-wrapper-25">Login With Google</div>
                      </div>
                      <div className="component-3">
                        <img className="img-3" alt="Group" src="/img/group-1000002756.png" />
                        <div className="text-wrapper-25">Login With Facebook</div>
                      </div>
                      <div className="component-2">
                        <img
                          className="img-3"
                          alt="Search"
                          src={
                            screenWidth >= 1440
                              ? "/img/search-2-6.svg"
                              : screenWidth < 1440
                              ? "/img/search-2.svg"
                              : undefined
                          }
                        />
                        <div className="text-wrapper-25">Login With Hotmail</div>
                      </div>
                      <div className="component-2">
                        <img
                          className="img-3"
                          alt="Search"
                          src={
                            screenWidth >= 1440
                              ? "/img/search-2-6.svg"
                              : screenWidth < 1440
                              ? "/img/search-2.svg"
                              : undefined
                          }
                        />
                        <div className="text-wrapper-25">Login With Outlook</div>
                      </div>
                      <div className="component-2">
                        <img
                          className="img-3"
                          alt="Search"
                          src={
                            screenWidth >= 1440
                              ? "/img/search-2-8.svg"
                              : screenWidth < 1440
                              ? "/img/search-2-2.svg"
                              : undefined
                          }
                        />
                        <div className="text-wrapper-25">Login With Instagram</div>
                      </div>
                      <div className="component-2">
                        <img
                          className="img-3"
                          alt="Search"
                          src={
                            screenWidth >= 1440
                              ? "/img/search-2-9.svg"
                              : screenWidth < 1440
                              ? "/img/search-2-3.svg"
                              : undefined
                          }
                        />
                        <div className="text-wrapper-25">Login With Twitter</div>
                      </div>
                      <div className="component-2">
                        <img className="img-3" alt="Search" src="/img/search-2-4.svg" />
                        <div className="text-wrapper-25">Login With Yahoo</div>
                      </div>
                      <div className="component-2">
                        <img
                          className="img-3"
                          alt="Search"
                          src={
                            screenWidth >= 1440
                              ? "/img/search-2-11.svg"
                              : screenWidth < 1440
                              ? "/img/search-2-5.svg"
                              : undefined
                          }
                        />
                        <div className="text-wrapper-25">Login With Pinterest</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {screenWidth < 1440 && (
            <>
              <div className="group-12">
                <div className="e-signature">
                  <div className="e-listener-3">E-listener</div>
                </div>
              </div>
              <img className="bell-solid-2" alt="Bell solid" src="/img/bell-solid-1.svg" />
            </>
          )}
        </div>
        {screenWidth < 1440 && <img className="vector-15" alt="Vector" src="/img/vector-144.png" />}

        <div className="group-13">
          <p className="our-agency-is-home">
            Our agency is home to more than 60 of leading fashion &amp; lifestyle bloggers, bloggers, and social
            influencers. Our team includes creatives, strategists, project managers, designers, and development and
            social media experts. We provide you with
            <br />
            Established database
            <br />
            With Sea database of all influencers and their followers across different platforms, we will team you up
            with the best option to move your business to the next level.
            <br />
            Recommended Searches
            <br />
            Sea team will conduct a detailed search to fulfill your advertising needs.
            <br />
            Campaign management
            <br />
            Sea team will take care of counteracts, content, scheduling, and payment.
          </p>
          <div className="what-we-do">WHAT WE DO</div>
          <div className="influencer-s">INFLUENCER’S MARKETING</div>
        </div>
      </div>
    </div>
  );
};
