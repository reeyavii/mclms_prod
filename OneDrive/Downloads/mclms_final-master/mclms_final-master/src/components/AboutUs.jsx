import React from "react";
// import "./auth/About.styles.css";
import styles from "./auth/About.module.css";
import "./auth/Application.styles.css";
import logo from "../assets/Alim_Logo.png";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function AboutUs() {
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    navigate(-1);
    console.log("Home clicked");
  };

  return (
    <div className={styles.OuterContainer}>
      <div className={styles.InnerContainer}>
        {/* <div className={styles.BGLayer}></div> */}

        <div className={styles.Content}>
          <div className={styles.BackAbout}>
            <button onClick={handleGoBack}>
              {" "}
              <ArrowBackIosNewIcon sx={{ fontSize: 15, marginTop: 1 }} />{" "}
            </button>{" "}
            {/* <p>BACK</p> */}
          </div>
          <div className={styles.Alimodian}>
            <img src={logo} alt="Logo" />
          </div>

          <div className={styles.About}>
            <h3>ABOUT US</h3>
          </div>

          <div className={styles.Lgu}>
            <p>
              LGU: Alimodian
              <br />
              Office: Municipal Economic Enterprise
            </p>
            <p></p>
          </div>

          <div className={styles.Mandate}>
            <p>Mandate: Economic Enterprise</p>
          </div>

          <div className={styles.Org}>
            <p>
              Organizational: Good Governance, Empowered Citizens, Transparency,
              Accountability and Sustainable Economic Growth
            </p>
          </div>

          <div className={styles.Vision}>
            <p>Vision</p>
          </div>
          <div className={styles.Enhance}>
            <p>Enhancing aid effectiveness to support economic growth.</p>
          </div>

          <div className={styles.Mission}>
            <p>Mission</p>
          </div>
          <div className={styles.MissionContent}>
            <p>
              To enhance sustainable economic growth and financial stability for
              the welfare of the people of Alimodian through promotion of
              appropriate economic and financial management methods and systems,
              computerized accounting and control systems, tax administration,
              customs enforcement and provision of accurate and quality national
              statistical informatio. We aim to promote entrepreneurship, foster
              businessstart-ups and develop existing micro and small business to
              drive job creation and to provide accessible high quality supports
              for your business ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
