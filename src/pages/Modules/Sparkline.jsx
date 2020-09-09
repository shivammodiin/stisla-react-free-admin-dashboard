import React, { Component } from "react";
import $ from "jquery";

export class Sparkline extends Component {
  componentDidMount() {
    var sparkline_values = [
        110,
        147,
        324,
        108,
        235,
        498,
        346,
        525,
        382,
        214,
        427,
        424,
        239,
        236,
        475,
        569,
      ],
      sparkline_values_bar = [
        10,
        7,
        4,
        8,
        5,
        8,
        6,
        5,
        2,
        4,
        7,
        4,
        9,
        10,
        7,
        4,
        8,
        5,
        8,
        6,
        5,
        4,
      ],
      sparkline_pie = [30, 20, 10];

    $(".sparkline-inline").sparkline(sparkline_values, {
      type: "line",
      width: "100%",
      height: "200",
      lineWidth: 3,
      lineColor: "rgba(63,82,227,.1)",
      fillColor: "rgba(63,82,227,.4)",
      highlightSpotColor: "rgba(63,82,227,.1)",
      highlightLineColor: "rgba(63,82,227,.1)",
      spotRadius: 3,
    });

    $(".sparkline-line").sparkline(sparkline_values, {
      type: "line",
      width: "100%",
      height: "200",
      lineWidth: 3,
      lineColor: "rgba(63,82,227,.6)",
      fillColor: "transparent",
      highlightSpotColor: "rgba(63,82,227,.1)",
      highlightLineColor: "rgba(63,82,227,.1)",
      spotRadius: 3,
    });

    $(".sparkline-bar").sparkline(sparkline_values_bar, {
      type: "bar",
      width: "100%",
      height: "200",
      barColor: "rgb(63,82,227)",
      barWidth: 20,
    });

    $(".sparkline-pie").sparkline(sparkline_pie, {
      type: "pie",
      width: "auto",
      height: "200",
      barWidth: 20,
    });
  }
  render() {
    return (
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Sparkline</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div class="breadcrumb-item">
                <a href="#">Modules</a>
              </div>
              <div class="breadcrumb-item">Sparkline</div>
            </div>
          </div>

          <div class="section-body">
            <h2 class="section-title">Sparkline</h2>
            <p class="section-lead">
              We use 'Sparkline' made by 'Gareth Watts'. You can check the full
              documentation{" "}
              <a href="https://omnipotent.net/jquery.sparkline/">here</a>.
            </p>

            <div class="row">
              <div class="col-12 col-md-6 col-lg-6">
                <div class="card">
                  <div class="card-header">
                    <h4>Line Chart</h4>
                  </div>
                  <div class="card-body">
                    <div class="sparkline-inline"></div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <div class="card">
                  <div class="card-header">
                    <h4>Bar Chart</h4>
                  </div>
                  <div class="card-body">
                    <div class="sparkline-bar"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6">
                <div class="card">
                  <div class="card-header">
                    <h4>Line Chart #2</h4>
                  </div>
                  <div class="card-body">
                    <div class="sparkline-line"></div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <div class="card">
                  <div class="card-header">
                    <h4>Pie Chart</h4>
                  </div>
                  <div class="card-body">
                    <div class="text-center">
                      <div class="sparkline-pie d-inline"></div>
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

export default Sparkline;
