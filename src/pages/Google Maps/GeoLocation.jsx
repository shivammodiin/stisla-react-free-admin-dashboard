import React, { Component } from "react";
import ProgressHeightWidth from "../../js/ProgressHeightWidth.js";
import GMaps from "gmaps";
import toastr from "izitoast";

export class GeoLocation extends Component {
  componentDidMount() {
    ProgressHeightWidth();

    // initialize map
    var map = new GMaps({
      div: "#map",
      lat: -6.5637928,
      lng: 106.7535061,
    });
    // initialize map geolocation
    GMaps.geolocate({
      // when geolocation is allowed by user
      success: function(position) {
        // set center map according to user position
        // map.setCenter(position.coords.latitude, position.coords.longitude);
        // add a marker to the map
        // map.addMarker({
        //   lat: position.coords.latitude,
        //   lng: position.coords.longitude,
        //   title: "You",
        // });
      },
      // when geolocation is blocked by the user
      error: function(error) {
        toastr.error("Geolocation failed: " + error.message);
      },
      // when the user's browser does not support
      not_supported: function() {
        toastr.error("Your browser does not support geolocation");
      },
    });
  }
  render() {
    return (
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Geolocation</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div class="breadcrumb-item">
                <a href="#">Google Maps</a>
              </div>
              <div class="breadcrumb-item">Geolocation</div>
            </div>
          </div>

          <div class="section-body">
            <h2 class="section-title">Geolocation</h2>
            <p class="section-lead">
              Here is a simple example using the map, we use the plugin{" "}
              <code>gmaps.js</code> made by{" "}
              <a href="https://github.com/hpneo" target="_blank">
                @hpneo
              </a>
              . You can learn more about this plugin{" "}
              <a href="https://github.com/hpneo/gmaps" target="_blank">
                here
              </a>
              .
            </p>

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Geolocation</h4>
                  </div>
                  <div class="card-body">
                    <div class="alert alert-info">
                      In this example there will be a marker on the map located
                      in accordance with your position. Click 'allow' in the
                      popup that appears in your browser.
                    </div>
                    <div id="map" data-height="400"></div>
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

export default GeoLocation;
