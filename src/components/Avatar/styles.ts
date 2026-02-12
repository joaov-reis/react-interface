import styled from "styled-components";

export const Container = styled.div<{ lg?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: #e1e4e8;
  color: #586069;
  font-weight: 600;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.lg
    ?`
        width: 80px;
        height: 80px;
        font-size: 24px;
    `
    :`
        width: 40px;
        height: 40px;
        font-size: 14px;
    `}
`;

export const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
