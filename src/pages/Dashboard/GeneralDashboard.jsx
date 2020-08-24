import React, { Component } from "react";
import { ChartGeneral } from "./GraphGeneralDashboard/ChartGeneral";

export class GeneralDashboard extends Component {
  componentDidMount() {
    ChartGeneral();
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Dashboard</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-primary">
                  <i className="far fa-user"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Admin</h4>
                  </div>
                  <div className="card-body">10</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-danger">
                  <i className="far fa-newspaper"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>News</h4>
                  </div>
                  <div className="card-body">42</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-warning">
                  <i className="far fa-file"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Reports</h4>
                  </div>
                  <div className="card-body">1,201</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-success">
                  <i className="fas fa-circle"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Online Users</h4>
                  </div>
                  <div className="card-body">47</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Statistics</h4>
                  <div className="card-header-action">
                    <div className="btn-group">
                      <a href="#" className="btn btn-primary">
                        Week
                      </a>
                      <a href="#" className="btn">
                        Month
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <canvas id="myChart" height="182"></canvas>
                  <div className="statistic-details mt-sm-4">
                    <div className="statistic-details-item">
                      <span className="text-muted">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>{" "}
                        7%
                      </span>
                      <div className="detail-value">$243</div>
                      <div className="detail-name">Today's Sales</div>
                    </div>
                    <div className="statistic-details-item">
                      <span className="text-muted">
                        <span className="text-danger">
                          <i className="fas fa-caret-down"></i>
                        </span>{" "}
                        23%
                      </span>
                      <div className="detail-value">$2,902</div>
                      <div className="detail-name">This Week's Sales</div>
                    </div>
                    <div className="statistic-details-item">
                      <span className="text-muted">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>
                        9%
                      </span>
                      <div className="detail-value">$12,821</div>
                      <div className="detail-name">This Month's Sales</div>
                    </div>
                    <div className="statistic-details-item">
                      <span className="text-muted">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>{" "}
                        19%
                      </span>
                      <div className="detail-value">$92,142</div>
                      <div className="detail-name">This Year's Sales</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Recent Activities</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled list-unstyled-border">
                    <li className="media">
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-1.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="float-right text-primary">Now</div>
                        <div className="media-title">Farhan A Mujib</div>
                        <span className="text-small text-muted">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin.
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-2.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="float-right">12m</div>
                        <div className="media-title">Ujang Maman</div>
                        <span className="text-small text-muted">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin.
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-3.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="float-right">17m</div>
                        <div className="media-title">Rizal Fakhri</div>
                        <span className="text-small text-muted">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin.
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-4.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="float-right">21m</div>
                        <div className="media-title">Alfa Zulkarnain</div>
                        <span className="text-small text-muted">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center pt-1 pb-1">
                    <a href="#" className="btn btn-primary btn-lg btn-round">
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 col-sm-12">
              <div className="card">
                <div className="card-body pt-2 pb-2">
                  <div id="myWeather">Please wait</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Authors</h4>
                </div>
                <div className="card-body">
                  <div className="row pb-2">
                    <div className="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                      <div className="avatar-item mb-0">
                        <img
                          alt="image"
                          src="../assets/img/avatar/avatar-5.png"
                          className="img-fluid"
                          data-toggle="tooltip"
                          title="Alfa Zulkarnain"
                        />
                        <div
                          className="avatar-badge"
                          title="Editor"
                          data-toggle="tooltip"
                        >
                          <i className="fas fa-wrench"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                      <div className="avatar-item mb-0">
                        <img
                          alt="image"
                          src="../assets/img/avatar/avatar-4.png"
                          className="img-fluid"
                          data-toggle="tooltip"
                          title="Egi Ferdian"
                        />
                        <div
                          className="avatar-badge"
                          title="Admin"
                          data-toggle="tooltip"
                        >
                          <i className="fas fa-cog"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                      <div className="avatar-item mb-0">
                        <img
                          alt="image"
                          src="../assets/img/avatar/avatar-1.png"
                          className="img-fluid"
                          data-toggle="tooltip"
                          title="Jaka Ramadhan"
                        />
                        <div
                          className="avatar-badge"
                          title="Author"
                          data-toggle="tooltip"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                      <div className="avatar-item mb-0">
                        <img
                          alt="image"
                          src="../assets/img/avatar/avatar-2.png"
                          className="img-fluid"
                          data-toggle="tooltip"
                          title="Ryan"
                        />
                        <div
                          className="avatar-badge"
                          title="Admin"
                          data-toggle="tooltip"
                        >
                          <i className="fas fa-cog"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Referral URL</h4>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      2,100
                    </div>
                    <div className="font-weight-bold mb-1">Google</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="80%"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      1,880
                    </div>
                    <div className="font-weight-bold mb-1">Facebook</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="67%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      1,521
                    </div>
                    <div className="font-weight-bold mb-1">Bing</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="58%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      884
                    </div>
                    <div className="font-weight-bold mb-1">Yahoo</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="36%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      473
                    </div>
                    <div className="font-weight-bold mb-1">Kodinger</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="28%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      418
                    </div>
                    <div className="font-weight-bold mb-1">Multinity</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="20%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>Popular Browser</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col text-center">
                      <div className="browser browser-chrome"></div>
                      <div className="mt-2 font-weight-bold">Chrome</div>
                      <div className="text-muted text-small">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>{" "}
                        48%
                      </div>
                    </div>
                    <div className="col text-center">
                      <div className="browser browser-firefox"></div>
                      <div className="mt-2 font-weight-bold">Firefox</div>
                      <div className="text-muted text-small">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>{" "}
                        26%
                      </div>
                    </div>
                    <div className="col text-center">
                      <div className="browser browser-safari"></div>
                      <div className="mt-2 font-weight-bold">Safari</div>
                      <div className="text-muted text-small">
                        <span className="text-danger">
                          <i className="fas fa-caret-down"></i>
                        </span>{" "}
                        14%
                      </div>
                    </div>
                    <div className="col text-center">
                      <div className="browser browser-opera"></div>
                      <div className="mt-2 font-weight-bold">Opera</div>
                      <div className="text-muted text-small">7%</div>
                    </div>
                    <div className="col text-center">
                      <div className="browser browser-internet-explorer"></div>
                      <div className="mt-2 font-weight-bold">IE</div>
                      <div className="text-muted text-small">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>{" "}
                        5%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-sm-5 mt-md-0">
                <div className="card-header">
                  <h4>Visitors</h4>
                </div>
                <div className="card-body">
                  <div id="visitorMap"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="card">
                <div className="card-header">
                  <h4>This Week Stats</h4>
                  <div className="card-header-action">
                    <div className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle btn btn-primary"
                        data-toggle="dropdown"
                      >
                        Filter
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item has-icon">
                          <i className="far fa-circle"></i> Electronic
                        </a>
                        <a href="#" className="dropdown-item has-icon">
                          <i className="far fa-circle"></i> T-shirt
                        </a>
                        <a href="#" className="dropdown-item has-icon">
                          <i className="far fa-circle"></i> Hat
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item">
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="summary">
                    <div className="summary-info">
                      <h4>$1,053</h4>
                      <div className="text-muted">
                        Sold 3 items on 2 customers
                      </div>
                      <div className="d-block mt-2">
                        <a href="#">View All</a>
                      </div>
                    </div>
                    <div className="summary-item">
                      <h6>
                        Item List <span className="text-muted">(3 Items)</span>
                      </h6>
                      <ul className="list-unstyled list-unstyled-border">
                        <li className="media">
                          <a href="#">
                            <img
                              className="mr-3 rounded"
                              width="50"
                              src="../assets/img/products/product-1-50.png"
                              alt="product"
                            />
                          </a>
                          <div className="media-body">
                            <div className="media-right">$405</div>
                            <div className="media-title">
                              <a href="#">PlayStation 9</a>
                            </div>
                            <div className="text-muted text-small">
                              by <a href="#">Hasan Basri</a>{" "}
                              <div className="bullet"></div> Sunday
                            </div>
                          </div>
                        </li>
                        <li className="media">
                          <a href="#">
                            <img
                              className="mr-3 rounded"
                              width="50"
                              src="../assets/img/products/product-2-50.png"
                              alt="product"
                            />
                          </a>
                          <div className="media-body">
                            <div className="media-right">$499</div>
                            <div className="media-title">
                              <a href="#">RocketZ</a>
                            </div>
                            <div className="text-muted text-small">
                              by <a href="#">Hasan Basri</a>{" "}
                              <div className="bullet"></div> Sunday
                            </div>
                          </div>
                        </li>
                        <li className="media">
                          <a href="#">
                            <img
                              className="mr-3 rounded"
                              width="50"
                              src="../assets/img/products/product-3-50.png"
                              alt="product"
                            />
                          </a>
                          <div className="media-body">
                            <div className="media-right">$149</div>
                            <div className="media-title">
                              <a href="#">Xiaomay Readme 4.0</a>
                            </div>
                            <div className="text-muted text-small">
                              by <a href="#">Kusnaedi</a>{" "}
                              <div className="bullet"></div> Tuesday
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="d-inline">Tasks</h4>
                  <div className="card-header-action">
                    <a href="#" className="btn btn-primary">
                      View All
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled list-unstyled-border">
                    <li className="media">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cbx-1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="cbx-1"
                        ></label>
                      </div>
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-4.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="badge badge-pill badge-danger mb-1 float-right">
                          Not Finished
                        </div>
                        <h6 className="media-title">
                          <a href="#">Redesign header</a>
                        </h6>
                        <div className="text-small text-muted">
                          Alfa Zulkarnain <div className="bullet"></div>{" "}
                          <span className="text-primary">Now</span>
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cbx-2"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="cbx-2"
                        ></label>
                      </div>
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-5.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="badge badge-pill badge-primary mb-1 float-right">
                          Completed
                        </div>
                        <h6 className="media-title">
                          <a href="#">Add a new component</a>
                        </h6>
                        <div className="text-small text-muted">
                          Serj Tankian <div className="bullet"></div> 4 Min
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cbx-3"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="cbx-3"
                        ></label>
                      </div>
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-2.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="badge badge-pill badge-warning mb-1 float-right">
                          Progress
                        </div>
                        <h6 className="media-title">
                          <a href="#">Fix modal window</a>
                        </h6>
                        <div className="text-small text-muted">
                          Ujang Maman <div className="bullet"></div> 8 Min
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cbx-4"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="cbx-4"
                        ></label>
                      </div>
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-1.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="badge badge-pill badge-danger mb-1 float-right">
                          Not Finished
                        </div>
                        <h6 className="media-title">
                          <a href="#">Remove unwanted classNamees</a>
                        </h6>
                        <div className="text-small text-muted">
                          Farhan A Mujib <div className="bullet"></div> 21 Min
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12 col-sm-12">
              <form method="post" className="needs-validation" noValidate="">
                <div className="card">
                  <div className="card-header">
                    <h4>Quick Draft</h4>
                  </div>
                  <div className="card-body pb-0">
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        required
                      />
                      <div className="invalid-feedback">
                        Please fill in the title
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Content</label>
                      <textarea className="summernote-simple"></textarea>
                    </div>
                  </div>
                  <div className="card-footer pt-0">
                    <button className="btn btn-primary">Save Draft</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-7 col-md-12 col-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Latest Posts</h4>
                  <div className="card-header-action">
                    <a href="#" className="btn btn-primary">
                      View All
                    </a>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped mb-0">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Introduction Laravel 5
                            <div className="table-links">
                              in <a href="#">Web Development</a>
                              <div className="bullet"></div>
                              <a href="#">View</a>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="font-weight-600">
                              <img
                                src="../assets/img/avatar/avatar-1.png"
                                alt="avatar"
                                width="30"
                                className="rounded-circle mr-1"
                              />{" "}
                              Bagus Dwi Cahya
                            </a>
                          </td>
                          <td>
                            <a
                              className="btn btn-primary btn-action mr-1"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a
                              className="btn btn-danger btn-action"
                              data-toggle="tooltip"
                              title="Delete"
                              data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"
                              data-confirm-yes="alert('Deleted')"
                            >
                              <i className="fas fa-trash"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Laravel 5 Tutorial - Installation
                            <div className="table-links">
                              in <a href="#">Web Development</a>
                              <div className="bullet"></div>
                              <a href="#">View</a>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="font-weight-600">
                              <img
                                src="../assets/img/avatar/avatar-1.png"
                                alt="avatar"
                                width="30"
                                className="rounded-circle mr-1"
                              />{" "}
                              Bagus Dwi Cahya
                            </a>
                          </td>
                          <td>
                            <a
                              className="btn btn-primary btn-action mr-1"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a
                              className="btn btn-danger btn-action"
                              data-toggle="tooltip"
                              title="Delete"
                              data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"
                              data-confirm-yes="alert('Deleted')"
                            >
                              <i className="fas fa-trash"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Laravel 5 Tutorial - MVC
                            <div className="table-links">
                              in <a href="#">Web Development</a>
                              <div className="bullet"></div>
                              <a href="#">View</a>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="font-weight-600">
                              <img
                                src="../assets/img/avatar/avatar-1.png"
                                alt="avatar"
                                width="30"
                                className="rounded-circle mr-1"
                              />{" "}
                              Bagus Dwi Cahya
                            </a>
                          </td>
                          <td>
                            <a
                              className="btn btn-primary btn-action mr-1"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a
                              className="btn btn-danger btn-action"
                              data-toggle="tooltip"
                              title="Delete"
                              data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"
                              data-confirm-yes="alert('Deleted')"
                            >
                              <i className="fas fa-trash"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Laravel 5 Tutorial - Migration
                            <div className="table-links">
                              in <a href="#">Web Development</a>
                              <div className="bullet"></div>
                              <a href="#">View</a>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="font-weight-600">
                              <img
                                src="../assets/img/avatar/avatar-1.png"
                                alt="avatar"
                                width="30"
                                className="rounded-circle mr-1"
                              />{" "}
                              Bagus Dwi Cahya
                            </a>
                          </td>
                          <td>
                            <a
                              className="btn btn-primary btn-action mr-1"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a
                              className="btn btn-danger btn-action"
                              data-toggle="tooltip"
                              title="Delete"
                              data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"
                              data-confirm-yes="alert('Deleted')"
                            >
                              <i className="fas fa-trash"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Laravel 5 Tutorial - Deploy
                            <div className="table-links">
                              in <a href="#">Web Development</a>
                              <div className="bullet"></div>
                              <a href="#">View</a>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="font-weight-600">
                              <img
                                src="../assets/img/avatar/avatar-1.png"
                                alt="avatar"
                                width="30"
                                className="rounded-circle mr-1"
                              />{" "}
                              Bagus Dwi Cahya
                            </a>
                          </td>
                          <td>
                            <a
                              className="btn btn-primary btn-action mr-1"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a
                              className="btn btn-danger btn-action"
                              data-toggle="tooltip"
                              title="Delete"
                              data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"
                              data-confirm-yes="alert('Deleted')"
                            >
                              <i className="fas fa-trash"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Laravel 5 Tutorial - Closing
                            <div className="table-links">
                              in <a href="#">Web Development</a>
                              <div className="bullet"></div>
                              <a href="#">View</a>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="font-weight-600">
                              <img
                                src="../assets/img/avatar/avatar-1.png"
                                alt="avatar"
                                width="30"
                                className="rounded-circle mr-1"
                              />{" "}
                              Bagus Dwi Cahya
                            </a>
                          </td>
                          <td>
                            <a
                              className="btn btn-primary btn-action mr-1"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a
                              className="btn btn-danger btn-action"
                              data-toggle="tooltip"
                              title="Delete"
                              data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"
                              data-confirm-yes="alert('Deleted')"
                            >
                              <i className="fas fa-trash"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default GeneralDashboard;
