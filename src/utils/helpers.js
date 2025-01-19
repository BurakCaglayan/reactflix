const splitGenres = (genres) => {
  return genres?.split(/,\s*/);
};

export const getYears = (back) => {
  const year = new Date().getFullYear();
  const yearsArray = Array.from(
    { length: back },
    (v, i) => year - i
  );
  return yearsArray.map((year) => {
    return {
      key: year,
      text: year,
      value: year,
    };
  });
};

export default splitGenres;
