import "./Lyrics.scss";
import Block from "../../components/Block/Block";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";

function Lyrics({ audio }) {
  return (
    <div className="Lyrics">
      <DefaultPageContainer audio={audio}>
        <Block className={"lyrics-block scroll"}>
          <p className="lyrics-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet tellus sed leo volutpat ornare auctor vel arcu. Sed blandit cursus erat, 
            vitae consequat lacus lobortis nec. Proin eleifend posuere justo mattis malesuada. Vivamus vitae nunc libero. Praesent id dui eu velit rhoncus consequat. 
            Quisque a sagittis felis. In ut egestas purus, nec laoreet nisl. Quisque at dignissim sapien, in vulputate risus. 
            Aliquam sagittis est libero, at consequat odio tristique in. Integer eget odio non eros mollis semper sed vitae nulla.
          </p>
          <p className="lyrics-text">
            Sed tristique augue sem, vitae vulputate erat vulputate eget. Duis a mollis est, eget eleifend ex. Fusce molestie maximus arcu, at interdum lectus dignissim iaculis. 
            Aenean vitae ligula eu risus elementum pharetra. Donec sed enim nisi. Suspendisse vitae convallis metus, eget pharetra nunc. 
            Donec erat neque, finibus vitae sodales quis, ultricies non magna. Aliquam tempor eros sed lorem pulvinar tincidunt. 
            Cras ultrices, nibh at convallis vehicula, enim felis fringilla justo, at lobortis dolor tortor sed justo. 
            Ut nulla tortor, sollicitudin nec faucibus at, faucibus ac turpis. 
            Aliquam urna erat, bibendum sed tellus eget, facilisis vulputate est. Etiam bibendum posuere augue, id vehicula lacus suscipit eget. 
            Aliquam porta rutrum turpis sed tincidunt. 
            Proin vitae rutrum risus, tincidunt rhoncus mauris.
          </p>
        </Block>
      </DefaultPageContainer>
    </div>
  )
}

export default Lyrics;