import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ConversionOutput from "./pages/ConversionOutput";
import ConversionOutput1 from "./pages/ConversionOutput1";
import ConversionOutput2 from "./pages/ConversionOutput2";
import Fiverr from "./pages/Fiverr";
import Fiverr from "./pages/Fiverr1";
import Fiverr1 from "./pages/Fiverr11";
import Fiverr2 from "./pages/Fiverr2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/conversion-output-1":
        title = "";
        metaDescription = "";
        break;
      case "/conversion-output-2":
        title = "";
        metaDescription = "";
        break;
      case "/fiverr-9":
        title = "";
        metaDescription = "";
        break;
      case "/fiverr-15":
        title = "";
        metaDescription = "";
        break;
      case "/fiverr-16":
        title = "";
        metaDescription = "";
        break;
      case "/fiverr-17":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ConversionOutput />} />
      <Route path="/conversion-output-1" element={<ConversionOutput1 />} />
      <Route path="/conversion-output-2" element={<ConversionOutput2 />} />
      <Route path="/fiverr-9" element={<Fiverr />} />
      <Route path="/fiverr-15" element={<Fiverr />} />
      <Route path="/fiverr-16" element={<Fiverr1 />} />
      <Route path="/fiverr-17" element={<Fiverr2 />} />
    </Routes>
  );
}
export default App;
