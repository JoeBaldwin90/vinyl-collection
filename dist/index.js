"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var server = (0, _express["default"])();

var db = _mongoose["default"].connect(process.env.MONGO_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.get("/", function (req, res) {
  res.send("Homepage");
});
server.listen(8000, function () {
  console.log("server started at http://localhost:8000");
});