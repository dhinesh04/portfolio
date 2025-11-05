import Data from "../data/Data";

export default function Footer() {
  
    const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });}
    
  return (
    <footer>
      <p>This page was last edited on {Data.lastEdited}.</p>
      <a href="#top" onClick={scrollToTop} className="contents-top">
            [Top]
      </a>
    </footer>
  );
}
