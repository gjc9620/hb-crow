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
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logData = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                context = _args.length > 1 ? _args[1] : undefined;
                _context.prev = 2;
                _context.t0 = send;
                _context.t1 = _objectSpread2.default;
                _context.t2 = {};
                _context.t3 = logData;
                _context.t4 = context;
                _context.t5 = now();
                _context.t6 = +new Date();
                _context.next = 12;
                return getPageUrl().then(function () {
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  return args;
                }).catch('');

              case 12:
                _context.t7 = _context.sent;
                _context.t8 = {
                  context: _context.t4,
                  localTime: _context.t5,
                  localTimestamp: _context.t6,
                  page_url: _context.t7
                };
                _context.t9 = (0, _context.t1)(_context.t2, _context.t3, _context.t8);
                (0, _context.t0)(_context.t9);
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t10 = _context["catch"](2);
                send({
                  keyword: 'crowError',
                  e: _context.t10
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 18]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJub3ciLCJkIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiam9pbiIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJjcmVhdGVTZW5kIiwib3B0Iiwic2VuZCIsImdldFBhZ2VVcmwiLCJyZXNvbHZlIiwibG9nRGF0YSIsImNvbnRleHQiLCJ0aGVuIiwiYXJncyIsImNhdGNoIiwibG9jYWxUaW1lIiwibG9jYWxUaW1lc3RhbXAiLCJwYWdlX3VybCIsImtleXdvcmQiLCJlIiwic2VuZExvZyIsIkNyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxHQUFlO0FBQ2IsTUFBTUMsQ0FBQyxHQUFHLElBQUlDLElBQUosRUFBVjtBQUNBLG1CQUFVLENBQ1JELENBQUMsQ0FBQ0UsV0FBRixFQURRLEVBRVJGLENBQUMsQ0FBQ0csUUFBRixLQUFlLENBRlAsRUFHUkgsQ0FBQyxDQUFDSSxPQUFGLEVBSFEsRUFJUkMsSUFKUSxDQUlILEdBSkcsQ0FBVixjQUtFLENBQUNMLENBQUMsQ0FBQ00sUUFBRixFQUFELEVBQ0VOLENBQUMsQ0FBQ08sVUFBRixFQURGLEVBRUVQLENBQUMsQ0FBQ1EsVUFBRixFQUZGLEVBR0VSLENBQUMsQ0FBQ1MsZUFBRixFQUhGLEVBR3VCSixJQUh2QixDQUc0QixHQUg1QixDQUxGO0FBU0Q7O0FBRUQsU0FBU0ssVUFBVCxHQUE4QjtBQUFBLE1BQVZDLEdBQVUsdUVBQUosRUFBSTtBQUFBLGtCQUl4QkEsR0FKd0IsQ0FFMUJDLElBRjBCO0FBQUEsTUFFMUJBLElBRjBCLDBCQUVuQixZQUFNLENBQUUsQ0FGVztBQUFBLHdCQUl4QkQsR0FKd0IsQ0FHMUJFLFVBSDBCO0FBQUEsTUFHMUJBLFVBSDBCLGdDQUdiO0FBQUEsV0FBTyxpQkFBUUMsT0FBUixDQUFnQixFQUFoQixDQUFQO0FBQUEsR0FIYTtBQU01QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QkMsZ0JBQUFBLE9BQXZCLDJEQUFpQyxFQUFqQztBQUFxQ0MsZ0JBQUFBLE9BQXJDO0FBQUE7QUFBQSw4QkFFSEosSUFGRztBQUFBO0FBQUE7QUFBQSw4QkFHRUcsT0FIRjtBQUFBLDhCQUlEQyxPQUpDO0FBQUEsOEJBS1VqQixHQUFHLEVBTGI7QUFBQSw4QkFNZSxDQUFDLElBQUlFLElBQUosRUFOaEI7QUFBQTtBQUFBLHVCQU9lWSxVQUFVLEdBQUdJLElBQWIsQ0FBa0I7QUFBQSxvREFBSUMsSUFBSjtBQUFJQSxvQkFBQUEsSUFBSjtBQUFBOztBQUFBLHlCQUFhQSxJQUFiO0FBQUEsaUJBQWxCLEVBQXFDQyxLQUFyQyxDQUEyQyxFQUEzQyxDQVBmOztBQUFBO0FBQUE7QUFBQTtBQUlESCxrQkFBQUEsT0FKQztBQUtESSxrQkFBQUEsU0FMQztBQU1EQyxrQkFBQUEsY0FOQztBQU9EQyxrQkFBQUEsUUFQQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVUhWLGdCQUFBQSxJQUFJLENBQUM7QUFDSFcsa0JBQUFBLE9BQU8sRUFBRSxXQUROO0FBRUhDLGtCQUFBQSxDQUFDO0FBRkUsaUJBQUQsQ0FBSjs7QUFWRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQOztBQUFBLGVBQXNCQyxPQUF0QjtBQUFBO0FBQUE7O0FBQUEsYUFBc0JBLE9BQXRCO0FBQUE7QUFBQTtBQWdCRDs7QUFFRCxTQUFTQyxJQUFULEdBQXdCO0FBQUEsTUFBVmYsR0FBVSx1RUFBSixFQUFJO0FBQ3RCLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFRixVQUFVLENBQUNDLEdBQUQ7QUFEWCxHQUFQO0FBR0Q7O2VBRWNlLEkiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBub3coKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gYCR7W1xuICAgIGQuZ2V0RnVsbFllYXIoKSxcbiAgICBkLmdldE1vbnRoKCkgKyAxLFxuICAgIGQuZ2V0RGF0ZSgpLFxuICBdLmpvaW4oJy8nKX0gJHtcbiAgICBbZC5nZXRIb3VycygpLFxuICAgICAgZC5nZXRNaW51dGVzKCksXG4gICAgICBkLmdldFNlY29uZHMoKSxcbiAgICAgIGQuZ2V0TWlsbGlzZWNvbmRzKCldLmpvaW4oJzonKX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZW5kKG9wdCA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBzZW5kID0gKCkgPT4ge30sXG4gICAgZ2V0UGFnZVVybCA9ICgpID0+IChQcm9taXNlLnJlc29sdmUoJycpKSwgLy8g5byC5q2l5pa55rOVXG4gIH0gPSBvcHQ7XG4gIFxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gc2VuZExvZyhsb2dEYXRhID0ge30sIGNvbnRleHQpIHtcbiAgICB0cnkge1xuICAgICAgc2VuZCh7XG4gICAgICAgIC4uLmxvZ0RhdGEsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGxvY2FsVGltZTogbm93KCksXG4gICAgICAgIGxvY2FsVGltZXN0YW1wOiArbmV3IERhdGUoKSxcbiAgICAgICAgcGFnZV91cmw6IGF3YWl0IGdldFBhZ2VVcmwoKS50aGVuKCguLi5hcmdzKSA9PiBhcmdzKS5jYXRjaCgnJyksXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZW5kKHtcbiAgICAgICAga2V5d29yZDogJ2Nyb3dFcnJvcicsXG4gICAgICAgIGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIENyb3cob3B0ID0ge30pIHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kOiBjcmVhdGVTZW5kKG9wdClcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JvdztcbiJdfQ==