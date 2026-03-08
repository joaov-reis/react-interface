import { Card } from "reactstrap";
import styled from "styled-components";

export const CardContainer = styled(Card)`
  height: 100%;
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
`;

export const ImageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
