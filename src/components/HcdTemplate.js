import React from "react";
import "./HcdTemplate.css";

function HcdTemplate(props) {
  const shortid = require("shortid");
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const downloadPdf = () => {
    var c = (document.getElementById("button").style.display = "none");
    window.print();
  };
  return (
    <>
      <div id="Template">
        <div
          className="container"
          style={{
            height: "100%",
            padding: "30px 30px 30px 30px",
          }}
        >
          <div className="row">
            <div className="d-flex justify-content-end">
              <img
                src="https://www.telligent.com/content/uploads/2019/08/coMakeIT-Logo.jpg"
                alt=""
                style={{
                  width: "200px",
                  height: "80px",
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-start">
              Date: <b>&nbsp;{date}</b>
            </div>
            <div className="d-flex justify-content-start">
              Ref: <b>&nbsp; {shortid.generate()}</b>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center">
              <b>HIRING CONFIRMATION DOCUMENT(HCD)</b>
            </div>
          </div>
          <div className="row">
            <div>
              Hereby, we confirm that coMakeIT may start the necessary
              procedures to hire the employees from the below list of
              candidates. Estimated CTC Salary mentioned will be kept as a
              guideline and in case of differences larger than 15%,
              <b> {props.data.clientname} </b>will be notified before taking a
              hiring decision.
            </div>
          </div>
          <br />
          <div className="row d-flex justify-content-center">
            <table style={{ width: "90%" }}>
              <tr>
                <th>
                  <b>CANDIDATE NAME</b>
                </th>
                <th>
                  <b>APPLICABLE VACANCY</b>
                </th>
                <th>
                  <b>HOURLY RATE</b>
                </th>
                <th>
                  <b>TENTATIVE START DATE</b>
                </th>
              </tr>
              {props.data.empdata.map((element) => {
                return (
                  <tr key={element.name}>
                    <td>{element.candidatename}</td>
                    <td>{element.applicablevacancy}</td>
                    <td>{element.hourlyrate}</td>
                    <td>{element.tentativestartdate}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <br />
          <br />
          <div className="row">
            <div>
              <b>{props.data.clientname}</b> agrees that coMakeIT may take the
              necessary steps to hire up to the agreed number of candidates.
              <b>{props.data.clientname}</b> agrees that after successful
              hiring, an applicable work order for the total number of hired
              candidates will be signed, and that costs associated with the
              hiring are approved. coMakeIT agrees it will keep{" "}
              <b>{props.data.clientname}</b> informed about the status of the
              hiring process.
            </div>
          </div>
          <br />
          <br />

          <div className="row">
            <div className="col-5 justify-content-start">
              <div>
                For <b>coMakeIT</b>
                <br />
                <img
                  src={props.data.url}
                  alt=""
                  style={{
                    width: "70px",
                    height: "30px",
                  }}
                />
                <br />
                Name of the Hiring Manager <br />
                <b>{props.data.hiringmanagername}</b>
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-5">
              <div>
                For <b>{props.data.clientname}</b>:
                <br />
                <img
                  src="https://images.squarespace-cdn.com/content/v1/546d0c43e4b09ba18fd4665b/1564505371807-67QCEYVLKB94MYI5BQTE/image004.gif"
                  alt=""
                  style={{
                    width: "70px",
                    height: "30px",
                  }}
                />
                <br />
                Name of the Hiring Manager : <br />
              </div>
            </div>
          </div>
          <div style={{fontSize:'10px',
          position: 'fixed',
          right: '10px',
          bottom:'20px'
        }}>
            <div
              className="website"
              style={{ color: "orange", fontWeight: "bold", fontSize:'15px' }}
            >
              www.coMakeIT.com
            </div>
            <div className="loc">
              THE NETHERLANDS, INDIA, AUSTRALIA, UK ISO <br /> 9001:2015 ISO /
              IEC 27001:2013
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-dark"
          onClick={downloadPdf}
          id="button"
          style={{marginLeft:'17%'}}
        >
          Click Here To Download
        </button>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
      </div>
    </>
  );
}

export default HcdTemplate;
