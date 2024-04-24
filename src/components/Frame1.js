import { useMemo } from "react";
import "./Frame1.css";

const Frame1 = ({
  iWillDoUniqueNftPromoOrAd,
  prop,
  prop1,
  propPadding,
  propMinWidth,
}) => {
  const shapeAlignStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const div2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="frame76">
      <img
        className="frame-icon115"
        loading="lazy"
        alt=""
        src="/frame-117.svg"
      />
      <div className="frame-inner11">
        <div className="frame-parent172">
          <div className="auto-layout-horizontal-wrapper6">
            <div className="auto-layout-horizontal54">
              <img className="frame-icon116" alt="" src="/frame-118@2x.png" />
              <div className="a-frame">
                <div className="a3">a</div>
              </div>
            </div>
          </div>
          <div className="airb123-group">
            <div className="airb1234">airb123</div>
            <div className="level-2-seller7">Level 2 Seller</div>
          </div>
        </div>
      </div>
      <div className="shape-shear">
        <div className="shape-align" style={shapeAlignStyle}>
          <div className="i-will-do1">{iWillDoUniqueNftPromoOrAd}</div>
        </div>
        <div className="shape-star-parent">
          <div className="shape-star">
            <div className="frame-parent173">
              <div className="frame-wrapper143">
                <img className="frame-icon117" alt="" src="/frame-53.svg" />
              </div>
              <div className="div44" style={div2Style}>
                <b>{prop}</b>
                <span className="span5">{prop1}</span>
              </div>
            </div>
          </div>
          <div className="data-gatherer1">
            <div className="output-handler-wrapper">
              <div className="output-handler">
                <img
                  className="condition-checker-icon"
                  alt=""
                  src="/frame-6.svg"
                />
                <img
                  className="iteration-controller-icon"
                  alt=""
                  src="/frame-7.svg"
                />
              </div>
            </div>
            <div className="function-linker">
              <b className="starting-at5">Starting at</b>
              <div className="div45">₹868</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
