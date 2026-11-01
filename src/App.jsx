import "./App.css";
import Banner from "./components/Banner/Banner";
import DisplayRow from "./components/DisplayRow/DisplayRow";

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
    </>
  );
}

export default App;
