import React from 'react';
import styled from 'styled-components';
import './App.css'

function Header(props) {
    return (
        <div className="headstyles">
        <div className="Content"> 
        <div className="container">
            <h1 className="">Unsplash</h1>
            <p>The Internets source of freely usable images</p>
            <p>Powered By Sairam</p>
            <div className="input-group col-12">
  <input type="text" className="form-control" placeholder="Its A dummy Serch bar" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <div className="input-group-append">
    <button className="btn btn-outline-light" type="button" id="button">SEARCH</button>
  </div>

</div>
<p className="text-muted">
  <span>Trending Searches:</span>
        Bussiness,Computer,nature,love,house
  </p>
        </div>

        </div>
        </div>
    );
}

export default Header;