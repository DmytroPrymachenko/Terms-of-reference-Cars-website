import {
  CostSpan,
  HashtagDiv,
  HashtagDivBorder,
  HashtagSpan,
  ItemListButtonModal,
  ItemListImage,
  ItemListImageButton,
  ItemListImageDiv,
  ItemListLi,
  NeimengCostDiv,
  NeimengDiv,
  NeimengModelSpan,
  NeimengSpan,
} from "./ItemListStyled";
import CarImage from "../image/imageCar.png";
import HeartSvgComponent from "../image/itemListImage/HeartSvg";
import { useState } from "react";
import LearnMoreModal from "../learnMoreModal/LearnMoreModal";

const ItemList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonLearnMore = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <LearnMoreModal buttonExitClick={buttonLearnMore} />}
      <section>
        <div>
          <ul>
            <ItemListLi>
              <ItemListImageDiv>
                <ItemListImage src={CarImage} alt="Car" />
                <ItemListImageButton>
                  <HeartSvgComponent />
                </ItemListImageButton>
              </ItemListImageDiv>
              <NeimengCostDiv>
                <NeimengDiv>
                  <NeimengSpan>
                    Buick <NeimengModelSpan>Enclave</NeimengModelSpan>, 2008
                  </NeimengSpan>
                </NeimengDiv>
                <div>
                  <CostSpan>$40</CostSpan>
                </div>
              </NeimengCostDiv>
              <HashtagDiv>
                <HashtagDivBorder>
                  <HashtagSpan>Kiev</HashtagSpan>
                  <HashtagSpan>Ukraine</HashtagSpan>
                  <HashtagSpan>Luxury Car Rentals</HashtagSpan>
                  <HashtagSpan>Premium</HashtagSpan>
                </HashtagDivBorder>
                <HashtagDivBorder>
                  <HashtagSpan>Suv</HashtagSpan>
                  <HashtagSpan>Enclave</HashtagSpan>
                  <HashtagSpan>9582</HashtagSpan>
                  <HashtagSpan>Power liftgate</HashtagSpan>
                </HashtagDivBorder>
              </HashtagDiv>
              <ItemListButtonModal onClick={buttonLearnMore}>
                Learn more
              </ItemListButtonModal>
            </ItemListLi>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ItemList;
