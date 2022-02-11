import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
`;

const MiniContainer = styled.div`
  position: absolute;
  margin: 0px 40px;
  top: 20%;
  right: 0;
  width: 40%;

  @media screen and (min-width: 280px) and (max-width: 1100px) {
    width: 60%;
    margin: 0 10px 0 0px;
    top: 15%;
  }
`;

const Header = styled.h1`
  font-size: 2.3rem;
  color: rgb(56, 71, 28);
  line-height: 3.3rem;

  @media screen and (min-width: 698px) and (max-width: 798px) {
    font-size: 2.1rem;
  }

  @media screen and (min-width: 400px) and (max-width: 698px) {
    font-size: 1.9rem;
    line-height: 2.5rem;
  }

  @media screen and (min-width: 350px) and (max-width: 400px) {
    font-size: 1.7rem;
    line-height: 2.3rem;
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const Content = styled.p`
  color: #777;
  font-size: 1rem;
  margin-top: 15px;

  @media screen and (min-width: 400px) and (max-width: 698px) {
    font-size: 0.9rem;
    text-align: justify;
  }

  @media screen and (min-width: 350px) and (max-width: 400px) {
    font-size: 0.8rem;
    text-align: justify;
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    font-size: 0.7rem;
    text-align: justify;
  }
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 15px 40px;
  background-color: rgb(140, 161, 104);

  &:hover {
    background-color: #333;
    color: #fff;
    transition: 0.3s ease-in-out;
  }
  color: white;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media screen and (min-width: 400px) and (max-width: 698px) {
    font-size: 1rem;
    padding: 15px 30px;
    margin-top: 25px;
  }

  @media screen and (min-width: 350px) and (max-width: 400px) {
    font-size: 0.9rem;
    padding: 15px 27px;
    margin-top: 25px;
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    font-size: 0.8rem;
    padding: 15px 25px;
    margin-top: 25px;
  }
`;

const Commodities: React.FC = () => {
  return (
    <Container id="services">
      <MiniContainer>
        <Header>Our Services</Header>

        <Content>We grow, supply and sell the best organic vegetables.</Content>

        <Content>
          We specialize in growing several organic farm produce like brocolli,
          cabbage, spinnach, garlic, carrots, kale, etc.
        </Content>

        <Content>
          We also sell on different scales according to the buyers need and
          door-door delivery services in more than 25 countries is what makes us
          one of the best green farm store.
        </Content>

        <Link to="/agromart-store">
          <Button>Shop Now</Button>
        </Link>
      </MiniContainer>
    </Container>
  );
};

export default Commodities;
