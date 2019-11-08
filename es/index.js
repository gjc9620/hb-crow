import _objectSpread from "@babel/runtime-corejs2/helpers/esm/objectSpread";
import _Promise from "@babel/runtime-corejs2/core-js/promise";

function now() {
  const d = new Date();
  return `${[d.getFullYear(), d.getMonth() + 1, d.getDate()].join('/')} ${[d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()].join(':')}`;
}

function createSend() {
  let opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const _opt$send = opt.send,
        send = _opt$send === void 0 ? () => {} : _opt$send,
        _opt$getPageUrl = opt.getPageUrl,
        getPageUrl = _opt$getPageUrl === void 0 ? () => _Promise.resolve('') : _opt$getPageUrl;
  return async function sendLog() {
    let logData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let context = arguments.length > 1 ? arguments[1] : undefined;
    const hbKeyword = logData.keyword;
    delete logData.keyword;

    try {
      send(_objectSpread({}, logData, {
        hbKeyword,
        context,
        localTime: now(),
        localTimestamp: +new Date(),
        page_url: await getPageUrl().then(function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return args;
        }).catch('')
      }));
    } catch (e) {
      send({
        keyword: 'crowError',
        e
      });
    }
  };
}

function Crow() {
  let opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    send: createSend(opt)
  };
}

export default Crow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJub3ciLCJkIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiam9pbiIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJjcmVhdGVTZW5kIiwib3B0Iiwic2VuZCIsImdldFBhZ2VVcmwiLCJyZXNvbHZlIiwic2VuZExvZyIsImxvZ0RhdGEiLCJjb250ZXh0IiwiaGJLZXl3b3JkIiwia2V5d29yZCIsImxvY2FsVGltZSIsImxvY2FsVGltZXN0YW1wIiwicGFnZV91cmwiLCJ0aGVuIiwiYXJncyIsImNhdGNoIiwiZSIsIkNyb3ciXSwibWFwcGluZ3MiOiI7OztBQUFBLFNBQVNBLEdBQVQsR0FBZTtBQUNiLFFBQU1DLENBQUMsR0FBRyxJQUFJQyxJQUFKLEVBQVY7QUFDQSxTQUFRLEdBQUUsQ0FDUkQsQ0FBQyxDQUFDRSxXQUFGLEVBRFEsRUFFUkYsQ0FBQyxDQUFDRyxRQUFGLEtBQWUsQ0FGUCxFQUdSSCxDQUFDLENBQUNJLE9BQUYsRUFIUSxFQUlSQyxJQUpRLENBSUgsR0FKRyxDQUlFLElBQ1YsQ0FBQ0wsQ0FBQyxDQUFDTSxRQUFGLEVBQUQsRUFDRU4sQ0FBQyxDQUFDTyxVQUFGLEVBREYsRUFFRVAsQ0FBQyxDQUFDUSxVQUFGLEVBRkYsRUFHRVIsQ0FBQyxDQUFDUyxlQUFGLEVBSEYsRUFHdUJKLElBSHZCLENBRzRCLEdBSDVCLENBR2lDLEVBUm5DO0FBU0Q7O0FBRUQsU0FBU0ssVUFBVCxHQUE4QjtBQUFBLE1BQVZDLEdBQVUsdUVBQUosRUFBSTtBQUFBLG9CQUl4QkEsR0FKd0IsQ0FFMUJDLElBRjBCO0FBQUEsUUFFMUJBLElBRjBCLDBCQUVuQixNQUFNLENBQUUsQ0FGVztBQUFBLDBCQUl4QkQsR0FKd0IsQ0FHMUJFLFVBSDBCO0FBQUEsUUFHMUJBLFVBSDBCLGdDQUdiLE1BQU8sU0FBUUMsT0FBUixDQUFnQixFQUFoQixDQUhNO0FBTTVCLFNBQU8sZUFBZUMsT0FBZixHQUE4QztBQUFBLFFBQXZCQyxPQUF1Qix1RUFBYixFQUFhO0FBQUEsUUFBVEMsT0FBUztBQUNuRCxVQUFNQyxTQUFTLEdBQUdGLE9BQU8sQ0FBQ0csT0FBMUI7QUFDQSxXQUFPSCxPQUFPLENBQUNHLE9BQWY7O0FBRUEsUUFBSTtBQUNGUCxNQUFBQSxJQUFJLG1CQUNDSSxPQUREO0FBRUZFLFFBQUFBLFNBRkU7QUFHRkQsUUFBQUEsT0FIRTtBQUlGRyxRQUFBQSxTQUFTLEVBQUVyQixHQUFHLEVBSlo7QUFLRnNCLFFBQUFBLGNBQWMsRUFBRSxDQUFDLElBQUlwQixJQUFKLEVBTGY7QUFNRnFCLFFBQUFBLFFBQVEsRUFBRSxNQUFNVCxVQUFVLEdBQUdVLElBQWIsQ0FBa0I7QUFBQSw0Q0FBSUMsSUFBSjtBQUFJQSxZQUFBQSxJQUFKO0FBQUE7O0FBQUEsaUJBQWFBLElBQWI7QUFBQSxTQUFsQixFQUFxQ0MsS0FBckMsQ0FBMkMsRUFBM0M7QUFOZCxTQUFKO0FBUUQsS0FURCxDQVNFLE9BQU9DLENBQVAsRUFBVTtBQUNWZCxNQUFBQSxJQUFJLENBQUM7QUFDSE8sUUFBQUEsT0FBTyxFQUFFLFdBRE47QUFFSE8sUUFBQUE7QUFGRyxPQUFELENBQUo7QUFJRDtBQUNGLEdBbkJEO0FBb0JEOztBQUVELFNBQVNDLElBQVQsR0FBd0I7QUFBQSxNQUFWaEIsR0FBVSx1RUFBSixFQUFJO0FBQ3RCLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFRixVQUFVLENBQUNDLEdBQUQ7QUFEWCxHQUFQO0FBR0Q7O0FBRUQsZUFBZWdCLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBub3coKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gYCR7W1xuICAgIGQuZ2V0RnVsbFllYXIoKSxcbiAgICBkLmdldE1vbnRoKCkgKyAxLFxuICAgIGQuZ2V0RGF0ZSgpLFxuICBdLmpvaW4oJy8nKX0gJHtcbiAgICBbZC5nZXRIb3VycygpLFxuICAgICAgZC5nZXRNaW51dGVzKCksXG4gICAgICBkLmdldFNlY29uZHMoKSxcbiAgICAgIGQuZ2V0TWlsbGlzZWNvbmRzKCldLmpvaW4oJzonKX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZW5kKG9wdCA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBzZW5kID0gKCkgPT4ge30sXG4gICAgZ2V0UGFnZVVybCA9ICgpID0+IChQcm9taXNlLnJlc29sdmUoJycpKSwgLy8g5byC5q2l5pa55rOVXG4gIH0gPSBvcHQ7XG4gIFxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gc2VuZExvZyhsb2dEYXRhID0ge30sIGNvbnRleHQpIHtcbiAgICBjb25zdCBoYktleXdvcmQgPSBsb2dEYXRhLmtleXdvcmQ7XG4gICAgZGVsZXRlIGxvZ0RhdGEua2V5d29yZDtcbiAgICBcbiAgICB0cnkge1xuICAgICAgc2VuZCh7XG4gICAgICAgIC4uLmxvZ0RhdGEsXG4gICAgICAgIGhiS2V5d29yZCxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbG9jYWxUaW1lOiBub3coKSxcbiAgICAgICAgbG9jYWxUaW1lc3RhbXA6ICtuZXcgRGF0ZSgpLFxuICAgICAgICBwYWdlX3VybDogYXdhaXQgZ2V0UGFnZVVybCgpLnRoZW4oKC4uLmFyZ3MpID0+IGFyZ3MpLmNhdGNoKCcnKSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNlbmQoe1xuICAgICAgICBrZXl3b3JkOiAnY3Jvd0Vycm9yJyxcbiAgICAgICAgZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gQ3JvdyhvcHQgPSB7fSkge1xuICByZXR1cm4ge1xuICAgIHNlbmQ6IGNyZWF0ZVNlbmQob3B0KVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDcm93O1xuIl19