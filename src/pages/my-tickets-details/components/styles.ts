import styled from "styled-components";

export const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  margin-top: 2rem;
`;

export const HeroImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;