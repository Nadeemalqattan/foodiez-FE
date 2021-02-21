import { HomeText, HomeImage, HomeTB } from "../styles";
import homepage from "./images/homepage.jpg";

const Home = () => {
  return (
    <div class="container-md">
      <HomeImage alt="Foodiez" src={homepage} />
      <HomeText>
        Where the best
        <br />
        recipes gather
      </HomeText>
      <HomeTB>Find out our different categories</HomeTB>
    </div>
  );
};

export default Home;
