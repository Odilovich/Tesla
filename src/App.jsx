import Header from "./components/header"
import Footer from "./components/footer"
import Main from "./components/containers/main"
import {Outlet} from "react-router-dom";


const App = () => {
  return (
    <>
      <Header/>
      <Main>
        <Outlet/>
      </Main>
      <Footer/>
    </>
  );
};

export default App;