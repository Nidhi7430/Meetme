import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/HomePage">
          <HomePage />
        </Route>
        <Route exact path="/*">
          <Redirect to="/HomePage" />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
