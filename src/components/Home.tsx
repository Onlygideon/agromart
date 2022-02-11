import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0 40px;
  height: calc(100vh - 80px);
  width: 45%;

  @media screen and (min-width: 280px) and (max-width: 1100px) {
    width: 70%;
    margin: 0 0 0 20px;
  }
`;

const MiniContainer = styled.div`
  position: absolute;
  top: 40%;
  width: 45%;

  @media screen and (min-width: 280px) and (max-width: 1100px) {
    width: 70%;
  }
`;

const Header = styled.h1`
  font-size: 2.1rem;
  color: rgb(56, 71, 28);
  line-height: 3.3rem;

  @media screen and (min-width: 698px) and (max-width: 798px) {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 400px) and (max-width: 698px) {
    font-size: 1.4rem;
    line-height: 2.5rem;
  }

  @media screen and (min-width: 350px) and (max-width: 400px) {
    font-size: 1.28rem;
    line-height: 2.3rem;
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    font-size: 1.1rem;
    line-height: 2rem;
  }
`;

const SubHeader = styled.p`
  color: #777;
  font-size: 1rem;
  margin-top: 12px;

  @media screen and (min-width: 400px) and (max-width: 698px) {
    font-size: 0.5rem;
    margin-top: 10px;
  }

  @media screen and (min-width: 360px) and (max-width: 400px) {
    font-size: 0.5rem;
    margin-top: 9px;
  }

  @media screen and (min-width: 280px) and (max-width: 360px) {
    font-size: 0.4rem;
    margin-top: 8px;
  }
`;

const Links = styled.a`
  text-decoration: none;
  color: #fff;
`;

const Button = styled.button`
  margin-top: 20px;
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
  }

  @media screen and (min-width: 350px) and (max-width: 400px) {
    font-size: 0.9rem;
    padding: 15px 27px;
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    font-size: 0.8rem;
    padding: 15px 25px;
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <MiniContainer>
        <Header>
          Greeny and Natural Farm Products for Lovers of Healthy Food
        </Header>

        <SubHeader>
          We grow and supply the best organic and clean farm produces
        </SubHeader>

        <Link to="/agromart-store">
          <Button>Shop Now</Button>
        </Link>
      </MiniContainer>
    </Container>
  );
};

export default Home;
