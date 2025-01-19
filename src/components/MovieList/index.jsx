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
          <GridColumn mobile={16} tablet={8} computer={4}>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </GridColumn>
          <GridColumn mobile={16} tablet={8} computer={4}>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </GridColumn>
          <GridColumn mobile={16} tablet={8} computer={4}>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </GridColumn>
          <GridColumn mobile={16} tablet={8} computer={4}>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </GridColumn>
          <GridColumn mobile={16} tablet={8} computer={4}>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
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
