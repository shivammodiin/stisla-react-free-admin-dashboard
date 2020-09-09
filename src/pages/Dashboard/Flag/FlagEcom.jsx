import React, { Component } from "react";
const reqSvgs = require.context(
  "!@svgr/webpack!flag-icon-css/flags/4x3",
  true,
  /\.svg$/
);

const flagMap = reqSvgs.keys().reduce((images, path) => {
  const key = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
  images[key] = reqSvgs(path).default;
  return images;
}, {});

export class FlagEcom extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        {data.map((content, icontent) => {
          return (
            <div
              key={icontent}
              className={`col-sm-6 ${
                content.exextraCls ? content.exextraCls : null
              }`}
            >
              <div className="text-title mb-2">{content.month}</div>
              <ul className="list-unstyled list-unstyled-border list-unstyled-noborder mb-0">
                {content.datas.map((data, idata) => {
                  //   const Flag = flagMap["id"];
                  //   // let imgValue = require(data.flagImg);
                  //   console.log(Flag);
                  //   console.log(flagMap);
                  return (
                    <li className="media" key={idata}>
                      <span
                        style={{ width: "38px" }}
                        className={`flag-icon flag-icon-${data.flagSlug} img-fluid mt-1 img-shadow `}
                      ></span>
                      {/* <img
                        className="img-fluid mt-1 img-shadow"
                        src={Flag}
                        alt="img"
                        width="40"
                      /> */}

                      <div className="media-body ml-3">
                        <div className="media-title">{data.flagName}</div>
                        <div className="text-small text-muted">
                          {data.fValue} <i className={data.iCode}></i>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </>
    );
  }
}

export default FlagEcom;
