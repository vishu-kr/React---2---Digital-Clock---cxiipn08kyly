import React, { Component, useState } from "react";
import "../styles/App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hh: 0, mm: 0, ss: 0, frame: "" };
//   }
//   componentDidMount() {
//     setInterval(() => {
//       var date = new Date();
//       var hr = date.getHours();
//       var min = date.getMinutes();
//       var sec = date.getSeconds();
//       var hr2 = hr;
//       hr = hr % 12;
//       hr = hr ? hr : 12;
//       this.setState({ hh: hr, mm: min, ss: sec });
//       if (hr2 >= 12) {
//         this.setState({ frame: "PM" });
//       } else {
//         this.setState({ frame: "AM" });
//       }
//     }, 1000);
//   }
//   render() {
//     return (
//       <>
//         <div className="Clock">
//           <h3 id="time">
//             {this.state.hh +
//               ":" +
//               (this.state.mm < 10 ? "0" : "") +
//               this.state.mm +
//               ":" +
//               (this.state.ss < 10 ? "0" : "") +
//               this.state.ss +
//               " " +
//               this.state.frame}
//           </h3>
//         </div>
//       </>
//     );
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }
  currentTime() {
    this.setState({ time: new Date() });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.currentTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        <div className="Clock">
          <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
        </div>
      </>
    );
  }
}
export default App;
