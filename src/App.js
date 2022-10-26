import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Brands from './templates/brands';
import Home from './templates/home';
import Fragrance from './templates/fragrance';
import Skincare from './templates/skincare';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

//Redux
import { connect } from "react-redux"
import { increaseCounter, decreaseCounter } from "./redux/counter/counterActions"

function App(props) {
  return (
    <>
      <Header props={props} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/brands" element={<Brands />} />
        <Route exact path="/fragrance" element={<Fragrance />} />
        <Route exact path="/skincare" element={<Skincare />} />
      </Routes>
      {/* <div>
        <div>Count: {props.count}</div>

        <button onClick={() => props.increaseCounter()}>Increase Count</button>

        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </div> */}
      <Footer />

    </>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)