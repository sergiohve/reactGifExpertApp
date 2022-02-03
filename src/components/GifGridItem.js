import React from 'react';

function GifGridItem({img}) {
    
    return ( 
      <div>
          <div className='card  animate__animated animate__fadeInLeftBig'>
        
          <div className='contimg'> <img src={img.url} alt={img.title}/></div>
          <p>{img.title}</p>
          </div>
         
        
      </div>

     );
}

export default GifGridItem;