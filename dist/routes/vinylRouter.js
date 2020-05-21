"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _vinylModel = _interopRequireDefault(require("../models/vinylModel"));

var _vinylController = _interopRequireDefault(require("../controller/vinylController"));

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
}();

router.get("/vinyls", _vinylController["default"].getAll);
router.get("/vinyls/:id", getVinyl, _vinylController["default"].getOne);
router.post("/vinyls/", _vinylController["default"].post);
router.patch("/vinyls/:id", getVinyl, _vinylController["default"].patch);
router["delete"]("/vinyls/:id", getVinyl, _vinylController["default"]["delete"]);
var _default = router;
exports["default"] = _default;