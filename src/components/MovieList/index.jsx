import {
  Container,
  GridColumn,
  Grid,
  Image,
  Pagination,
} from "semantic-ui-react";

const MovieList = () => {
  return (
    <>
      <Container>
        <Grid>
          <GridColumn mobile={8} tablet={8} computer={4}>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              fluid
              rounded
            />
          </GridColumn>
          <GridColumn mobile={8} tablet={8} computer={4}>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              fluid
              rounded
            />
          </GridColumn>
          <GridColumn mobile={8} tablet={8} computer={4}>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              fluid
              rounded
            />
          </GridColumn>
          <GridColumn mobile={8} tablet={8} computer={4}>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              fluid
              rounded
            />
          </GridColumn>
          <GridColumn mobile={8} tablet={8} computer={4}>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              fluid
              rounded
            />
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
