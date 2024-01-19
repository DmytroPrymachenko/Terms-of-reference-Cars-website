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
import CarImages from "../image/imageCarModal.png";
import ExitBtnSVG from "../image/itemListImage/ExitBtnSVG";

const LearnMoreModal = ({ buttonLearnMore }) => {
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
              <LearnMoreImg src={CarImages} alt="Car" />
            </LearnMoreImgDiv>
            <LearnMoreNeimengDiv>
              <NeimengSpan>
                Buick <NeimengModelSpan>Enclave</NeimengModelSpan>, 2008
              </NeimengSpan>
            </LearnMoreNeimengDiv>
            <LearnMoreHashtagDiv>
              <HashtagDivBorder>
                <HashtagSpan>Kiev</HashtagSpan>
                <HashtagSpan>Ukraine</HashtagSpan>
                <HashtagSpan>Id: 9582</HashtagSpan>
                <HashtagSpan>Year: 2008</HashtagSpan>
                <HashtagSpan>Type: Suv</HashtagSpan>
              </HashtagDivBorder>
              <HashtagDivBorder>
                <HashtagSpan>Fuel Consumption: 10.5</HashtagSpan>
                <HashtagSpan>Engine Size: 3.6L V6</HashtagSpan>
              </HashtagDivBorder>
            </LearnMoreHashtagDiv>
            <LearnMoreP>
              The Buick Enclave is a stylish and spacious SUV known for its
              comfortable ride and luxurious features.
            </LearnMoreP>
            <LearnMoreAccessoriesDiv>
              <LearnMoreH2>Accessories and functionalities:</LearnMoreH2>
              <LearnMoreHashtagDiv>
                <HashtagDivBorder>
                  <HashtagSpan>Leather seats</HashtagSpan>
                  <HashtagSpan>Panoramic sunroof</HashtagSpan>
                  <HashtagSpan>Power liftgate</HashtagSpan>
                </HashtagDivBorder>
                <HashtagDivBorder>
                  <HashtagSpan>Premium audio system</HashtagSpan>
                  <HashtagSpan>Remote start</HashtagSpan>
                  <HashtagSpan>Blind-spot monitoring</HashtagSpan>
                </HashtagDivBorder>
              </LearnMoreHashtagDiv>
            </LearnMoreAccessoriesDiv>
            <LearnMoreRentalConditionsDiv>
              <LearnMoreH2>Rental Conditions: </LearnMoreH2>
              <LearnMoreUl>
                <LearnMoreLi>
                  Minimum age : <LearnMoreLiSpan>25</LearnMoreLiSpan>
                </LearnMoreLi>
                <LearnMoreLi>Valid driver’s license</LearnMoreLi>
                <LearnMoreLi>Security deposit required</LearnMoreLi>
                <LearnMoreLi>
                  Mileage: <LearnMoreLiSpan>5,858</LearnMoreLiSpan>
                </LearnMoreLi>
                <LearnMoreLi>
                  Price: <LearnMoreLiSpan>40$</LearnMoreLiSpan>
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
