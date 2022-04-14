import React, { useState, useContext, useEffect } from "react";
import HcdForm from "./HcdForm";
import ImageUploader from "react-images-upload";
import HcdHourlyForm from "./HcdHourlyForm";
import toast, { Toaster } from 'react-hot-toast';
import './Modal.css'
import Select from "react-select";
import Swal from "sweetalert2";
import dataContext from "../contexts/dataContext";
import {
  Link, useNavigate
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import AuthState from "../contexts/AuthState";
const HCDHourlyHome = (props) => {
  const context = useContext(AuthState);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [url, seturl] = useState();
  const [empdata, setempdata] = useState([]);
  const [signature, setsignature] = useState([]);
  const [clientname, setclientname] = useState([]);
  const [condition, setcondition] = useState(false);
  const forceUpdate = React.useReducer(bool => !bool)[1];
  const [hiringmanagername, sethiringmanagername] = useState([]);
  const [filename, setfilename] = useState("");
  const [designation, setdesignation] = useState([]);
  const datatohcdhome = (data) => {
    //console.log(data);
    empdata.unshift(data);
    setempdata(empdata);
    toast.success('Employee added succesfully', {
      position: 'bottom-center',
    });
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
  const findindex = (obj) => {
    for (let i = 0; i < empdata.length; i++) {
      if (empdata[i].candidatename === obj.candidatename)
        return i;
    }
  }
  const [debtorcode, setdebtorcode] = useState([]);
  const data = {
    clientname: clientname,
    empdata: empdata,
    url: url,
    debtorcode: debtorcode,
    hiringmanagername: hiringmanagername,
    designation:designation
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
    // console.log(sign)
    let edata = empdata.length
    if(cname!=="" && mname!=="" && sign!==0 && edata!== 0){
      debtorcode.unshift(option.debtorCode)
      setdebtorcode(debtorcode);

      designation.unshift(hoption.designation)
      setdesignation(designation)

      props.datatoApp(data);
      navigate("/HourlyTemplate")
    }
    else{
      event.preventDefault();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter all the required* feilds',
      })


    }
  }
  const [value, setValue] = useState("");
  const options = props.dataToHome.clientData;
  const [hval, setHval] = useState("");
  const hoptions = props.dataToHome.managerData;
  return (
    <>
    {(props.dataToHome.authData === 200)? (
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
              placeholder="Select Client Name"
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
                  >
                    <b>Hiring Manager Name </b>&nbsp;
                    <i style={{ color: 'red' }}>*</i>
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
            <div style={{fontSize:'20px',fontWeight:'bold'}}>{filename}</div>
           </div>

            {
              condition && <table className="table table-striped caption-top table-hover" id="empTable">
                <caption>List of Employee's</caption>
                <thead>
                  <tr className="table-dark">
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
                        <td style={{  border:'0px', borderColor:'#ebf2ff', padding:'0', margin:'0px'}}><i style={{paddingLeft:'50px', paddingTop:'10px'}} onClick={() => deletedata(element)} className="fa fa-trash"></i></td>
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
      <Toaster/>
    </>
    ) : (<ErrorPage/> )
  }
    </>
  )
}

export default HCDHourlyHome