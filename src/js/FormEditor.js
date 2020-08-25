import CodeMirror from "codemirror";
import selectric from "selectric";
import uploadPreview from "./jqueryUploadPreview";
import SummerNoteJs from "./summernote";
import $ from "jquery";
import * as jQuery from "jquery";


export default function FormEditorJs() {
    SummerNoteJs()

    $(".codeeditor").each(function () {
        const editor = CodeMirror.fromTextArea(this, {
            lineNumbers: true,
            theme: "duotone-dark",
            mode: "javascript",
            height: 200,
        });
        editor.setSize("100%", 200);
    });
    $("select").selectric();
    $.uploadPreview({
        input_field: "#image-upload", // Default: .image-upload
        preview_box: "#image-preview", // Default: .image-preview
        label_field: "#image-label", // Default: .image-label
        label_default: "Choose File", // Default: Choose File
        label_selected: "Change File", // Default: Change File
        no_label: false, // Default: false
        success_callback: null, // Default: null
    });
    $(".inputtags").tagsinput("items");

}