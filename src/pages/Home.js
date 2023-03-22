import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="section">
      <h2>Home</h2>
      <Link to={"/about"} className="btn">
        Go to About
      </Link>
    </section>
  );
};
export default Home;
