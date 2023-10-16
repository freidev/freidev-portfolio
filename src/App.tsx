import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header style={{ height: "72px" }}>
        <Navbar />
      </header>
      <main className="container m-auto p-4">
        <Home />
      </main>
    </>
  );
}

export default App;
