import React from 'react'

const HcdHourlyTemplate = (props) => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  var today = dd + '/' + mm + '/' + yyyy;
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

              <div className="d-flex justify-content-start" style={{color:'#D3D3D3'}}>
            <b> HR/F/8</b>  <br /> <br />
            </div>
                <div className="d-flex justify-content-start">
                  Date: <b>&nbsp;{today}</b> <br /> <br />
                </div>
              </div>
              <div className="row">
            <div className="d-flex">
              <b>Hiring confirmation form</b>
            </div>
          </div> <br />
              <div className="row">
                <div>
                Hereby, we confirm that coMakeIT may start the necessary procedures to hire COUNT employees from the below list. The hourly costs of the candidates mentioned in the document are final and {props.data.clientname} will be notified in case there are any deviations in the costs.
                </div>
              </div>
              <br />
              <div className="row d-flex justify-content-center">
                <table style={{ width: "90%" }}>
                  <tr>
                    <th>
                      <b>Candidate Name</b>
                    </th>
                    <th>
                      <b>Role</b>
                    </th>
                    <th>
                      <b>Hourly Rate</b>
                    </th>
                    <th>
                      <b>Monthly Cost</b>
                    </th>
                    <th>
                      <b>Billable Date</b>
                    </th>
                    <th>
                      <b>Remarks</b>
                    </th>
                  </tr>
                  {props.data.empdata.map((element) => {
                    return (
                      <tr key={element.name}>
                        <td>{element.candidatename}</td>
                        <td>{element.role}</td>
                        <td>{element.hourlyRate}</td>
                        <td>{element.monthlyCost}</td>
                        <td>{element.billableDate}</td>
                        <td>{element.remarks}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
              <br />
              <br />
              <div className="row">
                <div>
                Rates are adjusted every year based on a general inflation indexation as specified in the contract.  coMakeIT may invoice {props.data.clientname} based on the above-mentioned hourly costs on commencement of the proposed engagement. Payment terms remain as per the standard contract.
                </div>
              </div>
              <br />
              <br />

              <div className="row">
                <div className="col-5 justify-content-start">
                  <div>
                  For coMakeIT India
                    <br />
                    <img
                    src={props.data.url}
                      alt="Hiring Manager Signature"
                      style={{
                        width: "70px",
                        height: "30px",
                      }}
                    />
                    <br />
                    Name: <b>{props.data.hiringmanagername}</b> <br />
                    Designation: <b>{props.data.Mdesignation}</b> <br />
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-5">
                  <div>
                    For Client<b></b>
                    <br />
                    <img

                  alt=""
                  style={{
                    width: "70px",
                    height: "30px",
                  }}
                />
                    <br /> <br />
                    Name:  <br />
                    Designation:  <br />
                  </div>
                </div>
              </div>
              <div class="row" style={{position:'fixed',bottom:'0',marginBottom:'10px',fontSize:'10px',color:'#D3D3D3'}}>
            <div className="col">
            www.comakeit.com
            </div>
          <div className="col">
            <b>NETHERLANDS</b><br/>
            coMakeIT B.V
            Stationsplein 62, 3743 KM Baarn
            The Netherlands
            <b>P</b> +31 35 303 5630

          </div>
          <div className="col">

            <b>INDIA</b><br/>
            Plot No.654/4 39, Road No.92, Jubilee Hills,
            Hyderabad 500 03, India
            <br/><br/>
            9th Floor, A wing, Aurobindo Galaxy, Madhapur, Hyderabad 500019, India
            <b>P</b> +91 40 40351000, +91 45454757

            </div>
          </div>

          </div>

        <button
          type="button"
          className="btn btn-primary btn-dark"
          onClick={downloadPdf}
          id="button"
          style={{ marginLeft: '17%' }}
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

export default HcdHourlyTemplate