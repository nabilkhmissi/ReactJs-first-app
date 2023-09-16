import { BrowserRouter, Route, Routes } from "react-router-dom";
import PizzaForm from "./components/pizza/pizza-form";
import PizzaHeader from "./components/pizza/pizza-header";
import Menu from "./components/pizza/pizza-menu";
import PizzaHero from "./components/pizza/pizza-home";

export default function App() {
  return (
    <BrowserRouter>
      <PizzaHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<PizzaForm />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <PizzaHero />
    </>
  )
}