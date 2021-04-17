import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";

import { Container, Row, Col } from "react-bootstrap";
import SurveyForm from "./components/SurveyForm";

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Row className="margin-top">
          <Col lg={4}>
            <SurveyForm />
          </Col>
          <Col lg={8}></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
