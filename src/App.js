import React from 'react';
import Flowers from './Flowers'
import Header from './Header'
import New from './New'
import {BrowserRouter,Route,Link,Router} from 'react-router-dom'
function App() {
  return (
    
    <BrowserRouter>
    <Header />
    <nav className="container mt-5">
      <ul className="nav bg-light py-3">
        <li className="nav-item">
          <Link className="nav-link" to="/" >Trending</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/New" >New</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-dark disabled">Comming soon!!!</Link>
          </li>
      </ul>
    </nav>
      
      <Route exact path="/" component={Flowers}></Route>
      <Route exact path="/New" component={New}></Route>
    </BrowserRouter>

  );
}

export default App;
