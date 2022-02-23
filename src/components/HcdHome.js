import React from 'react'

const HcdHome = () => {
  return (
    <>
    <nav className="px-1 navbar navbar-expand-lg navbar-dark bg-light" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-primary" id="mainText" href="#" style={{}}>HCD generation App</a>
        <button
          className="navbar-toggler bg-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active text-secondary fw-bold" href="#"
                >Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="btn btn-sm btn-primary ml-auto"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fas fa-plus me-2"></i>Add Employee
          </button>
        </div>
      </div>
    </nav>
    <div className="container">
      <section className="mt-4">
        <div className="row justify-content-center mt-4">
          <div className="col-md-6 col-lg-4 mt-3">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="mt-1">
        <div className="row task__container">
          
         
            
              </div>
        
      </section>
    </div>
    </>
  )
}

export default HcdHome