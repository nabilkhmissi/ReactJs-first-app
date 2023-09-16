import { BrowserRouter, Route, Routes } from "react-router-dom";
import PizzaForm from "./components/pizza/pizza-form";
import PizzaHeader from "./components/pizza/pizza-header";
import Menu from "./components/pizza/pizza-menu";
import PizzaHero from "./components/pizza/pizza-home";
import PizzaDetails from "./components/pizza/pizza-details";

export default function App() {
  return (
    <BrowserRouter>
      <PizzaHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<PizzaForm />} />
        <Route path="/pizzas" element={<Menu />} />
        <Route path="/pizzas/:id" element={<PizzaDetails />} />
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