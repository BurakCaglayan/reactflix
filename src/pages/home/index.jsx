import { useEffect } from "react";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import MovieList from "@/components/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesRequest } from "@/api";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMoviesRequest());
  }, [dispatch]);

  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <Header />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Searchbar />
          <MovieList />
        </>
      )}
    </>
  );
};

export default Home;
