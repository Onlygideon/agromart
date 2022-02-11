import styled from "styled-components";

const Container = styled.div`
  margin: 0 40px;
  height: 100vh;
  width: 45%;

  @media screen and (min-width: 280px) and (max-width: 1100px) {
    width: 70%;
    margin: 0 0 0 20px;
  }
`;

const MiniContainer = styled.div`
  position: absolute;
  top: 20%;
  width: 45%;

  @media screen and (min-width: 280px) and (max-width: 1100px) {
    width: 70%;
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
  }

  @media screen and (min-width: 350px) and (max-width: 400px) {
    font-size: 0.85rem;
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    font-size: 0.7rem;
  }
`;

const Button = styled.button`
  margin-top: 30px;
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding: 15px 40px;
  border-radius: 25px;
  border: none;
  background-color: rgb(140, 161, 104);
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  font-weight: bold;

  &:hover {
    color: white;
    background-color: #333;
    transition: 0.3s ease-in-out;
  }

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

const AboutUs: React.FC = () => {
  return (
    <Container id="about">
      <MiniContainer>
        <Header>About Us</Header>

        <Content>
          AgroMart was a side-project i enjoyed developing and really happy i
          could completely build the UI.
        </Content>

        <Content>
          This project is meant to be a standard greeny farm website with the
          goal of becoming one of the biggest organic farm produce supplier.
        </Content>

        <Content>
          This project consist of the Homepage, Shopping page, Services page and
          About Us page.
        </Content>

        <a href="/">
          <Button>Contact Us</Button>
        </a>
      </MiniContainer>
    </Container>
  );
};

export default AboutUs;
