import React, { Component } from "react";
import $ from "jquery";

export class BootstrapTooltip extends Component {
  componentDidMount() {
    $("[data-toggle='tooltip']").tooltip();
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Tooltip</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Bootstrap Components</a>
              </div>
              <div className="breadcrumb-item">Tooltip</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Tooltips</h2>
            <p className="section-lead">
              Examples for adding custom Bootstrap tooltips with CSS and
              JavaScript using CSS3 for animations and data-attributes for local
              title storage.
            </p>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Directions</h4>
                  </div>
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    >
                      On top
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    >
                      On right
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Vivamus
                    sagittis lacus vel augue laoreet rutrum faucibus."
                    >
                      On bottom
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    >
                      On left
                    </button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Disabled Tooltip</h4>
                  </div>
                  <div className="card-body">
                    <span
                      className="d-inline-block"
                      data-toggle="tooltip"
                      data-title="Disabled tooltip"
                    >
                      <button
                        className="btn btn-primary pe-none"
                        type="button"
                        disabled
                      >
                        Disabled button
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Link</h4>
                  </div>
                  <div className="card-body">
                    <a href="#" data-toggle="tooltip" title="Tooltip, bro!">
                      Hover me!
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Paragraph</h4>
                  </div>
                  <div className="card-body">
                    <div className="buttons">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur{" "}
                        <b
                          data-toggle="tooltip"
                          title="Hello, this is tooltip."
                        >
                          adipisicing elit
                        </b>
                        , sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
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

export default BootstrapTooltip;
