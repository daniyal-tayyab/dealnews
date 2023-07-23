import styled from "styled-components";
import { flexColumn } from "../../styles/common";
import { colors } from "../../styles/colors";

export const Container = styled.footer`
  ${flexColumn};
  margin-top: 2rem;
`;

export const Upper = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 2.5rem;
  padding: 1rem;
  padding-bottom: 3rem;
`;

export const Columns = styled.div`
  display: flex;
  column-gap: 2.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    flex-direction: row;
  }
`;

export const NewsWrapper = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const NewsLetter = styled.div`
  width: 25.8rem;
  height: 34.7rem;
  background-color: ${colors.bluePrimary};
  padding: 1.6rem;
  color: #fff;
  border-radius: 1px;
  ${flexColumn};
`;

export const Tri = styled.div`
  width: 25.8rem;
  height: 7.4rem;
  clip-path: polygon(49% 100%, 0 0, 100% 0);
  background-color: ${colors.bluePrimary};
`;

export const Title = styled.div`
  font-size: 4.3rem;
`;

export const Description = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  margin-top: 1rem;
  padding: 1rem 0.8rem;
  border: none;
  outline: none;
`;

export const Button = styled.div`
  padding: 1rem;
  background-color: #fff;
  color: ${colors.bluePrimary};
  border-radius: 2px;
  display: inline-block;
  width: fit-content;
  font-size: 1.4rem;
  margin-top: 1rem;
`;

export const Column = styled.div`
  ${flexColumn};
  align-self: flex-start;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;

  p {
    color: ${colors.black};
    margin-bottom: 1rem;

    @media (max-width: 900px) {
      margin-bottom: 2rem 0;
    }
  }

  span {
    color: ${colors.bluePrimary};
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialCol = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;

  img {
    width: 3.2rem;
    align-self: center;

    margin-bottom: 2rem;
  }

  @media (max-width: 900px) {
    flex-direction: row;
    column-gap: 2rem;
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Lower = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.bluePrimary};
  padding: 1rem;

  color: #fff;

  @media (max-width: 600px) {
    display: block;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-weight: 300;
  font-size: 1.2rem;

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

export const Policy = styled.p`
  font-size: 1.2rem;
  cursor: pointer;
`;
