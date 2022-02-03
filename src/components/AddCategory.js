import React, { useState } from 'react';
import PropTypes from "prop-types";

function AddCategory({setCategories } ) {
  const [inputValue, setinputValue] = useState("");
const handlenputChange=(e)=>{
   
    setinputValue(e.target.value);
 
}
const handleSubmit= (e) =>{
    e.preventDefault();
    //Trim es para borrar los espacios
    if(inputValue.trim().length > 2){
        setCategories(cats=> [ inputValue, ...cats])
    }
    setinputValue("");




   
}
    return (  
    <form onSubmit={handleSubmit}>
    <input 
     type="text"
     value={inputValue}
     onChange={ handlenputChange }
     />
    </form>
    );
}

export default AddCategory;

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}