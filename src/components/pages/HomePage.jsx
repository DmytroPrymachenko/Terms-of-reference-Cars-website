import {
  HomePageImg,
  HomePageLi,
  HomePageSection,
  HomePageUl,
  HomePageDivUl,
  HomePageImgBacgraund,
  HomeNavLink,
  HomePageH1Title,
  HomePageH1,
  HomePageDivTitle,
} from "./HomePageStyled";
import imgCarsHome from "../../../imgCarsHome.json";
import homeBackgraund from "../image/Home/HomeCarBackgraund.png";

const HomePage = () => {
  return (
    <>
      <HomePageImgBacgraund src={homeBackgraund} />
      <HomePageSection>
        <HomePageDivTitle>
          <div>
            <HomePageH1Title>PREMIUM</HomePageH1Title>
            <HomePageH1>CAR RENTAL SERVICE</HomePageH1>
          </div>
          <HomeNavLink to="/catalog">Choose your car</HomeNavLink>
        </HomePageDivTitle>
        <HomePageDivUl to="/catalog">
          <HomePageUl>
            {imgCarsHome.map((car, index) => (
              <HomePageLi key={index}>
                <HomePageImg src={car.img} alt={`Car ${index + 1}`} />
              </HomePageLi>
            ))}
          </HomePageUl>
        </HomePageDivUl>
      </HomePageSection>
    </>
  );
};

export default HomePage;
