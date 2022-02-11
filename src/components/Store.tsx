import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: rgb(56, 71, 28);
  line-height: 3.3rem;

  @media screen and (min-width: 698px) and (max-width: 798px) {
    font-size: 2.1rem;
    line-height: 3rem;
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

const SubHeader = styled.p`
  color: #777;
  font-size: 1rem;
  margin-top: 12px;

  @media screen and (min-width: 400px) and (max-width: 698px) {
    font-size: 0.7rem;
    margin-top: 10px;
  }

  @media screen and (min-width: 350px) and (max-width: 400px) {
    font-size: 0.6rem;
    margin-top: 9px;
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    font-size: 0.5rem;
    margin-top: 8px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 15px 30px;
  background-color: rgb(140, 161, 104);

  &:hover {
    background-color: #333;
    color: #fff;
    transition: 0.3s ease-in-out;
  }
  color: white;
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media screen and (min-width: 400px) and (max-width: 698px) {
    font-size: 0.8rem;
    padding: 13px 26px;
  }

  @media screen and (min-width: 350px) and (max-width: 400px) {
    font-size: 0.7rem;
    padding: 12px 24px;
    margin-top: 18px;
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    font-size: 0.6rem;
    padding: 11px 22px;
    margin-top: 15px;
  }
`;

const Store: React.FC = () => {
  return (
    <Container>
      <Title>AgroMart Store</Title>

      <SubHeader>We are currently out of order.</SubHeader>

      <SubHeader>We are really sorry for the incovenience.</SubHeader>

      <Button>Refresh</Button>
    </Container>
  );
};

export default Store;
