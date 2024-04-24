import FRAMEA from "../components/FRAMEA";
import "./ConversionOutput.css";

const ConversionOutput = () => {
  return (
    <div className="conversion-output">
      <header className="container-31">
        <h2 className="fiverr5">fiverr.</h2>
      </header>
      <main className="conversion-output-inner">
        <section className="f-r-a-m-e-a-parent">
          <FRAMEA />
          <div className="frame-wrapper33">
            <div className="add-language-button-parent">
              <div className="add-language-button">
                <div className="languages-container">
                  <div className="languages">Languages*</div>
                  <div className="contua">Contua</div>
                </div>
              </div>
              <div className="container-30">
                <div className="textbox-7">
                  <div className="language">Language</div>
                  <div className="caret-down-input">
                    <img
                      className="caret-down-icon"
                      alt=""
                      src="/caret-down.svg"
                    />
                  </div>
                </div>
                <div className="container-for-languages">
                  <div className="textbox-8">
                    <div className="language-level">Language Level</div>
                    <div className="caret-down-wrapper">
                      <img
                        className="caret-down-icon1"
                        alt=""
                        src="/caret-down-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="min-character-label">
                  <div className="button-18">
                    <h2 className="add">Add</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ConversionOutput;
