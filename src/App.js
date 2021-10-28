import logo from './logo.svg';
import './App.css';
import Content from './content';
import React from 'react';
import Hello from './Hello';
import Header from './Header';

let i = 2;

let myCSS = {
  fontSize: 30,
  color: '#FF0000',

}

function App() {
  return (
    <div className="App">
      < Header message="HI Pim" />
      < Content />
      < Hello />
    </div>
  );
}

// function Header(props) {
//   return (
//     <div className="App">
//       <h1> Header</h1>
//       <p>{props.message}</p>
//     </div>
//   );
// }

export default App;
