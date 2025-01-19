import { useState, useCallback } from "react";
import { Input, Segment } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "@/redux/moviesSlice";
import { getMoviesRequest } from "@/api";
import { setCurrentPage } from "@/redux/moviesSlice";
import debounce from "lodash.debounce";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { loading, query } = useSelector((state) => state.movies);
  const [inputValue, setInputValue] = useState(query);

  const debouncedFetchResults = useCallback(
    debounce((query) => {
      if (query.length >= 3) {
        dispatch(setCurrentPage(1));
        const params = { page: 1, query };
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
    debouncedFetchResults(value);
  };

  return (
    <Segment>
      <Input
        loading={loading}
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
        fluid
      />
    </Segment>
  );
};

export default SearchBar;
