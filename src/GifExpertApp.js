import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {

    //const categories = [ "one punch", "Samurai X", "DRagon Ball", "Naruto", "Inuyasha"]
    const [categories, setCategories] = useState( ["one punch"]);
    /*    const anadeOtraCategory = ()=>{
            //Dos formas de agregar un nuevo elemento=
                //setCategories([...categories, "Hunter"] )
                setCategories(cats=>
                    [...cats, "Hunter" ]
                )
        } */    
    
    return ( 
        <>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>
       
       <ol>
          {categories.map((category)=>{
             return <GifGrid category={category} key={category}/>
             
          })}
       </ol>
        </>
     );
}

export default GifExpertApp;