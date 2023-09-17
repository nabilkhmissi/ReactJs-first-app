import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PizzaForm from "./components/pizza/pizza-form";
import Menu from "./components/pizza/pizza-menu";
import PizzaHero from "./components/pizza/pizza-home";
import PizzaDetails from "./components/pizza/pizza-details";
import PizzasMenu, { pizzaLoader as pizzaLoader } from "./components/pizza/pizzas-menu";
import PlatsMenu from "./components/pizza/plats-menu";
import SandwichesMenu from "./components/pizza/sandwiches-menu";
import SandwichDetails from "./components/pizza/sandwichDetails";
import Layout from "./components/pizza/layout";
import PizzaDetailsIngredients from "./components/pizza/pizza-details-ingredients";
import PizzaDetailsImages from "./components/pizza/pizza-details-images";
import PizzaDetailsPricing from "./components/pizza/pizza-details-pricing";
import PageNotFound from "./components/pizza/pageNotFound";
import Error from "./components/pizza/error";
import ProtectedRoute from "./components/pizza/protected-route";
import Login from "./components/pizza/login";

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route index element={<PizzaHero />}></Route>
      <Route path="add" element={<PizzaForm />} />
      <Route path="login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="protected" element={<h1>Protected ressource</h1>} />
      </Route>

      <Route path="menu" element={<Menu />}>
        <Route index element={<PizzasMenu />} loader={pizzaLoader} errorElement={<Error />} />
        <Route path="pizzas/:id" element={<PizzaDetails />}>
          <Route index element={<PizzaDetailsIngredients />}></Route>
          <Route path="images" element={<PizzaDetailsImages />}></Route>
          <Route path="pricing" element={<PizzaDetailsPricing />}></Route>
        </Route>
        <Route path="plats" element={<PlatsMenu />} />
        <Route path="sandwiches" element={<SandwichesMenu />} />
        <Route path="sandwiches/:id" element={<SandwichDetails />} />
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  );
}