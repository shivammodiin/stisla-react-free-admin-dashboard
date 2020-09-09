import React, { Component } from "react";
import ProgressHeightWidth from "../../js/ProgressHeightWidth";
import $ from "jquery";
import GMaps from "gmaps";

export class AdvancedRoute extends Component {
  componentDidMount() {
    ProgressHeightWidth();

    // initialize map
    var map = new GMaps({
      div: "#map",
      lat: -6.5637928,
      lng: 106.7535061,
    });

    // when the 'start travel' button is clicked
    $("#start-travel").click(function() {
      $(this).fadeOut();
      $("#instructions").before(
        "<div class='section-title'>Instructions</div>"
      );

      // map.travelRoute({
      //   origin: [-6.5637928, 106.7535061],
      //   destination: [-6.5956157, 106.788236],
      //   travelMode: "driving",
      //   step: function(e) {
      //     $("#instructions").append(
      //       '<li class="media"><div class="media-icon"><i class="far fa-circle"></i></div><div class="media-body">' +
      //         e.instructions +
      //         "</div></li>"
      //     );
      //     $("#instructions li:eq(" + e.step_number + ")")
      //       .delay(450 * e.step_number)
      //       .fadeIn(200, function() {
      //         map.setCenter(e.end_location.lat(), e.end_location.lng());
      //         map.drawPolyline({
      //           path: e.path,
      //           strokeColor: "#131540",
      //           strokeOpacity: 0.6,
      //           strokeWeight: 6,
      //         });
      //       });
      //   },
      // });
    });
  }
  render() {
    return (
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Advanced Route</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div class="breadcrumb-item">
                <a href="#">Google Maps</a>
              </div>
              <div class="breadcrumb-item">Advanced Route</div>
            </div>
          </div>

          <div class="section-body">
            <h2 class="section-title">Advanced Route</h2>
            <p class="section-lead">
              The same as the 'route' example, but in this example it will be a
              bit cooler. Click the 'Start Travel' button to start seeing magic.
            </p>

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Advanced Routes</h4>
                  </div>
                  <div class="card-body">
                    <div id="map" data-height="300"></div>
                    <div class="text-center mt-4">
                      <a
                        href="javascript:;"
                        class="btn btn-primary btn-icon icon-left"
                        id="start-travel"
                      >
                        <i class="fas fa-play"></i> Start Travel
                      </a>
                    </div>
                    <div class="mt-4">
                      <ul
                        id="instructions"
                        class="list-unstyled list-unstyled-border"
                      ></ul>
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

export default AdvancedRoute;
