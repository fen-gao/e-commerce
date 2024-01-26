import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/about" element={<>About</>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
