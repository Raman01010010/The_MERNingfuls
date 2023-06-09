import React from 'react'

export default function Chatui() {
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
  <div className="container py-5">
    <div className="row d-flex justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card">
          <div
            className="card-header d-flex justify-content-between align-items-center p-3"
            style={{ borderTop: "4px solid #ffa900" }}
          >
            <h5 className="mb-0">Chat messages</h5>
            <div className="d-flex flex-row align-items-center">
              <span className="badge bg-warning me-3">20</span>
              <i className="fas fa-minus me-3 text-muted fa-xs" />
              <i className="fas fa-comments me-3 text-muted fa-xs" />
              <i className="fas fa-times text-muted fa-xs" />
            </div>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: 400 }}
          >
            <div className="d-flex justify-content-between">
              <p className="small mb-1">Timona Siera</p>
              <p className="small mb-1 text-muted">23 Jan 2:00 pm</p>
            </div>
            <div className="d-flex flex-row justify-content-start">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                alt="avatar 1"
                style={{ width: 45, height: "100%" }}
              />
              <div>
                <p
                  className="small p-2 ms-3 mb-3 rounded-3"
                  style={{ backgroundColor: "#f5f6f7" }}
                >
                  For what reason would it be advisable for me to think about
                  business content?
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <p className="small mb-1 text-muted">23 Jan 2:05 pm</p>
              <p className="small mb-1">Johny Bullock</p>
            </div>
            <div className="d-flex flex-row justify-content-end mb-4 pt-1">
              <div>
                <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-warning">
                  Thank you for your believe in our supports
                </p>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                alt="avatar 1"
                style={{ width: 45, height: "100%" }}
              />
            </div>
            <div className="d-flex justify-content-between">
              <p className="small mb-1">Timona Siera</p>
              <p className="small mb-1 text-muted">23 Jan 5:37 pm</p>
            </div>
            <div className="d-flex flex-row justify-content-start">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                alt="avatar 1"
                style={{ width: 45, height: "100%" }}
              />
              <div>
                <p
                  className="small p-2 ms-3 mb-3 rounded-3"
                  style={{ backgroundColor: "#f5f6f7" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  similique quae consequatur
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
            <div className="input-group mb-0">
              <input
                type="text"
                className="form-control"
                placeholder="Type message"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-warning"
                type="button"
                id="button-addon2"
                style={{ paddingTop: ".55rem" }}
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
