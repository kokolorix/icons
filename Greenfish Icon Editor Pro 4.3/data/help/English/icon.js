"use strict";

// Greenfish Icon Editor Pro
// Copyright (c) 2007-2025 Balázs Szalkai. All Rights Reserved.

var misc_png_names = [
  "NEW",
  "OPEN",
  "SAVE",
  "DELETE",
  "PLUS",
  "MINUS",
  "ZOOM_1",
  "ZOOM_FIT",
  "GRID",
  "CENTER_LINES",
  "PAGES",
  "FRAMES",
  "TEST",
  "SWAP",
  "BLACK_AND_WHITE",
  "TRANSPARENT",
  "INVERTED",
  "MERGE_SELECTED",
  "REPLACE",
  "PROPS",
  "EXTRACT_AND_EDIT",
  "EXTRACT_AND_SAVE",
  "DEFAULT_BACKGROUND",
  "LIGHTING",
  "REFRESH",
  "OK",
  "BOLD",
  "ITALIC",
  "UNDERLINE",
  "STRIKEOUT",
  "ALIGN_LEFT",
  "ALIGN_CENTER",
  "ALIGN_RIGHT",
  "ALIGN_JUSTIFY",
  "BULLETS",
  "NUMBERING",
  "MORE",
  "TEXT_SIZE",
  "OPACITY",
  "WHITE_BACKGROUND",
  "HELP",
  "BACK",
  "FORWARD",
  "HOME",
  "PREV_MATCH",
  "NEXT_MATCH"
];

var toolbar_png_names = [
  "SELECT_RECT",
  "SELECT_ELLIPSE",
  "LASSO",
  "WAND",
  "PENCIL_SELECT",
  "TRANSFORM",
  "CROP",
  "HOT_SPOT",
  "EYEDROPPER",
  "RETOUCH",
  "RECT",
  "ELLIPSE",
  "LINE",
  "TEXT",
  "PENCIL",
  "BRUSH",
  "ERASER",
  "RECOLOR",
  "BUCKET",
  "GRADIENT"
];

var toolset_png_names = [
  "ANTIALIAS",
  "SHAPE_STROKE",
  "SHAPE_FILL",
  "SHAPE_STROKE_AND_FILL",
  "LINE",
  "BRUSH",
  "ERASER",
  "TOLERANCE",
  "CONTIGUOUS",
  "ALL_LAYERS",
  "EYEDROPPER_BACK",
  "DITHER",
  "GRADIENT_SHAPE_LINEAR",
  "GRADIENT_SHAPE_RADIAL",
  "GRADIENT_SHAPE_CONICAL",
  "GRADIENT_SHAPE_SPIRAL",
  "GRADIENT_REP_NONE",
  "GRADIENT_REP_SYMMETRIC",
  "GRADIENT_REP_ASYMMETRIC",
  "COLOR_MODE",
  "TRANSPARENCY_MODE",
  "PERSPECTIVE_MOVE"
];

function gfCreateIcons(params) {
  document.querySelectorAll("["+params.attr+"]").forEach(element => {
    element.className += " "+params.cssClass;

    var iconName = element.getAttribute(params.attr);
    var iconIndex = params.enumValues.indexOf(iconName);
    
    var xPos = (iconIndex % params.iconsPerRow) * -params.iconSize;
    var yPos = Math.floor(iconIndex / params.iconsPerRow) * -params.iconSize;  
    var backgroundPosition = xPos+"px "+yPos+"px";
    element.style.backgroundPosition = backgroundPosition;
  });
}

gfCreateIcons({
  attr: "data-misc-glyph",
  iconSize: 20,
  iconsPerRow: 1000,
  cssClass: "misc_icon",
  enumValues: misc_png_names
});

gfCreateIcons({
  attr: "data-tool-icon",
  iconSize: 24,
  iconsPerRow: 10,
  cssClass: "toolbar_icon",
  enumValues: toolbar_png_names
});

gfCreateIcons({
  attr: "data-toolset-icon",
  iconSize: 20,
  iconsPerRow: 1000,
  cssClass: "toolset_icon",
  enumValues: toolset_png_names
});
