import axios from 'axios'
import React, { useEffect, useState } from 'react'
import search from './search.css'
import  ImageBox  from '../ImageBox/imagebox'
import { Box } from '@material-ui/core'
const SearchBar = () => {

  const [data, setData]= useState([])
  // state={images:[]}

  // useEffect(()=>{
    const search=(e)=>{
        e.preventDefault();
        // console.log(e.target[0].value);
        const term= e.target[0].value;
         axios.get('https://api.unsplash.com/search/photos',{
          params:{query:term},
          headers:{
            Authorization:'Client-ID nXO6i3_SI7AOCquuO9u6F5_6EVb_R2jE0LOHFCHI6cc'
          }
        })
        .then(res=>{
          console.log(res.data.results)
          setData(res.data.results);
    
        })

        // this.setState({images:res.data.results})
      }
    
      const textchange=(e)=>{
        // console.log(e.target.value)
      }
    
      // const click=()=>{
      //   console.log('i was clicked');
      // }
    // },[])
    return (
        <div className='search'>
            {/* <h1>Testing from here!</h1> */}
            <Box className='ui segment'>
            <label>Search</label>
            <form className='ui form' onSubmit={search} >
                <input id="form_input" type={'text'} placeholder='search...' onChange={textchange} />
                <button >Submit</button>
            </form>
            
            <ImageBox data={data}/>
            </Box>
        </div>
    )

}

export default SearchBar