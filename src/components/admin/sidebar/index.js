import React from "react";
import { NavLink } from "react-router-dom";
import { Data } from "./data";

const SideBar = () => {
  return (
    <div className="main-sidebar">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="index.html">Stisla</a>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <a href="index.html">St</a>
        </div>
        <ul className="sidebar-menu mb-5">
          {Data.menus.map((menu, iMenu) => {
            let comp;
            if (menu.header) {
              comp = (
                <li key={iMenu} className="menu-header">
                  {menu.name}
                </li>
              );
            } else if (menu.dropdown) {
              if (menu.active) {
                comp = (
                  <li key={iMenu} className="nav-item dropdown active">
                    <a href="#" className="nav-link has-dropdown">
                      <i className={menu.icon} />
                      <span>{menu.name}</span>
                    </a>
                    <ul className="dropdown-menu">
                      {menu.children.map((submenu, iSubmenu) => {
                        let subComp;
                        if (submenu.active) {
                          if (submenu.beep) {
                            subComp = (
                              <li key={iSubmenu} className="active">
                                <NavLink
                                  activeStyle={{
                                    color: "#6777ef",
                                    borderBottom: "solid 3px #6777ef",
                                    marginLeft: "1em",
                                  }}
                                  exact
                                  className="beep beep-sidebar"
                                  to={submenu.url}
                                >
                                  {submenu.name}
                                </NavLink>
                              </li>
                            );
                          } else {
                            subComp = (
                              <li key={iSubmenu}>
                                <NavLink
                                  activeStyle={{
                                    color: "#6777ef",
                                    borderBottom: "solid 3px #6777ef",
                                    marginLeft: "1em",
                                  }}
                                  exact
                                  to={submenu.url}
                                >
                                  {submenu.name}
                                </NavLink>
                              </li>
                            );
                          }
                        } else if (submenu.beep) {
                          subComp = (
                            <li key={iSubmenu}>
                              <NavLink
                                activeStyle={{
                                  color: "#6777ef",
                                  borderBottom: "solid 3px #6777ef",
                                  marginLeft: "1em",
                                }}
                                exact
                                className="beep beep-sidebar"
                                to={submenu.url}
                              >
                                {submenu.name}
                              </NavLink>
                            </li>
                          );
                        } else {
                          subComp = (
                            <li key={iSubmenu}>
                              <NavLink
                                activeStyle={{
                                  color: "#6777ef",
                                  borderBottom: "solid 3px #6777ef",
                                  marginLeft: "1em",
                                }}
                                exact
                                to={submenu.url}
                              >
                                {submenu.name}
                              </NavLink>
                            </li>
                          );
                        }

                        return subComp;
                      })}
                    </ul>
                  </li>
                );
              } else {
                comp = (
                  <li key={iMenu} className="nav-item dropdown">
                    <a href="#" className="nav-link has-dropdown">
                      <i className={menu.icon} />
                      <span>{menu.name}</span>
                    </a>
                    <ul className="dropdown-menu">
                      {menu.children.map((submenu, iSubmenu) => {
                        let subComp;
                        if (submenu.active) {
                          if (submenu.beep) {
                            subComp = (
                              <li key={iSubmenu} className="active">
                                <NavLink
                                  activeStyle={{
                                    color: "#6777ef",
                                    borderBottom: "solid 3px #6777ef",
                                    marginLeft: "1em",
                                  }}
                                  exact
                                  className="beep beep-sidebar"
                                  to={submenu.url}
                                >
                                  {submenu.name}
                                </NavLink>
                              </li>
                            );
                          } else {
                            subComp = (
                              <li key={iSubmenu} className="active">
                                <NavLink
                                  activeStyle={{
                                    color: "#6777ef",
                                    borderBottom: "solid 3px #6777ef",
                                    marginLeft: "1em",
                                  }}
                                  exact
                                  to={submenu.url}
                                >
                                  {submenu.name}
                                </NavLink>
                              </li>
                            );
                          }
                        } else if (submenu.beep) {
                          subComp = (
                            <li key={iSubmenu}>
                              <NavLink
                                activeStyle={{
                                  color: "#6777ef",
                                  borderBottom: "solid 3px #6777ef",
                                  marginLeft: "1em",
                                }}
                                exact
                                className="beep beep-sidebar"
                                to={submenu.url}
                              >
                                {submenu.name}
                              </NavLink>
                            </li>
                          );
                        } else {
                          subComp = (
                            <li key={iSubmenu}>
                              <NavLink
                                activeStyle={{
                                  color: "#6777ef",
                                  borderBottom: "solid 3px #6777ef",
                                  marginLeft: "1em",
                                }}
                                exact
                                to={submenu.url}
                              >
                                {submenu.name}
                              </NavLink>
                            </li>
                          );
                        }

                        return subComp;
                      })}
                    </ul>
                  </li>
                );
              }
            } else if (menu.active) {
              //
              comp = (
                <li key={iMenu} className="s">
                  <NavLink
                    activeStyle={{
                      color: "#6777ef",
                      borderBottom: "solid 3px #6777ef",
                      marginLeft: "1em",
                    }}
                    exact
                    to={menu.url}
                  >
                    <i className={menu.icon} />
                    <span>{menu.name}</span>
                  </NavLink>
                </li>
              );
            } else {
              //Single Component
              comp = (
                <li key={iMenu}>
                  <NavLink
                    activeStyle={{
                      color: "#6777ef",
                      borderBottom: "solid 3px #6777ef",
                      marginLeft: "1em",
                    }}
                    exact
                    to={menu.url}
                  >
                    <i className={menu.icon} />
                    <span>{menu.name}</span>
                  </NavLink>
                </li>
              );
            }

            return comp;
          })}
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
