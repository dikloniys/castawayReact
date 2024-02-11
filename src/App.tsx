import styled from "styled-components";
import GlobalStyles from './global'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomeComponent from "./components/HomeComponent";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1300px;
`
const Body = styled.body`
  background: rgba(25, 25, 25, 1);
`
function App() {
  return (
    <Body>
      <GlobalStyles></GlobalStyles>
      <HeaderComponent></HeaderComponent>
      <Container>
      <HomeComponent></HomeComponent>
      </Container>
    </Body>
  );
}

export default App;
