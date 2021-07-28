// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'

import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponents';
import { DISHES } from './shared/dishes'


export class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristaurante Confusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      
    </div>
    )
  }
}

export default App

