import React, { Component } from "react";
import $ from "jquery";
import { ChartShow } from "./ChartShow/ChartShow";
import FlagEcom from "./Flag/FlagEcom";
import { flagData } from "./Data";
import { Link, NavLink } from "react-router-dom";

export class EcommerceDashboard extends Component {
  componentDidMount() {
    ChartShow();
    if ($("#top-5-scroll").length) {
      $("#top-5-scroll")
        .css({
          height: 315,
        })
        .niceScroll();
    }
    $("#products-carousel").owlCarousel({
      items: 3,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 5000,
      loop: true,
      responsive: {
        0: {
          items: 2,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card card-statistic-2">
                <div className="card-stats">
                  <div className="card-stats-title">
                    Order Statistics -
                    <div className="dropdown d-inline">
                      <a
                        className="font-weight-600 dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        id="orders-month"
                      >
                        August
                      </a>
                      <ul className="dropdown-menu dropdown-menu-sm">
                        <li className="dropdown-title">Select Month</li>
                        <li>
                          <a href="#" className="dropdown-item">
                            January
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            February
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            March
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            April
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            May
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            June
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            July
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item active">
                            August
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            September
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            October
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            November
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            December
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-stats-items">
                    <div className="card-stats-item">
                      <div className="card-stats-item-count">24</div>
                      <div className="card-stats-item-label">Pending</div>
                    </div>
                    <div className="card-stats-item">
                      <div className="card-stats-item-count">12</div>
                      <div className="card-stats-item-label">Shipping</div>
                    </div>
                    <div className="card-stats-item">
                      <div className="card-stats-item-count">23</div>
                      <div className="card-stats-item-label">Completed</div>
                    </div>
                  </div>
                </div>
                <div className="card-icon shadow-primary bg-primary">
                  <i className="fas fa-archive"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Orders</h4>
                  </div>
                  <div className="card-body">59</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card card-statistic-2">
                <div className="card-chart">
                  <canvas id="balance-chart" height="80"></canvas>
                </div>
                <div className="card-icon shadow-primary bg-primary">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Balance</h4>
                  </div>
                  <div className="card-body">$187,13</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card card-statistic-2">
                <div className="card-chart">
                  <canvas id="sales-chart" height="80"></canvas>
                </div>
                <div className="card-icon shadow-primary bg-primary">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Sales</h4>
                  </div>
                  <div className="card-body">4,732</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h4>Budget vs Sales</h4>
                </div>
                <div className="card-body">
                  <canvas id="myChart" height="158"></canvas>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card gradient-bottom">
                <div className="card-header">
                  <h4>Top 5 Products</h4>
                  <div className="card-header-action dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className="btn btn-danger dropdown-toggle"
                    >
                      Month
                    </a>
                    <ul className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                      <li className="dropdown-title">Select Period</li>
                      <li>
                        <a href="#" className="dropdown-item">
                          Today
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          Week
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item active">
                          Month
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body" id="top-5-scroll">
                  <ul className="list-unstyled list-unstyled-border">
                    <li className="media">
                      <img
                        className="mr-3 rounded"
                        width="55"
                        src="../assets/img/products/product-3-50.png"
                        alt="product"
                      />
                      <div className="media-body">
                        <div className="float-right">
                          <div className="font-weight-600 text-muted text-small">
                            86 Sales
                          </div>
                        </div>
                        <div className="media-title">oPhone S9 Limited</div>
                        <div className="mt-1">
                          <div className="budget-price">
                            <div
                              className="budget-price-square bg-primary"
                              data-width="64%"
                            ></div>
                            <div className="budget-price-label">$68,714</div>
                          </div>
                          <div className="budget-price">
                            <div
                              className="budget-price-square bg-danger"
                              data-width="43%"
                            ></div>
                            <div className="budget-price-label">$38,700</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded"
                        width="55"
                        src="../assets/img/products/product-4-50.png"
                        alt="product"
                      />
                      <div className="media-body">
                        <div className="float-right">
                          <div className="font-weight-600 text-muted text-small">
                            67 Sales
                          </div>
                        </div>
                        <div className="media-title">iBook Pro 2018</div>
                        <div className="mt-1">
                          <div className="budget-price">
                            <div
                              className="budget-price-square bg-primary"
                              data-width="84%"
                            ></div>
                            <div className="budget-price-label">$107,133</div>
                          </div>
                          <div className="budget-price">
                            <div
                              className="budget-price-square bg-danger"
                              data-width="60%"
                            ></div>
                            <div className="budget-price-label">$91,455</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded"
                        width="55"
                        src="../assets/img/products/product-1-50.png"
                        alt="product"
                      />
                      <div className="media-body">
                        <div className="float-right">
                          <div className="font-weight-600 text-muted text-small">
                            63 Sales
                          </div>
                        </div>
                        <div className="media-title">Headphone Blitz</div>
                        <div className="mt-1">
                          <div className="budget-price">
                            <div
                              className="budget-price-square bg-primary"
                              data-width="34%"
                            ></div>
                            <div className="budget-price-label">$3,717</div>
                          </div>
                          <div className="budget-price">
                            <div
                              className="budget-price-square bg-danger"
                              data-width="28%"
                            ></div>
                            <div className="budget-price-label">$2,835</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded"
                        width="55"
                        src="../assets/img/products/product-3-50.png"
                        alt="product"
                      />
                      <div className="media-body">
                        <div className="float-right">
                          <div className="font-weight-600 text-muted text-small">
                            28 Sales
                          </div>
                        </div>
                        <div className="media-title">oPhone X Lite</div>
                        <div className="mt-1">
                          <div className="budget-price">
                            <div
                              className="budget-price-square bg-primary"
                              data-width="45%"
                            ></div>
                            <div className="budget-price-label">$13,972</div>
                          </div>
                          <div className="budget-price">
                            <div
                              className="budget-price-square bg-danger"
                              data-width="30%"
                            ></div>
                            <div className="budget-price-label">$9,660</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded"
                        width="55"
                        src="../assets/img/products/product-5-50.png"
                        alt="product"
                      />
                      <div className="media-body">
                        <div className="float-right">
                          <div className="font-weight-600 text-muted text-small">
                            19 Sales
                          </div>
                        </div>
                        <div className="media-title">Old Camera</div>
                        <div className="mt-1">
                          <div className="budget-price">
                            <div
                              className="budget-price-square bg-primary"
                              data-width="35%"
                            ></div>
                            <div className="budget-price-label">$7,391</div>
                          </div>
                          <div className="budget-price">
                            <div
                              className="budget-price-square bg-danger"
                              data-width="28%"
                            ></div>
                            <div className="budget-price-label">$5,472</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-footer pt-3 d-flex justify-content-center">
                  <div className="budget-price justify-content-center">
                    <div
                      className="budget-price-square bg-primary"
                      data-width="20"
                    ></div>
                    <div className="budget-price-label">Selling Price</div>
                  </div>
                  <div className="budget-price justify-content-center">
                    <div
                      className="budget-price-square bg-danger"
                      data-width="20"
                    ></div>
                    <div className="budget-price-label">Budget Price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>Best Products</h4>
                </div>
                <div className="card-body">
                  <div
                    className="owl-carousel owl-theme"
                    id="products-carousel"
                  >
                    <div>
                      <div className="product-item pb-3">
                        <div className="product-image">
                          <img
                            alt="image"
                            src="../assets/img/products/product-4-50.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="product-details">
                          <div className="product-name">iBook Pro 2018</div>
                          <div className="product-review">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="text-muted text-small">67 Sales</div>
                          <div className="product-cta">
                            <a href="#" className="btn btn-primary">
                              Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="product-item">
                        <div className="product-image">
                          <img
                            alt="image"
                            src="../assets/img/products/product-3-50.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="product-details">
                          <div className="product-name">oPhone S9 Limited</div>
                          <div className="product-review">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half"></i>
                          </div>
                          <div className="text-muted text-small">86 Sales</div>
                          <div className="product-cta">
                            <a href="#" className="btn btn-primary">
                              Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="product-item">
                        <div className="product-image">
                          <img
                            alt="image"
                            src="../assets/img/products/product-1-50.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="product-details">
                          <div className="product-name">Headphone Blitz</div>
                          <div className="product-review">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                          <div className="text-muted text-small">63 Sales</div>
                          <div className="product-cta">
                            <a href="#" className="btn btn-primary">
                              Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>Top Countries</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <FlagEcom data={flagData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h4>Invoices</h4>
                  <div className="card-header-action">
                    <a href="#" className="btn btn-danger">
                      View More <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive table-invoice">
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <th>Invoice ID</th>
                          <th>Customer</th>
                          <th>Status</th>
                          <th>Due Date</th>
                          <th>Action</th>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">INV-87239</a>
                          </td>
                          <td className="font-weight-600">Kusnadi</td>
                          <td>
                            <div className="badge badge-warning">Unpaid</div>
                          </td>
                          <td>July 19, 2018</td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">INV-48574</a>
                          </td>
                          <td className="font-weight-600">Hasan Basri</td>
                          <td>
                            <div className="badge badge-success">Paid</div>
                          </td>
                          <td>July 21, 2018</td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">INV-76824</a>
                          </td>
                          <td className="font-weight-600">Muhamad Nuruzzaki</td>
                          <td>
                            <div className="badge badge-warning">Unpaid</div>
                          </td>
                          <td>July 22, 2018</td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">INV-84990</a>
                          </td>
                          <td className="font-weight-600">Agung Ardiansyah</td>
                          <td>
                            <div className="badge badge-warning">Unpaid</div>
                          </td>
                          <td>July 22, 2018</td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">INV-87320</a>
                          </td>
                          <td className="font-weight-600">
                            Ardian Rahardiansyah
                          </td>
                          <td>
                            <div className="badge badge-success">Paid</div>
                          </td>
                          <td>July 28, 2018</td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              Detail
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-hero">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="far fa-question-circle"></i>
                  </div>
                  <h4>14</h4>
                  <div className="card-description">Customers need help</div>
                </div>
                <div className="card-body p-0">
                  <div className="tickets-list">
                    <a href="#" className="ticket-item">
                      <div className="ticket-title">
                        <h4>My order hasn't arrived yet</h4>
                      </div>
                      <div className="ticket-info">
                        <div>Laila Tazkiah</div>
                        <div className="bullet"></div>
                        <div className="text-primary">1 min ago</div>
                      </div>
                    </a>
                    <a href="#" className="ticket-item">
                      <div className="ticket-title">
                        <h4>Please cancel my order</h4>
                      </div>
                      <div className="ticket-info">
                        <div>Rizal Fakhri</div>
                        <div className="bullet"></div>
                        <div>2 hours ago</div>
                      </div>
                    </a>
                    <a href="#" className="ticket-item">
                      <div className="ticket-title">
                        <h4>Do you see my mother?</h4>
                      </div>
                      <div className="ticket-info">
                        <div>Syahdan Ubaidillah</div>
                        <div className="bullet"></div>
                        <div>6 hours ago</div>
                      </div>
                    </a>
                    <NavLink
                      activeStyle={{
                        color: "#6777ef",
                        borderBottom: "solid 3px #6777ef",
                        marginLeft: "1em",
                      }}
                      exact
                      to="feature/tickets"
                      className="ticket-item ticket-more"
                    >
                      View All <i className="fas fa-chevron-right"></i>
                    </NavLink>
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

export default EcommerceDashboard;
