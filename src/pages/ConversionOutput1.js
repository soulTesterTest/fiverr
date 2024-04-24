import FrameComponent from "../components/FrameComponent";
import "./ConversionOutput1.css";

const ConversionOutput1 = () => {
  return (
    <div className="conversion-output-1">
      <header className="container-32">
        <h2 className="fiverr6">fiverr.</h2>
      </header>
      <section className="conversion-output-1-inner">
        <div className="frame-parent50">
          <div className="frame-wrapper34">
            <div className="frame-parent51">
              <div className="image-36-wrapper">
                <img
                  className="image-36-icon"
                  loading="lazy"
                  alt=""
                  src="/image-361@2x.png"
                />
              </div>
              <div className="frame-wrapper35">
                <div className="personal-info-parent">
                  <div className="personal-info">Personal Info</div>
                  <div className="container">
                    <div className="div1">{`>`}</div>
                  </div>
                </div>
              </div>
              <div className="professional-info-wrapper">
                <div className="professional-info">Professional Info</div>
              </div>
              <div className="frame">
                <div className="div2">{`>`}</div>
              </div>
              <div className="account-security-wrapper">
                <div className="account-security">Account Security</div>
              </div>
              <div className="completion-rate-80">Completion Rate: 80%</div>
            </div>
          </div>
          <div className="frame-wrapper36">
            <div className="account-security-parent">
              <h2 className="account-security1">Account Security</h2>
              <div className="trust-and-safety-container">
                <p className="trust-and-safety">
                  Trust and safety is abig deal in our community. Please verfy
                  your email and phone number so
                </p>
                <p className="that-we-can">
                  that we can keep your account secured.
                </p>
              </div>
            </div>
          </div>
          <div className="frame-parent52">
            <div className="mail-1-wrapper">
              <img
                className="mail-1-icon"
                loading="lazy"
                alt=""
                src="/mail-1.svg"
              />
            </div>
            <div className="email-parent">
              <div className="email">Email</div>
              <div className="private-wrapper">
                <div className="private">Private</div>
              </div>
            </div>
            <div className="button-20-wrapper">
              <div className="button-20">
                <div className="verified">Verified</div>
              </div>
            </div>
          </div>
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default ConversionOutput1;
