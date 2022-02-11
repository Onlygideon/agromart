import styled from "styled-components";

const Container = styled.div`
  height: 10vh;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.p`
  color: white;
  text-align: center;

  @media screen and (min-width: 400px) and (max-width: 698px) {
    font-size: 0.7rem;
  }

  @media screen and (min-width: 350px) and (max-width: 400px) {
    font-size: 0.6rem;
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    font-size: 0.5rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>Copyright © 2022, AgroMart. All rights reserved.</Content>
    </Container>
  );
};

export default Footer;
