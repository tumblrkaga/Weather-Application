import React from 'react';
import "./App.css";
import {Link} from "react-router-dom";
import Cards from "./components/Cards";

class App extends React.Component {
	/**use async to make htttp call very easy* */
  
  render() {         
    return (
      <div className ="wrapper" >
        <div className ="title-container">
          <br></br>
              <ul className="menu_top">
                  <li>
                    <button className="button_top" >
                        <Link to = "#"  style={{ textDecoration: 'none' }}>
                        About Us
                        </Link>
                    </button>  
                  </li>
                    <button className="button_top" >
                        <Link to = "#"  style={{ textDecoration: 'none' }}>
                        Get the App
                        </Link>
                    </button>  
                  <li> 
                    <button className="button_top" >
                        <Link to = "#"  style={{ textDecoration: 'none' }}>
                        Contact
                        </Link>
                    </button>                              
                  </li>
              </ul>
            <br></br>
            <br></br>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Know the weather before you travel</span>
          <Cards /> 
        </div>
      </div>
    );
  }
}

export default App;
