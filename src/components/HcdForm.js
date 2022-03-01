import React, { PropTypes, Component, useState } from 'react'
import HcdHome from './HcdHome';
import './Modal.css'
  const HcdForm = ( props) => {
  const [clientname, setClientname] = useState("");
  const [candidatename, setCandidatename] = useState("");
  const [grossSalary, setGrossSalary] = useState("");
  const [remarks, setRemarks] = useState("");
  const [tentativestartdate, setTentativestartdate] = useState("");
  var onCandidatenamechange = (e) => {
    setCandidatename(e.target.value);
  }
  var onGrosschange = (e) => {
    setGrossSalary(e.target.value);
  }
  var onRemarkchange = (e) => {
    setRemarks(e.target.value);
  }
  var onTentativestartdatechange = (e) => {
    setTentativestartdate(e.target.value);
  }
  const onsavehandler=()=>{
    let cname = document.forms["empForm"]["cname"].value;
    let grossSalary = document.forms["empForm"]["grossSalary"].value;
    let remarks = document.forms["empForm"]["remarks"].value;
    let startDate = document.forms["empForm"]["startDate"].value;
    if(cname!=="" && grossSalary!=="" && remarks!=="" && startDate!==""){
      const empdata=
      {
        clientname:clientname,
        candidatename:candidatename,
        grossSalary:grossSalary,
        tentativestartdate:tentativestartdate,
        remarks:remarks
      }
      props.datatohcdhome(empdata);
      props.setOpenModal(false);
    }
    
}
  return (
    <>
    
      <div className="modalBackground">
    <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Add Employee Details</h1>
        </div>
        <form class="row g-3 needs-validation" name="empForm" novalidate>
        <div className="body">
              <div className="mb-3">
                <label className="form-label" htmlFor="validationCustom01">Candidate Name</label>
                <input
                  type="text"
                  name="cname"
                  className="form-control"
                  id="imageUrl"
                  aria-describedby="textHelp"
                  onChange={onCandidatenamechange}
                  value={candidatename}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="validationCustom02" className="form-label">Monthly Gross Salary(Indian Rupees)</label>
                <input
                  type="number"
                  name="grossSalary"
                  className="form-control"
                  id="validationCustom01"
                  aria-describedby="textHelp"
                  placeholder="price in numbers"
                  onChange={onGrosschange}
                  value={grossSalary}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="validationCustom03" className="form-label">Date of joining</label>
                <input
                  type="date"
                  name="startDate"
                  className="form-control"
                  id="taskDesc"
                  aria-describedby="textHelp"
                  placeholder="DD/MM/YYYY"
                  onChange={onTentativestartdatechange}
                  value={tentativestartdate}
                  required
                  />
                </div>
              <div className="mb-3">
                <label htmlFor="validationCustom04" className="form-label">Remarks</label>
                <input
                  type="text"
                  name="remarks"
                  className="form-control"
                  id="taskType"
                  aria-describedby="textHelp"
                  placeholder="Remarks if any"
                  onChange={onRemarkchange}
                  value={remarks}
                  required
                />
              </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button data-bs-dismiss="modal" type="submit" onClick={onsavehandler}>Save</button>

        </div>
        </form>
      </div>
    </div>

    </>
  )
}

export default HcdForm