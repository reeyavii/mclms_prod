import React, { useState, useRef } from "react";
import styles from "./auth/Blueprint.module.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IconButton, Button } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { green, orange, red } from "@mui/material/colors";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useSelector, useDispatch } from "react-redux";
import { getStalls } from "../app/reducer/stallSlice";

function Blueprint() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [scale, setScale] = useState(".6");
  const [scroll, setScroll] = useState("hidden");
  const canvasRef = useRef(null);
  const { stalls } = useSelector((state) => state.stall);
  const { token } = useSelector((state) => state.auth);
  const handleZoomIn = () => {
    setScale("1");
    setScroll("scroll");
  };
  const handleZoomOut = () => {
    setScale(".6");
    canvasRef.current.scrollLeft = 133;
    setScroll("hidden");
  };

  useEffect(() => {
    canvasRef.current.scrollLeft = 133;
    dispatch(getStalls());
  }, []);
  const handleGoBack = (e) => {
    //go to verification
    navigate("/home");
    console.log("register clicked");
  };
  return (
    <div className={styles.container}>
      {token !== null && (
        <div className={styles.header}>
          <Header />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.BackA}>
          <button onClick={handleGoBack}>
            {" "}
            <ArrowBackIosNewIcon sx={{ fontSize: 20, marginLeft: 0.1 }} />{" "}
          </button>
        </div>
        <div className={styles.Alimodian}>
          <h2>ALIMODIAN PUBLIC MARKET</h2>
        </div>
        <div className={styles.status}>
          <div className={styles.statusItem}>
            <RadioButtonCheckedIcon
              sx={{
                fontSize: 14,
                marginBottom: -0.3,
                marginRight: 1,
                color: green[500],
              }}
            />
            Available
          </div>
          {/* <div className={styles.statusItem}>
            <RadioButtonCheckedIcon
              sx={{
                fontSize: 14,
                marginBottom: -0.3,
                marginRight: 1,
                color: orange[500],
              }}
            />
            Reserved
          </div> */}
          <div className={styles.statusItem}>
            <RadioButtonCheckedIcon
              sx={{
                fontSize: 14,
                marginBottom: -0.3,
                marginRight: 1,
                color: red[500],
              }}
            />
            Acquired
          </div>
          <div className={styles.zoomButton}>
            {scale !== "1" ? (
              <IconButton sx={{ height: 35, width: 35 }} onClick={handleZoomIn}>
                <ZoomInIcon />
              </IconButton>
            ) : (
              <IconButton
                sx={{ height: 35, width: 35 }}
                onClick={handleZoomOut}
              >
                <ZoomOutIcon />
              </IconButton>
            )}
          </div>
        </div>

        <div
          className={styles.canvas}
          ref={canvasRef}
          style={{ overflowX: scroll }}
        >
          <div
            className={styles.canvasContent}
            style={{
              transform: `scale(${scale}, ${scale})`,
            }}
          >
            <div className={styles.streetLabel}>Cañonero Street</div>
            <div className={styles.hallwayLabel}>HALL WAY</div>
            <div className={styles.frontLeftSecondFlr}>
              {stalls
                .filter((stall) => stall.mapping === "frontleft-Top")
                .reverse()
                .map((stall) => {
                  return (
                    <div
                      onClick={() => navigate(`/stall-details/${stall.id}`)}
                      className={styles.store}
                    >
                      {stall.stallNumber}
                      {stall.status === "acquired" ? (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: red[500],
                          }}
                        />
                      ) : (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: green[500],
                          }}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
            <div className={styles.frontLeftFirstFlr}>
              {stalls
                .filter((stall) => stall.mapping === "frontleft")
                .reverse()
                .map((stall) => {
                  return (
                    <div
                      onClick={() => navigate(`/stall-details/${stall.id}`)}
                      className={styles.store}
                    >
                      {stall.stallNumber}
                      {stall.status === "acquired" ? (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: red[500],
                          }}
                        />
                      ) : (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: green[500],
                          }}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
            <div className={styles.frontRightSecondFlr}>
              {stalls
                .filter((stall) => stall.mapping === "frontright-Top")
                .reverse()
                .map((stall) => {
                  return (
                    <div
                      onClick={() => navigate(`/stall-details/${stall.id}`)}
                      className={styles.store}
                    >
                      {stall.stallNumber}
                      {stall.status === "acquired" ? (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: red[500],
                          }}
                        />
                      ) : (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: green[500],
                          }}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
            <div className={styles.frontRightFirstFlr}>
              {stalls
                .filter((stall) => stall.mapping === "frontright")
                .reverse()
                .map((stall) => {
                  return (
                    <div
                      onClick={() => navigate(`/stall-details/${stall.id}`)}
                      className={styles.store}
                    >
                      {stall.stallNumber}
                      {stall.status === "acquired" ? (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: red[500],
                          }}
                        />
                      ) : (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: green[500],
                          }}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
            <div className={styles.leftUpper}>
              {stalls
                .filter((stall) => stall.mapping === "leftside")
                .map((stall) => {
                  return (
                    <div
                      onClick={() => navigate(`/stall-details/${stall.id}`)}
                      className={styles.store}
                    >
                      {stall.stallNumber}
                      {stall.status === "acquired" ? (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: red[500],
                          }}
                        />
                      ) : (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: green[500],
                          }}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
            <div className={styles.rightUpper}>
              {stalls
                .filter((stall) => stall.mapping === "rightside")
                .reverse()
                .map((stall) => {
                  return (
                    <div
                      onClick={() => navigate(`/stall-details/${stall.id}`)}
                      className={styles.store}
                    >
                      {stall.stallNumber}
                      {stall.status === "acquired" ? (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: red[500],
                          }}
                        />
                      ) : (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: green[500],
                          }}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
            <div className={styles.leftLower}>
              {stalls
                .filter((stall) => stall.mapping === "lowerleft")

                .map((stall) => {
                  return (
                    <div
                      onClick={() => navigate(`/stall-details/${stall.id}`)}
                      className={styles.store}
                    >
                      {stall.stallNumber}
                      {stall.status === "acquired" ? (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: red[500],
                          }}
                        />
                      ) : (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: green[500],
                          }}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
            <div className={styles.rightLower}>
              {stalls
                .filter((stall) => stall.mapping === "lowerright")
                .reverse()
                .map((stall) => {
                  return (
                    <div
                      onClick={() => navigate(`/stall-details/${stall.id}`)}
                      className={styles.store}
                    >
                      {stall.stallNumber}
                      {stall.status === "acquired" ? (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: red[500],
                          }}
                        />
                      ) : (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: green[500],
                          }}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
            <div className={styles.bottomRight}>
              {stalls
                .filter((stall) => stall.mapping === "backright")
                .map((stall) => {
                  return (
                    <div
                      onClick={() => navigate(`/stall-details/${stall.id}`)}
                      className={styles.store}
                    >
                      {stall.stallNumber}
                      {stall.status === "acquired" ? (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: red[500],
                          }}
                        />
                      ) : (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: green[500],
                          }}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
            <div className={styles.bottomLeftStalls}>
              {stalls
                .filter((stall) => stall.mapping === "backleft")
                .reverse()
                .map((stall) => {
                  return (
                    <div
                      onClick={() => navigate(`/stall-details/${stall.id}`)}
                      className={styles.store}
                    >
                      {stall.stallNumber}
                      {stall.status === "acquired" ? (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: red[500],
                          }}
                        />
                      ) : (
                        <RadioButtonCheckedIcon
                          sx={{
                            fontSize: 14,

                            color: green[500],
                          }}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
            <div className={styles.bottomLeftOffice}>
              <div className={styles.office}>CR</div>
              <div
                className={styles.office}
                style={{ fontSize: 10, justifyContent: "center" }}
              >
                OFFICE
              </div>
            </div>

            <div className={`${styles.rectangle} ${styles.dryFish}`}>
              Dry Fish Section
            </div>
            <div className={`${styles.rectangle} ${styles.tobaccoSection}`}>
              Tobacco Section
            </div>
            <div className={`${styles.rectangle} ${styles.breadSection}`}>
              Bread Section
            </div>
            <div className={`${styles.rectangle} ${styles.rtw}`}>
              Relief RTW
            </div>
            <div className={styles.gym}>Gym</div>
            <div className={styles.permanentVendors}>Permanent Vendors</div>
            <div className={styles.meatSection}>Meat Section</div>

            <div className={styles.frozenFoods}>Frozen Foods</div>
            <div className={styles.stockRoom}>STOCK ROOM</div>
            <div className={styles.stage}>Stage</div>
            <div className={styles.cr1}>CR</div>
            <div className={styles.cr2}>CR</div>
            <div className={styles.mrf}>MRF</div>
            <div className={styles.riceVendors}>Rice Vendors</div>
            <div className={styles.fishSection}>Fish Section</div>
            <div className={styles.terminal}>Terminal</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blueprint;
