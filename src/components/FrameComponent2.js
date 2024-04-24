import { useMemo } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({ prop, propPadding, propMinWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="frame-parent166">
      <div className="wrapper16" style={frameDivStyle}>
        <div className="div41" style={divStyle}>
          {prop}
        </div>
      </div>
      <div className="auto-layout-horizontal53">
        <div className="select1">Select</div>
      </div>
    </div>
  );
};

export default FrameComponent2;
