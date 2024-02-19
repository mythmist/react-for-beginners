import { useEffect, useState } from "react";
import Movie from "../components/Movies";

function Home(){
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
        await fetch(
          'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year'
        )
    ).json();
    
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
        {loading ? (
          <h1>Loading...</h1> 
        ): (
          <div>
          {movies.map((item) => (
            <Movie key={item.id}
                id={item.id}
                coverImg={item.small_cover_image}
                title={item.title}
                sumary={item.sumary}
                genres={item.genres}            
            />
          ))}  
          </div>         
        )}
    </div>    
  );
}

export default Home;