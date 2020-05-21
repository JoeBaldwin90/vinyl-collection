"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _vinylModel = _interopRequireDefault(require("../models/vinylModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router(); // Middleware to find specific record by request params


var getVinyl = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _vinylModel["default"].findById(req.params.id, function (err, vinyl) {
              if (err) {
                return res.status(500).json({
                  message: err.mesaage
                });
              }

              if (vinyl) {
                res.vinyl = vinyl;
                return next();
              }

              return res.sendStatus(404);
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getVinyl(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // Get all


router.route("/vinyls").get( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var vinyls;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _vinylModel["default"].find();

          case 3:
            vinyls = _context2.sent;
            res.json(vinyls);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: _context2.t0.message
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}()); // Find one

router.get("/vinyls/:id", getVinyl, function (req, res) {
  res.json(res.vinyl);
}); // Add one

router.post("/vinyls/", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var vinyl, newVinyl;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            vinyl = new _vinylModel["default"](req.body);
            _context3.prev = 1;
            _context3.next = 4;
            return vinyl.save();

          case 4:
            newVinyl = _context3.sent;
            res.status(201).json(newVinyl);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.status(400).json({
              message: err.message
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function (_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}()); // Edit one

router.patch("/vinyls/:id", getVinyl, /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var vinyl;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            vinyl = res.vinyl;

            if (req.body._id) {
              delete req.body._id;
            } // Update vinyl object


            Object.entries(req.body).forEach(function (item) {
              var key = item[0];
              var value = item[1];
              vinyl[key] = value;
            });
            vinyl.save(function (err) {
              if (err) {
                res.status(400).json({
                  message: err.message
                });
              }

              return res.json(vinyl);
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}()); // Delete one

router["delete"]("/vinyls/:id", getVinyl, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return res.vinyl.remove();

          case 3:
            res.json({
              message: "Deleted vinyl from collection"
            });
            _context5.next = 9;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: _context5.t0.message
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function (_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;