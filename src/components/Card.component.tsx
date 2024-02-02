import styled from "styled-components";
import name from "./../assets/img/card.png";
import { Button } from "./Button.styled";

export function Card() {
  return (
    <Box>
      <Image src={name} alt={"card"} />
      <ContentWrapper>
        <Title>Headline</Title>
        <Text>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </Text>
        <ButtonBox>
          <Button active>See more</Button>
          <Button>Save</Button>
        </ButtonBox>
      </ContentWrapper>
    </Box>
  );
}

const Box = styled.div`
  max-width: 300px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px #0000001a;
`;

const Image = styled.img`
  width: 93.3%;
  margin: 10px;
  border-radius: 10px;
`;

const ContentWrapper = styled.div`
  margin: 10px 20px 22px;
  flex-direction: column;
  display: flex;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #abb3ba;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 12px;
`;
