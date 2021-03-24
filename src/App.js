import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { NavButton } from './components/NavButton'
import React, { Component } from 'react';
import { NavBar } from './components/NavBar' 

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projectName: "ProjectZenith"
    }
  }

  render() {
    return (
      <div>
        <NavBar appName = {this.state.projectName}/>
        Project Zenith
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div style={{display: "flex", justifyContent: "center"}}>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {/* <Button style={{background: "white"}}>Click Me</Button> */}
//           <NavButton
//            name={"Home"}
//            color={"red"}
//            function={()=> console.log('red')}
//           />
//           <NavButton
//             name={"Settings"}
//             color="blue"
//             function={()=> alert("blue")}
//           />
//         </div>
//       </header>
//     </div>
//   );
// }

export default App;
