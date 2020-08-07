    $(document).ready(function() {

      $("#hamburger").click(function() {
        $("nav").toggleClass("left");
      });
      $("nav ul li a").mouseover(function() {
        $(this).css("background-color", "white");
        $(this).css("color", "black");
      });
      $("nav ul li a").mouseout(function() {
        $(this).css("background-color", "rgb(0, 0, 0,0.0)");
        $(this).css("color", "white");
      });
      $("#homeli").click(function() {
        $('#holdder').animate({
          marginLeft: '0%',
        }, 900, 'easeInBounce');
      });
      $("#aboutli").click(function() {
        $('#holdder').animate({
          marginLeft: '-100%'
        }, 900, 'easeInBounce');
      });
      $("#fotosli").click(function() {
        $('#holdder').animate({
          marginLeft: '-200%'
        }, 900, 'easeInBounce');
      });
      $("#contactli").click(function() {
        $('#holdder').animate({
          marginLeft: '-300%'
        }, 900, 'easeOutBounce');
      });
      $('#box').mouseenter(function() {
        $(this).animate({
          backgroundColor: "rgb(255,255,255,0.6)",
          color: "black",
        });
      });
      $('#box').mouseleave(function() {
        $(this).animate({
          backgroundColor: "rgb(0,0,0,0.8)",
          color: "white",
        });
      });

      var background = true;
      $('#changebg').click(function() {
        if (background == true) {
          $("#home").css("background-image", "url('https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')");
          background = false;
        } else if (background == false) {
          $("#home").css("background-image", "url('https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')");
          background = true;
        }
      });

      $(document).keydown(function(e) {
        switch (e.keyCode) {
          case 37:
            $(".text").html("<h1>left</h1>")
            $(".eyeball").animate({
              left: "0px",
              top: "20px"

            }, 100, 'easeOutBounce')
            break;
          case 39:
            $(".text").html("<h1>right</h1>")
            $(".eyeball").animate({
              left: "40px",
              top: "20px"

            }, 100, 'easeOutBounce')
            break;
          case 38:
            $(".text").html("<h1>up</h1>")
            $(".eyeball").animate({
              top: "0px",
              left: '20px'

            }, 100, 'easeOutBounce')
            break;
          case 40:
            $(".text").html("<h1>down</h1>")
            $(".eyeball").animate({
              top: "40px",
              left: '20px'
            }, 100, 'easeOutBounce')
            break;
          case 32:
            $(".text").html("<h1>space</h1>")
            $(".eyeball").animate({
              height: "8px",
              top: "20px",
              left: "20px"


            }, 100, 'easeOutBounce')
            break;
          case 13:
            $(".text").html("<h1>enter</h1>")
            $(".eyeball").animate({
              height: "15px",
            }, 100, 'easeOutBounce')
            break;
        }
      });

      function clock() {
        var date = new Date();
        var day = date.getDay();
        var monday = date.getDate();
        var month = date.getMonth();
        var monthNum = date.getMonth() + 1;
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        if (seconds < 10) {
          seconds = '0' + seconds;
        };
        if (minutes < 10) {
          minutes = '0' + minutes;
        };

        var weekdaysNL = ['Zondag', 'Maandag', 'Dienstag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
        var monthsNl = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli	', 'Augustus', 'September', 'Oktober', 'November', 'December'];

        $('#textdate').html("Vandaag is het " + " " + weekdaysNL[day] + " " + monday + " " + monthsNl[month] + " " + year + " " + "dit is maand" + " " + monthNum + " " + "van dit geweldige jaar! het is momenteel :");
        $('#time').html(hours + ":" + minutes + ":" + seconds);
      };

      setInterval(clock, 1000);


      function pyth() {
        var A;
        var B;
        var C;

        A = parseFloat($("#A").val());
        B = parseFloat($("#B").val());
        C = Math.sqrt((A * A) + (B * B));

        $('#C').html(" C = " + C + " cm lang!")

      };
      $('#pythbtn').click(pyth);

      var style = true;
      $('#changestyle').click(function() {
        if (style == true) {
          $("#about").css("background-color", "#515151");
          $("#about").css("color", "#cccccc");
          $(".aboutbtns").css("background-color", "#cccccc");
          $(".aboutbtns").css("color", "#515151");
          style = false;
        } else if (style == false) {
          $(".aboutbtns").css("background-color", "#515151");
          $(".aboutbtns").css("color", "#cccccc");
          $("#about").css("background-color", "#cccccc");
          $("#about").css("color", "#515151");
          style = true;
        }
      });
      var i;
      var text = '';
      for (i = 1; i < 16; i++) {
        text += '<img src="img/winter' + i + '.jpg">';
      }
      $('#photosrc').html(text);



      $('.imp').focus(function() {
        $(this).animate({
          paddingRight: '200px',
          backgroundColor: 'green',
          color: 'white'

        });
      });
      $('.imp').blur(function() {
        if ($.trim($('.imp').val()) == '') {
          $(this).animate({
            paddingRight: '200px',
            backgroundColor: 'red',
            color: 'black'
          });
        } else {
          $(this).animate({
            paddingRight: '10px',
            backgroundColor: 'white',
            color: 'black'
          });
        }

      });

      $('#contactbtn').click(function() {
        if ($.trim($('.imp').val()) == '') {
          $('#overlay').animate({
            top: '0%',
          }, 900, 'easeInBounce');
        }
        $("#overlay").delay(3000).animate({
          top: '-100%',
        }, 900, 'easeOutBounce');
      });

    });

    var i = 0;
    var j = 0;
    $("#timerbtn").click(function() {

      function timer() {
        i++;
        if (i < 10) {
          i = '0' + i;
        };
        if (i > 59) {
          j++;
          i = 0;
        }
        $('#timertext').html(j + ":" + i);
      };
      setInterval(timer, 1000)
    });
