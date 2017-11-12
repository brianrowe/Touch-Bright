var TB = {

	Init: function () {
		w = window;
		d = document;
		e = d.documentElement;
		g = d.getElementsByTagName('body')[0];
		x = w.innerWidth || e.clientWidth || g.clientWidth;
		y = w.innerHeight || e.clientHeight || g.clientHeight;
		m = document.getElementById('modal_window'),
		p = document.getElementById('page');
		dotsize = 20;
		PegStroke = '#ffffff';
		PegBrightness = 0.5;
		StrokeWidth = 1;
		dotspace = dotsize * 1.5;
		columns = Math.floor(x / dotspace);
		columnpad = x / dotspace % 1 * 10;
		rows = Math.floor(y / dotspace);
		rowpad = y / dotspace % 1 * 10;
		svgwidth = columns * dotspace;
		svgheight = rows * dotspace - 60;
		rows = Math.floor(svgheight / dotspace);
		TouchBright = d3.select("#BoardArea").append("svg").attr({ "id": "TouchBright", "tabindex": "0", "aria-label": "Rows " + rows + " Columns " + columns });
		CurrentColor = 'blue';
		ClearPeg = false;
		initRun = false;
		showgrid = true;
		SideNavOpen = false,
		isInverted = false,
		CurrentMode = 'draw',
		GridStyle = 'Modern';

		if (localStorage.getItem('TB_Settings')) {
			RawSettings = localStorage.getItem('TB_Settings');
			Settings = JSON.parse(RawSettings);
			dotsize = parseInt(Settings.dotsize);
			dotspace = dotsize * 1.5;
			PegBrightness = Settings.brightness;
			GridStyle = Settings.gridstyle;
		} else {
			var TB_Settings = { "type": "Settings", "dotsize": dotsize, "brightness": PegBrightness, "gridstyle": GridStyle };
			localStorage.setItem('TB_Settings', JSON.stringify(TB_Settings));
		}

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
			beforeShow: function () { },
			hide: function (color) {
				CurrentColor = color;
			},
			palette: [
				["rgb(255, 255, 255)"],
				["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
				["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)", "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)", "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)", "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
			]

		});

		$('#DBright').on("change", TB.changeBrightness);
		$('#DSize').on("change", TB.changeSize);
		$('#DSize').val(dotsize);
		$('#DBright').val(PegBrightness);
		$('#GridStyle').val(GridStyle);

		var resizeTimer = 0;
		$(window).on("resize", function (e) {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function () {
				if (TB.initRun === true) {
					if (confirm('Rotating or resizing your screen will clear your drawing. Do you want to continue?')) {
						TB.updateWindow();
					}
				} else {
					TB.updateWindow();
					TB.initRun = true;
				}
			}, 250);
		}).resize();

		document.body.addEventListener("touchmove", function (e) {
			e.preventDefault();
		});

		AppMenu = document.querySelector('[data-inclusive-menu-opens]');
		AppMenuButton = new MenuButton(AppMenu);
		AppMenuButton.on('choose', function (choice) {
			switch (choice.textContent) {
				case "Toggle Grid":
					TB.ToggleGrid();
					break;
				case "Grid Options":
					ShowOptions();
					break;
				case "Invert Screen":
					TB.invert();
					break;
				default:
					return;
			}
		})

		$("#TouchBright").on("keydown", function (e) {
			TB.KeyPressControl(e.keyCode);
		});

		var mediaQueryList = window.matchMedia("print");
		mediaQueryList.addListener(function (mql) {
			if (mql.matches) {
				console.log('onbeforeprint equivalent');
			} else {
				console.log('onafterprint equivalent');
			}
		});

		TB.HandleModal();

	},

	changeSize: function () {
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
		TB.updateWindow();
	},

	changeGrid: function () {
		GridStyle = $("#GridStyle").val();
		TB.updateWindow();
		TB_Settings = { "type": "Settings", "dotsize": dotsize, "brightness": PegBrightness, "gridstyle": GridStyle };
		localStorage.setItem("TB_Settings", JSON.stringify(TB_Settings));
	},

	changeBrightness: function () {
		PegBrightness = $("#DBright").val();
		TB.setBrightness();
		TB_Settings = { "type": "Settings", "dotsize": dotsize, "brightness": PegBrightness, "gridstyle": GridStyle };
		localStorage.setItem("TB_Settings", JSON.stringify(TB_Settings));
	},

	setBrightness: function () {
		d3.selectAll("rect").each(function (d, i) {
			d3.select(this).attr("stroke-opacity", PegBrightness);
		});
	},

	updateWindow: function () {
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
		TB.DrawLightBoard();
		TB.setBrightness();
	},

	IsEven: function (n) {
   return n % 2 == 0;
	},

	DrawLightBoard: function () {
		TouchBright.selectAll("*").remove();
		for (ri = 0; ri < rows; ri++) {
			for (ci = 0; ci < columns; ci++) {

				if (GridStyle == "Retro"){
					if (TB.IsEven((ri + 1))) {
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
							"aria-label": "Row " + (ri + 1) + " Column " + (ci + 1)
						})
					} else {
						if (ci < (columns - 1)) {
							var peg = TouchBright.append("rect").attr({
								"id": (ri + 1) + "-" + (ci + 1),
								"class": "circle",
								"x": ci * dotspace + columnpad + (dotsize * .8),
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
								"aria-label": "Row " + (ri + 1) + " Column " + (ci + 1)
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
						"aria-label": "Row " + (ri + 1) + " Column " + (ci + 1)
					})
				}
			}
		}
		TB.BoardListener();
	},

	FillPeg: function (e) {
		peg = d3.select(e);
		if (ClearPeg === true) {
			peg.attr({
				"fill": "#000",
				"stroke": PegStroke,
				"stroke-width": StrokeWidth,
				"fill-opacity": "0"
			});
		} else {
			peg.attr({
				"fill": CurrentColor,
				"stroke": PegStroke,
				"stroke-width": "0",
				"fill-opacity": "1"
			});
		}
	},

	BoardListener: function () {
		Pegs = d3.selectAll("rect");
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
			TB.FillPeg(this);
		});

		// TouchBright.on("mousedown", function() {
		//       	TouchBright.on("mousemove", function() {
		//       		$('#TouchBright').css( 'cursor', 'crosshair' );
		//       		Pegs.on('mouseover', function(e){
		// 			TB.FillPeg(this);
		// 		});
		//   		});
		//   		TouchBright.on("mouseup", function() {
		//   			$('#TouchBright').css( 'cursor', 'pointer' );
		//       		TouchBright.on("mousemove",null);
		//       		Pegs.on("mouseover",null);
		//   		});
		//    	});

		// TouchBright.on("touchstart", function() {
		//    	TouchBright.on("touchmove", function() {
		//    		console.log('Touch Move');
		// 	});
		// 	TouchBright.on("touchend", function() {

		// 	});
		// });
	},

	invert: function () {
		Pegs = d3.selectAll("rect");
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
	},

	ShowGrid: function () {
		d3.selectAll("rect").each(function (d, i) {
			var elt = d3.select(this);
			if (elt.attr("fill-opacity") === "0") {
				elt.attr("stroke", PegStroke);
				elt.attr("stroke-width", StrokeWidth);
				elt.attr("stroke-opacity", PegBrightness);
			}
		});
	},

	HideGrid: function () {
		d3.selectAll("rect").each(function (d, i) {
			var elt = d3.select(this);
			elt.attr("stroke", "none");
			elt.attr("stroke-width", StrokeWidth);
		});
	},

	ToggleGrid: function () {
		if (showgrid === true) {
			TB.HideGrid();
			showgrid = false;
		} else {
			TB.ShowGrid();
			showgrid = true;
		}
	},

	Save: function () {
		TB.closeMenu();
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
	},

	ListSaved: function () {
		TB.closeMenu();
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
				TB.OpenSaved(SavedDrawings[ii])
			}
		}
	},

	OpenSaved: function (drawing) {
		var retrievedObject = localStorage.getItem(drawing);
		var drawing = JSON.parse(retrievedObject);
		$("#BoardArea").html(drawing.data);
		TB.BoardListener();
	},

	ClearBoard: function () {
		if (confirm("Are you sure you want to clear your drawing?")) {
			d3.selectAll("rect").each(function (d, i) {
				var elt = d3.select(this).attr({
					"fill": "#000",
					"fill-opacity": "0",
					"stroke": PegStroke,
					"stroke-width": StrokeWidth,
					"stroke-opacity": PegBrightness
				})
			});
		}
	},

	ClearPeg: function () {
		if ($("#ClearPeg").hasClass("active")) {
			ClearPeg = false;
		} else {
			ClearPeg = true;
			CurrentMode = "Erase";
		}
		$("#ClearPeg").toggleClass("active");
	},

	Print: function () {
		TB.closeMenu();
		TB.hideGrid();
		var savesvg = d3.select("svg")
			.attr({
				"title": "My-TouchBright",
				"version": 1.1,
				"xmlns": "http://www.w3.org/2000/svg",
				"style": "background:#000000"
			})
			.node().parentNode.innerHTML;
		TB.showGrid();
		window.open("data:image/svg+xml;base64," + btoa(savesvg));
	},




	HandleModal: function(){
		function swap() {
			p.parentNode.insertBefore(m, p);
		}
		swap();

		// list out the vars
		var mOverlay = getId('modal_window'),
			//mOpen = getId('modal_open'),
			mClose = getId('modal_close'),
			modal = getId('modal_holder'),
			allNodes = document.querySelectorAll("*"),
			modalOpen = false,
			lastFocus,
			i;
		// Let's cut down on what we need to type to get an ID
		function getId(id) {
			return document.getElementById(id);
		}
		// Let's open the modal
		ShowOptions = function modalShow() {
			lastFocus = document.activeElement;
			mOverlay.setAttribute('aria-hidden', 'false');
			modalOpen = true;
			modal.setAttribute('tabindex', '0');
			modal.focus();
		}
		// binds to both the button click and the escape key to close the modal window
		// but only if modalOpen is set to true
		function modalClose(event) {
			if (modalOpen && (!event.keyCode || event.keyCode === 27)) {
				mOverlay.setAttribute('aria-hidden', 'true');
				modal.setAttribute('tabindex', '-1');
				modalOpen = false;
				lastFocus.focus();
			}
		}
		// Restrict focus to the modal window when it's open.
		// Tabbing will just loop through the whole modal.
		// Shift + Tab will allow backup to the top of the modal,
		// and then stop.
		function focusRestrict(event) {
			if (modalOpen && !modal.contains(event.target)) {
				event.stopPropagation();
				modal.focus();
			}
		}
		// Close modal window by clicking on the overlay
		mOverlay.addEventListener('click', function (e) {
			if (e.target == modal.parentNode) {
				modalClose(e);
			}
		}, false);
		// open modal by btn click/hit
		//mOpen.addEventListener('click', modalShow);
		// close modal by btn click/hit
		mClose.addEventListener('click', modalClose);
		// close modal by keydown, but only if modal is open
		document.addEventListener('keydown', modalClose);
		// restrict tab focus on elements only inside modal window
		for (i = 0; i < allNodes.length; i++) {
			allNodes.item(i).addEventListener('focus', focusRestrict);
		}
	},


	KeyPressControl: function (keyCode) {
		console.log("Key: " + keyCode)
		isSelected = $('#TouchBright').find('.selected');
		if (isSelected.length < 1) {
			$("#1-1").attr("class", "circle selected");
		} else {
			selectedId = isSelected.attr("id");
			currentRow = parseInt(selectedId.split("-")[0]);
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
					TB.FillPeg(isSelected);
					break;
				case 73: // i
					TB.invert();
					break;
				case 67: // c
					TB.ClearBoard();
					break;
				case 69: // e
					TB.ClearPeg();
					break;
				case 77: // m
					TB.openMenu();
					break;
				case 71: // g
					TB.ToggleGrid();
					break;
				default:
					return;
			}
		}
	}

};