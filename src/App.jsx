import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/MovieCard";
// import TestOne from './components/Test/TestOne'
// import TestTwo from './components/Test/TestTwo'
function App() {
  return (
    <>
      {/* <TestOne/>
    <TestTwo/> */}

      <Header />
      <Banner />
      <MovieCard/>
    </>
  );
}

export default App;
