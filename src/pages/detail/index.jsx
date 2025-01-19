import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/components/Header";
import Detail from "@/components/Detail";
import { getMovieByIdRequest } from "@/api";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    const params = { id };
    dispatch(getMovieByIdRequest({ params }));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Detail id={id} data={data} />
    </>
  );
};

export default DetailPage;
