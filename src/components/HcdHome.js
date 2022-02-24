import React, { useState } from "react";
import HcdForm from "./HcdForm";
import ImageUploader from "react-images-upload";
const HcdHome = () => {
  const [showEmp, setShowEmp] = useState(false);
  const [empdata, setempdata] = useState([]);
  const datatohcdhome = (data) => {
    console.log(data);
    empdata.unshift(data);
    setempdata(empdata);
    console.log(empdata);
  };
  const [signature, setsignature] = useState([]);
  const onDrop = (picture) => {
    signature.unshift(picture[picture.length - 1]);
    setsignature(signature);
    console.log(signature[0]);
  };
  const onSaveEmp = ({
    candidateName,
    applicableVacancy,
    hourlyRate,
    startDate,
  }) => {
    setShowEmp([
      {
        candidateName: candidateName,
        applicableVacancy: applicableVacancy,
        hourlyRate: hourlyRate,
        startDate: startDate,
      },
      ...showEmp,
    ]);
  };

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
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">
                  Client Name
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">
                  Hiring Manager for coMakeIT
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">
                  Hiring Manager for Client
                </span>
              </div>
              <input
                type="text"
                class="form-control"
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
      </div>
    </>
  );
};

export default HcdHome;
