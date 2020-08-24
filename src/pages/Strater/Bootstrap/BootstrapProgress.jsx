import React, { Component } from "react";
import $ from "jquery";

export class BootstrapProgress extends Component {
  componentDidMount() {
    $("[data-width]").each(function() {
      $(this).css({
        width: $(this).data("width"),
      });
    });

    // Height attribute
    $("[data-height]").each(function() {
      $(this).css({
        height: $(this).data("height"),
      });
    });
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Progress</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Bootstrap Components</a>
              </div>
              <div className="breadcrumb-item">Progress</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Progress</h2>
            <p className="section-lead">
              Examples for using Bootstrap custom progress bars featuring
              support for stacked bars, animated backgrounds, and text labels.
            </p>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Simple</h4>
                  </div>
                  <div className="card-body">
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="75%"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="100%"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Label</h4>
                  </div>
                  <div className="card-body">
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        0
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        25%
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        50%
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="75%"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        75%
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="100%"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        100%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Height</h4>
                  </div>
                  <div className="card-body">
                    <div className="progress mb-3" data-height="5">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress mb-3" data-height="10">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress mb-3" data-height="15">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress mb-3" data-height="20">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress mb-3" data-height="25">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Background</h4>
                  </div>
                  <div className="card-body">
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        data-width="50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        data-width="75%"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        data-width="100%"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        data-width="100%"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BootstrapProgress;
