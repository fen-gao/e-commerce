import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { useContext } from "react";
import { GlobalContext } from "./context/global";
import { Checkout } from "./pages/checkout";
import useMenu from "./hooks/use-menu";

export function App() {
  const { cart, handleFilterProductsByName, filteredProductList } =
    useContext(GlobalContext);
  const { menu } = useMenu();

  return (
    <>
      <Navbar handleSearch={handleFilterProductsByName} />
      <main className="w-full h-full flex flex-col justify-between items-center px-20 mx-auto">
        <Routes>
          {menu.map(
            (item) =>
              item.component && (
                <Route
                  key={item.route}
                  path={item.route}
                  element={<item.component productList={filteredProductList} />}
                />
              )
          )}
          <Route path="/checkout" element={<Checkout cartProducts={cart} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
