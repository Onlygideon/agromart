import styled from "styled-components";

const Container = styled.div`
  margin: 0 40px;
  height: 80px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 280px) and (max-width: 898px) {
    margin: 0 0 0 20px;
  }
`;

const MaxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MiniContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  @media screen and (min-width: 280px) and (max-width: 1100px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  text-decoration: darkolivegreen underline;
  color: rgb(56, 71, 28);
  cursor: pointer;

  @media screen and (min-width: 698px) and (max-width: 898px) {
    font-size: 1.7rem;
  }

  @media screen and (min-width: 400px) and (max-width: 698px) {
    font-size: 1.1rem;
  }

  @media screen and (min-width: 350px) and (max-width: 400px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

const ListItem = styled.li`
  padding: 0 25px;
  cursor: pointer;
  font-weight: bold;
  color: gray;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    font-size: 18px;
    box-shadow: 0 0.3rem 0rem rgba(0, 0, 0, 0.2);
    transition: 0.5s ease-in-out;
    border-bottom: 1px solid darkolivegreen;
  }

  @media screen and (min-width: 698px) and (max-width: 798px) {
    font-size: 0.8rem;
    padding: 0 17px;

    &:hover {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 698px) {
    font-size: 0.7rem;
    padding: 0 12px;

    &:hover {
      font-size: 13px;
    }
  }

  @media screen and (min-width: 350px) and (max-width: 400px) {
    font-size: 0.6rem;
    padding: 0 11px;

    &:hover {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    font-size: 0.5rem;
    padding: 0 10px;

    &:hover {
      font-size: 11px;
    }
  }
`;

const Links = styled.a`
  text-decoration: none;
  color: #fff;
`;

const Button = styled.button`
  padding: 13px 40px;
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

  @media screen and (min-width: 280px) and (max-width: 1100px) {
    display: none;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Container>
      <MaxContainer>
        <MiniContainer>
          <Title>
            AgroMart<span style={{ color: "darkolivegreen" }}>{">"}</span>
          </Title>

          <List>
            <Links href="/">
              <ListItem>Home</ListItem>
            </Links>

            <Links href="#services">
              <ListItem>Services</ListItem>
            </Links>

            <Links href="#about">
              <ListItem>About Us</ListItem>
            </Links>
          </List>
        </MiniContainer>

        <Links href="/">
          <Button>Contact Us</Button>
        </Links>
      </MaxContainer>
    </Container>
  );
};

export default Navbar;
