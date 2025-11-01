import Data from "../data/Data";

export default function Footer() {
  return (
    <footer>
      <p>This page was last edited on {Data.lastEdited}.</p>
    </footer>
  );
}
