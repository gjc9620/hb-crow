"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

function now() {
  var d = new Date();
  return "".concat([d.getFullYear(), d.getMonth() + 1, d.getDate()].join('/'), " ").concat([d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()].join(':'));
}

function createSend() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _opt$send = opt.send,
      send = _opt$send === void 0 ? function () {} : _opt$send,
      _opt$getPageUrl = opt.getPageUrl,
      getPageUrl = _opt$getPageUrl === void 0 ? function () {
    return _promise.default.resolve('');
  } : _opt$getPageUrl;
  return (
    /*#__PURE__*/
    function () {
      var _sendLog = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var logData,
            context,
            hbKeyword,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logData = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                context = _args.length > 1 ? _args[1] : undefined;
                hbKeyword = logData.keyword;
                delete logData.keyword;
                _context.prev = 4;
                _context.t0 = send;
                _context.t1 = _objectSpread2.default;
                _context.t2 = {};
                _context.t3 = logData;
                _context.t4 = hbKeyword;
                _context.t5 = context;
                _context.t6 = now();
                _context.t7 = +new Date();
                _context.next = 15;
                return getPageUrl().then(function () {
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  return args;
                }).catch('');

              case 15:
                _context.t8 = _context.sent;
                _context.t9 = {
                  hbKeyword: _context.t4,
                  context: _context.t5,
                  localTime: _context.t6,
                  localTimestamp: _context.t7,
                  page_url: _context.t8
                };
                _context.t10 = (0, _context.t1)(_context.t2, _context.t3, _context.t9);
                (0, _context.t0)(_context.t10);
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t11 = _context["catch"](4);
                send({
                  keyword: 'crowError',
                  e: _context.t11
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 21]]);
      }));

      function sendLog() {
        return _sendLog.apply(this, arguments);
      }

      return sendLog;
    }()
  );
}

function Crow() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    send: createSend(opt)
  };
}

var _default = Crow;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJub3ciLCJkIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiam9pbiIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJjcmVhdGVTZW5kIiwib3B0Iiwic2VuZCIsImdldFBhZ2VVcmwiLCJyZXNvbHZlIiwibG9nRGF0YSIsImNvbnRleHQiLCJoYktleXdvcmQiLCJrZXl3b3JkIiwidGhlbiIsImFyZ3MiLCJjYXRjaCIsImxvY2FsVGltZSIsImxvY2FsVGltZXN0YW1wIiwicGFnZV91cmwiLCJlIiwic2VuZExvZyIsIkNyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxHQUFlO0FBQ2IsTUFBTUMsQ0FBQyxHQUFHLElBQUlDLElBQUosRUFBVjtBQUNBLG1CQUFVLENBQ1JELENBQUMsQ0FBQ0UsV0FBRixFQURRLEVBRVJGLENBQUMsQ0FBQ0csUUFBRixLQUFlLENBRlAsRUFHUkgsQ0FBQyxDQUFDSSxPQUFGLEVBSFEsRUFJUkMsSUFKUSxDQUlILEdBSkcsQ0FBVixjQUtFLENBQUNMLENBQUMsQ0FBQ00sUUFBRixFQUFELEVBQ0VOLENBQUMsQ0FBQ08sVUFBRixFQURGLEVBRUVQLENBQUMsQ0FBQ1EsVUFBRixFQUZGLEVBR0VSLENBQUMsQ0FBQ1MsZUFBRixFQUhGLEVBR3VCSixJQUh2QixDQUc0QixHQUg1QixDQUxGO0FBU0Q7O0FBRUQsU0FBU0ssVUFBVCxHQUE4QjtBQUFBLE1BQVZDLEdBQVUsdUVBQUosRUFBSTtBQUFBLGtCQUl4QkEsR0FKd0IsQ0FFMUJDLElBRjBCO0FBQUEsTUFFMUJBLElBRjBCLDBCQUVuQixZQUFNLENBQUUsQ0FGVztBQUFBLHdCQUl4QkQsR0FKd0IsQ0FHMUJFLFVBSDBCO0FBQUEsTUFHMUJBLFVBSDBCLGdDQUdiO0FBQUEsV0FBTyxpQkFBUUMsT0FBUixDQUFnQixFQUFoQixDQUFQO0FBQUEsR0FIYTtBQU01QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCQyxnQkFBQUEsT0FBdkIsMkRBQWlDLEVBQWpDO0FBQXFDQyxnQkFBQUEsT0FBckM7QUFDQ0MsZ0JBQUFBLFNBREQsR0FDYUYsT0FBTyxDQUFDRyxPQURyQjtBQUVMLHVCQUFPSCxPQUFPLENBQUNHLE9BQWY7QUFGSztBQUFBLDhCQUtITixJQUxHO0FBQUE7QUFBQTtBQUFBLDhCQU1FRyxPQU5GO0FBQUEsOEJBT0RFLFNBUEM7QUFBQSw4QkFRREQsT0FSQztBQUFBLDhCQVNVakIsR0FBRyxFQVRiO0FBQUEsOEJBVWUsQ0FBQyxJQUFJRSxJQUFKLEVBVmhCO0FBQUE7QUFBQSx1QkFXZVksVUFBVSxHQUFHTSxJQUFiLENBQWtCO0FBQUEsb0RBQUlDLElBQUo7QUFBSUEsb0JBQUFBLElBQUo7QUFBQTs7QUFBQSx5QkFBYUEsSUFBYjtBQUFBLGlCQUFsQixFQUFxQ0MsS0FBckMsQ0FBMkMsRUFBM0MsQ0FYZjs7QUFBQTtBQUFBO0FBQUE7QUFPREosa0JBQUFBLFNBUEM7QUFRREQsa0JBQUFBLE9BUkM7QUFTRE0sa0JBQUFBLFNBVEM7QUFVREMsa0JBQUFBLGNBVkM7QUFXREMsa0JBQUFBLFFBWEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWNIWixnQkFBQUEsSUFBSSxDQUFDO0FBQ0hNLGtCQUFBQSxPQUFPLEVBQUUsV0FETjtBQUVITyxrQkFBQUEsQ0FBQztBQUZFLGlCQUFELENBQUo7O0FBZEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDs7QUFBQSxlQUFzQkMsT0FBdEI7QUFBQTtBQUFBOztBQUFBLGFBQXNCQSxPQUF0QjtBQUFBO0FBQUE7QUFvQkQ7O0FBRUQsU0FBU0MsSUFBVCxHQUF3QjtBQUFBLE1BQVZoQixHQUFVLHVFQUFKLEVBQUk7QUFDdEIsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVGLFVBQVUsQ0FBQ0MsR0FBRDtBQURYLEdBQVA7QUFHRDs7ZUFFY2dCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBub3coKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gYCR7W1xuICAgIGQuZ2V0RnVsbFllYXIoKSxcbiAgICBkLmdldE1vbnRoKCkgKyAxLFxuICAgIGQuZ2V0RGF0ZSgpLFxuICBdLmpvaW4oJy8nKX0gJHtcbiAgICBbZC5nZXRIb3VycygpLFxuICAgICAgZC5nZXRNaW51dGVzKCksXG4gICAgICBkLmdldFNlY29uZHMoKSxcbiAgICAgIGQuZ2V0TWlsbGlzZWNvbmRzKCldLmpvaW4oJzonKX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZW5kKG9wdCA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBzZW5kID0gKCkgPT4ge30sXG4gICAgZ2V0UGFnZVVybCA9ICgpID0+IChQcm9taXNlLnJlc29sdmUoJycpKSwgLy8g5byC5q2l5pa55rOVXG4gIH0gPSBvcHQ7XG4gIFxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gc2VuZExvZyhsb2dEYXRhID0ge30sIGNvbnRleHQpIHtcbiAgICBjb25zdCBoYktleXdvcmQgPSBsb2dEYXRhLmtleXdvcmQ7XG4gICAgZGVsZXRlIGxvZ0RhdGEua2V5d29yZDtcbiAgICBcbiAgICB0cnkge1xuICAgICAgc2VuZCh7XG4gICAgICAgIC4uLmxvZ0RhdGEsXG4gICAgICAgIGhiS2V5d29yZCxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbG9jYWxUaW1lOiBub3coKSxcbiAgICAgICAgbG9jYWxUaW1lc3RhbXA6ICtuZXcgRGF0ZSgpLFxuICAgICAgICBwYWdlX3VybDogYXdhaXQgZ2V0UGFnZVVybCgpLnRoZW4oKC4uLmFyZ3MpID0+IGFyZ3MpLmNhdGNoKCcnKSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNlbmQoe1xuICAgICAgICBrZXl3b3JkOiAnY3Jvd0Vycm9yJyxcbiAgICAgICAgZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gQ3JvdyhvcHQgPSB7fSkge1xuICByZXR1cm4ge1xuICAgIHNlbmQ6IGNyZWF0ZVNlbmQob3B0KVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDcm93O1xuIl19