import React from 'react';
import axios from 'axios';
import "./Home.css"
import { useState,useEffect } from 'react';

const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/search/title/movie',
    params: {info: 'mini_info', limit: '10', page: '1', titleType: 'movie'},
    headers: {
      'X-RapidAPI-Key': 'a60f150083msh246719365558ec7p163a5ajsn8514093a8049',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

function Home() {
    const [movie,setmovie]=useState([]);
   
  
    // const data= async ()=>{
    //     const Response = await axios.get(
    //         "https://moviesdatabase.p.rapidapi.com/titles/search/title/movie?apiKey=a60f150083msh246719365558ec7p163a5ajsn8514093a8049"
    //       );
    //       console.log(Response,"data")




        // const check = localStorage.getItem("Popular");
        // if (check) {
        //     setmovie(JSON.parse(check));
        //   } else {
        //     const Response = await axios.get(
        //       "https://moviesdatabase.p.rapidapi.com/titles/search/title/movie?apiKey=a60f150083msh246719365558ec7p163a5ajsn8514093a8049"
        //     );
        //     localStorage.setItem("Popular", JSON.stringify(Response.data.recipes));
      
        //     setpopular(Response.data.recipes);
        //     // console.log(Response);
        //     // console.log(Response.data.recipes);
        //     // console.log(process.env.REACT_API);
        //   }
    // }
    useEffect(() => {
        axios.request(options).then(function (response) {
            setmovie(response.data.results);
            console.log(movie)
        }).catch(function (error) {
            console.error(error);
        });
      }, []);
    




  return (
    <div className='Whole'>{movie.map((mo) => {
        return (
          <div key={mo.id}>
            <div className="card ">
              
                {/* {console.log("movie",mo.primaryImage)} */}
                <img src={mo?.primaryImage?.url} style={{height:'10rem',width:"8rem"}} alt="Img"  />
                <p>{mo.titleText.text}</p>
             
            </div>
          </div>
        );
      })}</div>
  )
}

export default Home