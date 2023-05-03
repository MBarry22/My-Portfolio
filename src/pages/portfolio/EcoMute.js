import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import {BCITDaily1, BCITDaily2, BCITDaily3, BCITDaily4, BCITDaily5, BCITDaily6, BCITDaily7, BCITDaily8, BCITDailyNewsBanner} from  "./imports.js";


export const EcoMute = () => {
  const thirdProject = dataportfolio[2];

  // Carousel Styles
  const carouselStyles = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
  };
  
  const imageStyles = {
    maxWidth: "100%",
    height: "auto",
    maxHeight: "80vh",
  };
  
  /* May add captions to carousel images later 
  const captionStyles = {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textShadow: "2px 2px #000",
  };
  */
  
  const contentStyles = {
    textAlign: "center",
  };
  

  return (
    <HelmetProvider>
      <Container className="MPMovies-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> EcoMute | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* Main Header section */}
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center">
            <Col lg="8">
                <h1 className="display-4 mb-4"> EcoMute </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        {/* MP Movies Carousel section */}
        <div style={carouselStyles}>
      <Carousel interval={2000} pauseOnHover={false}>
        <Carousel.Item>
          <img src={thirdProject.img} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily1} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily2} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily3} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily4} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily5} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily6} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily7} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily8} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
      </Carousel>
      <div style={contentStyles}>
        <p>{thirdProject.desctiption}</p>
      </div>
    </div>
        
        {/* MP Movies Header / Line section */}
        <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
                <h1 className="display-4 mb-4"> Details </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        {/* Tech Stack section */}
        <div className="content">
        <h2>Technology Stack</h2>
          <p>
            My team of four developers, including myself (Mason), Renz, Scott, and Brayden, built the BCIT Daily News homepage using ReactJS. Despite the original plan of using only HTML, CSS, and JavaScript, we decided to take on the challenge of building the site in ReactJS, which was approved by our professors. This decision allowed us to gain valuable experience in ReactJS development, which is a highly sought-after skill in the industry.
          </p>
        </div>
        
        {/* Project Details section */}
        <div className="content">
            <h2>Project Details</h2>
            <p>
                <strong>EcoMute</strong> is a Full-Stack website developed by a team of four friends from BCIT's Software System Developer Program. The project was created for the MEGA Hackathon 2023, and the main focus was to raise awareness about carbon emissions and climate change. Our team has gathered a lot of information on how people can help the environment, and we have presented it on the website in an easy-to-understand format.
            </p>
            <p>
                The most exciting feature of EcoMute is its integration with Google Maps API. Users can input their starting location and destination, transit type, and average miles per gallon used by their vehicle (gasoline or diesel), and the website calculates the time it takes for each mode of transportation, along with the amount of CO2 emissions released in the trip. We then show how much carbon emissions can be saved by using different modes of transit. All calculations were created by the team and have been checked by relevant sources.
            </p>
            <p>
                EcoMute was designed to provide an easy way for people to understand how much their transit choices affect the environment. Our website is filled with useful information on how you can help reduce carbon emissions and fight climate change. We believe that EcoMute can make a significant impact in raising awareness about the environment and how people can make a difference.
            </p>
            <h2>Project Significance</h2>
            <p>
                The EcoMute project was a challenging and rewarding experience for all team members. We were able to demonstrate our skills in Full-Stack web development, including integration with Google Maps API. We gained hands-on experience in creating a fully functional and visually appealing website from scratch, and learned the importance of teamwork, communication, and problem-solving skills in achieving project success.
            </p>
            <h2>Future Opportunities</h2>
            <p>
                The EcoMute project has provided us with valuable knowledge and experience that we can apply to future projects. We have honed our skills in Full-Stack web development and have gained a deeper understanding of the importance of effective communication and collaboration in achieving project success. We are excited to take on new challenges and continue to grow as developers. We believe that EcoMute can be expanded to include more features and reach a broader audience, helping more people understand the importance of taking care of our environment.
            </p>
        </div>

        {/* Design Choices section */}
        <Row className="my-5 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Design Choices</h1>
            <hr className="t_border my-4 ml-0" />
          </Col>
        </Row>
        {/* Design & Color Scheme section */}
        <div className="content">
          <h2 className="mb-4">Design and Color Scheme</h2>
          <p className="mb-5">For the MPMovies project, I aimed to create a modern design that is easy to navigate and visually appealing. To achieve this, I chose to use a monochromatic color scheme with various shades of blue and gray, as I believed these colors would work well with the movie-themed content of the site.</p>
          <div className="d-flex justify-content-center mb-5">
            <img src={BCITDailyNewsBanner} alt="Placeholder Image 1" className="img-fluid rounded" />
          </div>
          <p className="mb-5">To create a sense of visual hierarchy and structure, I utilized different font sizes and weights for headings and body text. Additionally, I incorporated plenty of white space throughout the design to allow content to stand out and create a sense of balance.</p>
          <div className="row mb-5">
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <img src={BCITDailyNewsBanner} alt="Placeholder Image 2" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <img src={BCITDailyNewsBanner} alt="Placeholder Image 3" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <img src={BCITDailyNewsBanner} alt="Placeholder Image 4" className="img-fluid rounded" />
            </div>
            <p>Overall, I am satisfied with the outcome of the design, as I believe it effectively captures the essence of a modern movie website while remaining user-friendly and visually appealing.</p>
          </div>

          <Row className="my-5 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Video Walkthrough + Production Site</h1>
            <hr className="t_border my-4 ml-0" />
          </Col>
        </Row>
        <div className="content">
            <iframe className="mb-5" width="100%" height="500px" 
                src="https://www.youtube.com/watch?v=IVHJSwTPHDI&embeds_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=OTY3MTQ&feature=emb_imp_woyt&ab_channel=SC" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            >
            </iframe>
            </div>
            <a href="https://eco-mute.vercel.app/">EcoMute Production</a>
            <br />
            <br />
        </div>
      </Container>
    </HelmetProvider>
  );
};

