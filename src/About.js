import mainPic from './mainPic.jpg';

const About = () => {
    return (
        <div className="about-container">
        <div className="column">
          <img src={mainPic} alt='photo of me' className="photo"/>
        </div>
        <div className="column">
          
          <p>
            ABOUT // <br />
            <br />
            Software Developer & Product Designer at Columbia University. 
            I design and develop web products to simplify and enrich everyday life. 
            My work philosophy is based in human-centered design and human-computer interaction, 
            ensuring user experience is always seamless and intuitive. </p>
        </div>
        <div className="column">
          
          <p>CONTACT // <br /><br />
            ab5274@columbia.edu<br />
            <br /><br />
            
            CURRENTLY // <br /><br />
              reading : lose your mother, saidiya hartman <br />
              watching : psych <br />
              listening : blood orange  </p>
        </div>
      </div>
    );
}

export default About;