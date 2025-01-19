import { Container, GridColumn, Grid, Pagination } from "semantic-ui-react";
import Card from "@/components/UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@/redux/dataSlice";

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
            <GridColumn key={movie.imdbID} mobile={8} tablet={8} computer={4}>
              <Card data={movie} />
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
