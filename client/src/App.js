import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";

import { Container, Row, Col } from "react-bootstrap";
import SurveyForm from "./components/SurveyForm";
import Surveys from "./components/Surveys";
import Loading from "./components/Loading";

function App() {
  const [allSurveys, setAllSurveys] = useState([]);

  useEffect(() => {
    getAllSurveys();
  }, [allSurveys]);

  const getAllSurveys = async () => {
    try {
      const { data } = await axios.get("/survey");
      setAllSurveys(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navigation />
      <Container>
        <Row className="margin-top">
          <Col lg={5}>
            <SurveyForm />
          </Col>
          <Col lg={7}>
            {allSurveys.length > 0 ? (
              <div>
                <h5>Created surveys</h5>
                {allSurveys.map((singleSurvey, index) => (
                  <Surveys key={index} singleSurvey={singleSurvey} />
                ))}
              </div>
            ) : (
              <Loading />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
