import { useEffect } from "react";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import MovieList from "@/components/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesRequest } from "@/api";
import Loading from "@/components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, currentPage, query, type } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    const params = { page: currentPage, query, type };
    dispatch(getMoviesRequest({ params }));
  }, [dispatch, currentPage]);

  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <Header />
      <Searchbar />
      {loading ? <Loading /> : <MovieList />}
    </>
  );
};

export default Home;
