import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line no-undef
import { BrowserRouter, HashRouter } from "react-router-dom";

import App from "./App";

// // Template JS File
import "bootstrap/dist/css/bootstrap.min.css";

import * as jQuery from "jquery";
import "jqvmap/dist/jqvmap.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "dropzone/dist/min/dropzone.min.css";

import "./assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";

import "summernote/dist/summernote-bs4.css";
// Template

// import "./index.css";
import "bootstrap-social/bootstrap-social.css";
import "chocolat/dist/css/chocolat.css";

import "ionicons201/css/ionicons.min.css";
import "selectric/public/selectric.css";

import "@mdi/font/css/materialdesignicons.min.css";
import * as serviceWorker from "./serviceWorker";
import "flag-icon-css/css/flag-icon.css";
import "./assets/css/components.css";
// import "bootstrap-timepicker/css/bootstrap-timepicker.min.css"

window.jQuery = jQuery;
window.$ = jQuery;
// require("sweetalert2/dist/sweetalert.min.js");
require("bootstrap-timepicker/css/bootstrap-timepicker.min.css");
require("bootstrap-timepicker/js/bootstrap-timepicker.js");
require("bootstrap-daterangepicker/daterangepicker.js");
require("bootstrap-daterangepicker/daterangepicker.css");
require("bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css");
require("bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js");
require("bootstrap-timepicker/js/bootstrap-timepicker.js");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/duotone-dark.css");
require("codemirror/lib/codemirror.js");
require("codemirror/mode/javascript/javascript.js");

require("inputmask/dist/inputmask/jquery.inputmask");
require("inputmask/dist/inputmask/inputmask.date.extensions");
require("inputmask/dist/inputmask/inputmask.extensions");
require("popper.js/dist/popper.min");
require("jquery.nicescroll/dist/jquery.nicescroll.min");
require("select2/dist/js/select2.full");
require("bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min");
require("bootstrap-tagsinput/dist/bootstrap-tagsinput");
// require("jquery_upload_preview/assets/js/jquery.uploadPreview.min.js");
require("bootstrap-daterangepicker/daterangepicker");
require("bootstrap-timepicker/js/bootstrap-timepicker.min");
require("bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min");
require("bootstrap-datepicker/dist/js/bootstrap-datepicker.min");
require("bootstrap/dist/js/bootstrap.min");
require("bootstrap-select/dist/js/bootstrap-select");
require("selectric/public/jquery.selectric.min.js");

window.JSZip = require("jszip");
require("datatables.net-bs4");
require("datatables.net-buttons-bs4");
require("datatables.net-buttons/js/buttons.html5");
require("datatables.net-buttons/js/buttons.print");
require("datatables.net-buttons/js/buttons.colVis");
require("pdfmake/build/pdfmake.min");
require("pdfmake/build/vfs_fonts");
require("datatables.net-responsive");
require("datatables.net-responsive-bs4");
require("datatables.net-select");
require("datatables.net-select-bs4");
require("prismjs/themes/prism.css");

window.swal = require("sweetalert2");
window.moment = require("moment");

// window.Chart = require("chart.js/dist/Chart.min");
window.Chart = require("chart.js");
//
// JS Libraies
require("jquery-sparkline/jquery.sparkline.min");
require("simpleweather/jquery.simpleWeather.min");
require("jqvmap/dist/jquery.vmap.min");
require("jqvmap/dist/maps/jquery.vmap.world");
require("owl.carousel/dist/owl.carousel.min");
require("summernote/dist/summernote-bs4");
require("prismjs/prism.js");
require("dropzone/dist/min/dropzone.min.js");
require("chocolat/dist/js/jquery.chocolat.min.js");
require("bootstrap-daterangepicker/daterangepicker.js");
require("bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js");
require("bootstrap-timepicker/js/bootstrap-timepicker.min.js");

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>{" "}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
