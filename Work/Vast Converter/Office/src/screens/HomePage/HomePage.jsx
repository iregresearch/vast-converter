import React from "react";
import { Card } from "../../components/Card";
import { CardIcons } from "../../icons/CardIcons";
import { CardIcons1 } from "../../icons/CardIcons1";
import { CardIcons3 } from "../../icons/CardIcons3";
import { CardIcons5 } from "../../icons/CardIcons5";
import { Property1Vidtotxt } from "../../icons/Property1Vidtotxt";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="main-wrapper">
        <div className="main">
          <div className="heading">
            <div className="text-wrapper">Welcome to</div>
            <div className="div-wrapper">
              <div className="div">VAST CONVERTER</div>
            </div>
          </div>
          <div className="hero-text">
            <img
              className="VAST-converter-is"
              alt="Vast converter is"
              src="/img/vast-converter-is-your-one-stop-solution-for-converting-video-a.svg"
            />
          </div>
          <div className="cards">
            <Card
              buttonText="Speech to Text"
              descriptionText="Convert live speech, URL-linked MP3s, and uploaded audio files into text effortlessly with our advanced speech recognition technology. Ideal for transcribing meetings, lectures, and more."
              icon={<CardIcons1 className="icon-instance-node" />}
            />
            <Card
              buttonText="Text to Speech"
              cardButtonClassName="card-instance"
              descriptionText="Convert written text into natural-sounding speech, supporting multiple languages and voices."
              icon={<CardIcons className="icon-instance-node" color="url(#paint0_linear_7_1415)" />}
            />
            <Card
              buttonText="Translate"
              descriptionText="Break language barriers with VAST Converter&#39;s document translation feature. Our tool supports numerous languages, allowing you to translate documents accurately and quickly."
              icon={<CardIcons3 className="icon-instance-node" />}
            />
            <Card
              buttonText="Video to Text"
              descriptionText="Convert spoken content from videos into accurate text transcriptions. Perfect for capturing dialogue from lectures, interviews, and more."
              icon={<Property1Vidtotxt className="icon-instance-node" />}
            />
            <Card
              buttonText="Video to Video"
              descriptionText="Easily clip small portions from your videos to create highlights or extract specific scenes. Perfect for making concise video snippets quickly."
              icon={<CardIcons5 className="icon-instance-node" />}
            />
          </div>
          <div className="how-to-use">
            <img className="rectangle" alt="Rectangle" src="/img/rectangle-356.svg" />
            <div className="ellipse" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <img className="vector" alt="Vector" src="/img/vector.svg" />
            <img className="img" alt="Vector" src="/img/vector-1.svg" />
            <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />
            <div className="text-wrapper-2">Click Convert</div>
            <div className="text-wrapper-3">How to Convert?</div>
            <div className="ellipse-2" />
            <img className="vector-3" alt="Vector" src="/img/vector-1-1.svg" />
            <img className="line" alt="Line" src="/img/line-10.svg" />
            <div className="text-wrapper-4">2</div>
            <img className="align-left-solid" alt="Align left solid" src="/img/align-left-solid-1.svg" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="text-wrapper-5">1</div>
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="text-wrapper-6">3</div>
          </div>
          <div className="why-VAST">
            <div className="frame-2">
              <div className="text-wrapper-7">WHY VAST?</div>
            </div>
            <div className="why-VAST-2">
              <div className="detail-card">
                <div className="frame-3">
                  <div className="text-wrapper-8">01</div>
                </div>
                <div className="frame-4">
                  <div className="text-wrapper-9">Multi-Format Support</div>
                </div>
                <div className="frame-5">
                  <p className="p">
                    {" "}
                    VAST Converter supports a wide array of formats for audio, video, text, and speech. Whether you need
                    to convert or translate, our platform ensures compatibility with all your devices and applications.
                  </p>
                </div>
              </div>
              <div className="detail-card-2">
                <div className="frame-3">
                  <div className="text-wrapper-8">02</div>
                </div>
                <div className="frame-4">
                  <div className="text-wrapper-9">User-Friendly Interface</div>
                </div>
                <div className="frame-5">
                  <p className="p">
                    VAST Converter offers a user-friendly interface that makes converting and translating files a
                    breeze. Our intuitive design ensures that even beginners can use the tool with ease and confidence.
                  </p>
                </div>
              </div>
              <div className="detail-card-3">
                <div className="frame-3">
                  <div className="text-wrapper-8">03</div>
                </div>
                <div className="frame-4">
                  <div className="text-wrapper-9">Fast and Reliable</div>
                </div>
                <div className="frame-5">
                  <p className="p">
                    Experience fast and reliable conversions and translations with VAST Converter. Our platform is
                    optimized for speed and accuracy, ensuring you get your files converted and translated in no time.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper-10">GET IN TOUCH</div>
                <div className="text-wrapper-11">CONTACT INFO</div>
                <div className="rectangle-4" />
                <div className="ellipse-7" />
                <img className="vector-4" alt="Vector" src="/img/vector-4.svg" />
                <div className="text-wrapper-12">LOCATION</div>
                <p className="element-eastern-ave">
                  8837 Eastern Ave · Kansas City
                  <br />
                  MO 64138-4030 · USA
                </p>
              </div>
              <div className="overlap">
                <div className="overlap-2">
                  <div className="text-wrapper-13">YOUR NAME:</div>
                </div>
                <div className="overlap-3">
                  <div className="text-wrapper-13">YOUR EMAIL:</div>
                </div>
                <div className="overlap-4">
                  <div className="text-wrapper-14">SEND NOW</div>
                </div>
                <div className="overlap-5">
                  <div className="text-wrapper-15">MESSAGE</div>
                </div>
                <div className="text-wrapper-16">SEND US A MESSAGE</div>
                <div className="text-wrapper-17">WRITE TO US</div>
              </div>
              <div className="overlap-6">
                <div className="overlap-7">
                  <div className="text-wrapper-18">+1-123-456-7890</div>
                  <div className="text-wrapper-19">PHONE</div>
                </div>
                <div className="vector-wrapper">
                  <img className="vector-5" alt="Vector" src="/img/vector-5.svg" />
                </div>
              </div>
              <div className="overlap-8">
                <div className="overlap-9">
                  <div className="text-wrapper-20">support@marys-team.com</div>
                  <div className="text-wrapper-21">EMAIL</div>
                </div>
                <div className="vector-wrapper">
                  <img className="vector-6" alt="Vector" src="/img/vector-3.svg" />
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="frame-6">
              <p className="text-wrapper-22">© 2024 Clicflo Apps. All right reserved</p>
            </div>
            <div className="frame-7">
              <p className="div-2">
                <span className="span">Language: </span>
                <span className="text-wrapper-23">English (US)</span>
              </p>
              <div className="div-2">Terms of Services</div>
              <div className="div-2">Privacy Policy</div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
