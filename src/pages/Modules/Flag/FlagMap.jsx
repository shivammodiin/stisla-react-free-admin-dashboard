import React, { Component } from "react";
import flagName from "./FlagName.json";

export class FlagMap extends Component {
  render() {
    const { flags } = this.props;

    console.log(flags);

    return (
      <>
        {Object.keys(flags).map((flag, iflag) => {
          let FullData = flagName.filter((data) => {
            if (data.code.toLowerCase() == flag) {
              return true;
            }
          });

          return (
            <div class="col-6 col-md-3 col-lg-2 mb-5">
              <div
                class="country"
                data-name={FullData[0] !== undefined ? FullData[0].name : ""}
                data-continent="Asia"
              >
                <div
                  class="mb-2"
                  title={FullData[0] !== undefined ? FullData[0].name : ""}
                >
                  <span class="badge badge-primary">{flag.toUpperCase()}</span>
                  {FullData[0] !== undefined ? FullData[0].name : ""}
                </div>
                <img
                  class="img-fluid"
                  src={require(`../../../../node_modules/flag-icon-css/flags/4x3/${flag}.svg`)}
                  alt={`${
                    FullData[0] !== undefined ? FullData[0].name : ""
                  } Flag`}
                />
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default FlagMap;
