import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../../content_option";

export const MPMovies = () => {
  const firstProject = dataportfolio[0];

  return (
    <HelmetProvider>
      <Container className="About-header">
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
          <img
            src={firstProject.img}
            alt="MPMovies Project"
            style={{ width: "80%", maxWidth: "800px" }}
          />
          <div className="content">
            <p>{firstProject.desctiption}</p>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
