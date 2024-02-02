import styled from "styled-components";
import "./App.css";
import { Card } from "./components/Card.component";

function App() {
  return (
    <Box>
      <Card />
    </Box>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  gap: 10px;
`;
