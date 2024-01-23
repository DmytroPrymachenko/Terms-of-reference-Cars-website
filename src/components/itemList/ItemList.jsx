import {
  ButtonLoadMore,
  CostSpan,
  DivButtonLoadMore,
  HashtagDiv,
  HashtagDivBorder,
  HashtagSpan,
  ItemListButtonModal,
  ItemListImage,
  ItemListImageButton,
  ItemListImageDiv,
  ItemListLi,
  ItemListUl,
  NeimengCostDiv,
  NeimengDiv,
  NeimengModelSpan,
  NeimengSpan,
} from "./ItemListStyled";

import HeartSvgComponent from "../image/itemListImage/HeartSvg";
import { useEffect, useState } from "react";
import LearnMoreModal from "../learnMoreModal/LearnMoreModal";
import { useDispatch, useSelector } from "react-redux";
import { getCarThunk } from "../../store/cars/thunk";
import {
  getFavoritesFromLocalStorage,
  toggleFavoriteTest,
} from "../localStoregelogic/localStoregelogic";
import {
  selectCars,
  selectIsLoading,
  selectstatePage,
  selectstatePerPage,
} from "../../store/cars/selector";
import { incrementPage, setSearch } from "../../store/cars/slise";
import HeartActiveSvg from "../image/itemListImage/HeartActiveSvg";

const ItemList = ({ filter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const statePage = useSelector(selectstatePage);
  const [carFavorites, setCarFavorites] = useState([]);
  const statePerPage = useSelector(selectstatePerPage);
  const isSearch = useSelector((state) => state.isSearch);
  const [resultResponce, setResultResponce] = useState([]);

  useEffect(() => {
    if (filter) {
      setResultResponce(filter);
    }
  }, [filter]);

  const buttonLearnMore = (car) => {
    setSelectedCar(car);
    setIsModalOpen(!isModalOpen);
  };
  const loadMoreCars = () => {
    if (!isLoading) {
      dispatch(setSearch(false));
      dispatch(incrementPage(statePage + 1));
    }
  };

  const handleToggleFavorite = (car) => {
    const updatedFavorites = toggleFavoriteTest(car);
    setCarFavorites(updatedFavorites.map((favorite) => favorite.id));
  };

  useEffect(() => {
    if (!isSearch) {
      dispatch(getCarThunk({ page: statePage, carsPerPage: statePerPage }))
        .unwrap()
        .then((res) => setResultResponce(res));
    }
  }, [dispatch, isSearch, statePage, statePerPage]);

  useEffect(() => {
    const favorites = getFavoritesFromLocalStorage();
    setCarFavorites(favorites.map((favorite) => favorite.id));
  }, [cars]);

  return (
    <>
      {isModalOpen && (
        <LearnMoreModal car={selectedCar} buttonLearnMore={buttonLearnMore} />
      )}
      <section>
        <div>
          <ItemListUl>
            {cars.map((car) => (
              <ItemListLi key={crypto.randomUUID()}>
                <ItemListImageDiv>
                  <ItemListImage src={car.img} alt="Car" />
                  <ItemListImageButton
                    onClick={() => handleToggleFavorite(car)}
                  >
                    {carFavorites.includes(car.id) ? (
                      <HeartActiveSvg />
                    ) : (
                      <HeartSvgComponent />
                    )}
                  </ItemListImageButton>
                </ItemListImageDiv>
                <NeimengCostDiv>
                  <NeimengDiv>
                    <NeimengSpan>
                      {car.make}
                      <NeimengModelSpan>{car.model}</NeimengModelSpan>,
                      {car.year}
                    </NeimengSpan>
                  </NeimengDiv>
                  <div>
                    <CostSpan>{car.rentalPrice}</CostSpan>
                  </div>
                </NeimengCostDiv>
                <HashtagDiv>
                  <HashtagDivBorder>
                    <HashtagSpan>{car.address.split(", ")[1]}</HashtagSpan>
                    <HashtagSpan>{car.address.split(", ")[2]}</HashtagSpan>
                    <HashtagSpan>{car.rentalCompany}</HashtagSpan>
                    <HashtagSpan>{car.type}</HashtagSpan>
                  </HashtagDivBorder>
                  <HashtagDivBorder>
                    <HashtagSpan>{car.type}</HashtagSpan>
                    <HashtagSpan>{car.model}</HashtagSpan>
                    <HashtagSpan>{car.id}</HashtagSpan>
                    <HashtagSpan>{car.functionalities[0]}</HashtagSpan>
                  </HashtagDivBorder>
                </HashtagDiv>
                <ItemListButtonModal onClick={buttonLearnMore.bind(null, car)}>
                  Learn more
                </ItemListButtonModal>
              </ItemListLi>
            ))}
          </ItemListUl>
          <DivButtonLoadMore>
            {resultResponce.length === 12 && (
              <ButtonLoadMore onClick={loadMoreCars}>Load more</ButtonLoadMore>
            )}
          </DivButtonLoadMore>
        </div>
      </section>
    </>
  );
};

export default ItemList;
