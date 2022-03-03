import React, { useState } from "react";
import HcdForm from "./HcdForm";
import ImageUploader from "react-images-upload";
import HcdHourlyForm from "./HcdHourlyForm";
import './Modal.css'
import Select from "react-select";
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
  const [clientname, setclientname] = useState([]);
  const [condition, setcondition] = useState(false);
  const forceUpdate = React.useReducer(bool => !bool)[1];
  const [hiringmanagername, sethiringmanagername] = useState("");
  const [Mdesignation, setMdesignation] = useState("");
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
      url:url
  }
  const generatePdf = (event) => {
    let cname = document.forms["homeform"]["cname"].value;
    // alert(cname)
    clientname.unshift(cname);
    setclientname(clientname)
    // alert(clientname)
    let managername = document.forms["homeform"]["mname"].value;
    let mDesignation=document.forms["homeform"]["mDesignation"].value;
    let sign = signature.length
    // console.log(sign)
    let edata = empdata.length
    if(cname!=="" && managername!=="" && mDesignation!=="" && sign!==0 && edata!== 0){

      props.datatoApp(data);
      navigate("/HourlyTemplate")
    }
    else{
      event.preventDefault();
      alert("Please enter the required fields")
    }
  }
  const [value, setValue] = useState("");
  const options = [
    {
      detterCode: "121",
      clientName: "FLYER"
    },
    {
      detterCode: "122",
      clientName: "VP-FISCAL"
    },
    {
      detterCode: "123",
      clientName: "VP-BMS"
    },
    {
      detterCode: "124",
      clientName: "RAM TECH"
    },
    {
      detterCode: "125",
      clientName: "FIC"
    }
    // ...
  ];
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
            style={{color:'#0096FF'}}
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
            style={{ color:'yellow'}}
          >
            HCD Hourly
          </Link>
          </div>
        </div>
      </nav>
      <div className="container">
      <div className="d-flex justify-content-center" >
              <h1>HCD Hourly Format</h1>
            </div>
        <section className="mt-4">
          <div className="row justify-content-center mt-4">
            <div className="col-md-6 col-lg-4 mt-3"></div>
          </div>
        </section>

        <form className="row g-3 needs-validation" name="homeform" method="POST">
        <section className="mt-1" sty>
          <div className="row task__container">
            <div className="input-group mb-3">
              <div className="input-group-inline">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  <b>Client Name</b>&nbsp;
                    <i style={{color:'red'}}>*</i>
                </span>
              </div>
              <div className="form-control"
              style={{padding:'0', borderRadius:'100%'}}>
            <Select
              name="cname"
              options={options}
              value={value}
              onChange={setValue}
              getOptionLabel={(option) => option.clientName}
              getOptionValue={(option) => option.clientName} // It should be unique value in the options. E.g. ID
            />
              </div>

              {/* <input
              name="cname"
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={onclientnamechange}
                required
              /> */}
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  <b>Hiring Manager for coMakeIT</b>&nbsp;
                    <i style={{color:'red'}}>*</i>
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
                  <b>Designation of Hiring Manager</b>&nbsp;
                    <i style={{color:'red'}}>*</i>
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
        Add Employee&nbsp;
                    <i style={{color:'red'}}>*</i>
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