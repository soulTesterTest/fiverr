import CategorySelection from "../components/CategorySelection";
import "./Fiverr1.css";

const Fiverr = () => {
  return (
    <div className="fiverr-15">
      <main className="fiverr-container1">
        <section className="f-r-a-m-e">
          <div className="f-r-a-m-e-inner">
            <div className="share-description-parent">
              <div className="share-description">
                <img
                  className="frame-icon73"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <div className="frame-parent113">
                <div className="frame-parent114">
                  <div className="frame65">
                    <div className="div34">1</div>
                  </div>
                  <div className="share-brief-description">
                    Share brief description
                  </div>
                </div>
                <div className="matching-process">
                  <img
                    className="frame-icon74"
                    loading="lazy"
                    alt=""
                    src="/frame-13.svg"
                  />
                </div>
                <div className="frame-parent115">
                  <div className="frame66">
                    <div className="div35">2</div>
                  </div>
                  <div className="add-timeline-and">
                    Add timeline and budget
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="exit">Exit</div>
        </section>
        <section className="let-the-match-begin-parent">
          <div className="let-the-match-begin">
            <div className="big-picture-area">
              <h1 className="let-the-matching">Let the matching begin...</h1>
              <div className="this-is-where-you-fill-us-in-o-parent">
                <div className="this-is-where">
                  This is where you fill us in on the big picture.
                </div>
                <div className="give-project-title">
                  <div className="how-does-this">
                    How does this matching thing work?
                  </div>
                </div>
              </div>
              <img
                className="wordpress-example-icon"
                loading="lazy"
                alt=""
                src="/frame-210@2x.png"
              />
            </div>
          </div>
          <CategorySelection />
        </section>
      </main>
      <div className="auto-layout-horizontal18">
        <div className="auto-layout-horizontal19">
          <div className="continue">Continue</div>
          <img className="frame-icon75" alt="" src="/frame-62.svg" />
        </div>
      </div>
    </div>
  );
};

export default Fiverr;
