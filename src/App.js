import { BrowserRouter, Route, Routes } from "react-router-dom";
import PizzaForm from "./components/pizza/pizza-form";
import PizzaHeader from "./components/pizza/pizza-header";
import Menu from "./components/pizza/pizza-menu";
import PizzaHero from "./components/pizza/pizza-home";
import PizzaDetails from "./components/pizza/pizza-details";
import PizzasMenu from "./components/pizza/pizzas-menu";
import PlatsMenu from "./components/pizza/plats-menu";
import SandwichesMenu from "./components/pizza/sandwiches-menu";
import SandwichDetails from "./components/pizza/sandwichDetails";

export default function App() {
  return (
    <BrowserRouter>
      <PizzaHeader />
      <Routes>
        <Route path="/" element={<PizzaHero />} />
        <Route path="/add" element={<PizzaForm />} />
        <Route path="/menu/pizzas/:id" element={<PizzaDetails />} />
        <Route path="/menu" element={<Menu />}>
          <Route index element={<PizzasMenu />} exact />
          <Route path="plats" element={<PlatsMenu />} />
          <Route path="sandwiches" element={<SandwichesMenu />} />
          <Route path="sandwiches/:id" element={<SandwichDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}