import "./App.css";
import Banner from "./components/Banner/Banner";
import DisplayRow from "./components/DisplayRow/DisplayRow";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";

// import TestOne from './components/Test/TestOne'
// import TestTwo from './components/Test/TestTwo'
function App() {
  return (
    <>
      {/* <TestOne/>
    <TestTwo/> */}

      <Header />
      <Banner />
      <DisplayRow />
      <Footer/>
    </>
  );
}

export default App;
