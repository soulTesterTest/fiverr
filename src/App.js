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
    </Routes>
  );
}
export default App;
