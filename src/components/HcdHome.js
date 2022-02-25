import React, { useState } from "react";
import HcdForm from "./HcdForm";
import './HcdTemplate.css'
import ImageUploader from "react-images-upload";
const HcdHome = (props) => {
  const [showEmp, setShowEmp] = useState(false);
  const [empdata, setempdata] = useState([]);
  const [signature, setsignature] = useState([]);
  const [clientname, setclientname] = useState("");
  const [condition, setcondition] = useState(false);
  const forceUpdate = React.useReducer(bool => !bool)[1];
  const [hiringmanagername, sethiringmanagername] = useState("");
  const datatohcdhome = (data) => {
    //console.log(data);
    empdata.unshift(data);
    setempdata(empdata);
    setcondition(true);
    forceUpdate();
    //console.log(empdata);
  }
  const onDrop = (picture) => {
    signature.unshift(picture[picture.length - 1]);
    setsignature(signature);
    console.log(signature[0]);
  };
  const onclientnamechange=(e)=>{
   setclientname(e.target.value);
  }
  const onhiringmanagername=(e)=>{
    sethiringmanagername(e.target.value)
  }
  const data={
      clientname:clientname,
      hiringmanagername:hiringmanagername,
      empdata:empdata
  }
  const generatePdf=()=>{
    props.datatoApp(data);
  }

  return (
    <>
      <nav
        className="px-1 navbar navbar-expand-lg navbar-dark bg-light"
        id="navbar"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand fw-bold text-primary"
            id="mainText"
            href="#"
            style={{}}
          >
            HCD generation App
          </a>
          <button
            className="navbar-toggler bg-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="container">
        <section className="mt-4">
          <div className="row justify-content-center mt-4">
            <div className="col-md-6 col-lg-4 mt-3"></div>
          </div>
        </section>
        <section className="mt-1">
          <div className="row task__container">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  Client Name
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={onclientnamechange}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  Hiring Manager for coMakeIT
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={onhiringmanagername}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  Hiring Manager for Client
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <ImageUploader
              withIcon={true}
              buttonText="Upload Signature"
              onChange={onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
            />
            
            {
              condition &&  <table style={{ width: '90%' }}>
              <tr>
                  <th><b>CANDIDATE NAME</b></th>
                  <th><b>APPLICABLE VACANCY</b></th>
                  <th><b>HOURLY RATE</b></th>
                  <th><b>TENTATIVE START DATE</b></th>
              </tr>
               {
               empdata.map((element) => {
                                    return <tr key={element.name}>
                                        <td>{element.candidatename}</td>
                                        <td>{element.applicablevacancy}</td>
                                        <td>{element.hourlyrate}</td>
                                        <td>{element.tentativestartdate}</td>
                                    </tr>
                                }
                                )
                              }
          </table>
            }
            
            <button
              onClick={() => setShowEmp(!showEmp)}
              type="button"
              className="btn btn-sm btn-primary ml-auto"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {!showEmp}
              {showEmp}
              <i className="fas fa-plus me-2"></i>Add Employee
            </button>
            {showEmp && <HcdForm datatohcdhome={datatohcdhome} />}
          </div>
        </section>
        <br/> 
          <button type="button" class="btn btn-primary btn-lg"onClick={generatePdf}>Click Here to Download PDF</button>
      </div>
    </>
  );
}
export default HcdHome;
