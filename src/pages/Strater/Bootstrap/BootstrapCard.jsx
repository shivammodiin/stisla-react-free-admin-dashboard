import React, { Component } from "react";
import $ from "jquery";
import * as jQuery from "jquery";

export default class BootstrapCard extends Component {
  componentDidMount() {
    $("[data-collapse]").each(function() {
      let me = $(this);
      var target = me.data("collapse");

      me.click(function() {
        $(target).collapse("toggle");
        $(target).on("shown.bs.collapse", function(e) {
          e.stopPropagation();
          me.html('<i className="fas fa-minus"></i>');
        });
        $(target).on("hidden.bs.collapse", function(e) {
          e.stopPropagation();
          me.html('<i className="fas fa-plus"></i>');
        });
        return false;
      });
    });

    $("[data-dismiss]").each(function() {
      let me = $(this);
      var target = me.data("dismiss");

      me.click(function() {
        $(target).fadeOut(function() {
          $(target).remove();
        });
        return false;
      });
    });

    if (jQuery().Chocolat) {
      $(".gallery").Chocolat({
        classNameName: "gallery",
        imageSelector: ".gallery-item",
      });
    }
    $("[data-background]").each(function() {
      let me = $(this);
      me.css({
        backgroundImage: "url(" + me.data("background") + ")",
      });
    });
    $("[data-crop-image]").each(function(e) {
      $(this).css({
        overflow: "hidden",
        position: "relative",
        height: $(this).data("crop-image"),
      });
    });

    if ($(".chocolat-parent").length && jQuery().Chocolat) {
      $(".chocolat-parent").Chocolat();
    }

    // Card Progress Controller
    $.cardProgress = function(card, options) {
      var options = $.extend(
        {
          dismiss: false,
          dismissText: "Cancel",
          spinner: true,
          onDismiss: function() {},
        },
        options
      );

      var me = $(card);

      me.addClass("card-progress");
      if (options.spinner == false) {
        me.addClass("remove-spinner");
      }

      if (options.dismiss == true) {
        var btn_dismiss =
          '<a class="btn btn-danger card-progress-dismiss">' +
          options.dismissText +
          "</a>";
        btn_dismiss = $(btn_dismiss)
          .off("click")
          .on("click", function() {
            me.removeClass("card-progress");
            me.find(".card-progress-dismiss").remove();
            options.onDismiss.call(this, me);
          });
        me.append(btn_dismiss);
      }

      return {
        dismiss: function(dismissed) {
          $.cardProgressDismiss(me, dismissed);
        },
      };
    };

    $.cardProgressDismiss = function(card, dismissed) {
      var me = $(card);
      me.removeClass("card-progress");
      me.find(".card-progress-dismiss").remove();
      if (dismissed) dismissed.call(this, me);
    };
  }

  handleLoginClick = (e) => {
    e.preventDefault();
    jQuery.cardProgress("#sample-login", {
      dismiss: true,
      onDismiss: function() {
        alert("Dismissed :)");
      },
    });
    return false;
  };
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Card</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Bootstrap Components</a>
              </div>
              <div className="breadcrumb-item">Card</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Cards</h2>
            <p className="section-lead">
              Bootstrap’s cards provide a flexible and extensible content
              container with multiple variants and options.
            </p>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Card Title</h4>
                  </div>
                  <div className="card-body">
                    This is some text within a card body.
                  </div>
                  <div className="card-footer">Footer Card</div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Card Action Button</h4>
                  </div>
                  <div className="card-body">
                    This is some text within a card body.
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Card Title</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>
                      Footer <code>bg-whitesmoke</code>
                    </h4>
                  </div>
                  <div className="card-body">
                    This is some text within a card body.
                  </div>
                  <div className="card-footer bg-whitesmoke">Footer Card</div>
                </div>
              </div>
            </div>

            <h2 className="section-title">Card Variants</h2>
            <p className="section-lead">
              Basically, the Bootstrap card can be given a color variant.
            </p>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Card Header</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Card <code>.card-primary</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card card-secondary">
                  <div className="card-header">
                    <h4>Card Header</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Card <code>.card-secondary</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card card-danger">
                  <div className="card-header">
                    <h4>Card Header</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Card <code>.card-danger</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card card-warning">
                  <div className="card-header">
                    <h4>Card Header</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Card <code>.card-warning</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card card-info">
                  <div className="card-header">
                    <h4>Card Header</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Card <code>.card-info</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card card-success">
                  <div className="card-header">
                    <h4>Card Header</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Card <code>.card-success</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card card-light">
                  <div className="card-header">
                    <h4>Card Header</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Card <code>.card-light</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card card-dark">
                  <div className="card-header">
                    <h4>Card Header</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Card <code>.card-dark</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="section-title">Card Button &amp; Input</h2>
            <p className="section-lead">
              Also, you can give a button or input on the card header.
            </p>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Card Header</h4>
                    <div className="card-header-action">
                      <a href="#" className="btn btn-primary">
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>Write something here</p>
                  </div>
                </div>
                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Button Group</h4>
                    <div className="card-header-action">
                      <div className="btn-group">
                        <a href="#" className="btn btn-primary">
                          Home
                        </a>
                        <a href="#" className="btn btn-primary">
                          Profile
                        </a>
                        <a href="#" className="btn btn-primary">
                          Setting
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>Write something here</p>
                  </div>
                </div>
                <div className="card card-success">
                  <div className="card-header">
                    <h4>Input Text</h4>
                    <form className="card-header-form">
                      <input
                        type="text"
                        name="search"
                        className="form-control"
                        placeholder="Search"
                      />
                    </form>
                  </div>
                  <div className="card-body">
                    <p>Write something here</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card card-secondary">
                  <div className="card-header">
                    <h4>Card Header</h4>
                    <div className="card-header-action">
                      <a href="#" className="btn btn-primary">
                        View All
                      </a>
                      <a href="#" className="btn btn-danger">
                        Delete All
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>Write something here</p>
                  </div>
                </div>
                <div className="card card-danger">
                  <div className="card-header">
                    <h4>Dropdown Button</h4>
                    <div className="card-header-action">
                      <a href="#" className="btn btn-primary">
                        View All
                      </a>
                      <div className="dropdown">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          className="btn btn-warning dropdown-toggle"
                        >
                          Options
                        </a>
                        <div className="dropdown-menu">
                          <a href="#" className="dropdown-item has-icon">
                            <i className="fas fa-eye"></i> View
                          </a>
                          <a href="#" className="dropdown-item has-icon">
                            <i className="far fa-edit"></i> Edit
                          </a>
                          <div className="dropdown-divider"></div>
                          <a
                            href="#"
                            className="dropdown-item has-icon text-danger"
                          >
                            <i className="far fa-trash-alt"></i> Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>Write something here</p>
                  </div>
                </div>
                <div className="card card-warning">
                  <div className="card-header">
                    <h4>Input Button</h4>
                    <form className="card-header-form">
                      <div className="input-group">
                        <input
                          type="text"
                          name="search"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-btn">
                          <button className="btn btn-primary btn-icon">
                            <i className="fas fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-body">
                    <p>Write something here</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="section-title">Functionality Card</h2>
            <p className="section-lead">
              You can provide functionality on the card.
            </p>

            <div className="row">
              <div className="col-12 col-sm-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Show/Hide</h4>
                    <div className="card-header-action">
                      <a
                        data-collapse="#mycard-collapse"
                        className="btn btn-icon btn-info"
                        href="#"
                      >
                        <i className="fas fa-minus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="collapse show" id="mycard-collapse">
                    <div className="card-body">
                      You can show or hide this card.
                    </div>
                    <div className="card-footer">Card Footer</div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>My Picture</h4>
                    <div className="card-header-action">
                      <a href="#" className="btn btn-primary">
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-2 text-muted">
                      Click the picture below to see the magic!
                    </div>
                    <div className="chocolat-parent">
                      <a
                        href="../assets/img/example-image.jpg"
                        className="chocolat-image"
                        title="Just an example"
                      >
                        <div data-crop-image="285">
                          <img
                            alt="image"
                            src="../assets/img/example-image.jpg"
                            className="img-fluid"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-6">
                <div className="card" id="mycard-dimiss">
                  <div className="card-header">
                    <h4>Dismiss</h4>
                    <div className="card-header-action">
                      <a
                        data-dismiss="#mycard-dimiss"
                        className="btn btn-icon btn-danger"
                        href="#"
                      >
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                  </div>
                  <div className="card-body">You can dimiss this card.</div>
                  <div className="card-footer">Card Footer</div>
                </div>
                <div className="card" id="sample-login">
                  <form>
                    <div className="card-header">
                      <h4>Login</h4>
                    </div>
                    <div className="card-body pb-0">
                      <p className="text-muted">
                        Click login to change the card to progress mode.
                      </p>
                      <div className="form-group">
                        <label>Username</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-envelope"></i>
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-lock"></i>
                            </div>
                          </div>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="remember"
                            className="custom-control-input"
                            id="remember-me"
                          />
                          <label
                            className="custom-control-label"
                            for="remember-me"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer pt-">
                      <button
                        type="submit"
                        onClick={this.handleLoginClick}
                        // ()=>
                        //    console.log("d")
                        // //    $.cardProgress(
                        // //     '#sample-login',
                        // //      {dismiss: true,onDismiss: function() {
                        // //        alert('Dismissed :)')
                        // //       }
                        // //     }
                        // //     )
                        // // return false;
                        className="btn btn-primary"
                      >
                        Login
                      </button>
                      <a href="#" className="ml-2">
                        Create new Account?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <h2 className="section-title">Sortable Card</h2>
            <p className="section-lead">
              Other cool cards, this one can be sorted.
            </p>

            <div className="row sortable-card">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Card Header</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Card <code>.card-primary</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card card-secondary">
                  <div className="card-header">
                    <h4>Card Header</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Card <code>.card-secondary</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card card-danger">
                  <div className="card-header">
                    <h4>Card Header</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Card <code>.card-danger</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card card-warning">
                  <div className="card-header">
                    <h4>Card Header</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Card <code>.card-warning</code>
                    </p>
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
