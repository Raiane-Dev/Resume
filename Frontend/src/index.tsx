import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.less";
import Main from "./routes/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <BrowserRouter>
    <Header />
      <Main />
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);