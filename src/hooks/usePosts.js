import {useEffect, useState} from "react";

export const usePosts = (type) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPots] = useState(null);

  useEffect( () => {

    return() => {
      getPosts(type);
    };
  }, []);

  const getPosts = async (type) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      mode: 'cors'
      // body: JSON.stringify({ title: 'React POST Request Example' })
    };
    await fetch("https://picam.confemac.net/api-rest/public/posts/" + type, requestOptions)
        .then((response) => response.json())
        .then((response) => {
          setPots(response); // Guardar datos
          setIsLoading(false); // Desactivar modo "cargando"
        });
  }


  return {
    isLoading,
    posts
  }
}