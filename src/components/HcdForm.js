import React, { PropTypes, Component, useState } from 'react'
import HcdHome from './HcdHome';
import './Modal.css'
  const HcdForm = ( props) => {
  const [clientname, setClientname] = useState("");
  const [candidatename, setCandidatename] = useState("");
  const [applicablevacancy, setApplicablevacancy] = useState("");
  const [hourlyrate, setHourlyrate] = useState("");
  const [tentativestartdate, setTentativestartdate] = useState("");
  var onClientNameChange = (e) => {
    setClientname(e.target.value);
  }
  var onCandidatenamechange = (e) => {
    setCandidatename(e.target.value);
  }
  var onApplicablevacancychange = (e) => {
    setApplicablevacancy(e.target.value);
  }
  var onHourlyratechange = (e) => {
    setHourlyrate(e.target.value);
  }
  var onTentativestartdatechange = (e) => {
    setTentativestartdate(e.target.value);
  }
  const onsavehandler=()=>{
    const empdata=
      {
        clientname:clientname,
        candidatename:candidatename,
        applicablevacancy:applicablevacancy,
        hourlyrate:hourlyrate,
        tentativestartdate:tentativestartdate
      } 
      props.datatohcdhome(empdata); 
      props.setOpenModal(false);
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
        <form class="row g-3 needs-validation" novalidate>
        <div className="body">
              <div className="mb-3">
                <label className="form-label" htmlFor="validationCustom01">Candidate Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="imageUrl"
                  aria-describedby="emailHelp"
                  onChange={onCandidatenamechange}
                  value={candidatename}
                  required
                />
                <div class="invalid-feedback">
      Looks good!
    </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Applicable Vacancy</label>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustom01"
                  aria-describedby="emailHelp"
                  placeholder="Job Role"
                  onChange={onApplicablevacancychange}
                  value={applicablevacancy}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Hourly Rate</label>
                <input
                  type="email"
                  className="form-control"
                  id="taskType"
                  aria-describedby="emailHelp"
                  placeholder="In Euros" 
                  onChange={onHourlyratechange}
                  value={hourlyrate}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Tentative start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="taskDesc"
                  aria-describedby="emailHelp"
                  placeholder="DD/MM/YYYY"
                  onChange={onTentativestartdatechange}
                  value={tentativestartdate}
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
          <button data-bs-dismiss="modal" type="submit" onSubmit={onsavehandler} onClick={onsavehandler}>save details</button>
         
        </div>
        </form>
      </div>
    </div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button data-bs-dismiss="modal" onClick="generatePDF()" type="button" className="btn btn-primary" onClick={onsavehandler}>save details</button>
          </div> */}
        
    </>
  )
}

export default HcdForm