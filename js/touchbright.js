'use strict';
var TB = (function () {
  var ScreenWidth = window.screen.availWidth,
    ScreenHeight = window.screen.availHeight,
    w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight,
    p = document.getElementById('page'),
    dotsize = 20,
    PegStroke = '#ffffff',
    PegBrightness = 0.5,
    StrokeWidth = 1,
    dotspace = dotsize * 1.5,
    columns = Math.floor(x / dotspace),
    columnpad = x / dotspace % 1 * 10,
    rowpad = y / dotspace % 1 * 10,
    svgwidth = columns * dotspace,
    svgheight = (Math.floor(y / dotspace)) * dotspace - 60,
    rows = Math.floor(svgheight / dotspace),
    TouchBright = d3.select("#BoardArea").append("svg").attr({ "id": "TouchBright", "tabindex": "0", "aria-label": "Rows " + rows + " Columns " + columns }),
    CurrentColor = '#0000FF',
    ClearPeg = false,
    initRun = false,
    showgrid = true,
    isInverted = false,
    CurrentMode = 'draw',
    GridStyle = 'Modern',
    focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",
    focusedElementBeforeModal = "",
    TB_Settings,
    resizeTimer = 0,
    AppMenu = document.querySelector('[data-inclusive-menu-opens]'),
    AppMenuButton = new MenuButton(AppMenu);

  function initialize() {
    localBrowserStorage();
    colorSelector();

    $('#DBright').on("change", changeBrightness);
    $('#DSize').on("change", changeSize);
    $('#DSize').val(dotsize);
    $('#DBright').val(PegBrightness);
    $('#GridStyle').val(GridStyle);
    $('#ClearBoard').on("click", clearBoard);
    $('#PullPeg').on("click", clearPeg);
    $("#TouchBright").on("keydown", function (e) {
      keyPressControl(e.keyCode);
    });

    $(window).on("resize", function (e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (initRun === true) {
          if (confirm('Rotating or resizing your screen will clear your drawing. Do you want to continue?')) {
            updateWindow();
          }
        } else {
          updateWindow();
          initRun = true;
        }
      }, 250);
    }).resize();

    document.body.addEventListener("touchmove", function (e) {
      e.preventDefault();
    });

    AppMenuButton.on('choose', function (choice) {
      switch (choice.textContent) {
      case "Toggle Grid":
        toggleGrid();
        break;
      case "Grid Options":
        //ShowOptions('settings_modal');
        break;
      case "Invert Screen":
        invert();
        break;
      default:
        return;
      }
    });

    voiceControl();
  }

  function localBrowserStorage() {
    if (localStorage.getItem('TB_Settings')) {
      var RawSettings = localStorage.getItem('TB_Settings'),
        Settings = JSON.parse(RawSettings);
        dotsize = parseInt(Settings.dotsize);
        dotspace = dotsize * 1.5;
        PegBrightness = Settings.brightness;
        GridStyle = Settings.gridstyle;
    } else {
      TB_Settings = { "type": "Settings", "dotsize": dotsize, "brightness": PegBrightness, "gridstyle": GridStyle };
      localStorage.setItem('TB_Settings', JSON.stringify(TB_Settings));
    }
  }

  function colorSelector() {
    $(".color").spectrum({
      allowEmpty: false,
      color: CurrentColor,
      showInput: false,
      containerClassName: "full-spectrum",
      showInitial: true,
      showPalette: true,
      showSelectionPalette: true,
      showAlpha: false,
      maxPaletteSize: 10,
      preferredFormat: "hex",
      move: function (color) {
        CurrentColor = color;
      },
      show: function () {
        $("#ClearPeg").removeClass("active");
        ClearPeg = false;
      },
      hide: function (color) {
        CurrentColor = color;
        $("#CurrentMode").text("Draw Mode");
        $("#TouchBright").focus();
      },
      palette: [
        ["rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)", "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)", "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)", "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
      ]
    });
  }

  function changeSize() {
    dotsize = $("#DSize").val();
    dotspace = dotsize * 1.5;
    columns = Math.floor();
    columnpad = x / dotspace % 1 * 10;
    rows = Math.floor(y / dotspace);
    rowpad = y / dotspace % 1 * 10;
    svgwidth = columns * dotspace;
    svgheight = rows * dotspace - 60;
    rows = Math.floor(svgheight / dotspace);
    TB_Settings = { "type": "Settings", "dotsize": dotsize, "brightness": PegBrightness, "gridstyle": GridStyle };
    localStorage.setItem("TB_Settings", JSON.stringify(TB_Settings));
    updateWindow();
  }

  function changeGrid() {
    GridStyle = $("#GridStyle").val();
    updateWindow();
    TB_Settings = { "type": "Settings", "dotsize": dotsize, "brightness": PegBrightness, "gridstyle": GridStyle };
    localStorage.setItem("TB_Settings", JSON.stringify(TB_Settings));
  }

  function changeBrightness() {
    PegBrightness = $("#DBright").val();
    setBrightness();
    TB_Settings = { "type": "Settings", "dotsize": dotsize, "brightness": PegBrightness, "gridstyle": GridStyle };
    localStorage.setItem("TB_Settings", JSON.stringify(TB_Settings));
  }

  function setBrightness() {
    d3.selectAll("rect").each(function(d, i) {
      d3.select(this).attr("stroke-opacity", PegBrightness);
    });
  }

  function updateWindow() {
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    y = w.innerHeight || e.clientHeight || g.clientHeight;
    columns = Math.floor(x / dotspace);
    columnpad = Math.round(x / dotspace % 1 * 10);
    rows = Math.floor(y / dotspace);
    rowpad = Math.round(y / dotspace % 1 * 10);
    svgwidth = columns * dotspace;
    svgheight = rows * dotspace - 50;
    rows = Math.floor(svgheight / dotspace);
    TouchBright.attr({ "width": svgwidth, "height": svgheight, "aria-label": "Rows " + rows + " Columns " + columns });
    drawLightBoard();
    setBrightness();
  }

  function isEven(n) {
    return n % 2 == 0;
  }

  function drawLightBoard() {
    TouchBright.selectAll("*").remove();
    for (var ri = 0; ri < rows; ri++) {
      for (var ci = 0; ci < columns; ci++) {
        if (GridStyle == "Retro") {
          if (isEven((ri + 1))) {
            var peg = TouchBright.append("rect").attr({
              "id": (ri + 1) + "-" + (ci + 1),
              "class": "circle",
              "x": ci * dotspace + columnpad,
              "y": ri * dotspace + rowpad,
              "width": dotsize,
              "height": dotsize,
              "rx": dotsize,
              "ry": dotsize,
              "fill": "#000",
              "fill-opacity": "0",
              "stroke": PegStroke,
              "stroke-miterlimit": 10,
              "stroke-width": StrokeWidth,
              "focusable": "true",
              "tabindex": "0",
              "aria-label": "Row " + (ri + 1) + " Column " + (ci + 1) + " Not Colored"
            })
          } else {
            if (ci < (columns - 1)) {
              var peg = TouchBright.append("rect").attr({
                "id": (ri + 1) + "-" + (ci + 1),
                "class": "circle",
                "x": ci * dotspace + columnpad + (dotsize * 0.8),
                "y": ri * dotspace + rowpad,
                "width": dotsize,
                "height": dotsize,
                "rx": dotsize,
                "ry": dotsize,
                "fill": "#000",
                "fill-opacity": "0",
                "stroke": PegStroke,
                "stroke-miterlimit": 10,
                "stroke-width": StrokeWidth,
                "focusable": "true",
                "tabindex": "0",
                "aria-label": "Row " + (ri + 1) + " Column " + (ci + 1) + " Not Colored"
              })
            }
          }
        } else {
          var peg = TouchBright.append("rect").attr({
            "id": (ri + 1) + "-" + (ci + 1),
            "class": "circle",
            "x": ci * dotspace + columnpad,
            "y": ri * dotspace + rowpad,
            "width": dotsize,
            "height": dotsize,
            "rx": dotsize,
            "ry": dotsize,
            "fill": "#000",
            "fill-opacity": "0",
            "stroke": PegStroke,
            "stroke-miterlimit": 10,
            "stroke-width": StrokeWidth,
            "focusable": "true",
            "tabindex": "0",
            "aria-label": "Row " + (ri + 1) + " Column " + (ci + 1) + " Not Colored"
          })
        }
      }
    }
    boardListener();
  }

  function fillPeg(e) {
    var ReadableColor = ntc.name(CurrentColor),
      CurrentId = e.id,
      currentRow = parseInt(CurrentId.split("-")[0]),
      currentColumn = parseInt(CurrentId.split("-")[1]),
      peg = d3.select(e);
    if (ClearPeg === true) {
      peg.attr({
        "fill": "#000",
        "stroke": PegStroke,
        "stroke-width": StrokeWidth,
        "fill-opacity": "0",
        "aria-label": "Row " + (currentRow) + " Column " + (currentColumn) + " Not Colored"
      });
    } else {
      peg.attr({
        "fill": CurrentColor,
        "stroke": PegStroke,
        "stroke-width": "0",
        "fill-opacity": "1",
        "aria-label": "Row " + (currentRow) + " Column " + (currentColumn) + " Current Color is " + ReadableColor[1] + " Color Hue is " + ReadableColor[3]
      });
    }
  }

  function boardListener() {
    var Pegs = d3.selectAll("rect");
    Pegs.on("mouseover", function (e) {
      Pegs.attr({
        "class": "circle"
      });
      d3.select(this).attr({
        "class": "circle selected"
      });
    }).on("mouseout", function (e) {
      var peg = d3.select(this);
      if (peg.attr("fill-opacity") != "0") {
        peg.attr({
          "stroke": PegStroke,
          "stroke-width": "0"
        });
      }
    }).on("click", function (e) {
      fillPeg(this);
    });
  }

  function invert() {
    var Pegs = d3.selectAll("rect");
    if (isInverted === false) {
      PegStroke = "#000000";
      Pegs.each(function () {
        var peg = d3.select(this);
        if (peg.attr("fill-opacity") === "0") {
          peg.attr({
            "stroke": PegStroke,
            "stroke-width": StrokeWidth,
            "stroke-opacity": PegBrightness
          })
        } else {
          peg.attr({
            "stroke": PegStroke,
            "stroke-width": "0",
            "stroke-opacity": PegBrightness
          })
        }
        isInverted = true;
      });
    } else {
      PegStroke = "#ffffff";
      Pegs.each(function () {
        var peg = d3.select(this);
        if (peg.attr("fill-opacity") === "0") {
          peg.attr({
            "stroke": PegStroke,
            "stroke-width": StrokeWidth,
            "stroke-opacity": PegBrightness
          })
        } else {
          peg.attr({
            "stroke": PegStroke,
            "stroke-width": "0",
            "stroke-opacity": PegBrightness
          })
        }
        isInverted = false;
      });
    }
    $("body").toggleClass("inverted");
  }

  function showGrid() {
    showgrid = true;
    d3.selectAll("rect").each(function (d, i) {
      var elt = d3.select(this);
      if (elt.attr("fill-opacity") === "0") {
        elt.attr("stroke", PegStroke);
        elt.attr("stroke-width", StrokeWidth);
        elt.attr("stroke-opacity", PegBrightness);
      }
    });
  }

  function hideGrid() {
    showgrid = false;
    d3.selectAll("rect").each(function (d, i) {
      var elt = d3.select(this);
      elt.attr("stroke", "none");
      elt.attr("stroke-width", StrokeWidth);
    });
  }

  function toggleGrid() {
    if (showgrid === true) {
      hideGrid();
    } else {
      showGrid();
    }
  }

  function Save() {
    var FileName = prompt("Enter the name of your drawing.", "");
    if (FileName != null) {
      var savesvg = d3.select("svg").attr({
        "title": "My-TouchBright"
      })
        .node().parentNode.innerHTML;
      var SaveKey = "TB_" + Math.floor(Date.now() / 1000);
      var SaveObject = { "type": "Drawing", "Name": '"' + FileName + '"', "data": "'" + savesvg + "'" };
      localStorage.setItem(SaveKey, JSON.stringify(SaveObject));
    }
  }

  function listSaved() {
    var SavedDrawings = [];
    var SavedDrawingNames = [];
    for (i = 0; i < localStorage.length; i++) {
      key = localStorage.key(i);
      if (key.substring(0, 3) === "TB_") {
        SavedDrawings.push(key);
      }
    }
    for (ii = 0; ii < SavedDrawings.length; ii++) {
      var retrievedObject = localStorage.getItem(SavedDrawings[ii]);
      var drawing = JSON.parse(retrievedObject);
      if (drawing.type === 'Drawing') {
        console.log(drawing.Name + " " + SavedDrawings[ii]);
        openSaved(SavedDrawings[ii])
      }
    }
  }

  function openSaved(drawing) {
    var retrievedObject = localStorage.getItem(drawing);
    var drawing = JSON.parse(retrievedObject);
    $("#BoardArea").html(drawing.data);
    boardListener();
  }

  function clearBoard() {
    if (confirm("Are you sure you want to clear your drawing?")) {
      updateWindow();
      $("#1-1").attr("class", "circle selected").focus();
    }
  }

  function clearPeg() {
    $("#CurrentMode").text("Erase Mode");
    if ($("#ClearPeg").hasClass("active")) {
      ClearPeg = false;
    } else {
      ClearPeg = true;
      CurrentMode = "Erase";
    }
    $("#ClearPeg").toggleClass("active");
  }

  function print() {
    closeMenu();
    hideGrid();
    var savesvg = d3.select("svg")
      .attr({
        "title": "My-TouchBright",
        "version": 1.1,
        "xmlns": "http://www.w3.org/2000/svg",
        "style": "background:#000000"
      })
      .node().parentNode.innerHTML;
    showGrid();
    window.open("data:image/svg+xml;base64," + btoa(savesvg));
  }

  function modalTrapKey(obj) {
    var tabbable = $(obj).find(focusableElementsString).filter(':visible');
    var firstTabbable = tabbable.first();
    var lastTabbable = tabbable.last();
    firstTabbable.focus();
    lastTabbable.on('keydown', function (e) {
      if ((e.which === 9 && !e.shiftKey)) {
        e.preventDefault();
        firstTabbable.focus();
      }
    });
    firstTabbable.on('keydown', function (e) {
      if ((e.which === 9 && e.shiftKey)) {
        e.preventDefault();
        lastTabbable.focus();
      }
    });
    $(obj).on('keydown', function (e) {
      if (e.keyCode === 27) {
        hideModal(obj);
        e.preventDefault();
      };
    });
  }

  function showModal(obj) {
    focusedElementBeforeModal = $(':focus');
    $('#mainPage').attr('aria-hidden', 'true');
    $(obj).show("fast", function () {
      $(obj).find('*').filter(focusableElementsString).filter(':visible').first().focus();
    });
    $(obj).attr('aria-hidden', 'false');
    modalTrapKey(obj);
  }

  function hideModal(obj) {
    $(obj).closest('.modal').css('display', 'none');
    $(obj).closest('.modal').attr('aria-hidden', 'true');
    $('#mainPage').attr('aria-hidden', 'false');
    $('body').off('focusin', '#mainPage');
    focusedElementBeforeModal.focus();
  }

  function keyPressControl(keyCode) {
    console.log("Key: " + keyCode)
    var isSelected = $('#TouchBright').find('.selected');
    if (isSelected.length < 1) {
      $("#1-1").attr("class", "circle selected");
    } else {
      var selectedId = isSelected.attr("id"),
          currentRow = parseInt(selectedId.split("-")[0]),
          currentColumn = parseInt(selectedId.split("-")[1]);
      switch (keyCode) {
        case 37: // left
          isSelected.attr("class", "circle");
          if (currentColumn > 1) {
            $("#" + currentRow + "-" + (currentColumn - 1)).attr("class", "circle selected").focus();
          } else {
            $("#" + currentRow + "-" + columns).attr("class", "circle selected").focus();
          }
          break;
        case 38: // up
          isSelected.attr("class", "circle");
          if (currentRow > 1) {
            $("#" + (currentRow - 1) + "-" + currentColumn).attr("class", "circle selected").focus();
          } else {
            $("#" + rows + "-" + currentColumn).attr("class", "circle selected").focus();
          }
          break;
        case 39: // right
          isSelected.attr("class", "circle");
          if (currentColumn < columns) {
            $("#" + currentRow + "-" + (currentColumn + 1)).attr("class", "circle selected").focus();
          } else {
            $("#" + currentRow + "-" + 1).attr("class", "circle selected").focus();
          }
          break;
        case 40: // down
          isSelected.attr("class", "circle");
          if (currentRow < rows) {
            $("#" + (currentRow + 1) + "-" + currentColumn).attr("class", "circle selected").focus();
          } else {
            $("#" + 1 + "-" + currentColumn).attr("class", "circle selected").focus();
          }
          break;
        case 13: // return
          $("#" + currentRow + "-" + currentColumn).attr("class", "circle selected");
          isSelected = $('#TouchBright').find('.selected').get(0);
          fillPeg(isSelected);
          break;
        case 32: // return
          $("#" + currentRow + "-" + currentColumn).attr("class", "circle selected");
          isSelected = $('#TouchBright').find('.selected').get(0);
          fillPeg(isSelected);
          break;
        case 73: // i
          invert();
          break;
        case 67: // c
          clearBoard();
          break;
        case 69: // e
          clearPeg();
          break;
        case 77: // m
          //openMenu();
          break;
        case 71: // g
          toggleGrid();
          break;
        default:
          return;
      }
    }
  }

  function speak(text, callback) {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
    u.lang = 'en-US';
    u.onend = function () {
      if (callback) {
        callback();
      }
    };
    u.onerror = function (e) {
      if (callback) {
        callback(e);
      }
    };
    speechSynthesis.speak(u);
  }

  function voiceControl() {
    if (annyang) {
      var moveLeft = function () {
        keyPressControl(37);
      }

      var moveRight = function () {
        keyPressControl(39);
      };

      var moveUp = function () {
        keyPressControl(38);
      };

      var moveDown = function () {
        keyPressControl(40);
      };

      var fillPeg = function () {
        keyPressControl(13);
      };

      var invertScreen = function () {
        invert();
      };

      var clearScreen = function () {
        clearBoard();
      };

      var toggleGrid = function () {
        toggleGrid();
      };

      var hideGrid = function () {
        hideGrid();
      };

      var showGrid = function () {
        showGrid();
      };

      var showGridOptions = function () {
        showModal('#SettingsModal');
      }

      var SelectColor = function (color){
        console.log('Selected Color: ' + color);
        $(".color").spectrum("set", color);
        CurrentColor = color;
      }

      var cmd = function () {
        speak("")
      };

      var commands = {
        '(move) left': moveLeft,
        '(move) right': moveRight,
        '(move) up': moveUp,
        '(move) down': moveDown,
        'color' : fillPeg,
        'fill' : fillPeg,
        'invert (screen)': invertScreen,
        '(clear) (erase) screen': clearScreen,
        'toggle grid': toggleGrid,
        'show grid': showGrid,
        'hide grid': hideGrid,
        'grid options': showGridOptions,
        '(select) (choose) color :color' : SelectColor
      };

      annyang.addCommands(commands);
      annyang.setLanguage('en');
      annyang.addCallback('resultMatch', function (userSaid, commandText, phrases) {
          console.log('User Said: ' + userSaid);
          console.log('Command: ' + commandText);
          console.log('Phrases: ' + phrases);
      });
      annyang.start({ continuous: false, autoRestart: true });
      speak("Welcome to Touch Bright, lets get started creating awsome designs.");
    } else {
      console.log('Speech is not supported on your browser');
    }
  }

  return {
    initialize: initialize,
    showModal: showModal,
    hideModal: hideModal
  };
})();
