import React, { useState } from "react";
import HcdForm from "./HcdForm";
import ImageUploader from "react-images-upload";
import HcdHourlyForm from "./HcdHourlyForm";
import './Modal.css'
import {
  Link, useNavigate
} from "react-router-dom";
const HCDHourlyHome = (props) => {
  const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
  const [showEmp, setShowEmp] = useState(false);
  const [url, seturl] = useState();
  const [empdata, setempdata] = useState([]);
  const [signature, setsignature] = useState([]);
  const [clientname, setclientname] = useState("");
  const [condition, setcondition] = useState(false);
  const forceUpdate = React.useReducer(bool => !bool)[1];
  const [hiringmanagername, sethiringmanagername] = useState("");
  const [Mdesignation, setMdesignation] = useState("");
  const [filename, setfilename] = useState("");
  const [rowcnt, setrowcnt] = useState("Aditya");
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
  const onMdesignation = (e) => {
    setMdesignation(e.target.value)
  }
  const data={
      clientname:clientname,
      hiringmanagername:hiringmanagername,
      Mdesignation:Mdesignation,
      empdata:empdata,
      url:url,
      rowcnt: rowcnt
  }
  const generatePdf = () => {
    let cname = document.forms["homeform"]["cname"].value;
    let managername = document.forms["homeform"]["mname"].value;
    let mDesignation=document.forms["homeform"]["mDesignation"].value;
    if(cname!=="" && managername!=="" && mDesignation!==""){

      props.datatoApp(data);
      navigate("/HourlyTemplate")
    }
  }

  return (
    <>
      <nav
        className="px-1 navbar navbar-expand-lg navbar-dark bg-dark"
        id="navbar"
      >
        <div >
          <div
            className="navbar-brand  "
            id="mainText"
            style={{color:'#2E86C1'}}
          >
            <span style={{fontWeight:'bolder'}} >
            HCD generation
            </span>
            <Link
            className="navbar-brand  text-lg"
            id="mainText"
            to="/"
            style={{marginLeft:'50px'}}
          >
            HCD Open
          </Link>
          <Link
            className="navbar-brand fw-bold text-lg"
            id="mainText"
            to="/HCDHourly"
          >
            HCD Hourly
          </Link>
          </div>

          <button
            className="navbar-toggler bg-dark"
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
        <form className="row g-3 needs-validation" name="homeform" method="POST">
        <section className="mt-1" sty>
          <div className="row task__container">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  <b>Client Name</b>
                </span>
              </div>
              <input
              name="cname"
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
              name="mname"
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={onhiringmanagername}
                required
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  <b>Designation of Hiring Manager</b>
                </span>
              </div>
              <input
              name="mDesignation"
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={onMdesignation}
                required
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
            <div style={{fontSize:'20px',fontWeight:'bold'}}>{filename}</div>
           </div>

            {
              condition && <table className="table table-striped" id="empTable">
                <thead>
                  <tr>
                    <th><b>Candidate Name</b></th>
                    <th><b>Role</b></th>
                    <th><b>Hourly Rate</b></th>
                    <th><b>Monthly Cost</b></th>
                    <th><b>Billable Date</b></th>
                    <th><b>Remarks</b></th>
                  </tr>
                </thead>
                <tbody>

                  {
                    empdata.map((element) => {
                      return <tr className="table" key={element.name}>
                        <td>{element.candidatename}</td>
                        <td>{element.role}</td>
                        <td>{element.hourlyRate}</td>
                        <td>{element.monthlyCost}</td>
                        <td>
                        {element.billableDate[8] + '' + element.billableDate[9] + '/' + element.billableDate[5] + '' + element.billableDate[6] + '/' + element.billableDate[0] + '' + element.billableDate[1] + '' + element.billableDate[2] + '' + element.billableDate[3]}
                        </td>
                        <td>{element.remarks}</td>
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
      {modalOpen && <HcdHourlyForm setOpenModal={setModalOpen} datatohcdhome={datatohcdhome}   />}
          </div>
        </section>
        <br/>
          <button type="submit" className="btn btn-primary btn-dark" onClick={generatePdf}>Click Here to Download PDF</button>
        </form>
      </div>
    </>
  )
}

export default HCDHourlyHome