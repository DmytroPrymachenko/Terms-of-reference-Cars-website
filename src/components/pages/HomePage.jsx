import {
  HomePageImg,
  HomePageLi,
  HomePageSection,
  HomePageUl,
  HomePageDivUl,
  HomePageImgBacgraund,
} from "./HomePageStyled";
import imgCarsHome from "../../../imgCarsHome.json";
import homeBackgraund from "../image/Home/HomeCarBackgraund.png";

const HomePage = () => {
  return (
    <HomePageSection>
      <HomePageImgBacgraund src={homeBackgraund} />
      <div>
        <h1>Car Car Car</h1>
      </div>
      <HomePageDivUl>
        <HomePageUl>
          {imgCarsHome.map((car, index) => (
            <HomePageLi key={index}>
              <HomePageImg src={car.img} alt={`Car ${index + 1}`} />
            </HomePageLi>
          ))}
        </HomePageUl>
      </HomePageDivUl>
    </HomePageSection>
  );
};

export default HomePage;
