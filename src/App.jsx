import { useActiveSection } from "./hooks/usePortfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./styles/portfolio.css";

const SECTION_IDS = ["experience", "research", "projects", "skills", "contact"];

export default function App() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <>
      <Header active={active} />
      <Home />
      <Footer />
    </>
  );
}
