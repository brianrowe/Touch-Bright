'use strict';
var TB = (function () {
  var e = document.documentElement,
    g = document.getElementsByTagName('body')[0],
    x = window.innerWidth || e.clientWidth || g.clientWidth,
    y = window.innerHeight || e.clientHeight || g.clientHeight,
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
    TouchBright = document.getElementById('TouchBright'),
    Pegs = document.getElementsByClassName("peg"),
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
    //colorSelector();

    document.getElementById('DBright').addEventListener("change", changeBrightness);
    document.getElementById('DSize').addEventListener("change", changeSize);

    document.getElementById('PullPeg').addEventListener("click", clearPeg);
    document.getElementById('ClearBoard').addEventListener("click", clearBoard);

    TouchBright.onkeydown = function(e){
      keyPressControl(e.keyCode);
    };
    

    //$('#DSize').val(dotsize);
    //$('#DBright').val(PegBrightness);
    //$('#GridStyle').val(GridStyle);
    
    window.onresize = function(){
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
    };

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
    window.dispatchEvent(new Event('resize'));
    //voiceControl();
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

  /* function colorSelector() {
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
  } */

  function changeSize() {
    dotsize = document.getElementById("DSize").value;
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
    GridStyle = document.getElementById("GridStyle").value;
    updateWindow();
    TB_Settings = { "type": "Settings", "dotsize": dotsize, "brightness": PegBrightness, "gridstyle": GridStyle };
    localStorage.setItem("TB_Settings", JSON.stringify(TB_Settings));
  }

  function changeBrightness() {
    PegBrightness = document.getElementById("DBright").value;
    setBrightness();
    TB_Settings = { "type": "Settings", "dotsize": dotsize, "brightness": PegBrightness, "gridstyle": GridStyle };
    localStorage.setItem("TB_Settings", JSON.stringify(TB_Settings));
  }

  function setBrightness() {
    for(let i = 0; i < Pegs.length; i++) {
      Pegs[i].setAttribute("stroke-opacity", PegBrightness);
    }
  }

  function updateWindow() {
    x = window.innerWidth || e.clientWidth || g.clientWidth;
    y = window.innerHeight || e.clientHeight || g.clientHeight;
    columns = Math.floor(x / dotspace);
    columnpad = Math.round(x / dotspace % 1 * 10);
    rows = Math.floor(y / dotspace);
    rowpad = Math.round(y / dotspace % 1 * 10);
    svgwidth = columns * dotspace;
    svgheight = rows * dotspace - 50;
    rows = Math.floor(svgheight / dotspace);
    setAttributes(TouchBright, {
      "width": svgwidth,
      "height": svgheight,
      "aria-label": "Rows " + rows + " Columns " + columns
    });

    drawLightBoard();
    setBrightness();
  }

  function isEven(n) {
    return n % 2 == 0;
  }

  function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  function removePegs(){
    while (TouchBright.firstChild) {
      TouchBright.firstChild.remove();
    }
  }

  function drawLightBoard() {
    removePegs();
    var ri, ci;
    for (ri = 0; ri < rows; ri++) {
      for (ci = 0; ci < columns; ci++) {
        if (GridStyle == "Retro") {
          if (isEven((ri + 1))) {
            drawPeg(ri, ci, dotspace, rowpad, PegStroke, StrokeWidth, 0)
          } else {
            if (ci < (columns - 1)) {
              drawPeg(ri, ci, dotspace, rowpad, PegStroke, StrokeWidth, 0.8)
            }
          }
        } else {
          drawPeg(ri, ci, dotspace, rowpad, PegStroke, StrokeWidth, 0)
        }
      }
    }
    boardListener();
  }

  function drawPeg(ri, ci, dotspace, rowpad, PegStroke, StrokeWidth, offset) {
    var newPeg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    setAttributes(newPeg, {
      "id": (ri + 1) + "-" + (ci + 1),
      "class": "peg",
      "x": ci * dotspace + columnpad + (dotsize * offset),
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
    });
    TouchBright.appendChild(newPeg);
  }

  function fillPeg(peg) {
    var ReadableColor = ntc.name(CurrentColor),
      CurrentId = peg.id,
      currentRow = parseInt(CurrentId.split("-")[0]),
      currentColumn = parseInt(CurrentId.split("-")[1]);
    if (ClearPeg === true) {
      setAttributes(peg, {
        "fill": "#000",
        "stroke": PegStroke,
        "stroke-width": StrokeWidth,
        "fill-opacity": "0",
        "aria-label": "Row " + (currentRow) + " Column " + (currentColumn) + " Not Colored"
      });
    } else {
      setAttributes(peg, {
        "fill": CurrentColor,
        "stroke": PegStroke,
        "stroke-width": "0",
        "fill-opacity": "1",
        "aria-label": "Row " + (currentRow) + " Column " + (currentColumn) + " Current Color is " + ReadableColor[1] + " Color Hue is " + ReadableColor[3]
      });
    }
  }

  function boardListener() {
    for(let i = 0; i < Pegs.length; i++) {
      Pegs[i].addEventListener("mouseover", function(e) {
        for(let p = 0; p < Pegs.length; p++) {
          Pegs[p].setAttribute("class", "peg");
        }
        e.target.classList.toggle("selected");
      })

      Pegs[i].addEventListener("click", function(e) {
        fillPeg(e.target);
      })
    }
  }

  function invert() {
    if (isInverted === false) {
      PegStroke = "#000000";
      for(let i = 0; i < Pegs.length; i++) {
        var peg = Pegs[i];
        if (peg.getAttribute('fill-opacity') === "0") {
          setAttributes(peg, {"stroke": PegStroke, "stroke-width": StrokeWidth, "stroke-opacity": PegBrightness});
        } else {
          setAttributes(peg, {"stroke": PegStroke, "stroke-width": "0", "stroke-opacity": PegBrightness});
        }
        isInverted = true;
      };
    } else {
      PegStroke = "#ffffff";
      for(let i = 0; i < Pegs.length; i++) {
        var peg = Pegs[i];
        if (peg.getAttribute('fill-opacity') === "0") {
          setAttributes(peg, {"stroke": PegStroke, "stroke-width": StrokeWidth, "stroke-opacity": PegBrightness});
        } else {
          setAttributes(peg, {"stroke": PegStroke, "stroke-width": "0", "stroke-opacity": PegBrightness});
        }
        isInverted = false;
      };
    }
    document.body.classList.toggle("inverted");
  }

  function showGrid() {
    showgrid = true;
    for(let i = 0; i < Pegs.length; i++) {
      var peg = Pegs[i];
      if (peg.getAttribute('fill-opacity') === "0") {
        setAttributes(peg, {"stroke": PegStroke, "stroke-width": StrokeWidth, "stroke-opacity": PegBrightness});
      }
    };
  }

  function hideGrid() {
    showgrid = false;
    for(let i = 0; i < Pegs.length; i++) {
      var peg = Pegs[i];
      setAttributes(peg, {"stroke": "none", "stroke-width": StrokeWidth});
    };
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
      var savesvg = $("svg").attr({
        "title": "My-TouchBright"
      }).node().parentNode.innerHTML;
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
      $("#1-1").attr("class", "peg selected").focus();
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
    var save_svg = $("svg")
      .attr({
        "title": "My-TouchBright",
        "version": 1.1,
        "xmlns": "http://www.w3.org/2000/svg",
        "style": "background:#000000"
      }).node().parentNode.innerHTML;
    showGrid();
    window.open("data:image/svg+xml;base64," + btoa(save_svg));
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
    focusedElementBeforeModal = document.activeElement;
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
    var isSelected = TouchBright.querySelector(".selected");
    if (isSelected == null) {
      TouchBright.getElementById("1-1").classList.toggle("selected");
    } else {
      var selectedId = isSelected.id,
        currentRow = parseInt(selectedId.split("-")[0]),
        currentColumn = parseInt(selectedId.split("-")[1]);
      switch (keyCode) {
        case 37: // left
          isSelected.classList.toggle("selected");
          if (currentColumn > 1) {
            TouchBright.getElementById(currentRow + "-" + (currentColumn - 1)).classList.toggle("selected").focus();
              } else {
            TouchBright.getElementById(currentRow + "-" + columns).classList.toggle("selected").focus();
          }
          break;
        case 38: // up
          isSelected.classList.toggle("selected");
          if (currentRow > 1) {
            TouchBright.getElementById((currentRow - 1) + "-" + currentColumn).classList.toggle("selected").focus();
          } else {
            TouchBright.getElementById(rows + "-" + currentColumn).classList.toggle("selected").focus();
          }
          break;
        case 39: // right
          isSelected.classList.toggle("selected");
          if (currentColumn < columns) {
            TouchBright.getElementById(currentRow + "-" + (currentColumn + 1)).classList.toggle("selected").focus();
          } else {
            TouchBright.getElementById(currentRow + "-" + 1).classList.toggle("selected").focus();
          }
          break;
        case 40: // down
          isSelected.classList.toggle("selected");
          if (currentRow < rows) {
            TouchBright.getElementById((currentRow + 1) + "-" + currentColumn).classList.toggle("selected").focus();
          } else {
            TouchBright.getElementById(1 + "-" + currentColumn).classList.toggle("selected").focus();
          }
          break;
        case 13: // return
          fillPeg(isSelected);
          break;
        case 32: // space bar
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

      var SelectColor = function (color) {
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
        'color': fillPeg,
        'fill': fillPeg,
        'invert (screen)': invertScreen,
        '(clear) (erase) screen': clearScreen,
        'toggle grid': toggleGrid,
        'show grid': showGrid,
        'hide grid': hideGrid,
        'grid options': showGridOptions,
        '(select) (choose) color :color': SelectColor
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
