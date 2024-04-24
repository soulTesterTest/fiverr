import { useMemo } from "react";
import "./RootAnchor.css";

const RootAnchor = ({
  x,
  xsamdesigns,
  prop,
  prop1,
  propPadding,
  propHeight,
  propLineHeight,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const autoLayoutHorizontalStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const xStyle = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
      minWidth: propMinWidth,
    };
  }, [propHeight, propLineHeight, propMinWidth]);

  const xsamdesignsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div3Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className="root-anchor3">
      <img
        className="frame-icon118"
        loading="lazy"
        alt=""
        src="/frame-117.svg"
      />
      <div className="root-anchor-inner1">
        <div className="frame-parent174">
          <div className="auto-layout-horizontal-wrapper7">
            <div
              className="auto-layout-horizontal55"
              style={autoLayoutHorizontalStyle}
            >
              <div className="x" style={xStyle}>
                {x}
              </div>
              <div className="frame77" />
            </div>
          </div>
          <div className="xsamdesigns-parent">
            <div className="xsamdesigns" style={xsamdesignsStyle}>
              {xsamdesigns}
            </div>
            <div className="level-2-seller8">Level 2 Seller</div>
          </div>
        </div>
      </div>
      <div className="frame-parent175">
        <div className="i-will-do-website-and-app-prom-wrapper">
          <div className="i-will-do2">
            I will do website and app promo video
          </div>
        </div>
        <div className="frame-parent176">
          <div className="frame-wrapper144">
            <div className="frame-parent177">
              <div className="frame-wrapper145">
                <img className="frame-icon119" alt="" src="/frame-53.svg" />
              </div>
              <div className="div46" style={div3Style}>
                <b>{prop}</b>
                <span className="span6">{prop1}</span>
              </div>
            </div>
          </div>
          <div className="frame78">
            <div className="frame-inner12">
              <div className="frame-parent178">
                <img className="frame-icon120" alt="" src="/frame-6.svg" />
                <img className="frame-icon121" alt="" src="/frame-7.svg" />
              </div>
            </div>
            <div className="starting-at-parent2">
              <b className="starting-at6">Starting at</b>
              <div className="div47">₹2,169</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootAnchor;
