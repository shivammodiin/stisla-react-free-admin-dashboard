import React, { Component } from "react";
import { BootstrapModaljs } from "../../../js/BootstrapModal";

export class BootstrapModal extends Component {
  componentDidMount() {
    BootstrapModaljs();
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Modal</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Bootstrap Components</a>
              </div>
              <div className="breadcrumb-item">Modal</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Modal</h2>
            <p className="section-lead">
              Use Bootstrap’s JavaScript modal plugin to add dialogs to your
              site for lightboxes, user notifications, or completely custom
              content.
            </p>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="modal-dialog m-0" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal Template</h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card card-mt">
                  <div className="card-header">
                    <h4>Modal Confirm</h4>
                  </div>
                  <div className="card-body">
                    <p className="mb-2">
                      You can easily change the default browser confirmation box
                      with a bootstrap modal.
                    </p>
                    <button
                      className="btn btn-danger"
                      data-confirm="Realy?|Do you want to continue?"
                      data-confirm-yes="alert('Deleted :)');"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>The Bootstrap Way</h4>
                  </div>
                  <div className="card-body">
                    <p className="mb-2">
                      Use the Bootstrap method to create modal. You need to
                      create an HTML structure for modal and the following
                      button will trigger it.
                    </p>
                    <button
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Aw, yeah!
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Modal Demo</h4>
                  </div>
                  <div className="card-body">
                    <p className="mb-2">
                      We've created a plugin to easily create a bootstrap modal.
                    </p>
                    <button className="btn btn-primary" id="modal-1">
                      Launch Modal
                    </button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Modal Center</h4>
                  </div>
                  <div className="card-body">
                    <p className="mb-2">
                      You can change the modal position to center.
                    </p>
                    <button className="btn btn-primary" id="modal-2">
                      Launch Modal
                    </button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>The Others</h4>
                  </div>
                  <div className="card-body">
                    <p className="mb-2">
                      Check the <code>modal.js</code> code in the{" "}
                      <code>dist/js/page</code> folder to get the source code.
                    </p>
                    <div className="buttons">
                      <button className="btn btn-primary" id="modal-3">
                        Buttons
                      </button>
                      <button className="btn btn-primary" id="modal-4">
                        Footer Background
                      </button>
                      <button className="btn btn-primary" id="modal-5">
                        Login
                      </button>
                      <button className="btn btn-primary" id="modal-6">
                        Something in the Footer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <form className="modal-part" id="modal-login-part">
          <p>
            This login form is taken from elements with{" "}
            <code>#modal-login-part</code> id.
          </p>
          <div className="form-group">
            <label>Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
              />
            </div>
          </div>
          <div className="form-group mb-0">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                name="remember"
                className="custom-control-input"
                id="remember-me"
              />
              <label className="custom-control-label" htmlFor="remember-me">
                Remember Me
              </label>
            </div>
          </div>
        </form>

        <div
          className="modal fade"
          tabIndex="-1"
          role="dialog"
          id="exampleModal"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer bg-whitesmoke br">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapModal;
