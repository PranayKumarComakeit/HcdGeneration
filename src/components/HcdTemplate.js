import React from 'react'

function HcdTemplate() {
   
    return (
        <>
            <div id='Template'>
                <div className="container"
                    style={{
                        border: '1px solid black',
                        height: '100%',
                        marginTop: '30px',
                        marginBottom: '30px',
                        padding: '30px 30px 30px 30px'
                    }}>
                    <div className="row">
                        <div className="d-flex justify-content-end"><img
                            src="https://www.telligent.com/content/uploads/2019/08/coMakeIT-Logo.jpg" alt=""
                            style={{
                                width: '200px',
                                height: '80px'
                            }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-start">
                            Date: <b>&nbsp; Today</b>
                        </div>
                        <div className="d-flex justify-content-start">
                            Ref: <b>&nbsp; Random Id</b>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-center"><b>HIRING CONFIRMATION DOCUMENT(HCD)</b></div>
                    </div>
                    <div className="row">

                        <div>
                            Hereby, we confirm that coMakeIT may start the necessary procedures to hire the employees from the below
                            list of candidates. Estimated CTC Salary mentioned will be kept as a guideline and in case of
                            differences larger than 15%,<b>Client name</b> will be notified before taking a hiring decision.
                        </div>
                    </div>
                    <br />
                    <div className="row d-flex justify-content-center">
                        <table style={{ width: '90%' }}>
                            <tr>
                                <th><b>CANDIDATE NAME</b></th>
                                <th><b>APPLICABLE VACANCY</b></th>
                                <th><b>HOURLY RATE</b></th>
                                <th><b>TENTATIVE START DATE</b></th>
                            </tr>
                            <tr>
                                <td>Sample data</td>
                                <td>Sample data</td>
                                <td>Sample data</td>
                                <td>Sample data</td>
                            </tr>
                            <tr>
                                <td>Sample data</td>
                                <td>Sample data</td>
                                <td>Sample data</td>
                                <td>Sample data</td>
                            </tr>
                            <tr>
                                <td>Sample data</td>
                                <td>Sample data</td>
                                <td>Sample data</td>
                                <td>Sample data</td>
                            </tr>
                        </table>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div>
                            <b>Client Name</b> agrees that coMakeIT may take the necessary steps to hire up to the agreed number of
                            candidates.
                            <b>Client Name</b> agrees that after successful hiring, an applicable work order for the total number of
                            hired
                            candidates will be signed, and that costs associated with the hiring are approved. coMakeIT agrees
                            it will keep <b>Client Name</b> informed about the status of the hiring process.
                        </div>
                    </div>
                    <br />
                    <br />

                    <div className="row">
                        <div className="col-5 justify-content-start">
                            <div>
                                For coMakeIT:
                                <br />
                                <img src="https://images.squarespace-cdn.com/content/v1/546d0c43e4b09ba18fd4665b/1564505371807-67QCEYVLKB94MYI5BQTE/image004.gif"
                                    alt="" style={{
                                        width: '70px',
                                        height: '30px'
                                    }} />
                                <br />
                                Name of the Hiring Manager : <br />
                                <b>Hiring Manager Name</b>
                            </div>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-5">
                            <div>
                                For <b>Client Name</b>:
                                <br />
                                <img src="https://images.squarespace-cdn.com/content/v1/546d0c43e4b09ba18fd4665b/1564505371807-67QCEYVLKB94MYI5BQTE/image004.gif"
                                    alt="" style={{
                                        width: '70px',
                                        height: '30px'
                                    }} />
                                <br />
                                Name of the Hiring Manager : <br />
                                <b>Hiring Manager Name</b>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-primary">Click Here To Download</button>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossorigin="anonymous"></script>
            </div>

        </>
    )
}

export default HcdTemplate