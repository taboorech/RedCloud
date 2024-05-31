import Block from "../../components/Block/Block";
import DefaultPageContainer from "../../hoc/DefaultPageContainer/DefaultPageContainer";
import ContentWithHeader from "../../components/ContentWithHeader/ContentWithHeader";
import Collection from "../../components/Collection/Collection";

function About({ audio }) {
  return (
    <div className="About">
      <DefaultPageContainer audio={audio}>
        <Block className={"scroll"}>
          <ContentWithHeader header={<h2>About us</h2>}>
            <p>
              Welcome to our project! We are two students who are passionate about technology and strive to create innovative solutions to improve people's lives in the online world.
            </p>
            <ContentWithHeader header={<h4>The purpose of our project</h4>}>
              <p>
                Our project was created as part of the Human-Machine Interaction course, which aims to develop an effective, convenient, and intuitive user interface. 
                We believe that technology should be accessible to everyone, and we strive to create interfaces 
                that are easy to use and understand even for inexperienced users.
              </p>
            </ContentWithHeader>
          </ContentWithHeader>

          <ContentWithHeader header={<h3>What are we doing?</h3>}>
            <p>
              As part of this project, we are working on creating a modern music application. The main features of our application include:
            </p>
            <Collection>
              <li className="collection-item">Search and play music: Easily access your favorite tracks.</li>
              <li className="collection-item">Create and manage playlists: An intuitive interface for organizing your music collection.</li>
              <li className="collection-item">Recommendations based on preferences: Personalized music recommendations.</li>
              <li className="collection-item">Social integration: The ability to share music with friends via social networks.</li>
            </Collection>
          </ContentWithHeader>
          <ContentWithHeader header={<h3>Our vision</h3>}>
            <p>
              We strive to ensure that our application not only meets the needs of users, but also brings pleasure from its use. 
              We strive to create interfaces that are not only functional, but also attractive and interesting.
            </p>
            <p>
              Thank you for visiting our page. We look forward to sharing the results of our work and hope 
              that our app will bring you a lot of joy and satisfaction.
            </p>
          </ContentWithHeader>
        </Block>
      </DefaultPageContainer>
    </div>
  )
}

export default About;