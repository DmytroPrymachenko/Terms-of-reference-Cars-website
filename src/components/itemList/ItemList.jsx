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
import { getCarThunk } from "../api/Auth/Thunk";

const ItemList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  const buttonLearnMore = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    dispatch(getCarThunk());
  }, [dispatch]);

  useEffect(() => {
    console.log(cars);
  }, [cars]);

  return (
    <>
      {isModalOpen && <LearnMoreModal buttonLearnMore={buttonLearnMore} />}
      <section>
        <div>
          <ItemListUl>
            {cars.map((car) => (
              <ItemListLi key={crypto.randomUUID()}>
                <ItemListImageDiv>
                  <ItemListImage src={car.img} alt="Car" />
                  <ItemListImageButton>
                    <HeartSvgComponent />
                  </ItemListImageButton>
                </ItemListImageDiv>
                <NeimengCostDiv>
                  <NeimengDiv>
                    <NeimengSpan>
                      {car.make}{" "}
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
                    <HashtagSpan>{car.addressCity}</HashtagSpan>
                    <HashtagSpan>{car.addressCountry}</HashtagSpan>
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
                <ItemListButtonModal onClick={buttonLearnMore}>
                  Learn more
                </ItemListButtonModal>
              </ItemListLi>
            ))}
          </ItemListUl>
        </div>
      </section>
    </>
  );
};

export default ItemList;
//   return (
//     <>
//       {isModalOpen && <LearnMoreModal buttonLearnMore={buttonLearnMore} />}
//       <section>
//         <div>
//           <ItemListUl>
//             {cars.map((car) => (
//               <ItemListLi key={car.id}>
//                 <ItemListImageDiv>
//                   <ItemListImage src={CarImage} alt="Car" />
//                   <ItemListImageButton>
//                     <HeartSvgComponent />
//                   </ItemListImageButton>
//                 </ItemListImageDiv>
//                 <NeimengCostDiv>
//                   <NeimengDiv>
//                     <NeimengSpan>
//                       {car.make}
//                       <NeimengModelSpan>{car.model}</NeimengModelSpan>,
//                       {car.year}
//                     </NeimengSpan>
//                   </NeimengDiv>
//                   <div>
//                     <CostSpan>{car.rentalPrice}</CostSpan>
//                   </div>
//                 </NeimengCostDiv>
//                 <HashtagDiv>
//                   <HashtagDivBorder>
//                     <HashtagSpan>{car.addressSiti}</HashtagSpan>
//                     <HashtagSpan>{car.addresscountri}</HashtagSpan>
//                     <HashtagSpan>{car.rentalCompany}</HashtagSpan>
//                     <HashtagSpan>{car.type}</HashtagSpan>
//                   </HashtagDivBorder>
//                   <HashtagDivBorder>
//                     <HashtagSpan>{car.model}</HashtagSpan>
//                     <HashtagSpan>{car.id}</HashtagSpan>
//                     {car.functionalities.map((func, index) => (
//                       <HashtagSpan key={index}>{func}</HashtagSpan>
//                     ))}
//                   </HashtagDivBorder>
//                 </HashtagDiv>
//                 <ItemListButtonModal onClick={buttonLearnMore}>
//                   Learn more
//                 </ItemListButtonModal>
//               </ItemListLi>
//             ))}
//           </ItemListUl>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ItemList;
