import React, { Component } from "react";
import { MultipleImageUpload } from "../../js/MultipleUploads";

export class CompMultipleupload extends Component {
  componentDidMount() {
    MultipleImageUpload();
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Multiple Upload</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Components</a>
              </div>
              <div className="breadcrumb-item">Multiple Upload</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Multiple Upload</h2>
            <p className="section-lead">
              We use 'Dropzone.js' made by @Dropzone. You can check the full
              documentation <a href="http://www.dropzonejs.com/">here</a>.
            </p>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Multiple Upload</h4>
                  </div>
                  <div className="card-body">
                    <form action="#" className="dropzone" id="mydropzone">
                      <div className="fallback">
                        <input name="file" type="file" multiple />
                      </div>
                    </form>
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

export default CompMultipleupload;
