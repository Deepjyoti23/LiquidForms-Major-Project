import { ArrowBack } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const LiveForm = () => {
  const { formid } = useParams();
  const [formDetails, setFormDetails] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const url = app_config.apiUrl;
  const navigate = useNavigate();

  const getformById = async () => {
    setFormLoading(true);
    const response = await fetch(url + "/form/getbyid/" + formid);
    const dbFormData = await response.json();
    console.log(dbFormData);
    setFormDetails(dbFormData);
    setResponse(dbFormData.data.questions);
    setFormLoading(false);
  };

  useEffect(() => {
    getformById();
  }, []);

  const updateForm = (type, answer, ques_i) => {
    let tempData = response[ques_i];
    tempData.answer = answer;
    setResponse([
      ...response.slice(0, ques_i),
      tempData,
      ...response.slice(ques_i + 1),
    ]);
  };

  const updateCheckboxAnswer = (ques_i, opt_i) => {
    let tempData = response[ques_i];
    tempData.options[opt_i].checked = !tempData.options[opt_i].checked;
    setResponse([
      ...response.slice(0, ques_i),
      tempData,
      ...response.slice(ques_i + 1),
    ]);
    console.log(response);
  };
  
  const updateFileAnswer = (ques_i, filename) => {
    let tempData = response[ques_i];
    tempData.answer = filename;
    setResponse([
      ...response.slice(0, ques_i),
      tempData,
      ...response.slice(ques_i + 1),
    ]);
    console.log(response);
  };

  const createSingleResponse = response => {
    const obj = {};
    for (let ques of response) {
      obj[ques.name] = ques.answer;
    }
    return obj;
  }

  const savetoMongoDB = async (data) => {
    const res = await fetch(url + '/util/save-res-to-mongo', {
      method: "POST",
      body: JSON.stringify({
        formid: formDetails._id, resObj: data
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    const jsonData = await res.json();
    console.log(jsonData);
  }

  const submitResponse = async () => {
    if (formDetails.dbType === "MongoDB") savetoMongoDB(createSingleResponse(response));
    const res = await fetch(url + "/response/add", {
      method: "POST",
      body: JSON.stringify({
        form: formDetails._id,
        email: "",
        data: response,
        createdAt: new Date(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      Swal.fire({
        title: "Success",
        text: "Response Submitted",
        icon: "success",
      });
      window.location.replace("/thankyou");
    }
  };

  const uploadFile = async (e, ques_i) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("myfile", file);
    const res = await fetch(url + "/util/uploadfile", {
      method: "POST",
      body: formData,
    });
    // const data = await res.json();
    // console.log(data);
    updateFileAnswer(ques_i, file.name);
  }

  const renderAnswer = (question, ques_i) => {
    if (question.type === "smalltext") {
      return (
        <TextField
          variant="standard"
          fullWidth
          value={question.answer}
          onChange={(e) => updateForm("text", e.target.value, ques_i)}
        />
      );
    } else if (question.type === "longtext") {
      return (
        <TextField
          variant="standard"
          fullWidth
          multiline
          rows={4}
          value={question.answer}
          onChange={(e) => updateForm("text", e.target.value, ques_i)}
        />
      );
    } else if (question.type === "radio") {
      return (
        <FormControl>
          <RadioGroup
            value={question.answer}
            onChange={(e, v) => updateForm("text", v, ques_i)}
          >
            {question.options.map((option, opt_i) => (
              <FormControlLabel
                value={option.label}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    } else if (question.type === "checkbox") {
      return (
        <FormControl component="fieldset" sx={{ m: 3 }} variant="standard">
          <FormLabel component="legend">Select all that apply</FormLabel>
          <FormGroup>
            {question.options.map((option, opt_i) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={option.checked}
                    onChange={(e, v) => updateCheckboxAnswer(ques_i, opt_i)}
                  />
                }
                label={option.label}
              />
            ))}
          </FormGroup>
        </FormControl>
      );
    }else if(question.type === 'file'){
      return (
        <input type="file" onChange={async e => await uploadFile(e, ques_i)} className="form-control" />
      )
    }
  };

  const setBackground = () => {
    if (formDetails && formDetails.background) {
      return formDetails.background.type === "color"
        ? formDetails.background.value
        : "url('" + formDetails.background.value + "')";
    }
  };

  const renderForm = () => {
    return !formLoading && formDetails ? (
      <>
        <p className="h2 my-3">{formDetails.heading}</p>
        <p>{formDetails.description}</p>

        {response.map((question, ques_i) => (
          <div className="mb-4" key={ques_i}>
            <div className="card-body">
              <p className="h4">{question.name}</p>
            </div>
            {renderAnswer(question, ques_i)}
          </div>
        ))}
      </>
    ) : (
      "Form Loading"
    );
  };

  return (
    <div
      className=""
      style={{ background: setBackground(), minHeight: "100vh", backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
    >
      <div style={{backgroundColor:"#f0fbff"}}>

      <div className="container d-flex align-items-center pt-2 mb-2" style={{ color: "#00B0FF" }} >
        <img className="mb-2" src="/add response.png" height={100} alt="" />
        <h2 className='ms-1 fw-bold' style={{fontFamily:"system-ui"}}>Add Response</h2>
      </div>
      </div>
      <div className="container py-3">
        {/* {topHeader} */}
        <div className="card mb-2">
          <div className="card-body">
            <Tooltip title="Back To Editor">
              <IconButton
                color="secondary"
                onClick={() => navigate("/user/editform/" + formDetails._id)}
              >
                <ArrowBack />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">{renderForm()}</div>
        </div>
        <button className="btn btn-primary" onClick={submitResponse}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default LiveForm;
