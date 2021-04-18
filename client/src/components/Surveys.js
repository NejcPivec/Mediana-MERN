import React from "react";
import { Card, Button } from "react-bootstrap";
import moment from "moment";

const Surveys = ({ singleSurvey: { name, date, id } }) => {
  const formatDate = (unformatDate) => {
    return moment(unformatDate).format("MMM Do YY");
  };

  return (
    <Card className="card">
      <Card.Header as="h6">{name}</Card.Header>
      <Card.Body>
        <Card.Text>Created: {formatDate(date)}</Card.Text>
        <div className="icons">
          <Button variant="warning" className="icons">
            <i className="fas fa-pen"></i>
          </Button>
          <Button variant="danger">
            <i className="fas fa-trash"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Surveys;
