import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Congress from "../Congress/Congress";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          {/*<Route path="/politicians" component={Politicians} />*/}
          <Route path="/congress" element={<Congress />} />
          {/*<Route path="/about" component={About} />*/}
          {/*<Route path="/contact" component={Contact} />*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
