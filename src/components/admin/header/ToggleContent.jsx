import React, { Component } from "react";

export class ToggleContent extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={`dropdown-list-content ${data.listClass}`}>
        {data.content.map((content, icontent) => {
          return (
            <a
              key={icontent}
              href="#"
              className={`dropdown-item ${
                content.unreadClass === true ? "dropdown-item-unread" : ""
              }`}
            >
              {content.img ? (
                <div className="dropdown-item-avatar">
                  <img
                    src={content.img}
                    className="rounded-circle"
                    alt="imag"
                  />
                  {content.online ? <div className="is-online" /> : null}
                </div>
              ) : (
                <div
                  className={`dropdown-item-icon ${content.bgClass} text-white`}
                >
                  <i className={content.iClassname} />
                </div>
              )}

              <div className="dropdown-item-desc">
                {content.title ? <b>{content.title}</b> : null}
                <p>{content.description}</p>
                <div
                  className={`time ${content.textCls ? content.textCls : null}`}
                >
                  {content.time}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default ToggleContent;
