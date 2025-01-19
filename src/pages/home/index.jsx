import reactflixLogo from "@/assets/reactflix-logo.svg";

const Home = () => {
  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src={reactflixLogo} className="logo" alt="Reactflix logo" />
        </a>
      </div>
      <h1>Reactflix, Series / Movies Finder</h1>
    </>
  );
};

export default Home;
