import React, { PropTypes, Component, useState } from 'react'

const HcdHourlyForm = (props) => {
    const [clientname, setClientname] = useState("");
  const [candidatename, setCandidatename] = useState("");
  const [role, setRole] = useState("");
  const [remarks, setRemarks] = useState("");
  const [tentativestartdate, setTentativestartdate] = useState("");
  const [hourlyRate, sethourlyRate] = useState('');
  const [monthlyCost, setmonthlyCost] = useState('');
  const [billableDate, setbillableDate] = useState('');
  var onCandidatenamechange = (e) => {
    setCandidatename(e.target.value);
  }
  var onRoleChange = (e) => {
    setRole(e.target.value);
  }
  var onHourlyRateChange = (e) => {
    sethourlyRate(e.target.value);
  }
  var onMonthlyCostChange = (e) => {
    setmonthlyCost(e.target.value);
  }
  var onBillableDateChange = (e) => {
    setbillableDate(e.target.value);
  }
  var onRemarkchange = (e) => {
    setRemarks(e.target.value);
  }
  var onTentativestartdatechange = (e) => {
    setTentativestartdate(e.target.value);
  }
  const onsavehandler=()=>{
    let cname = document.forms["empForm"]["cname"].value;
    let role = document.forms["empForm"]["role"].value;
    let remarks = document.forms["empForm"]["remarks"].value;
    let billableDate = document.forms["empForm"]["billableDate"].value;
    let monthlyCost = document.forms["empForm"]["monthlyCost"].value;
    let hourlyRate = document.forms["empForm"]["hourlyRate"].value;
    if(cname!=="" && role!=="" && remarks!=="" && billableDate!=="" && monthlyCost!=="" && hourlyRate!=="" ){
        const empdata=
        {
          clientname:clientname,
          candidatename:candidatename,
          role:role,
          billableDate:billableDate,
          hourlyRate: hourlyRate,
          monthlyCost: monthlyCost,
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
              <label htmlFor="validationCustom02" className="form-label">Role</label>
              <input
                type="text"
                name="role"
                className="form-control"
                id="validationCustom01"
                aria-describedby="textHelp"
                placeholder="role"
                onChange={onRoleChange}
                value={role}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="validationCustom02" className="form-label">Hourly Rate</label>
              <input
                type="number"
                name="hourlyRate"
                className="form-control"
                id="validationCustom01"
                aria-describedby="textHelp"
                placeholder="price in numbers"
                onChange={onHourlyRateChange}
                value={hourlyRate}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="validationCustom02" className="form-label">Monthly Cost</label>
              <input
                type="number"
                name="monthlyCost"
                className="form-control"
                id="validationCustom01"
                aria-describedby="textHelp"
                placeholder="price in numbers"
                onChange={onMonthlyCostChange}
                value={monthlyCost}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="validationCustom03" className="form-label">Billable Date</label>
              <input
                type="date"
                name="billableDate"
                className="form-control"
                id="taskDesc"
                aria-describedby="textHelp"
                placeholder="DD/MM/YYYY"
                onChange={onBillableDateChange}
                value={billableDate}
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

export default HcdHourlyForm