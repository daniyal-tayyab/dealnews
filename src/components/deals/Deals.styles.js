import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  margin: 2rem 0;
  margin-right: 370px;

  @media (min-width: 1450px) {
    margin-right: 350px;
  }

  @media (min-width: 1500px) {
    margin-right: 300px;
  }

  @media (min-width: 1600px) {
    margin-right: 200px;
  }

  @media (min-width: 1700px) {
    margin-right: 100px;
  }

  @media (min-width: 1800px) {
    margin-right: 8px;
  }

  @media (max-width: 900px) {
    margin-right: 0;
  }
`;
