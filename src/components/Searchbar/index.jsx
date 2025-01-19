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
import { setCurrentPage, setQuery, setType } from "@/redux/moviesSlice";
import { optionTypes } from "@/utils/constants";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { loading, query, type } = useSelector((state) => state.movies);
  const [inputValue, setInputValue] = useState(query);
  const [selectedType, setSelectedType] = useState(type);

  const debouncedFetchResults = useCallback(
    debounce(({ query, type }) => {
      if (query.length >= 3) {
        dispatch(setCurrentPage(1));
        const params = { page: 1, query, type };
        dispatch(getMoviesRequest({ params }));
      }
    }, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length >= 3) {
      dispatch(setQuery(value));
    }
    debouncedFetchResults({ query: value, type: selectedType });
  };

  const handleTypeChange = (e, { value }) => {
    setSelectedType(value);
    dispatch(setType(value));
    debouncedFetchResults({ query: inputValue, type: value });
  };

  return (
    <Segment>
      <Grid>
        <GridRow>
          <GridColumn computer={4}>
            <Dropdown
              placeholder="Select Type"
              fluid
              selection
              options={optionTypes}
              onChange={handleTypeChange}
            />
          </GridColumn>

          <GridColumn computer={8}>
            <Input
              loading={loading}
              value={inputValue}
              onChange={handleChange}
              placeholder="Search..."
              fluid
            />
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
};

export default SearchBar;
