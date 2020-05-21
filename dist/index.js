"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _vinylRouter = _interopRequireDefault(require("./routes/vinylRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var port = process.env.PORT || 8000;
var app = (0, _express["default"])(); // Connect to MongoDB

_mongoose["default"].connect(process.env.MONGO_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = _mongoose["default"].connection;
db.on("error", function (error) {
  return console.error(error);
});
db.once("open", function () {
  return console.log(db, "Connected to database!!");
}); // Middleware

app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json()); // Router

app.use("/api", _vinylRouter["default"]);
app.get("/", function (req, res) {
  res.send("Homepage");
});
app.listen(port, function () {
  console.log("Running on port ".concat(port));
});