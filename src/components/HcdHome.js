import React, { useState } from "react";
import HcdForm from "./HcdForm";
import ImageUploader from "react-images-upload";
import { useNavigate } from "react-router-dom";   //this goes on top

const HcdHome = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showEmp, setShowEmp] = useState(false);
  const [url, seturl] = useState();
  const [empdata, setempdata] = useState([]);
  const [signature, setsignature] = useState([]);
  const [clientname, setclientname] = useState("");
  const [condition, setcondition] = useState(false);
  const forceUpdate = React.useReducer(bool => !bool)[1];
  const [hiringmanagername, sethiringmanagername] = useState("");
  const [filename, setfilename] = useState("");
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
    setfilename(signature[0].name)
    console.log(filename)
    seturl(URL.createObjectURL(signature[0]))
    console.log(url);
  };
  const onclientnamechange = (e) => {
    setclientname(e.target.value);
  }
  const onhiringmanagername = (e) => {
    sethiringmanagername(e.target.value)
  }
  const data={
      clientname:clientname,
      hiringmanagername:hiringmanagername,
      empdata:empdata,
      url:url
  }

  const navigate = useNavigate();
  const generatePdf = (event) => {
    event.preventDefault()
    props.datatoApp(data);
    navigate('/pdfgen');
  }
  // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
  return (
    <>
      <nav
        className="px-1 navbar navbar-expand-lg navbar-dark bg-light"
        id="navbar"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand fw-bold text-dark"
            id="mainText"
            href="#"
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

        <form className="row g-3 needs-validation" novalidate>
        <section className="mt-1" sty>
          <div className="row task__container">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  <b>Client Name</b>
                </span>
              </div>
              <input
              class="form-control"
               id="validationCustom01"
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={onclientnamechange}
                required
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  <b>Hiring Manager for coMakeIT</b>
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

           <div className="container">
           <ImageUploader
              withIcon={true}
              buttonText="Upload Signature"
              onChange={onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
              maxFileSize={5242880}
            />
            <div style={{fontWeight:'bold'}}>{filename}</div>
           </div>

            {
              condition && <table className="table table-striped" >



                <tbody>
                <tr style={{fontWeight:'0'}}>
                    <td>CANDIDATE NAME</td>
                    <td><b>APPLICABLE VACANCY</b></td>
                    <td><b>HOURLY RATE</b></td>
                    <td><b>TENTATIVE START DATE</b></td>
                  </tr>

                  {
                    empdata.map((element) => {
                      return <tr className="table" key={element.name}>
                        <td>{element.candidatename}</td>
                        <td>{element.applicablevacancy}</td>
                        <td>{element.hourlyrate}</td>
                        <td>{element.tentativestartdate}</td>
                      </tr>
                    }
                    )
                  }
                </tbody>

              </table>

            }
            <br />
            <button
            type="button"
            style={{"color":"white","fontSize":"20px","marginLeft":  "10px","width":"98%"}}
            className="btn btn-dark"
        onClick={() => {
          setModalOpen(true);
        }}
      >
      <i className="fas fa-plus me-2"></i>
        Add Employee
      </button>

      {modalOpen && <HcdForm setOpenModal={setModalOpen} datatohcdhome={datatohcdhome}   />}

          </div>
        </section>
        <br/>
          <button type="Submit" className="btn btn-primary btn-dark" onSubmit={generatePdf}>Click Here to Download PDF</button>
        </form>
      </div>
    </>
  );
}
export default HcdHome;
