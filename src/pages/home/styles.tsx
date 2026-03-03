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
`;
