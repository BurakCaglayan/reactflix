import { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  GridColumn,
  GridRow,
  Input,
  Segment,
  Dropdown,
} from "semantic-ui-react";
import { getMoviesRequest } from "@/api";
import {
  setCurrentPage,
  setQuery,
  setType,
  setYear,
} from "@/redux/moviesSlice";
import { optionTypes } from "@/utils/constants";
import { getYears } from "@/utils/helpers";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { loading, query, type, year } = useSelector((state) => state.movies);
  const [inputValue, setInputValue] = useState(query);
  const [selectedType, setSelectedType] = useState(type);
  const [selectedYear, setSelectedYear] = useState(year);

  const debouncedFetchResults = useCallback(
    debounce(({ query, type, year }) => {
      if (query.length >= 3) {
        dispatch(setCurrentPage(1));
        const params = { page: 1, query, type, year };
        dispatch(getMoviesRequest({ params }));
      }
    }, 1000),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length >= 3) {
      dispatch(setQuery(value));
    }
    debouncedFetchResults({
      query: value,
      type: selectedType,
      year: selectedYear,
    });
  };

  const handleTypeChange = (e, { value }) => {
    setSelectedType(value);
    dispatch(setType(value));
    debouncedFetchResults({
      query: inputValue,
      type: value,
      year: selectedYear,
    });
  };

  const handleYearChange = (e, { value }) => {
    setSelectedYear(value);
    dispatch(setYear(value));
    debouncedFetchResults({
      query: inputValue,
      type: selectedType,
      year: value,
    });
  };

  return (
    <Segment>
      <Grid>
        <GridRow>
          <GridColumn mobile={16} tablet={3} computer={3}>
            <Dropdown
              placeholder="Movie"
              fluid
              selection
              options={optionTypes}
              onChange={handleTypeChange}
            />
          </GridColumn>

          <GridColumn mobile={16} tablet={10} computer={10}>
            <Input
              loading={loading}
              value={inputValue}
              onChange={handleChange}
              placeholder="Search..."
              fluid
            />
          </GridColumn>

          <GridColumn mobile={16} tablet={3} computer={3}>
            <Dropdown
              placeholder="Year"
              fluid
              selection
              options={getYears(50)}
              onChange={handleYearChange}
            />
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
};

export default SearchBar;
