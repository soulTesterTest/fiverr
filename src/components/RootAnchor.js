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
        className="frame-icon101"
        loading="lazy"
        alt=""
        src="/frame-117.svg"
      />
      <div className="root-anchor-inner1">
        <div className="frame-parent161">
          <div className="auto-layout-horizontal-wrapper7">
            <div
              className="auto-layout-horizontal36"
              style={autoLayoutHorizontalStyle}
            >
              <div className="x" style={xStyle}>
                {x}
              </div>
              <div className="frame73" />
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
      <div className="frame-parent162">
        <div className="i-will-do-website-and-app-prom-wrapper">
          <div className="i-will-do2">
            I will do website and app promo video
          </div>
        </div>
        <div className="frame-parent163">
          <div className="frame-wrapper129">
            <div className="frame-parent164">
              <div className="frame-wrapper130">
                <img className="frame-icon102" alt="" src="/frame-53.svg" />
              </div>
              <div className="div44" style={div3Style}>
                <b>{prop}</b>
                <span className="span6">{prop1}</span>
              </div>
            </div>
          </div>
          <div className="frame74">
            <div className="frame-inner11">
              <div className="frame-parent165">
                <img className="frame-icon103" alt="" src="/frame-6.svg" />
                <img className="frame-icon104" alt="" src="/frame-7.svg" />
              </div>
            </div>
            <div className="starting-at-parent2">
              <b className="starting-at6">Starting at</b>
              <div className="div45">₹2,169</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootAnchor;
