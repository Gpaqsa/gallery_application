import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

import banner from "./img1.jpeg"
const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <header className="hero-section">
        <img src={banner} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to MyWebsite</h1>
          <p>Your journey to discover amazing content begins here.</p>
          <div className="hero-btn-container">
            <button onClick={() => navigate("/gallery")} className="hero-btn">
              {" "}
              Go to Gallery{" "}
            </button>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
}

export default Home
