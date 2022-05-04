import React, { useState, useContext, useEffect } from "react";
import './submit.css'
import HcdForm from "./HcdForm";
import ImageUploader from "react-images-upload";
import Select from "react-select";
import Swal from "sweetalert2";
import shortid from "shortid";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import authContext from "../contexts/authContext";
import ErrorPage from './ErrorPage'
import dataContext from "../contexts/dataContext";
import logo from '../logo.png'

const HcdHome = (props) => {

  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [url, seturl] = useState();
  const [empdata, setempdata] = useState([]);
  const [signature, setsignature] = useState([]);
  const [clientname, setclientname] = useState([]);
  const [condition, setcondition] = useState(false);
  const forceUpdate = React.useReducer((bool) => !bool)[1];
  const [hiringmanagername, sethiringmanagername] = useState([]);
  const [filename, setfilename] = useState("");
  const datatohcdhome = (data) => {

    empdata.unshift(data);
    setempdata(empdata);
    toast.success('Employee added succesfully', {
      position: 'bottom-center',
    });
    setcondition(true);
    forceUpdate();

  };
  const findindex = (obj) => {
    for (let i = 0; i < empdata.length; i++) {
      if (empdata[i].candidatename === obj.candidatename)
        return i;
    }
  }
  const deletedata = (data) => {
    let index = findindex(data);

    if (index > -1) {
      empdata.splice(index, 1);
    }
    setempdata(empdata);
    if (empdata.length === 0) {
      setcondition(false);
    }
    forceUpdate();
    console.log(index);
  }
  const onDrop = (picture) => {
    signature.unshift(picture[picture.length - 1]);
    setsignature(signature);
    console.log(signature[0]);
    setfilename(signature[0].name);
    console.log(filename);
    seturl(URL.createObjectURL(signature[0]));
    console.log(url);
  };

  const [debtorcode, setdebtorcode] = useState([]);
  const [designation, setdesignation] = useState([]);
  const data = {
    clientname: clientname,
    empdata: empdata,
    url: url,
    debtorcode: debtorcode,
    hiringmanagername: hiringmanagername,
    designation: designation
  };
  const generatePdf = (event) => {
    let cname = document.forms["homeform"]["cname"].value;
    clientname.unshift(cname);
    setclientname(clientname)
    let mname = document.forms["homeform"]["mname"].value;
    hiringmanagername.unshift(mname);
    sethiringmanagername(hiringmanagername)
    let option = options.find(option => option.clientName === cname)
    let hoption = hoptions.find(option => option.hiringManagerName === mname)

    let sign = signature.length
   
    let edata = empdata.length
    if (cname !== "" && mname !== "" && sign !== 0 && edata !== 0) {

      debtorcode.unshift(option.debtorCode)
      setdebtorcode(debtorcode)
      designation.unshift(hoption.designation)
      setdesignation(designation)
      props.datatoApp(data);
      navigate("/OpenTemplate");

    }
    else {
      event.preventDefault();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter all the required* feilds',
      })
    }
  };
  const [value, setValue] = useState("");
  const options = props.apiData.clientData
  const hoptions = props.apiData.managerData
  const [hval, setHval] = useState("");



  return (
    <>
      {(props.apiData.authData === 200) ? (
      <>
        <nav
          className="py-1 navbar navbar-lg" style={{ background: "#003366" }}
          id="navbar"
        >
          <div>
            <div
              id="mainText"
              style={{ color: "#0096FF", width: "100%" }}
            >
              <Link
                className="navbar-brand fw-bold text-lg"
                id="mainText"
                to="/"
                style={{ marginLeft: "50px", color: '#FF9800' }}
              >
                HCD Open
              </Link>
              <Link
                className="navbar-brand  text-lg"
                id="mainText"
                to="/HCDHourly"
                style={{ color: 'white' }}
              >
                HCD Hourly
              </Link>

            </div>
          </div>
          <img id="img"
            src={logo}
            alt=""
            style={{
              padding: '15px 0px',
              width: '202px',
              height: '70px'
            }}
          />
        </nav>
        <div className="container" style={{border: "3px solid #003366",marginTop:"5%",padding:"0 4%",paddingBottom:"4%",borderRadius:"15px",
        
        paddingLeft: '200px',
        paddingRight: '200px'
      }}>
        <br />
          <div className="d-flex justify-content-center">
            <h3 style={{ color: '#FF9800' }}>HCD Open Format</h3>
          </div>
          <section className="mt-4">
            <div className="row justify-content-center mt-4">
              <div className="col-md-6 col-lg-4 mt-3"></div>
            </div>
          </section>
            <br /><br />
          <form
            className="row g-3 needs-validation"
            name="homeform"
            method="POST"
          >
            <section className="mt-1" >
              <div className="row task__container" >
                <div className="input-group mb-3">
                  <div className="input-group-prepend" >
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                      style={{ background: "#003366", color: "white", height: "40px" }}
                    >
                      Client Name &nbsp;
                      <i style={{ color: '#FF9800' }}>*</i>
                    </span>
                  </div>
                  <div className="form-control"
                    style={{ padding: '0', borderRadius: '100%' }}>
                    <Select
                      name="cname"
                      options={options}
                      value={value}
                      placeholder="Select Client Name"
                      onChange={setValue}
                      getOptionLabel={(option) => option.clientName}
                      getOptionValue={(option) => option.clientName} // It should be unique value in the options. E.g. ID
                    />
                  </div>

                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend" >
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                      style={{ background: "#003366", color: "white", height: "40px" }}
                    >
                      Hiring Manager Name &nbsp;
                      <i style={{ color: '#FF9800' }}>*</i>
                    </span>
                  </div>
                  <div className="form-control"
                    style={{ padding: '0', borderRadius: '100%' }}>
                    <Select
                      name="mname"
                      options={hoptions}
                      value={hval}
                      placeholder="Select Hiring Manager Name"
                      onChange={setHval}
                      getOptionLabel={(option) => option.hiringManagerName}
                      getOptionValue={(option) => option.hiringManagerName} // It should be unique value in the options. E.g. ID
                    />
                  </div>

                </div>

                <div className="container">
                  <ImageUploader
                    withIcon={true}
                    buttonText="Upload Signature"
                    onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
                    maxFileSize={5242880}
                  />
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {filename}
                  </div>
                </div>

                {condition && (
                  <table className="table table-striped caption-top table-hover" >
                    <caption>List of Employee's</caption>
                    <thead >
                      <tr style={{ background: '#003366', color: 'white' }}>
                        <th>
                          <b>Candidate Name</b>
                        </th>
                        <th>
                          <b>Monthly Gross Salary(Indian Rupees)</b>
                        </th>
                        <th>
                          <b>Date of joining</b>
                        </th>
                        <th>
                          <b>Remarks</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {empdata.map((element) => {
                        return (
                          <tr className="table" key={shortid.generate}>
                            <td>{element.candidatename}</td>
                            <td>{element.grossSalary}</td>
                            <td>
                              {element.tentativestartdate[8] +
                                "" +
                                element.tentativestartdate[9] +
                                "/" +
                                element.tentativestartdate[5] +
                                "" +
                                element.tentativestartdate[6] +
                                "/" +
                                element.tentativestartdate[0] +
                                "" +
                                element.tentativestartdate[1] +
                                "" +
                                element.tentativestartdate[2] +
                                "" +
                                element.tentativestartdate[3]}
                            </td>
                            <td>{element.remarks}</td>
                            <td style={{ border: '0px', borderColor: '#ebf2ff', padding: '0', margin: '0px', cursor: "pointer" }}><i style={{ paddingLeft: '50px', paddingTop: '10px' }} onClick={() => deletedata(element)} className="fa fa-trash"></i></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
                <br />
                <button
                  type="button"
                  style={{ "color": "white", "fontSize": "13.2px", "marginLeft": "10px", "width": "98%", background: '#003366',borderRadius:"30px" }}
                  className="btn btn-dark"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  <i className="fas fa-plus me-2"></i>
                  Add Employee&nbsp;
                  <i style={{ color: '#FF9800' }}>*</i>
                </button>
                {modalOpen && (
                  <HcdForm
                    setOpenModal={setModalOpen}
                    datatohcdhome={datatohcdhome}
                  />
                )}
              </div>
            </section>
            <br />
            <button type="submit" className="btn submitBtn" onClick={generatePdf}
              style={{ "fontSize": "13.2px", "width": "99%", background: '#003366',borderRadius:"30px",marginLeft:"5px" }}
            >Click Here to Download PDF</button>
          </form>
        </div>
        <Toaster />
      </>
       ) : ( <ErrorPage/>)
              }  


    </>
  );
};
export default HcdHome;
