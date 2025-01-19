import { Container, GridColumn, Grid, Pagination } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import Card from "@/components/UI/Card";
import { setCurrentPage } from "@/redux/moviesSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const { data, currentPage } = useSelector((state) => state.movies);
  const moviesList = data.Search;

  const handlePageChange = (e, { activePage }) => {
    dispatch(setCurrentPage(activePage));
  };

  return (
    <>
      <Container>
        <Grid>
          {moviesList?.map((movie) => (
            <GridColumn key={movie.imdbID} mobile={8} tablet={4} computer={4}>
              <Link to={`/detail/${movie.imdbID}`}>
                <Card data={movie} />
              </Link>
            </GridColumn>
          ))}
        </Grid>
        <Pagination
          defaultActivePage={currentPage}
          firstItem={null}
          lastItem={null}
          onPageChange={handlePageChange}
          pointing
          secondary
          totalPages={Math.floor(data.totalResults / 10)}
        />
      </Container>
    </>
  );
};

export default MovieList;
