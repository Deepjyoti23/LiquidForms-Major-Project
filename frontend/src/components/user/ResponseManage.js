import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { QuestionMark } from "@mui/icons-material";
import app_config from "../../config";

const ResponseManage = ({ formid }) => {
  const [responseList, setResponseList] = useState([]);
  const [emailList, setEmailList] = useState([]);
  const [selResponse, setSelResponse] = useState(null);

  const fetchResponses = async () => {
    const res = await fetch(
      `http://localhost:5000/response/getbyform/${formid}`
    );
    const data = await res.json();
    console.log(data);
    setResponseList(data);
  };

  useEffect(() => {
    fetchResponses();
  }, []);

  const showResponses = () => {
    return responseList.map((response) => {
      return (
        <div key={response._id}>
          <h1>{response.name}</h1>
          <h2>{response.email}</h2>
          <h3>{response.message}</h3>
        </div>
      );
    });
  };

  const showAnswer = (question) => {
    if (question.type === "checkbox") {
      return (
        <div className="row">
          <div className="col-md-4">
            <p className="fw-bold">{question.name}</p>
          </div>
          <div className="col-md-4">
            <p>
              {question.options
                .filter((option) => option.checked)
                .map((option) => option.label + " , ")}
            </p>
          </div>
        </div>
      );
    } else if (question.type === "file") {
      return (
        <div className="row">
          <div className="col-md-4">
            <p className="fw-bold">{question.name}</p>
          </div>
          <div className="col-md-4">
            <p>{question.answer ? (
              <img style={{cursor: 'pointer'}} src={app_config.apiUrl+'/'+ question.answer} alt="" height={100} onClick={e => {
                window.open(app_config.apiUrl+'/'+ question.answer, '_blank');
              }} />
            ) : (<h1 className="text-muted">No File Uploaded</h1>)}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-md-4">
            <p className="fw-bold">{question.name}</p>
          </div>
          <div className="col-md-4">
            <p>{question.answer}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="section">
        <FormControl fullWidth>
          <InputLabel id="emails">Select Response</InputLabel>
          <Select
            labelId="emails"
            id="demo-simple-select"
            value={selResponse}
            label="Select Response"
            onChange={(e) => setSelResponse(e.target.value)}
          >
            {responseList.map((response, index) => (
              <MenuItem value={index}>{index + 1}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Divider className="my-3" />
        {selResponse !== null && (
          <div>
            <div className="row">
              <div className="col-md-4 ">
                {/* <p>Email : </p> */}
                <p>Form ID : </p>
              </div>
              <div className="col-md-4">
                {/* <p className="fw-bold">{responseList[selResponse].email}</p> */}
                <p className="fw-bold">{responseList[selResponse]._id}</p>
              </div>
            </div>
            <Divider className="my-3" />
            <p className="text-muted">Form Response</p>
            {responseList[selResponse].data.map((question) =>
              showAnswer(question)
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default ResponseManage;
