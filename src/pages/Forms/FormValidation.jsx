import React, { Component } from "react";
import $ from "jquery";
export class FormValidation extends Component {
  componentDidMount() {
    $(".needs-validation").submit(function(event) {
      var form = $(this);
      if (form[0].checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.addClass("was-validated");
    });
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Form Validation</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Forms</a>
              </div>
              <div className="breadcrumb-item">Form Validation</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Form Validation</h2>
            <p className="section-lead">
              Form validation using default from Bootstrap 4
            </p>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <form>
                    <div className="card-header">
                      <h4>Default Validation</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Subject</label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="form-group mb-0">
                        <label>Message</label>
                        <textarea className="form-control" required></textarea>
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="card">
                  <form className="needs-validation" noValidate>
                    <div className="card-header">
                      <h4>JavaScript Validation</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" className="form-control" required />
                        <div className="invalid-feedback">
                          What's your name?
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required />
                        <div className="invalid-feedback">
                          Oh no! Email is invalid.
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Subject</label>
                        <input type="email" className="form-control" />
                        <div className="valid-feedback">Good job!</div>
                      </div>
                      <div className="form-group mb-0">
                        <label>Message</label>
                        <textarea className="form-control" required></textarea>
                        <div className="invalid-feedback">
                          What do you wanna say?
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <form>
                    <div className="card-header">
                      <h4>Server-side Validation</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input
                          type="text"
                          className="form-control is-valid"
                          value="Rizal Fakhri"
                          required
                        />
                        <div className="valid-feedback">Good job!</div>
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control is-invalid"
                          required
                          value="rizal@fakhri"
                        />
                        <div className="invalid-feedback">
                          Oh no! Email is invalid.
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Subject</label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="form-group mb-0">
                        <label>Message</label>
                        <textarea className="form-control is-invalid" required>
                          Hello, i'm handsome!
                        </textarea>
                        <div className="invalid-feedback">
                          Oh no! You entered an inappropriate word.
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="card">
                  <form className="needs-validation" noValidate>
                    <div className="card-header">
                      <h4>JavaScript Validation (Horizontal Form)</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Your Name
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                          <div className="invalid-feedback">
                            What's your name?
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            className="form-control"
                            required
                          />
                          <div className="invalid-feedback">
                            Oh no! Email is invalid.
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Subject
                        </label>
                        <div className="col-sm-9">
                          <input type="email" className="form-control" />
                          <div className="valid-feedback">Good job!</div>
                        </div>
                      </div>
                      <div className="form-group mb-0 row">
                        <label className="col-sm-3 col-form-label">
                          Message
                        </label>
                        <div className="col-sm-9">
                          <textarea
                            className="form-control"
                            required
                          ></textarea>
                          <div className="invalid-feedback">
                            What do you wanna say?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FormValidation;
