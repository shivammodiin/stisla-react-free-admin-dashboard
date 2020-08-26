import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Error500 extends Component {
  render() {
    return (
      <div id="app">
        <section class="section">
          <div class="container mt-5">
            <div class="page-error">
              <div class="page-inner">
                <h1>500</h1>
                <div class="page-description">
                  Whoopps, something went wrong.
                </div>
                <div class="page-search">
                  <form>
                    <div class="form-group floating-addon floating-addon-not-append">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <i class="fas fa-search"></i>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search"
                        />
                        <div class="input-group-append">
                          <button class="btn btn-primary btn-lg">Search</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="mt-3">
                    <Link to="/">Back to Home</Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="simple-footer mt-5">Copyright &copy; Stisla 2018</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Error500;
