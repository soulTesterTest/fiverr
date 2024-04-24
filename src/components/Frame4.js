import "./Frame4.css";

const Frame = () => {
  return (
    <header className="logic-gate4">
      <div className="input-handler">
        <div className="value-modifier-container">
          <img
            className="value-modifier-icon1"
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
        </div>
        <div className="dashboard-parent">
          <div className="dashboard">Dashboard</div>
          <div className="auto-layout-horizontal70">
            <div className="my-business">My Business</div>
            <div className="frame-wrapper160">
              <img className="frame-icon133" alt="" src="/frame-14.svg" />
            </div>
          </div>
        </div>
        <div className="auto-layout-horizontal71">
          <div className="growth-marketing">{`Growth & Marketing`}</div>
          <div className="tree-structure">
            <img className="frame-icon134" alt="" src="/frame-211.svg" />
          </div>
        </div>
        <div className="auto-layout-horizontal72">
          <div className="analytics">Analytics</div>
          <div className="frame-wrapper161">
            <img className="frame-icon135" alt="" src="/frame-33.svg" />
          </div>
        </div>
      </div>
      <div className="logic-gate-child">
        <div className="frame-parent189">
          <div className="auto-layout-horizontal-wrapper9">
            <div className="auto-layout-horizontal73">
              <img className="frame-icon136" alt="" src="/frame-2.svg" />
              <div className="rectangle42" />
            </div>
          </div>
          <div className="frame-wrapper162">
            <img className="frame-icon137" alt="" src="/frame-55.svg" />
          </div>
          <div className="frame-wrapper163">
            <img className="frame-icon138" alt="" src="/frame-63.svg" />
          </div>
          <div className="frame86">
            <div className="auto-layout-horizontal74">
              <div className="c2">C</div>
              <img className="frame-icon139" alt="" src="/frame-5@2x.png" />
            </div>
            <div className="rectangle43" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Frame;
