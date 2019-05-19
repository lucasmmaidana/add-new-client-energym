$(document).ready(function() {

  $("#fingerprint").click(function() {
    $(this).addClass("exito");
  });

  $(".alta .formulario .item:nth-child(1) form").submit(function( event ) {
    $(".alta .formulario .slide").css("left","-100%");
    $(".item .deni").text($("#dni").val());
    event.preventDefault();
  });

  $(".alta .item:nth-child(2) > .clear_r a").click(function() {
    $(".alta .formulario .slide").css("left","-200%");
    event.preventDefault();
  });

  $(".alta .formulario #back").click(function() {
    $(".alta .formulario .slide").css("left","0%");
  });

  $(".alta .actividades .item_act header h3").click(function() {
    $(this).closest(".item_act").toggleClass("expand");
  });

  $(".alta .zumba .horario tr:not(:first-child)").click(function() {
    $(".zumba .clear_r a").removeClass("inactive");
    $(this).addClass("selected");
    $(".alta .zumba .horario").addClass("blocked");
  });

  $(".alta .pilates .horario tr:not(:first-child)").click(function() {
    $(".pilates .clear_r a").removeClass("inactive");
    $(this).addClass("selected");
    $(".alta .pilates .horario").addClass("blocked");
  });

  $(".alta .actividades .item_act .clear_r a").click(function() {
    $(this).addClass("inactive");
    var item = $(this).closest(".item_act");
    if (item.not(".selecc")) {
      var x = parseInt($("#import").text());
      var y = parseInt($(this).attr("alt"));
      $("#import").text(x+y);
      item.addClass("selecc").removeClass("expand");
    };
    if ($("#import").text() != '0') {
      $(".alta .item > .clear_r a").removeClass("inactive");
    };
  });

  $(".alta .actividades .item_act header a").click(function() {
    $(".alta .horario").removeClass("blocked");
    $(".alta .horario tr").removeClass("selected");
    $(this).closest(".item_act").removeClass("selecc");
    $(this).closest(".item_act:not(.zumba,.pilates)").find(".clear_r a").removeClass("inactive");
    var x = parseInt($("#import").text());
    var y = parseInt($(this).attr("alt"));
    $("#import").text(x-y);
    if ($("#import").text() == '0') {
      $(".alta .item > .clear_r a").addClass("inactive");
    };
  });

  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1440,
    step: 15,
    values: [540, 1020],
    slide: function (e, ui) {
        var hours1 = Math.floor(ui.values[0] / 60);
        var minutes1 = ui.values[0] - (hours1 * 60);

        if (hours1.length == 1) hours1 = '0' + hours1;
        if (minutes1.length == 1) minutes1 = '0' + minutes1;
        if (minutes1 == 0) minutes1 = '00';
        if (hours1 >= 12) {
            if (hours1 == 12) {
                hours1 = hours1;
                minutes1 = minutes1 + " PM";
            } else {
                hours1 = hours1 - 12;
                minutes1 = minutes1 + " PM";
            }
        } else {
            hours1 = hours1;
            minutes1 = minutes1 + " AM";
        }
        if (hours1 == 0) {
            hours1 = 12;
            minutes1 = minutes1;
        }



        $('.slider-time').html(hours1 + ':' + minutes1);

        var hours2 = Math.floor(ui.values[1] / 60);
        var minutes2 = ui.values[1] - (hours2 * 60);

        if (hours2.length == 1) hours2 = '0' + hours2;
        if (minutes2.length == 1) minutes2 = '0' + minutes2;
        if (minutes2 == 0) minutes2 = '00';
        if (hours2 >= 12) {
            if (hours2 == 12) {
                hours2 = hours2;
                minutes2 = minutes2 + " PM";
            } else if (hours2 == 24) {
                hours2 = 11;
                minutes2 = "59 PM";
            } else {
                hours2 = hours2 - 12;
                minutes2 = minutes2 + " PM";
            }
        } else {
            hours2 = hours2;
            minutes2 = minutes2 + " AM";
        }

        $('.slider-time2').html(hours2 + ':' + minutes2);
    }
  });

});
