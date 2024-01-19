import {
  HashtagDiv,
  HashtagDivBorder,
  HashtagSpan,
  NeimengDiv,
  NeimengModelSpan,
  NeimengSpan,
} from "../itemList/ItemListStyled";

const LearnMoreModal = () => {
  return (
    <>
      <div>
        <div>
          <button></button>
          <div>
            <img></img>
          </div>
          <NeimengDiv>
            <NeimengSpan>
              Buick <NeimengModelSpan>Enclave</NeimengModelSpan>, 2008
            </NeimengSpan>
          </NeimengDiv>
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
          <p>
            The Buick Enclave is a stylish and spacious SUV known for its
            comfortable ride and luxurious features.
          </p>
          <div>
            <h2>Accessories and functionalities:</h2>
            <HashtagDiv>
              <HashtagDivBorder>
                <HashtagSpan>Kiev</HashtagSpan>
                <HashtagSpan>Ukraine</HashtagSpan>
                <HashtagSpan>Luxury Car Rentals</HashtagSpan>
              </HashtagDivBorder>
              <HashtagDivBorder>
                <HashtagSpan>Suv</HashtagSpan>
                <HashtagSpan>Enclave</HashtagSpan>
                <HashtagSpan>9582</HashtagSpan>
              </HashtagDivBorder>
            </HashtagDiv>
          </div>
          <div>
            <h2>Rental Conditions: </h2>
            <ul>
              <li>
                Minimum age : <span>25</span>
              </li>
              <li>Valid driver’s license</li>
              <li>Security deposite required </li>
              <li>
                Mileage: <span>5,858</span>
              </li>
              <li>
                Price: <span>40$</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMoreModal;
