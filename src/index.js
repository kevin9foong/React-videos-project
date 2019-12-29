// import the React & ReactDOM libraries
import React from 'react'; 
import ReactDOM from 'react-dom'; 

// Create a React Component
const App = function() {
    return (
    <div>
  <label class="label" for="name">Enter name:</label> 
  <input id="name" name="username"/> 
  {/* <input type="submit" value="Login" />  */}
  <button style={{backgroundColor: '#34CCFF', color: 'white'}}>Submit</button> 
    </div> 
    );
}

// const App = () => {
//     return <div> 
//         Welcome to RR
//     </div>
// }

// Render the component into the view
ReactDOM.render(
    <App />, document.querySelector('#root')
);