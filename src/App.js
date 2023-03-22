import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Products, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <nav>Navbar</nav>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer>Footer</footer>
    </BrowserRouter>
  );
}

export default App;
