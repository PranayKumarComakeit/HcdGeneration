import React, { PropTypes, Component, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const HcdHourlyForm = (props) => {
  const [clientname, setClientname] = useState("");
  const [candidatename, setCandidatename] = useState("");
  const [role, setRole] = useState("");
  const [remarks, setRemarks] = useState("");
  const [tentativestartdate, setTentativestartdate] = useState("");
  const [hourlyRate, sethourlyRate] = useState(0);
  const [monthlyCost, setmonthlyCost] = useState(0.0);
  const [billableDate, setbillableDate] = useState('');
  const [fteShow, setfteShow] = useState(false);
  const [currency, setCurrency] = useState("EURO");
  const [ftevalue, setfteValue] = useState(1.0);

  var fteHandler = () => {
    var c = document.getElementById('fte');
    if (c.checked != false) {
      setfteValue(1.0);
      setmonthlyCost(hourlyRate*160)
      setfteShow(false);
    }
    else {
      setfteValue(1.0);
      setmonthlyCost(hourlyRate*160)
      setfteShow(true);
    }
  }
  var ftevalueHandler = (e) => {
    if (e.target.value > 1 || e.target.value < 0) {
      setfteValue(1.0);
      toast.error('FTE percentage should be less than 1', {
        position: 'bottom-center',
      });

    }
    else {
      setfteValue(e.target.value);
      setmonthlyCost(e.target.value * 160 * hourlyRate)

    }
  }
  var currencyHandler = (e) => {
    setCurrency(e.target.value);
  }
  var onCandidatenamechange = (e) => {
    setCandidatename(e.target.value);
  }
  var onRoleChange = (e) => {
    setRole(e.target.value);
  }
  var onHourlyRateChange = (e) => {
    sethourlyRate(e.target.value);
    setmonthlyCost(e.target.value * 160 * ftevalue);



  }
  var onBillableDateChange = (e) => {
    setbillableDate(e.target.value);
  }
  var onRemarkchange = (e) => {
    setRemarks(e.target.value);
  }

  const onsavehandler = () => {
    // e.preventDefault();
    let cname = document.forms["empForm"]["cname"].value;
    let role = document.forms["empForm"]["role"].value;
    let remarks = document.forms["empForm"]["remarks"].value;
    let billableDate = document.forms["empForm"]["billableDate"].value;
    let monthlyCost = document.forms["empForm"]["monthlyCost"].value;
    let hourlyRate = document.forms["empForm"]["hourlyRate"].value;
    if (cname !== "" && role !== "" && remarks !== "" && billableDate !== "" && monthlyCost !== 0 && hourlyRate !== 0 && ftevalue <= 1.0) {
      const empdata =
      {
        clientname: clientname,
        candidatename: candidatename,
        role: role,
        billableDate: billableDate,
        hourlyRate: hourlyRate,
        monthlyCost: monthlyCost,
        remarks: remarks,
        currency: currency,
        ftevalue: ftevalue
      }
      console.log(empdata);
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
                <label className="form-label" htmlFor="validationCustom01">Candidate Name<i style={{ color: '#FF9800' }}>*</i></label>
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
                <label htmlFor="validationCustom01" className="form-label">Role<i style={{ color: '#FF9800' }}>*</i></label>
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
              <div className="mb-3 row">
                <div className="col">
                  <label htmlFor="validationCustom02" className="form-label">Select Currency<i style={{ color: '#FF9800' }}>*</i></label>
                  <select class="form-select" aria-label="Default select example" onChange={currencyHandler}>
                    <option selected value="EUROS">EURO</option>
                    <option value="GBP">GBP</option>
                    <option value="AUD">AUD</option>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>

                  </select>
                </div>
                <div className="col"> <label htmlFor="validationCustom02" className="form-label">Hourly Cost (In {currency})<i style={{ color: '#FF9800' }}>*</i></label>
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
                  /></div>

              </div>
              <div className="row mb-3" >
                {fteShow && <div className='col-4'>
                  <label className="form-label " htmlFor='Ftepercentage'>
                    FTE %<i style={{ color: '#FF9800' }}>*</i>

                    <input
                      type="decimal"
                      name="ftevalue"
                      className="form-control mt-2"
                      id="Ftepercentage"
                      aria-describedby="textHelp"
                      placeholder="percentage"
                      onChange={ftevalueHandler}
                      value={ftevalue}
                      required
                    />

                  </label>
                </div>}
                <div className='col-8'>
                  <div className="row">
                    <div className="col"> <label htmlFor="validationCustom02" className="form-label">
                      Monthly Cost (In {currency})</label>
                      <input
                        disabled
                        type="number"
                        name="monthlyCost"
                        className="form-control"
                        id="validationCustom02"
                        aria-describedby="textHelp"
                        placeholder="price in numbers"
                        value={monthlyCost}
                        required
                      /></div>
                    <div className="col"><div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="fte" defaultChecked onChange={fteHandler} />
                      <label class="form-check-label " for="fte" >Standard Hours</label>
                    </div></div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="taskDesc" className="form-label">Billable Date<i style={{ color: '#FF9800' }}>*</i></label>
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
                <label htmlFor="taskType" className="form-label">Remarks<i style={{ color: '#FF9800' }}>*</i></label>
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
                style={{ background: '#FF9800' }}
              >
                Cancel
              </button>
              <button data-bs-dismiss="modal" className='btn btn-success' type="submit" onClick={onsavehandler} style={{ background: '#003366' }}>Save</button>

            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default HcdHourlyForm