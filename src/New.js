import React,{useState,useEffect} from 'react';
import Loader from './Loader';
import Images from './Imagenew'
import axios from 'axios'; 

import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';


import InfiniteScroll from 'react-infinite-scroll-component';


const GlobalStyle = createGlobalStyle`
*{
  margine:0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-family:sans-sarif;

}
`;

const WrapperImage=styled.section`
max-width:70rem;
margin:4rem auto;
display:grid;
grid-gap:1em;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
grid-auto-rows:300px;
`;


function App() {
const [images,setImages] =useState([])

useEffect(()=>{
  fetchImages();
},[])

const fetchImages = () => {
  const apiRoot="https://api.unsplash.com";
  const accessKey=process.env.REACT_APP_ACCESSKEY;

  axios 
        .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10 `)
        .then(res => setImages([...images,...res.data]))
}

  return (
    <div> 
      <GlobalStyle />
      <h1 className="text-center text-muted mt-5">Unlimited New Images Here Please Scroll Down</h1>

    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={<Loader />}
    >
      <WrapperImage>
      {images.map(image=>(
        <Images url={image.urls.thumb} key={image.id}/>
      ))}
    </WrapperImage>  
    </InfiniteScroll>      

    </div>
  );
}

export default App;
