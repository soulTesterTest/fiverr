import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent = ({ thankYouSoMuch, propWidth, propPadding }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div className="auto-layout-vertical-inner8" style={frameDiv2Style}>
      <div className="frame-parent170">
        <div className="frame-parent171">
          <img className="frame-icon114" alt="" src="/frame-80@2x.png" />
          <div className="sellers-response-wrapper">
            <b className="sellers-response">Seller's Response</b>
          </div>
        </div>
        <div className="thank-you-so-much-wrapper">
          <div className="thank-you-so">{thankYouSoMuch}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
