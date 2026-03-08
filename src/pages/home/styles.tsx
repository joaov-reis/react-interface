import { Input } from "reactstrap";
import styled from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`;

export const InputSearch = styled(Input)`
  max-width: 500px;
  padding: 10px;
  border-radius: 30px;
  border: 1px solid gray;
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.6;
  }

  &:focus {
    background-color: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.primary};
  }
`;