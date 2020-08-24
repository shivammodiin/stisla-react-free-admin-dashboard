import $ from "jquery";
import * as jQuery from "jquery";

import React, { Component } from "react";

export class BootstrapForm extends Component {
  componentDidMount() {
    // Height attribute
    $("[data-height]").each(function() {
      $(this).css({
        height: $(this).data("height"),
      });
    });
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Form</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Bootstrap Components</a>
              </div>
              <div className="breadcrumb-item">Form</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Forms</h2>
            <p className="section-lead">
              Examples and usage guidelines for form control styles, layout
              options, and custom components for creating a wide variety of
              forms.
            </p>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>HTML5 Form Basic</h4>
                  </div>
                  <div className="card-body">
                    <div className="alert alert-info">
                      <b>Note!</b> Not all browsers support HTML5 type input.
                    </div>
                    <div className="form-group">
                      <label>Text</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Select</label>
                      <select className="form-control">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Select Multiple</label>
                      <select
                        className="form-control"
                        multiple
                        data-height="100%"
                      >
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Textarea</label>
                      <textarea className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                      <label className="d-block">Checkbox</label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="defaultCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck1"
                        >
                          Checkbox 1
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="defaultCheck3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck3"
                        >
                          Checkbox 2
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Color</label>
                      <input type="color" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Date</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Datetime Local</label>
                      <input type="datetime-local" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>File</label>
                      <input type="file" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Month</label>
                      <input type="month" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="d-block">Radio</label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          Radio 1
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios2"
                        >
                          Radio 2
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Range</label>
                      <input type="range" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Search</label>
                      <input type="search" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Tel</label>
                      <input type="tel" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Time</label>
                      <input type="time" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Url</label>
                      <input type="url" className="form-control" />
                    </div>
                    <div className="form-group mb-0">
                      <label>Week</label>
                      <input type="week" className="form-control" />
                    </div>
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-primary mr-1" type="submit">
                      Submit
                    </button>
                    <button className="btn btn-secondary" type="reset">
                      Reset
                    </button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Inline Forms</h4>
                  </div>
                  <div className="card-body">
                    <form className="form-inline">
                      <label className="sr-only" htmlFor="inlineFormInputName2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        placeholder="Jane Doe"
                      />

                      <label
                        className="sr-only"
                        htmlFor="inlineFormInputGroupUsername2"
                      >
                        Username
                      </label>
                      <div className="input-group mb-2 mr-sm-2">
                        <input
                          type="text"
                          className="form-control"
                          id="inlineFormInputGroupUsername2"
                          placeholder="Username"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Help Text</h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="inputPassword5">Password</label>
                      <input
                        type="password"
                        id="inputPassword5"
                        className="form-control"
                        aria-describedby="passwordHelpBlock"
                      />
                      <small
                        id="passwordHelpBlock"
                        className="form-text text-muted"
                      >
                        Your password must be 8-20 characters long, contain
                        letters and numbers, and must not contain spaces,
                        special characters, or emoji.
                      </small>
                    </div>
                    <div className="form-inline">
                      <div className="form-group">
                        <label htmlFor="inputPassword6">Password</label>
                        <input
                          type="password"
                          id="inputPassword6"
                          className="form-control mx-sm-3"
                          aria-describedby="passwordHelpInline"
                        />
                        <small id="passwordHelpInline" className="text-muted">
                          Must be 8-20 characters long.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Custom Forms #2</h4>
                  </div>
                  <div className="card-body">
                    <div className="section-title mt-0">Select</div>
                    <div className="form-group">
                      <label>Choose One</label>
                      <select className="custom-select">
                        <option defaultValue>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="section-title">File Browser</div>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Input Group Text</h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text">@</div>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="inlineFormInputGroup"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control text-right"
                          id="inlineFormInputGroup2"
                          placeholder="Your URL"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">.com</div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Amount (to the nearest dollar)"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Input Group #2</h4>
                  </div>
                  <div className="card-body">
                    <div className="section-title mt-0">Multiple Addons</div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            First and last name
                          </span>
                        </div>
                        <input type="text" className="form-control" />
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="section-title">Button</div>
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label=""
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            Button
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="section-title">Select With Button</div>
                    <div className="form-group">
                      <div className="input-group">
                        <select
                          className="custom-select"
                          id="inputGroupSelect04"
                        >
                          <option defaultValue>Choose...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            Button
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="section-title">
                      Select, Button &amp; Input
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <select
                          className="custom-select"
                          id="inputGroupSelect05"
                        >
                          <option defaultValue>Choose...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <input type="text" className="form-control" />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            Button
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Sizing</h4>
                  </div>
                  <div className="card-body">
                    <div className="section-title mt-0">Text</div>
                    <div className="form-group">
                      <label>
                        Text <code>.form-control-sm</code>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="form-group">
                      <label>Text</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>
                        Text <code>.form-control-lg</code>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="section-title">Select</div>
                    <div className="form-group">
                      <label>
                        Select <code>.form-control-sm</code>
                      </label>
                      <select className="form-control form-control-sm">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Select</label>
                      <select className="form-control">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        Select <code>.form-control-lg</code>
                      </label>
                      <select className="form-control form-control-lg">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h4>Disabled &amp; Read Only</h4>
                  </div>
                  <div className="card-body">
                    <div className="section-title mt-0">Text</div>
                    <div className="form-group">
                      <label>Readonly</label>
                      <input type="text" className="form-control" readOnly="" />
                    </div>
                    <div className="form-group">
                      <label>Readonly Plain Text</label>
                      <input
                        type="text"
                        className="form-control-plaintext"
                        readOnly=""
                        defaultValue="Hello!"
                      />
                    </div>

                    <div className="section-title">Select</div>
                    <div className="form-group">
                      <label>Select Disabled</label>
                      <select className="form-control" disabled>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>

                    <div className="section-title">Checkbox</div>
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck2"
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck2"
                        >
                          Disabled checkbox
                        </label>
                      </div>
                    </div>

                    <div className="section-title">Radio</div>
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          value=""
                          id="radioDisabled"
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="radioDisabled"
                        >
                          Disabled radio
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h4>Inline</h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label className="d-block">Inline Checkbox</label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox3"
                        >
                          3 (disabled)
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="d-block">Inline Radio</label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="inlineradio1"
                          value="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineradio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="inlineradio2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineradio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="inlineradio3"
                          value="option3"
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox3"
                        >
                          3 (disabled)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h4>Horizontal Form</h4>
                  </div>
                  <div className="card-body">
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress2">Address 2</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCity"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" className="form-control">
                          <option defaultValue>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputZip"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h4>Horizontal Form</h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail3"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      >
                        Password
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword3"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <fieldset className="form-group">
                      <div className="row">
                        <div className="col-form-label col-sm-3 pt-0">
                          Radios
                        </div>
                        <div className="col-sm-9">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios1"
                              value="option1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gridRadios1"
                            >
                              First radio
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gridRadios2"
                            >
                              Second radio
                            </label>
                          </div>
                          <div className="form-check disabled">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios3"
                              value="option3"
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gridRadios3"
                            >
                              Third disabled radio
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="form-group row">
                      <div className="col-sm-3">Checkbox</div>
                      <div className="col-sm-9">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck1"
                          >
                            Example checkbox
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h4>Custom Forms</h4>
                  </div>
                  <div className="card-body">
                    <div className="section-title mt-0">Checkbox</div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Check this custom checkbox
                      </label>
                    </div>

                    <div className="section-title">Checkbox</div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadio1"
                      >
                        Toggle this custom radio
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadio2"
                      >
                        Or toggle this other custom radio
                      </label>
                    </div>

                    <div className="section-title">Inline</div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline1"
                        name="customRadioInline1"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadioInline1"
                      >
                        Toggle this custom radio
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline2"
                        name="customRadioInline1"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadioInline2"
                      >
                        Or toggle this other custom radio
                      </label>
                    </div>

                    <div className="section-title">Disabled</div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheckDisabled"
                        disabled
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckDisabled"
                      >
                        Check this custom checkbox
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="radioDisabled"
                        className="custom-control-input"
                        disabled
                      />
                      <label className="custom-control-label">
                        Toggle this custom radio
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Learn More</h4>
                  </div>
                  <div className="card-body">
                    <div className="jumbotron text-center">
                      <h2>Learn More</h2>
                      <p className="lead text-muted mt-3">
                        All the above form elements are the default of bootstrap
                        and you can learn them on the official documentation
                        provided by Bootstrap.
                      </p>
                      <a
                        className="btn btn-primary mt-3"
                        href="https://getbootstrap.com/docs/4.0/components/forms/"
                        target="_blank"
                        rel="noreferrer"
                        role="button"
                      >
                        Learn more
                      </a>
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

export default BootstrapForm;
