import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

function GifGrid({category}) {
 
   const {  data: images, loading}= useFetchGifs(category);


  
  
    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        {loading ? <div class="loader"></div> : ""}
       <div className='card-grid'>

            {images.map((img)=>{
                return  <GifGridItem 
                key={img.id} 
                img={img}
                />
                
            })}
                
            

        </div>
        </>
      );
}

export default GifGrid;