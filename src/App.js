// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/home';
import {BrowserRouter as Router,Route,Routes,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MasterForm from './components/MasterForm';
import Bonds from './components/Bond';
import PopupModal from './components/Popup';
import Dbps from './components/Dbptop';
// import BargraphModal from './components/Chart'
// import { render } from 'react-dom';
// import Chart from './components/Chart';
// import { getData } from "./utils";
import Graphmodal from './components/Graph';
import Graph2 from './components/Graph2';
import AddLiquidity from './components/addLiquidity'

// import { TypeChooser } from "react-stockcharts/lib/helper";

// class ChartComponent extends React.Component {
// 	componentDidMount() {
// 		getData().then(data => {
// 			this.setState({ data })
// 		})
// 	}
// 	render() {
// 		if (this.state == null) {
// 			return <div>Loading...</div>
// 		}
// 		return (
// 			<TypeChooser>
// 				{type => <Chart type={type} data={this.state.data} />}
// 			</TypeChooser>
// 		)
// 	}
// }

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
    <div className="App">
    {/* <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
    </ul> */}
    <Routes>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/bonds' element={<Bonds/>}></Route> 
              <Route path='/form' element={<MasterForm/>}></Route>
              <Route path='/popup' element={<PopupModal/>}></Route>
              <Route path='/topbutton' element={<Dbps/>}></Route>
              <Route path='/bargraph' element={<Graphmodal/>}></Route>
              <Route path='/bargraph2' element={<Graph2/>}></Route>
              <Route path='/addliquidity' element={<AddLiquidity/>}></Route>
            </Routes>
    </div>
</Router>
  );
}

export default App;
