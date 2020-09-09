import $ from "jquery";
import moment from "moment";


export const Chatjs = () => {
    $.chatCtrl = function (element, chat) {
        var chat = $.extend({
                position: "chat-right",
                text: "",
                time: moment(new Date().toISOString()).format("hh:mm"),
                picture: "",
                type: "text", // or typing
                timeout: 0,
                onShow: function () {},
            },
            chat
        );

        var target = $(element),
            element =
            '<div class="chat-item ' +
            chat.position +
            '" style="display:none">' +
            '<img src="' +
            chat.picture +
            '">' +
            '<div class="chat-details">' +
            '<div class="chat-text">' +
            chat.text +
            "</div>" +
            '<div class="chat-time">' +
            chat.time +
            "</div>" +
            "</div>" +
            "</div>",
            typing_element =
            '<div class="chat-item chat-left chat-typing" style="display:none">' +
            '<img src="' +
            chat.picture +
            '">' +
            '<div class="chat-details">' +
            '<div class="chat-text"></div>' +
            "</div>" +
            "</div>";

        var append_element = element;
        if (chat.type == "typing") {
            append_element = typing_element;
        }

        if (chat.timeout > 0) {
            setTimeout(function () {
                target.find(".chat-content").append($(append_element).fadeIn());
            }, chat.timeout);
        } else {
            target.find(".chat-content").append($(append_element).fadeIn());
        }

        var target_height = 0;
        target.find(".chat-content .chat-item").each(function () {
            target_height += $(this).outerHeight();
        });
        setTimeout(function () {
            target.find(".chat-content").scrollTop(target_height, -1);
        }, 100);
        chat.onShow.call(this, append_element);
    };
    var chats = [{
            text: "Hi, dude!",
            position: "left",
        },
        {
            text: "Wat?",
            position: "right",
        },
        {
            text: "You wanna know?",
            position: "left",
        },
        {
            text: "Wat?!",
            position: "right",
        },
        {
            typing: true,
            position: "left",
        },
    ];
    for (var i = 0; i < chats.length; i++) {
        var type = "text";
        if (chats[i].typing != undefined) type = "typing";
        $.chatCtrl("#mychatbox", {
            text: chats[i].text != undefined ? chats[i].text : "",
            picture: chats[i].position == "left" ?
                "../dist/img/avatar/avatar-1.png" :
                "../dist/img/avatar/avatar-2.png",
            position: "chat-" + chats[i].position,
            type: type,
        });
    }

    $("#chat-form").submit(function () {
        var me = $(this);

        if (
            me
            .find("input")
            .val()
            .trim().length > 0
        ) {
            $.chatCtrl("#mychatbox", {
                text: me.find("input").val(),
                picture: "../dist/img/avatar/avatar-2.png",
            });
            me.find("input").val("");
        }
        return false;
    });

    var chats = [{
            text: "Wake up!",
            position: "left",
        },
        {
            text: "Yes, already",
            position: "right",
        },
        {
            text: "Grab a brush and put a little make-up",
            position: "left",
        },
        {
            text: "What do you mean?",
            position: "right",
        },
        {
            text: "Hide the scars to fade away the shake-up",
            position: "left",
        },
        {
            text: "WTF?!",
            position: "right",
        },
        {
            text: "Why'd you leave the keys upon the table?",
            position: "left",
        },
        {
            text: "-__________________-",
            position: "right",
        },
        {
            text: "Here you go create another fable",
            position: "left",
        },
        {
            text: "You wanted do!",
            position: "right",
        },
        {
            text: "FXCK!",
            position: "right",
        },
        {
            text: "<i>You have blocked Ryan</i>",
            position: "right",
        },
    ];
    for (var i = 0; i < chats.length; i++) {
        var type = "text";
        if (chats[i].typing != undefined) type = "typing";
        $.chatCtrl("#mychatbox2", {
            text: chats[i].text != undefined ? chats[i].text : "",
            picture: chats[i].position == "left" ?
                "../dist/img/avatar/avatar-5.png" :
                "../dist/img/avatar/avatar-2.png",
            position: "chat-" + chats[i].position,
            type: type,
        });
    }
    $("#chat-form2").submit(function () {
        var me = $(this);

        if (
            me
            .find("input")
            .val()
            .trim().length > 0
        ) {
            $.chatCtrl("#mychatbox2", {
                text: me.find("input").val(),
                picture: "../dist/img/avatar/avatar-2.png",
            });
            me.find("input").val("");
        }
        return false;
    });
}