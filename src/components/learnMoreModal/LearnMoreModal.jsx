import { useCallback, useEffect, useRef } from "react";
import {
  HashtagDivBorder,
  HashtagSpan,
  NeimengModelSpan,
  NeimengSpan,
} from "../itemList/ItemListStyled";
import {
  BackraundDiv,
  LearnMoreAccessoriesDiv,
  LearnMoreBtnClose,
  LearnMoreH2,
  LearnMoreHashtagDiv,
  LearnMoreImg,
  LearnMoreImgDiv,
  LearnMoreLi,
  LearnMoreLiSpan,
  LearnMoreModalContainer,
  LearnMoreModalDiv,
  LearnMoreNeimengDiv,
  LearnMoreP,
  LearnMoreRentalButton,
  LearnMoreRentalConditionsDiv,
  LearnMoreUl,
} from "./LearnMoreModalStyled";

import ExitBtnSVG from "../image/itemListImage/ExitBtnSVG";

const LearnMoreModal = ({ car, buttonLearnMore }) => {
  const modalRef = useRef();

  const handleClose = useCallback(() => {
    buttonLearnMore();
  }, [buttonLearnMore]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleClose]);

  return (
    <>
      <BackraundDiv>
        <LearnMoreModalContainer>
          <LearnMoreModalDiv ref={modalRef}>
            <LearnMoreBtnClose onClick={handleClose}>
              <ExitBtnSVG />
            </LearnMoreBtnClose>
            <LearnMoreImgDiv>
              <LearnMoreImg src={car.img} alt="Car" />
            </LearnMoreImgDiv>
            <LearnMoreNeimengDiv>
              <NeimengSpan>
                {car.make} <NeimengModelSpan>{car.model}</NeimengModelSpan>,
                {car.year}
              </NeimengSpan>
            </LearnMoreNeimengDiv>
            <LearnMoreHashtagDiv>
              <HashtagDivBorder>
                <HashtagSpan>{car.address.split(", ")[1]}</HashtagSpan>
                <HashtagSpan>{car.address.split(", ")[2]}</HashtagSpan>
                <HashtagSpan>Id: {car.id}</HashtagSpan>
                <HashtagSpan>Year: {car.year}</HashtagSpan>
                <HashtagSpan>Type: {car.type}</HashtagSpan>
              </HashtagDivBorder>
              <HashtagDivBorder>
                <HashtagSpan>
                  Fuel Consumption: {car.fuelConsumption}
                </HashtagSpan>
                <HashtagSpan>Engine Size: 3.6L V6{car.engineSize}</HashtagSpan>
              </HashtagDivBorder>
            </LearnMoreHashtagDiv>
            <LearnMoreP>{car.description}</LearnMoreP>
            <LearnMoreAccessoriesDiv>
              <LearnMoreH2>Accessories and functionalities:</LearnMoreH2>
              <LearnMoreHashtagDiv>
                <HashtagDivBorder>
                  {car.accessories.map((accessory, index) => (
                    <HashtagSpan key={index}>{accessory}</HashtagSpan>
                  ))}
                </HashtagDivBorder>
                <HashtagDivBorder>
                  {car.functionalities.map((accessory, index) => (
                    <HashtagSpan key={index}>{accessory}</HashtagSpan>
                  ))}
                </HashtagDivBorder>
              </LearnMoreHashtagDiv>
            </LearnMoreAccessoriesDiv>
            <LearnMoreRentalConditionsDiv>
              <LearnMoreH2>Rental Conditions: </LearnMoreH2>
              <LearnMoreUl>
                <LearnMoreLi>
                  Minimum age :{" "}
                  <LearnMoreLiSpan>
                    {car.rentalConditions.split("age: ")[1].split("\n")[0]}
                  </LearnMoreLiSpan>
                </LearnMoreLi>
                <LearnMoreLi>{car.rentalConditions.split("\n")[1]}</LearnMoreLi>
                <LearnMoreLi>{car.rentalConditions.split("\n")[2]}</LearnMoreLi>
                <LearnMoreLi>
                  Mileage:{" "}
                  <LearnMoreLiSpan>
                    {car.mileage.toLocaleString("en-US")}
                  </LearnMoreLiSpan>
                </LearnMoreLi>
                <LearnMoreLi>
                  Price: <LearnMoreLiSpan>{car.rentalPrice}</LearnMoreLiSpan>
                </LearnMoreLi>
              </LearnMoreUl>
            </LearnMoreRentalConditionsDiv>
            <LearnMoreRentalButton>Rental car</LearnMoreRentalButton>
          </LearnMoreModalDiv>
        </LearnMoreModalContainer>
      </BackraundDiv>
    </>
  );
};

export default LearnMoreModal;
