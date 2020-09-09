import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line no-undef
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// // Template JS File
import "bootstrap/dist/css/bootstrap.min.css";

import * as jQuery from "jquery";
import "jqvmap/dist/jqvmap.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import "owl.carousel/dist/assets/owl.carousel.min.css";
import "dropzone/dist/min/dropzone.min.css";
import "bootstrap-social/bootstrap-social.css";

import "./assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";

import "summernote/dist/summernote-bs4.css";
// Template

// import "./index.css";
import "chocolat/dist/css/chocolat.css";

import "ionicons201/css/ionicons.min.css";
import "selectric/public/selectric.css";

import "@mdi/font/css/materialdesignicons.min.css";
import * as serviceWorker from "./serviceWorker";
import "flag-icon-css/css/flag-icon.css";
// import "bootstrap-timepicker/css/bootstrap-timepicker.min.css"
import "./assets/css/components.css";

window.jQuery = jQuery;
window.$ = jQuery;

require("sweetalert/dist/sweetalert.min.js");
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

require("sticky-kit/dist/sticky-kit.min.js");
require("inputmask/dist/inputmask/inputmask.date.extensions");
require("inputmask/dist/inputmask/inputmask.extensions");
require("popper.js/dist/popper.min");
require("jquery/dist/jquery.min");
require("jquery-ui-dist/jquery-ui.min.js");

var moment = require("moment/min/moment.min.js");

require("fullcalendar/dist/fullcalendar.min.css");

require("inputmask/dist/inputmask/jquery.inputmask");

require("select2/dist/js/select2.full");
require("bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min");
require("bootstrap-tagsinput/dist/bootstrap-tagsinput");

require("bootstrap-daterangepicker/daterangepicker");
require("bootstrap-timepicker/js/bootstrap-timepicker.min");
require("bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min");
require("bootstrap-datepicker/dist/js/bootstrap-datepicker.min");
require("bootstrap/dist/js/bootstrap.min");
require("bootstrap-select/dist/js/bootstrap-select");
require("jquery.nicescroll/dist/jquery.nicescroll.js");

require("selectric/public/jquery.selectric.min.js");
window.moment = moment;
window.JSZip = require("jszip");
require("datatables.net-bs4/css/dataTables.bootstrap4.min.css");
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
require("izitoast/dist/css/iziToast.min.css");
require("weathericons/css/weather-icons.min.css");
require("weathericons/css/weather-icons-wind.min.css");
window.Chart = require("chart.js/dist/Chart.min");
//
// JS Libraies
require("izitoast/dist/js/iziToast.min.js");

require("jquery-sparkline/jquery.sparkline.min");
require("simpleweather/jquery.simpleWeather.min");
require("jqvmap/dist/jquery.vmap.min");
require("jqvmap/dist/maps/jquery.vmap.world");
require("jqvmap/dist/maps/jquery.vmap.france.js");
require("owl.carousel/dist/owl.carousel.min");
require("summernote/dist/summernote-bs4");
require("prismjs/prism.js");
require("dropzone/dist/min/dropzone.min.js");
require("chocolat/dist/js/jquery.chocolat.min.js");
require("bootstrap-daterangepicker/daterangepicker.js");
require("bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js");
require("bootstrap-timepicker/js/bootstrap-timepicker.min.js");
require("./js/js/scripts");
require("./js/js/custom");
require("./js/js/stisla");

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
