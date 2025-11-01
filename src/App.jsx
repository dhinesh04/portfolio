import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoBox from "./components/InfoBox";
import ContentsSidebar from "./components/ContentsSidebar";
import Home from "./pages/Home";
import AppearanceBox from "./components/AppearanceBox";
import "./styles/wiki.css";

export default function App() {
  return (
    <div className="wiki-page">
      <Header />
      <div className="wiki-layout">
        <ContentsSidebar />
        <main className="wiki-body">
          <InfoBox />
          <Home />
        </main>
        <AppearanceBox />
      </div>
      <Footer />
    </div>
  );
}
