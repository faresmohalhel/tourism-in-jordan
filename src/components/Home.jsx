import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Tours from "./Tours";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Tours />
      <Footer />
    </Fragment>
  );
};

export default Home;
