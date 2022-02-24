import React, { useState } from 'react';

const HcdForm = (props) => {
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
}

  return (
    <>
      <div className="modal-dialog">
        <div className="modal-content" style={{ "borderRadius": "15px" }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add Employee Details</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form >
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Client Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="clientname"
                  aria-describedby="emailHelp"
                  onChange={onClientNameChange}
                  value={clientname}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Candidate Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="candidatename"
                  aria-describedby="emailHelp"
                  onChange={props.handleInputChange}
                  value={props.candidatename}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Applicable Vacancy</label>
                <input
                  type="text"
                  className="form-control"
                  id="vacancy"
                  aria-describedby="emailHelp"
                  placeholder="Job Role"
                  onChange={props.handleInputChange}
                  value={props.applicablevacancy}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Hourly Rate</label>
                <input
                  type="text"
                  className="form-control"
                  id="hourlyrate"
                  aria-describedby="emailHelp"
                  placeholder="In Euros" 
                  onChange={props.handleInputChange}
                  value={props.hourlyrate}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Tentative start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="startdate"
                  aria-describedby="emailHelp"
                  placeholder="DD/MM/YYYY" 
                  onChange={props.handleInputChange}
                  value={props.tentativestartdate}
                  />
               
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button data-bs-dismiss="modal" onclick="generatePDF()" type="button" className="btn btn-primary"onClick={onsavehandler}>save details</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default HcdForm