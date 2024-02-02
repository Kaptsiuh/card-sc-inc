import styled, { css } from "styled-components";

type StyleBtnPropsType = {
  active?: boolean;
};

export const Button = styled.button<StyleBtnPropsType>`
  font-size: 10px;
  font-weight: 700px;
  line-height: 20px;
  min-width: 86px;
  min-height: 30px;
  border: 2px solid #4e71fe;
  color: #4e71fe;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: #4e71fe;
    cursor: pointer;
  }

  ${(props) =>
    props.active &&
    css<StyleBtnPropsType>`
      color: #fff;
      background-color: #4e71fe;
    `}
`;
