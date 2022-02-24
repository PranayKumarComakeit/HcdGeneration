import React from 'react'

const HcdForm = () => {
  
  return (
    <>
        <div className="modal-dialog">
        <div className="modal-content" style={{"borderRadius":"15px"}}>
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
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Client Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="imageUrl"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Candidate Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="imageUrl"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Applicable Vacancy</label>
                <input
                  type="email"
                  className="form-control"
                  id="taskTitle"
                  aria-describedby="emailHelp"
                  placeholder="Job Role"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Hourly Rate</label>
                <input
                  type="email"
                  className="form-control"
                  id="taskType"
                  aria-describedby="emailHelp"
                  placeholder="In Euros"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Tentative start Date</label>
                <input
                  type="email"
                  className="form-control"
                  id="taskDesc"
                  aria-describedby="emailHelp"
                  placeholder="DD/MM/YYYY" />
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
            <button data-bs-dismiss="modal" onclick = "generatePDF()" type="button" className="btn btn-primary">save details</button>
          </div>
        </div>
      </div>

      <div class="modal " id="openModal" tabindex="-3">
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Task View</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card shadow-sm task__card " >

              <div class="card-header d-flex justify-content-end task__card__header">

              </div>
              <div class="card-body"  >
                        <img  src="" alt="Card image cap" id="openImage" class="card-img-top " width="height=200rem" />

                <h1 class="task__card__title" id="openTitle"></h1>
                <p class="description trim-3-lines font-large " id="openDesc" >

                </p>
                <div class="tags text-white d-flex flex-wrap">
                  <h3>
                    <span class="badge h1 bg-primary m-1" id="openType"></span>
                  </h3>

                </div>
              </div>
              <div class="card-footer">

              </div>
            </div>
            </div>


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HcdForm