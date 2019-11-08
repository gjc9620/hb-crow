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
            hbmaster,
            data,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logData = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                context = _args.length > 1 ? _args[1] : undefined;
                hbmaster = logData.keyword;
                _context.t0 = hbmaster;
                _context.t1 = _objectSpread2.default;
                _context.t2 = {
                  hbmaster: hbmaster
                };
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
                data = {
                  keyword: 'clickButton',
                  buttonName: _context.t0,
                  pageId: 'hb-crow',
                  categoryId: 'hb-crow',
                  additionType: 'hb-crow',
                  additionValue: _context.t9
                };

                try {
                  send(data);
                } catch (e) {
                  send({
                    keyword: 'crowError',
                    e: e
                  });
                }

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJub3ciLCJkIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiam9pbiIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJjcmVhdGVTZW5kIiwib3B0Iiwic2VuZCIsImdldFBhZ2VVcmwiLCJyZXNvbHZlIiwibG9nRGF0YSIsImNvbnRleHQiLCJoYm1hc3RlciIsImtleXdvcmQiLCJ0aGVuIiwiYXJncyIsImNhdGNoIiwibG9jYWxUaW1lIiwibG9jYWxUaW1lc3RhbXAiLCJwYWdlX3VybCIsImRhdGEiLCJidXR0b25OYW1lIiwicGFnZUlkIiwiY2F0ZWdvcnlJZCIsImFkZGl0aW9uVHlwZSIsImFkZGl0aW9uVmFsdWUiLCJlIiwic2VuZExvZyIsIkNyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxHQUFlO0FBQ2IsTUFBTUMsQ0FBQyxHQUFHLElBQUlDLElBQUosRUFBVjtBQUNBLG1CQUFVLENBQ1JELENBQUMsQ0FBQ0UsV0FBRixFQURRLEVBRVJGLENBQUMsQ0FBQ0csUUFBRixLQUFlLENBRlAsRUFHUkgsQ0FBQyxDQUFDSSxPQUFGLEVBSFEsRUFJUkMsSUFKUSxDQUlILEdBSkcsQ0FBVixjQUtFLENBQUNMLENBQUMsQ0FBQ00sUUFBRixFQUFELEVBQ0VOLENBQUMsQ0FBQ08sVUFBRixFQURGLEVBRUVQLENBQUMsQ0FBQ1EsVUFBRixFQUZGLEVBR0VSLENBQUMsQ0FBQ1MsZUFBRixFQUhGLEVBR3VCSixJQUh2QixDQUc0QixHQUg1QixDQUxGO0FBU0Q7O0FBRUQsU0FBU0ssVUFBVCxHQUE4QjtBQUFBLE1BQVZDLEdBQVUsdUVBQUosRUFBSTtBQUFBLGtCQUl4QkEsR0FKd0IsQ0FFMUJDLElBRjBCO0FBQUEsTUFFMUJBLElBRjBCLDBCQUVuQixZQUFNLENBQUUsQ0FGVztBQUFBLHdCQUl4QkQsR0FKd0IsQ0FHMUJFLFVBSDBCO0FBQUEsTUFHMUJBLFVBSDBCLGdDQUdiO0FBQUEsV0FBTyxpQkFBUUMsT0FBUixDQUFnQixFQUFoQixDQUFQO0FBQUEsR0FIYTtBQU01QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUJDLGdCQUFBQSxPQUF2QiwyREFBaUMsRUFBakM7QUFBcUNDLGdCQUFBQSxPQUFyQztBQUNDQyxnQkFBQUEsUUFERCxHQUNZRixPQUFPLENBQUNHLE9BRHBCO0FBQUEsOEJBS1NELFFBTFQ7QUFBQTtBQUFBO0FBVURBLGtCQUFBQSxRQUFRLEVBQVJBO0FBVkM7QUFBQSw4QkFXRUYsT0FYRjtBQUFBLDhCQVlEQyxPQVpDO0FBQUEsOEJBYVVqQixHQUFHLEVBYmI7QUFBQSw4QkFjZSxDQUFDLElBQUlFLElBQUosRUFkaEI7QUFBQTtBQUFBLHVCQWVlWSxVQUFVLEdBQUdNLElBQWIsQ0FBa0I7QUFBQSxvREFBSUMsSUFBSjtBQUFJQSxvQkFBQUEsSUFBSjtBQUFBOztBQUFBLHlCQUFhQSxJQUFiO0FBQUEsaUJBQWxCLEVBQXFDQyxLQUFyQyxDQUEyQyxFQUEzQyxDQWZmOztBQUFBO0FBQUE7QUFBQTtBQVlETCxrQkFBQUEsT0FaQztBQWFETSxrQkFBQUEsU0FiQztBQWNEQyxrQkFBQUEsY0FkQztBQWVEQyxrQkFBQUEsUUFmQztBQUFBO0FBQUE7QUFHQ0MsZ0JBQUFBLElBSEQ7QUFJSFAsa0JBQUFBLE9BSkcsRUFJTSxhQUpOO0FBS0hRLGtCQUFBQSxVQUxHO0FBTUhDLGtCQUFBQSxNQU5HLEVBTUssU0FOTDtBQU9IQyxrQkFBQUEsVUFQRyxFQU9TLFNBUFQ7QUFRSEMsa0JBQUFBLFlBUkcsRUFRVyxTQVJYO0FBU0hDLGtCQUFBQSxhQVRHO0FBQUE7O0FBbUJMLG9CQUFJO0FBQ0ZsQixrQkFBQUEsSUFBSSxDQUFDYSxJQUFELENBQUo7QUFDRCxpQkFGRCxDQUVFLE9BQU9NLENBQVAsRUFBVTtBQUNWbkIsa0JBQUFBLElBQUksQ0FBQztBQUNITSxvQkFBQUEsT0FBTyxFQUFFLFdBRE47QUFFSGEsb0JBQUFBLENBQUMsRUFBREE7QUFGRyxtQkFBRCxDQUFKO0FBSUQ7O0FBMUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVA7O0FBQUEsZUFBc0JDLE9BQXRCO0FBQUE7QUFBQTs7QUFBQSxhQUFzQkEsT0FBdEI7QUFBQTtBQUFBO0FBNEJEOztBQUVELFNBQVNDLElBQVQsR0FBd0I7QUFBQSxNQUFWdEIsR0FBVSx1RUFBSixFQUFJO0FBQ3RCLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFRixVQUFVLENBQUNDLEdBQUQ7QUFEWCxHQUFQO0FBR0Q7O2VBRWNzQixJIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbm93KCkge1xuICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgcmV0dXJuIGAke1tcbiAgICBkLmdldEZ1bGxZZWFyKCksXG4gICAgZC5nZXRNb250aCgpICsgMSxcbiAgICBkLmdldERhdGUoKSxcbiAgXS5qb2luKCcvJyl9ICR7XG4gICAgW2QuZ2V0SG91cnMoKSxcbiAgICAgIGQuZ2V0TWludXRlcygpLFxuICAgICAgZC5nZXRTZWNvbmRzKCksXG4gICAgICBkLmdldE1pbGxpc2Vjb25kcygpXS5qb2luKCc6Jyl9YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VuZChvcHQgPSB7fSkge1xuICBjb25zdCB7XG4gICAgc2VuZCA9ICgpID0+IHt9LFxuICAgIGdldFBhZ2VVcmwgPSAoKSA9PiAoUHJvbWlzZS5yZXNvbHZlKCcnKSksIC8vIOW8guatpeaWueazlVxuICB9ID0gb3B0O1xuICBcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIHNlbmRMb2cobG9nRGF0YSA9IHt9LCBjb250ZXh0KSB7XG4gICAgY29uc3QgaGJtYXN0ZXIgPSBsb2dEYXRhLmtleXdvcmQ7XG4gICAgXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGtleXdvcmQ6ICdjbGlja0J1dHRvbicsXG4gICAgICBidXR0b25OYW1lOiBoYm1hc3RlcixcbiAgICAgIHBhZ2VJZDogJ2hiLWNyb3cnLFxuICAgICAgY2F0ZWdvcnlJZDogJ2hiLWNyb3cnLFxuICAgICAgYWRkaXRpb25UeXBlOiAnaGItY3JvdycsXG4gICAgICBhZGRpdGlvblZhbHVlOiB7XG4gICAgICAgIGhibWFzdGVyLFxuICAgICAgICAuLi5sb2dEYXRhLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBsb2NhbFRpbWU6IG5vdygpLFxuICAgICAgICBsb2NhbFRpbWVzdGFtcDogK25ldyBEYXRlKCksXG4gICAgICAgIHBhZ2VfdXJsOiBhd2FpdCBnZXRQYWdlVXJsKCkudGhlbigoLi4uYXJncykgPT4gYXJncykuY2F0Y2goJycpLFxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIHNlbmQoZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2VuZCh7XG4gICAgICAgIGtleXdvcmQ6ICdjcm93RXJyb3InLFxuICAgICAgICBlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBDcm93KG9wdCA9IHt9KSB7XG4gIHJldHVybiB7XG4gICAgc2VuZDogY3JlYXRlU2VuZChvcHQpXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyb3c7XG4iXX0=