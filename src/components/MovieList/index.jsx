import {
  Container,
  GridColumn,
  Grid,
  Image,
  Pagination,
} from "semantic-ui-react";
import Card from "@/components/UI/Card";

const MovieList = () => {
  return (
    <>
      <Container>
        <Grid>
          <GridColumn mobile={8} tablet={8} computer={4}>
            <Card />
          </GridColumn>
          <GridColumn mobile={8} tablet={8} computer={4}>
            <Card />
          </GridColumn>
          <GridColumn mobile={8} tablet={8} computer={4}>
            <Card />
          </GridColumn>
          <GridColumn mobile={8} tablet={8} computer={4}>
            <Card />
          </GridColumn>
          <GridColumn mobile={8} tablet={8} computer={4}>
            <Card />
          </GridColumn>
        </Grid>
        <Pagination
          defaultActivePage={1}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          totalPages={3}
        />
      </Container>
    </>
  );
};

export default MovieList;
