import { useMemo } from "react";
import "./FrameComponent12.css";

const FrameComponent1 = ({
  prop,
  propMinWidth,
  propOverflowX,
  propFlex,
  propMinWidth1,
  propWidth,
}) => {
  const div1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameStyle = useMemo(() => {
    return {
      overflowX: propOverflowX,
    };
  }, [propOverflowX]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth1,
      width: propWidth,
    };
  }, [propFlex, propMinWidth1, propWidth]);

  return (
    <div className="frame-parent154">
      <div className="i-will-create-an-amazing-websi-container">
        <div className="i-will-create7">
          I will create an amazing website or app promo video
        </div>
      </div>
      <div className="frame-parent155">
        <div className="frame-wrapper124">
          <div className="frame-parent156">
            <div className="frame-wrapper125">
              <img className="frame-icon94" alt="" src="/frame-53.svg" />
            </div>
            <div className="div40" style={div1Style}>
              <b>{`5.0 `}</b>
              <span className="span4">{prop}</span>
            </div>
          </div>
        </div>
        <div className="frame71" style={frameStyle}>
          <div className="frame-wrapper126">
            <img
              className="frame-icon95"
              loading="lazy"
              alt=""
              src="/frame-6.svg"
            />
          </div>
          <div className="frame-wrapper127" style={frameDiv1Style}>
            <img
              className="frame-icon96"
              loading="lazy"
              alt=""
              src="/frame-7.svg"
            />
          </div>
          <div className="starting-at-parent1">
            <b className="starting-at4">Starting at</b>
            <div className="div41">₹868</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
