import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { dataportfolio, meta } from "../../../content_option";
import HomePage from "../../../components/images/mpmovies/HomePage.png";
import About_MPMovies from "../../../components/images/mpmovies/About_MPMovies.png";
import Movie_Details from "../../../components/images/mpmovies/Movie_Details.png";
import now_playing_movies from "../../../components/images/mpmovies/now_playing_movies.png";
import Top_Rated_Movies from "../../../components/images/mpmovies/Top_Rated_Movies.png";
import Upcoming_movies from "../../../components/images/mpmovies/Upcoming_movies.png";


export const MPMovies = () => {
  const firstProject = dataportfolio[0];

  return (
    <HelmetProvider>
      <Container className="MPMovies-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> MPMovies | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center">
            <Col lg="8">
                <h1 className="display-4 mb-4"> MPMovies </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        <div
          key={0}
          style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}
        >
          <Carousel interval={2000}>
            <Carousel.Item>
              <img src={firstProject.img} alt="MPMovies Project" style={{ width: "1540px", height: "800px" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={HomePage} alt="MPMovies Project" style={{ width: "1540px", height: "800px" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={About_MPMovies} alt="MPMovies Project" style={{ width: "1540px", height: "800px" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Movie_Details} alt="MPMovies Project" style={{ width: "1540px", height: "800px" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Top_Rated_Movies} alt="MPMovies Project" style={{ width: "1540px", height: "800px" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Upcoming_movies} alt="MPMovies Project" style={{ width: "1540px", height: "800px" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={now_playing_movies} alt="MPMovies Project" style={{ width: "1540px", height: "800px" }} />
            </Carousel.Item>
          </Carousel>

          <div className="content">
            <p>{firstProject.desctiption}</p>
            </div>
        </div>

        <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
                <h1 className="display-4 mb-4"> mpmovies </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        <div className="content">
          <p> The MPMovies project, which I recently completed, was developed using React JS, with a total development time of 12 hours. The project has been styled using CSS and integrates the TMDB API to fetch movie data. As part of the development, I implemented the functionality to sort movies by Now Playing Movies, Popular Movies, Top Rated Movies, and Upcoming Movies. Additionally, users can add movies to their favorite list using localStorage, enabling them to manage their favorite movies effectively.

The MPMovies project was an essential part of my Software Systems Developer Program at BCIT, where it allowed me to showcase my proficiency in React JS and API integration. I am proud of what I have achieved with this project, and it has provided me with an opportunity to demonstrate my commitment to developing my skills in software development.

Overall, the MPMovies project has equipped me with hands-on experience in React JS development and API integration, which I can apply to future projects. I look forward to utilizing this knowledge to tackle new and exciting challenges in software development.  </p>
        </div>

      </Container>
    </HelmetProvider>
  );
};

