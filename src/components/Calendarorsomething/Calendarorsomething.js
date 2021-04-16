import React, { Component } from 'react';
import { NavBar } from '../NavBar'
import SignUp from "../SignUp"
import {connect} from 'react-redux';
import {addAnnouncment} from '../../actions';

class Calendarorsomething extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div>Current Count Carryover: {this.props.Announcements.Count }!</div>;
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    Announcements: state.Announcements
  };
}

export default connect(mapStateToProps,{addAnnouncment})(Calendarorsomething);

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
