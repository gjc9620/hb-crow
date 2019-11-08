"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

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
            _getPageUrl,
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
                return (_getPageUrl = getPageUrl()).then.apply(_getPageUrl, (0, _toConsumableArray2.default)(function (args) {
                  return args;
                })).catch('');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJub3ciLCJkIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiam9pbiIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJjcmVhdGVTZW5kIiwib3B0Iiwic2VuZCIsImdldFBhZ2VVcmwiLCJyZXNvbHZlIiwibG9nRGF0YSIsImNvbnRleHQiLCJ0aGVuIiwiYXJncyIsImNhdGNoIiwibG9jYWxUaW1lIiwibG9jYWxUaW1lc3RhbXAiLCJwYWdlX3VybCIsImtleXdvcmQiLCJlIiwic2VuZExvZyIsIkNyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxHQUFULEdBQWU7QUFDYixNQUFNQyxDQUFDLEdBQUcsSUFBSUMsSUFBSixFQUFWO0FBQ0EsbUJBQVUsQ0FDUkQsQ0FBQyxDQUFDRSxXQUFGLEVBRFEsRUFFUkYsQ0FBQyxDQUFDRyxRQUFGLEtBQWUsQ0FGUCxFQUdSSCxDQUFDLENBQUNJLE9BQUYsRUFIUSxFQUlSQyxJQUpRLENBSUgsR0FKRyxDQUFWLGNBS0UsQ0FBQ0wsQ0FBQyxDQUFDTSxRQUFGLEVBQUQsRUFDRU4sQ0FBQyxDQUFDTyxVQUFGLEVBREYsRUFFRVAsQ0FBQyxDQUFDUSxVQUFGLEVBRkYsRUFHRVIsQ0FBQyxDQUFDUyxlQUFGLEVBSEYsRUFHdUJKLElBSHZCLENBRzRCLEdBSDVCLENBTEY7QUFTRDs7QUFFRCxTQUFTSyxVQUFULEdBQThCO0FBQUEsTUFBVkMsR0FBVSx1RUFBSixFQUFJO0FBQUEsa0JBSXhCQSxHQUp3QixDQUUxQkMsSUFGMEI7QUFBQSxNQUUxQkEsSUFGMEIsMEJBRW5CLFlBQU0sQ0FBRSxDQUZXO0FBQUEsd0JBSXhCRCxHQUp3QixDQUcxQkUsVUFIMEI7QUFBQSxNQUcxQkEsVUFIMEIsZ0NBR2I7QUFBQSxXQUFPLGlCQUFRQyxPQUFSLENBQWdCLEVBQWhCLENBQVA7QUFBQSxHQUhhO0FBTTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCQyxnQkFBQUEsT0FBdkIsMkRBQWlDLEVBQWpDO0FBQXFDQyxnQkFBQUEsT0FBckM7QUFBQTtBQUFBLDhCQUVISixJQUZHO0FBQUE7QUFBQTtBQUFBLDhCQUdFRyxPQUhGO0FBQUEsOEJBSURDLE9BSkM7QUFBQSw4QkFLVWpCLEdBQUcsRUFMYjtBQUFBLDhCQU1lLENBQUMsSUFBSUUsSUFBSixFQU5oQjtBQUFBO0FBQUEsdUJBT2UsZUFBQVksVUFBVSxJQUFHSSxJQUFiLHFEQUFxQixVQUFBQyxJQUFJO0FBQUEseUJBQUlBLElBQUo7QUFBQSxpQkFBekIsR0FBbUNDLEtBQW5DLENBQXlDLEVBQXpDLENBUGY7O0FBQUE7QUFBQTtBQUFBO0FBSURILGtCQUFBQSxPQUpDO0FBS0RJLGtCQUFBQSxTQUxDO0FBTURDLGtCQUFBQSxjQU5DO0FBT0RDLGtCQUFBQSxRQVBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVSFYsZ0JBQUFBLElBQUksQ0FBQztBQUNIVyxrQkFBQUEsT0FBTyxFQUFFLFdBRE47QUFFSEMsa0JBQUFBLENBQUM7QUFGRSxpQkFBRCxDQUFKOztBQVZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVA7O0FBQUEsZUFBc0JDLE9BQXRCO0FBQUE7QUFBQTs7QUFBQSxhQUFzQkEsT0FBdEI7QUFBQTtBQUFBO0FBZ0JEOztBQUVELFNBQVNDLElBQVQsR0FBd0I7QUFBQSxNQUFWZixHQUFVLHVFQUFKLEVBQUk7QUFDdEIsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVGLFVBQVUsQ0FBQ0MsR0FBRDtBQURYLEdBQVA7QUFHRDs7ZUFFY2UsSSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5mdW5jdGlvbiBub3coKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gYCR7W1xuICAgIGQuZ2V0RnVsbFllYXIoKSxcbiAgICBkLmdldE1vbnRoKCkgKyAxLFxuICAgIGQuZ2V0RGF0ZSgpLFxuICBdLmpvaW4oJy8nKX0gJHtcbiAgICBbZC5nZXRIb3VycygpLFxuICAgICAgZC5nZXRNaW51dGVzKCksXG4gICAgICBkLmdldFNlY29uZHMoKSxcbiAgICAgIGQuZ2V0TWlsbGlzZWNvbmRzKCldLmpvaW4oJzonKX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZW5kKG9wdCA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBzZW5kID0gKCkgPT4ge30sXG4gICAgZ2V0UGFnZVVybCA9ICgpID0+IChQcm9taXNlLnJlc29sdmUoJycpKSwgLy8g5byC5q2l5pa55rOVXG4gIH0gPSBvcHQ7XG4gIFxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gc2VuZExvZyhsb2dEYXRhID0ge30sIGNvbnRleHQpIHtcbiAgICB0cnkge1xuICAgICAgc2VuZCh7XG4gICAgICAgIC4uLmxvZ0RhdGEsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGxvY2FsVGltZTogbm93KCksXG4gICAgICAgIGxvY2FsVGltZXN0YW1wOiArbmV3IERhdGUoKSxcbiAgICAgICAgcGFnZV91cmw6IGF3YWl0IGdldFBhZ2VVcmwoKS50aGVuKC4uLmFyZ3MgPT4gYXJncykuY2F0Y2goJycpLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2VuZCh7XG4gICAgICAgIGtleXdvcmQ6ICdjcm93RXJyb3InLFxuICAgICAgICBlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBDcm93KG9wdCA9IHt9KSB7XG4gIHJldHVybiB7XG4gICAgc2VuZDogY3JlYXRlU2VuZChvcHQpXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyb3c7XG4iXX0=