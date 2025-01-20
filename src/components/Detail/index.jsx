import {
  Container,
  GridColumn,
  Grid,
  Image,
  Divider,
  GridRow,
  StatisticGroup,
  Button,
  ButtonGroup,
  Statistic,
  StatisticValue,
  StatisticLabel,
  Icon,
  Segment,
} from "semantic-ui-react";
import splitGenres from "@/utils/helpers";

const Detail = ({ data }) => {
  return (
    <Segment>
      <Container>
        <h1>{data.Title}</h1>
        <Divider />
        <Grid>
          <GridRow>
            <GridColumn mobile={16} tablet={8} computer={4}>
              <Image src={data.Poster} fluid rounded />
            </GridColumn>
            <GridColumn mobile={16} tablet={8} computer={12}>
              <h3>Type: {data.Type}</h3>
              <span>{data.Plot}</span>
              <Divider />
              <StatisticGroup widths="three" size="tiny">
                {data.Ratings?.map((rate, index) => (
                  <Statistic key={`rate_${index}`} color="orange">
                    <StatisticValue>{rate.Value}</StatisticValue>
                    <StatisticLabel>{rate.Source}</StatisticLabel>
                  </Statistic>
                ))}
              </StatisticGroup>
              <Divider />
              <Grid>
                <GridRow>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="right"
                    mobile={4}
                    tablet={4}
                    computer={2}
                  >
                    <h4>Duration:</h4>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="left"
                    mobile={12}
                    tablet={12}
                    computer={3}
                  >
                    <span>{data.Runtime}</span>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="right"
                    mobile={4}
                    tablet={4}
                    computer={2}
                  >
                    <h4>Genre:</h4>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="left"
                    mobile={12}
                    tablet={12}
                    computer={9}
                  >
                    <ButtonGroup size="tiny">
                      {splitGenres(data.Genre)?.map((genre, index) => (
                        <Button key={`genre_${index}`}>{genre}</Button>
                      ))}
                    </ButtonGroup>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="right"
                    mobile={4}
                    tablet={4}
                    computer={2}
                  >
                    <h4>Year:</h4>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="left"
                    mobile={12}
                    tablet={12}
                    computer={3}
                  >
                    <Button size="tiny">{data.Year}</Button>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="right"
                    mobile={4}
                    tablet={4}
                    computer={2}
                  >
                    <h4>Director:</h4>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="left"
                    mobile={12}
                    tablet={12}
                    computer={9}
                  >
                    <span>{data.Director}</span>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="right"
                    mobile={4}
                    tablet={4}
                    computer={2}
                  >
                    <h4>Country:</h4>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="left"
                    mobile={12}
                    tablet={12}
                    computer={14}
                  >
                    <span>{data.Country}</span>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="right"
                    mobile={4}
                    tablet={4}
                    computer={2}
                  >
                    <h4>Language:</h4>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="left"
                    mobile={12}
                    tablet={12}
                    computer={14}
                  >
                    <span>{data.Language}</span>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="right"
                    mobile={4}
                    tablet={4}
                    computer={2}
                  >
                    <h4>Actors:</h4>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="left"
                    mobile={12}
                    tablet={12}
                    computer={14}
                  >
                    <span>{data.Actors}</span>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="right"
                    mobile={4}
                    tablet={4}
                    computer={2}
                  >
                    <h4>Writer:</h4>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="left"
                    mobile={12}
                    tablet={12}
                    computer={14}
                  >
                    <span>{data.Writer}</span>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="right"
                    mobile={4}
                    tablet={4}
                    computer={2}
                  >
                    <h4>
                      <Icon name="trophy" />
                      Awards:
                    </h4>
                  </GridColumn>
                  <GridColumn
                    verticalAlign="middle"
                    textAlign="left"
                    mobile={12}
                    tablet={12}
                    computer={14}
                  >
                    <span>{data.Awards}</span>
                  </GridColumn>
                </GridRow>
              </Grid>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Detail;
