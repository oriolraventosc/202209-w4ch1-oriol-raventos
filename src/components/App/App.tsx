import Info from "../Info/Info";
import gentlemen from "../../gentleman";
import Gentlemen from "../Gentlemen/Gentlemen";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <Info />
      <main className="main">
        <ul className="gentlemen">
          {gentlemen.map((gentlemans, position) => (
            <Gentlemen gentlemens={gentlemen[position]} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
