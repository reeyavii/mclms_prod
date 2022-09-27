import React, { useEffect, useMemo } from "react";
import styled from "./auth/Blueprint.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { getStalls } from "../app/reducer/stallSlice";
import { useDispatch, useSelector } from "react-redux";

function Blueprint() {
  const navigate = useNavigate();
  const { side } = useParams();
  const { stalls } = useSelector((state) => state.stall);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStalls());
  }, []);
  console.log(stalls);

  const upperLeft = useMemo(() => {
    const data = stalls.filter(
      (stall) => stall.stallNumber >= 13 && stall.stallNumber <= 22
    );
    return data;
  }, [stalls]);
  console.log(upperLeft);
  return (
    <div className={styled.container}>
      {side === "left" && (
        <>
          <div className={styled.leftSide}>
            <div className={styled.upperLeft}>
              {upperLeft.map((stall) => {
                return (
                  <div
                    className={styled.store}
                    onClick={() => navigate(`/stall-details/${stall.id}`)}
                  > {stall.stallNumber}</div>
                );
              })}
            </div>
            <div className={styled.lowerLeft}>
              <div className={styled.store}></div>
              <div className={styled.store}></div>
              <div className={styled.store}></div>
              <div className={styled.store}></div>
            </div>
          </div>
          <div className={styled.leftMidSide}>
            <div className={styled.midTop}>
              <div className={styled.horizontalBoxesContainer}>
                <div className={styled.horizontalBoxes}>
                  <div className={styled.store}>
                    <div className={styled.storeLabel}>Vacant</div>
                  </div>
                  <div className={styled.store}></div>
                  <div className={styled.store}></div>
                  <div className={styled.store}></div>
                  <div className={styled.store}></div>
                  <div className={styled.store}></div>
                </div>
                <div className={styled.horizontalBoxes}>
                  <div className={styled.store}></div>
                  <div className={styled.store}></div>
                  <div className={styled.store}></div>
                  <div className={styled.store}></div>
                  <div className={styled.store}></div>
                  <div className={styled.store}></div>
                </div>
              </div>
            </div>
            <div className={styled.midMid}>
              <div className={styled.breadFishSection}>
                <div className={styled.breadSection}>
                  <div className={styled.label}>Dry Fish Section</div>
                </div>
                <div className={styled.breadSection}>
                  <div className={styled.label}>Bread Section</div>
                </div>
              </div>
            </div>
            <div className={styled.midBot}>
              <div className={styled.bottomSection}>
                <div className={styled.bottomSectionHalf}>
                  <div className={styled.vendors}>
                    <div className={styled.permanentVendors}></div>
                  </div>
                  <div className={styled.vendors}>
                    <div className={styled.meatSection}></div>
                  </div>
                </div>
                <div className={styled.bottomSectionHalf}>
                  <div className={styled.leftBottomStores}>
                    <div className={styled.leftBottomStoreBoxes}>
                      <div className={styled.bottomStoreBox}></div>
                      <div className={styled.bottomStoreBox}></div>
                    </div>
                    <div className={styled.leftBottomStoreBoxes}>
                      <div className={styled.bottomStoreBox}></div>
                      <div className={styled.bottomStoreBox}></div>
                      <div className={styled.bottomStoreBox}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styled.leftRightSide}>
            <div className={styled.gym}></div>
            <div className={styled.stage}></div>
            <div className={styled.cr}>CR</div>
          </div>
          <div className={styled.frozenGoods}></div>
          <div className={styled.terminal}>
            <div className={styled.label}>Terminal</div>
          </div>
        </>
      )}
      {side === "right" && (
        <>
          <div className={styled.rightFront}>
            <div className={styled.rightFrontBoxes}>
              <div className={styled.rightFrontBox}></div>
              <div className={styled.rightFrontBox}></div>
              <div className={styled.rightFrontBox}></div>
              <div className={styled.rightFrontBox}></div>
              <div className={styled.rightFrontBox}></div>
              <div className={styled.rightFrontBox}></div>
            </div>
            <div className={styled.rightFrontBoxes}>
              <div className={styled.rightFrontBox}></div>
              <div className={styled.rightFrontBox}></div>
              <div className={styled.rightFrontBox}></div>
              <div className={styled.rightFrontBox}></div>
              <div className={styled.rightFrontBox}></div>
              <div className={styled.rightFrontBox}></div>
            </div>
          </div>
          <div className={styled.rightGym}></div>
          <div className={styled.rightRelief}></div>
          <div className={styled.rightTobacco}></div>
          <div className={styled.rightRightBoxes}>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
          </div>
          <div className={styled.rightRightBackBoxes}>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
          </div>
          <div className={styled.rightSSR}></div>
          <div className={styled.rightFish}></div>
          <div className={styled.rightCr}></div>
          <div className={styled.rightMRF}></div>
          <div className={styled.rightBack}>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
            <div className={styled.rightFrontBox}></div>
          </div>
          <div className={styled.rightVeg}></div>
          <div className={styled.rightStockRoom}>
            <div className={styled.storeLabel}>Stock Room</div>
          </div>
          <div className={styled.rightTerminal}></div>
          <div className={styled.rightStage}></div>
          <div className={styled.rightSideCr}></div>
        </>
      )}
    </div>
  );
}

export default Blueprint;
