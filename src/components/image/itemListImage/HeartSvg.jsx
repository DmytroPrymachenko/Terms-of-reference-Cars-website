import styled from "styled-components";

export const SvgComponentHeartPath = styled.path`
  &:active,
  &:hover,
  &:focus {
    fill: #3470ff;
    stroke: #3470ff;
  }
`;

const SvgComponentHeart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <SvgComponentHeartPath
      stroke="#fff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      strokeWidth={1.5}
      d="M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.127 4.127 0 0 0 0-5.835Z"
    />
  </svg>
);

export default SvgComponentHeart;
