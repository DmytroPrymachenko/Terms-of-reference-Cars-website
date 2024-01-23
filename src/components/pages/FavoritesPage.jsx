import { useEffect, useState } from "react";
import {
  CostSpan,
  HashtagDiv,
  HashtagDivBorder,
  HashtagSpan,
  ItemFavoriteLi,
  ItemListButtonModal,
  ItemListImage,
  ItemListImageButton,
  ItemListImageDiv,
  ItemListUl,
  NeimengCostDiv,
  NeimengDiv,
  NeimengModelSpan,
  NeimengSpan,
} from "../itemList/ItemListStyled";

import { isCarSelected } from "../localStoregelogic/localStoregelogic";
import HeartActiveSvg from "../image/itemListImage/HeartActiveSvg";
import HeartSvgComponent from "../image/itemListImage/HeartSvg";
import LearnMoreModal from "../learnMoreModal/LearnMoreModal";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const buttonLearnMore = (car) => {
    setSelectedCar(car);
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoritesFromStorage);
  }, []);

  const removeFavorite = (carId) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== carId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      {isModalOpen && (
        <LearnMoreModal car={selectedCar} buttonLearnMore={buttonLearnMore} />
      )}
      <section>
        <div>
          <ItemListUl>
            {favorites.map((favorite) => (
              <ItemFavoriteLi key={crypto.randomUUID()}>
                <ItemListImageDiv>
                  <ItemListImage src={favorite.img} alt="Car" />
                  <ItemListImageButton
                    onClick={() => removeFavorite(favorite.id)}
                  >
                    {isCarSelected(favorite) ? (
                      <HeartActiveSvg />
                    ) : (
                      <HeartSvgComponent />
                    )}
                  </ItemListImageButton>
                </ItemListImageDiv>
                <NeimengCostDiv>
                  <NeimengDiv>
                    <NeimengSpan>
                      {favorite.make}
                      <NeimengModelSpan>{favorite.model}</NeimengModelSpan>,
                      {favorite.year}
                    </NeimengSpan>
                  </NeimengDiv>
                  <div>
                    <CostSpan>{favorite.rentalPrice}</CostSpan>
                  </div>
                </NeimengCostDiv>
                <HashtagDiv>
                  <HashtagDivBorder>
                    <HashtagSpan>{favorite.address.split(", ")[1]}</HashtagSpan>
                    <HashtagSpan>{favorite.address.split(", ")[2]}</HashtagSpan>
                    <HashtagSpan>{favorite.rentalCompany}</HashtagSpan>
                    <HashtagSpan>{favorite.type}</HashtagSpan>
                  </HashtagDivBorder>
                  <HashtagDivBorder>
                    <HashtagSpan>{favorite.type}</HashtagSpan>
                    <HashtagSpan>{favorite.model}</HashtagSpan>
                    <HashtagSpan>{favorite.id}</HashtagSpan>
                    <HashtagSpan>{favorite.functionalities[0]}</HashtagSpan>
                  </HashtagDivBorder>
                </HashtagDiv>
                <ItemListButtonModal onClick={() => buttonLearnMore(favorite)}>
                  Learn more
                </ItemListButtonModal>
              </ItemFavoriteLi>
            ))}
          </ItemListUl>
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
