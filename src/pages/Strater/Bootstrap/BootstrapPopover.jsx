import React, { Component } from "react";

import $ from "jquery";

export class BootstrapPopover extends Component {
  componentDidMount() {
    $('[data-toggle="popover"]').popover({
      container: "body",
    });
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Popover</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Bootstrap Components</a>
              </div>
              <div className="breadcrumb-item">Popover</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Popovers</h2>
            <p className="section-lead">
              Examples for adding Bootstrap popovers, like those found in iOS,
              to any element on your site.
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
                      className="btn btn-secondary"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    >
                      On top
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="right"
                      data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    >
                      On right
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="bottom"
                      data-content="Vivamus
                        sagittis lacus vel augue laoreet rutrum faucibus."
                    >
                      On bottom
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="left"
                      data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    >
                      On left
                    </button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Disabled Popover</h4>
                  </div>
                  <div className="card-body">
                    <span
                      className="d-inline-block"
                      data-toggle="popover"
                      data-content="Disabled popover"
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
                    <h4>Dismiss</h4>
                  </div>
                  <div className="card-body">
                    <a
                      tabIndex="0"
                      className="btn btn-danger"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Dismissible popover"
                      data-content="And here's some amazing content. It's very engaging. Right?"
                    >
                      Dismissible popover
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Link</h4>
                  </div>
                  <div className="card-body">
                    <div className="buttons">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur
                        <a
                          href="javascript:void(0)"
                          data-toggle="popover"
                          title="Popover Title"
                          data-content="Hello, this is link."
                          data-trigger="focus"
                        >
                          adipisicing elit
                        </a>
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

export default BootstrapPopover;
