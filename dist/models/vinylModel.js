"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var vinylModel = new Schema({
  artist: {
    type: String,
    "default": "Unknown"
  },
  album: {
    type: String,
    "default": "Unknown"
  },
  genre: {
    type: String,
    "default": "Unknown"
  },
  year: {
    type: Number,
    min: 1600,
    max: 2030,
    "default": 2020
  },
  image: {
    type: String,
    "default": ""
  },
  link: {
    type: String,
    "default": ""
  },
  owned: {
    type: Boolean,
    "default": false
  }
});

var _default = _mongoose["default"].model("Vinyl", vinylModel);

exports["default"] = _default;