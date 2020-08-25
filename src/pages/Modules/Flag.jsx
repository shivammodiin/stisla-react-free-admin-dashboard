import React, { Component } from "react";
import FlagMap from "./Flag/FlagMap";
const reqSvgs = require.context(
  "!@svgr/webpack!flag-icon-css/flags/4x3",
  true,
  /\.svg$/
);

export class Flag extends Component {
  render() {
    const flagMap = reqSvgs.keys().reduce((images, path) => {
      const key = path.substring(
        path.lastIndexOf("/") + 1,
        path.lastIndexOf(".")
      );
      images[key] = reqSvgs(path).default;
      return images;
    }, {});

    let dataFlagNAme = {};
    Object.keys(flagMap).map(function(key, index) {
      dataFlagNAme[key] = key;
    });

    console.log(flagMap);
    console.log(dataFlagNAme);

    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Flag</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Modules</a>
              </div>
              <div className="breadcrumb-item">Flag</div>
            </div>
          </div>
          <div className="section-body">
            <h2 className="section-title">Flag</h2>
            <p className="section-lead">
              We also added the 'flag-icon-css' library to make it easier for
              you to display the country icon. This library was created by
              @lipis
            </p>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Flag</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <FlagMap flags={dataFlagNAme} />
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

export default Flag;
