import React from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import moment from "moment";

const Surveys = ({ singleSurvey: { name, date, _id }, getSingleSurvey }) => {
  const formatDate = (unformatDate) => {
    return moment(unformatDate).format("MMM Do YY");
  };

  const deleteSurvey = async (id) => {
    try {
      await axios.delete(`/survey/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="card">
      <Card.Header as="h6">{name}</Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Created:</strong> {formatDate(date)}
        </Card.Text>
        <div className="icons">
          <Button
            variant="warning"
            className="icons"
            onClick={() => getSingleSurvey(_id)}
          >
            <i className="fas fa-pen"></i>
          </Button>
          <Button variant="danger" onClick={() => deleteSurvey(_id)}>
            <i className="fas fa-trash"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Surveys;
