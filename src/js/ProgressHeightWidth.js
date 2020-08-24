import $ from "jquery"


export default function ProgressHeightWidth() {

    $("[data-width]").each(function () {
        $(this).css({
            width: $(this).data("width"),
        });
    });

    // Height attribute
    $("[data-height]").each(function () {
        $(this).css({
            height: $(this).data("height"),
        });
    });




}