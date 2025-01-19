import { useParams } from "react-router";
import Header from "@/components/Header";

const DetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <div>DetailPage {id}</div>
    </>
  );
};

export default DetailPage;
