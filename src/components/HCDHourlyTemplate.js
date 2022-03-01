import React from 'react'

const HcdHourlyTemplate = (props) => {
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
                HR/F/8
                </div>
                <div className="d-flex justify-content-start">
                  Date: <b>&nbsp;</b>
                </div>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <b>Hiring confirmation form</b>
                </div>
              </div>
              <div className="row">
                <div>
                Hereby, we confirm that coMakeIT may start the necessary procedures to hire COUNT employees from the below list. The hourly costs of the candidates mentioned in the document are final and CLIENT will be notified in case there are any deviations in the costs.
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
                  {/* {props.data.empdata.map((element) => {
                    return (
                      <tr key={element.name}>
                        <td>{element.candidatename}</td>
                        <td>{element.applicablevacancy}</td>
                        <td>{element.hourlyrate}</td>
                        <td>{element.tentativestartdate}</td>
                      </tr>
                    );
                  })} */}
                </table>
              </div>
              <br />
              <br />
              <div className="row">
                <div>
                Rates are adjusted every year based on a general inflation indexation as specified in the contract.  coMakeIT may invoice CLIENT based on the above-mentioned hourly costs on commencement of the proposed engagement. Payment terms remain as per the standard contract.
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

                      alt="Hiring Manager Signature"
                      style={{
                        width: "70px",
                        height: "30px",
                      }}
                    />
                    <br />
                    Name: Sanjay Akondi <br />
                    Designation: Vice President <br />
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-5">
                  <div>
                    For Client<b></b>
                    <br />

                    <br />
                    Name:  <br />
                    Designation:  <br />
                  </div>
                </div>
              </div>
              <div className="container" style={{position:'fixed', bottom:'0',marginBottom:'10px', fontSize:'10px', color:'#D3D3D3'}}>
              <div className='row'>
                <div
                  className="col"
                  style={{color:'grey', textEmphasisColor:'grey'}}
                >
                  www.coMakeIT.com
                </div>
                <div className="col" >
                <b>NETHERLANDS</b> <br />
coMakeIT B.V <br />
Stationsplein 62, 3743 KM Baarn <br />
The Netherlands <br />
<b>P</b> +31 35 303 5630

                </div>
                <div className="col" >
                <b>INDIA</b> <br />
Plot No.654/4 39, Road No.92, Jubilee Hills, <br />
Hyderabad 500 03, India <br /> <br />

9th Floor, A wing, Aurobindo Galaxy, Madhapur, Hyderabad 500019, India <br />
<b>P</b> +91 40 40351000, +91 45454757


                </div>
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

export default HcdHourlyTemplate