import Shoes from "./components/Shoes.jsx";
import { AVAILABLE_SHOES } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>ShoePicker</h1>
        <p>Which shoes would you like to see?</p>
      </header>
      <main>
        <section className="shoes-category">
          <ul className="shoes">
            {/* For each shoe from AVAILABLE_SHOES, create a Shoes component */}
            {AVAILABLE_SHOES.map((shoe) => (
              <Shoes key={shoe.id} shoe={shoe} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
