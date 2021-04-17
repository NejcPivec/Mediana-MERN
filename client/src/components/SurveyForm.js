import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const SurveyForm = () => {
  const [name, setName] = useState("");
  let [survey, setSurvey] = useState({});

  const cleanJson = (dirty) => {
    return JSON.parse(
      dirty.replace(/\\n/g, "").replace(/\s+/g, "").replace(/\\/g, "")
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      survey = cleanJson(survey);
      const newSurvey = { name, survey };

      await axios.post("/survey", newSurvey, config).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );

      // Clear inputs
      setName("");
      setSurvey({});
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Survey name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Survey name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Survey json</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          onChange={(e) => setSurvey(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
};

export default SurveyForm;
