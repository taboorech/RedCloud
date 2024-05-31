import Recomendations from "../../components/Recomendations/Recomendations";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import Baner from "../../components/Baner/Baner";
import "./Home.scss";

function Home({ audio }) {
  return (
    <div className="Home">
      <DefaultPageContainer audio={audio}>
        <Baner className={"baner"}/>
        <Recomendations/>
        <Recomendations/>
      </DefaultPageContainer>
    </div>
  )
}

export default Home;