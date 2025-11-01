import Data from "../data/Data";

export default function Header() {
  return (
    <header className="wiki-header">
      <h1>{Data.title}</h1>
      <p className="subtitle">{Data.subtitle}</p>
    </header>
  );
}
