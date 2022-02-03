
export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category) }&limit=5&api_key=eTzRprbo8Q9bfYaNzJ1PI5Etc4y7uQVQ`;
   const respuesta=  await fetch(url);
   const {data} = await respuesta.json();
  
   const gifs= data.map(img =>{
       //El signo de interrogacion es si viene la imagenes entonces que la utilice
       return {
           id: img.id,
           title: img.title,
           url: img.images?.downsized_medium.url
       }
   })
 
  return gifs;

}
