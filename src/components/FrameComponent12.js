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
    <div className="frame-parent167">
      <div className="i-will-create-an-amazing-websi-container">
        <div className="i-will-create7">
          I will create an amazing website or app promo video
        </div>
      </div>
      <div className="frame-parent168">
        <div className="frame-wrapper139">
          <div className="frame-parent169">
            <div className="frame-wrapper140">
              <img className="frame-icon111" alt="" src="/frame-53.svg" />
            </div>
            <div className="div42" style={div1Style}>
              <b>{`5.0 `}</b>
              <span className="span4">{prop}</span>
            </div>
          </div>
        </div>
        <div className="frame75" style={frameStyle}>
          <div className="frame-wrapper141">
            <img
              className="frame-icon112"
              loading="lazy"
              alt=""
              src="/frame-6.svg"
            />
          </div>
          <div className="frame-wrapper142" style={frameDiv1Style}>
            <img
              className="frame-icon113"
              loading="lazy"
              alt=""
              src="/frame-7.svg"
            />
          </div>
          <div className="starting-at-parent1">
            <b className="starting-at4">Starting at</b>
            <div className="div43">₹868</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
