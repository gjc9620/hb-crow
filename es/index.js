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
    const hbmaster = logData.keyword;
    const data = {
      keyword: 'clickButton',
      buttonName: hbmaster,
      pageId: 'hb-crow',
      categoryId: 'hb-crow',
      additionType: 'hb-crow',
      additionValue: _objectSpread({
        hbmaster
      }, logData, {
        context,
        localTime: now(),
        localTimestamp: +new Date(),
        page_url: await getPageUrl().then(function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return args;
        }).catch('')
      })
    };

    try {
      send(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJub3ciLCJkIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiam9pbiIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJjcmVhdGVTZW5kIiwib3B0Iiwic2VuZCIsImdldFBhZ2VVcmwiLCJyZXNvbHZlIiwic2VuZExvZyIsImxvZ0RhdGEiLCJjb250ZXh0IiwiaGJtYXN0ZXIiLCJrZXl3b3JkIiwiZGF0YSIsImJ1dHRvbk5hbWUiLCJwYWdlSWQiLCJjYXRlZ29yeUlkIiwiYWRkaXRpb25UeXBlIiwiYWRkaXRpb25WYWx1ZSIsImxvY2FsVGltZSIsImxvY2FsVGltZXN0YW1wIiwicGFnZV91cmwiLCJ0aGVuIiwiYXJncyIsImNhdGNoIiwiZSIsIkNyb3ciXSwibWFwcGluZ3MiOiI7OztBQUFBLFNBQVNBLEdBQVQsR0FBZTtBQUNiLFFBQU1DLENBQUMsR0FBRyxJQUFJQyxJQUFKLEVBQVY7QUFDQSxTQUFRLEdBQUUsQ0FDUkQsQ0FBQyxDQUFDRSxXQUFGLEVBRFEsRUFFUkYsQ0FBQyxDQUFDRyxRQUFGLEtBQWUsQ0FGUCxFQUdSSCxDQUFDLENBQUNJLE9BQUYsRUFIUSxFQUlSQyxJQUpRLENBSUgsR0FKRyxDQUlFLElBQ1YsQ0FBQ0wsQ0FBQyxDQUFDTSxRQUFGLEVBQUQsRUFDRU4sQ0FBQyxDQUFDTyxVQUFGLEVBREYsRUFFRVAsQ0FBQyxDQUFDUSxVQUFGLEVBRkYsRUFHRVIsQ0FBQyxDQUFDUyxlQUFGLEVBSEYsRUFHdUJKLElBSHZCLENBRzRCLEdBSDVCLENBR2lDLEVBUm5DO0FBU0Q7O0FBRUQsU0FBU0ssVUFBVCxHQUE4QjtBQUFBLE1BQVZDLEdBQVUsdUVBQUosRUFBSTtBQUFBLG9CQUl4QkEsR0FKd0IsQ0FFMUJDLElBRjBCO0FBQUEsUUFFMUJBLElBRjBCLDBCQUVuQixNQUFNLENBQUUsQ0FGVztBQUFBLDBCQUl4QkQsR0FKd0IsQ0FHMUJFLFVBSDBCO0FBQUEsUUFHMUJBLFVBSDBCLGdDQUdiLE1BQU8sU0FBUUMsT0FBUixDQUFnQixFQUFoQixDQUhNO0FBTTVCLFNBQU8sZUFBZUMsT0FBZixHQUE4QztBQUFBLFFBQXZCQyxPQUF1Qix1RUFBYixFQUFhO0FBQUEsUUFBVEMsT0FBUztBQUNuRCxVQUFNQyxRQUFRLEdBQUdGLE9BQU8sQ0FBQ0csT0FBekI7QUFFQSxVQUFNQyxJQUFJLEdBQUc7QUFDWEQsTUFBQUEsT0FBTyxFQUFFLGFBREU7QUFFWEUsTUFBQUEsVUFBVSxFQUFFSCxRQUZEO0FBR1hJLE1BQUFBLE1BQU0sRUFBRSxTQUhHO0FBSVhDLE1BQUFBLFVBQVUsRUFBRSxTQUpEO0FBS1hDLE1BQUFBLFlBQVksRUFBRSxTQUxIO0FBTVhDLE1BQUFBLGFBQWE7QUFDWFAsUUFBQUE7QUFEVyxTQUVSRixPQUZRO0FBR1hDLFFBQUFBLE9BSFc7QUFJWFMsUUFBQUEsU0FBUyxFQUFFM0IsR0FBRyxFQUpIO0FBS1g0QixRQUFBQSxjQUFjLEVBQUUsQ0FBQyxJQUFJMUIsSUFBSixFQUxOO0FBTVgyQixRQUFBQSxRQUFRLEVBQUUsTUFBTWYsVUFBVSxHQUFHZ0IsSUFBYixDQUFrQjtBQUFBLDRDQUFJQyxJQUFKO0FBQUlBLFlBQUFBLElBQUo7QUFBQTs7QUFBQSxpQkFBYUEsSUFBYjtBQUFBLFNBQWxCLEVBQXFDQyxLQUFyQyxDQUEyQyxFQUEzQztBQU5MO0FBTkYsS0FBYjs7QUFnQkEsUUFBSTtBQUNGbkIsTUFBQUEsSUFBSSxDQUFDUSxJQUFELENBQUo7QUFDRCxLQUZELENBRUUsT0FBT1ksQ0FBUCxFQUFVO0FBQ1ZwQixNQUFBQSxJQUFJLENBQUM7QUFDSE8sUUFBQUEsT0FBTyxFQUFFLFdBRE47QUFFSGEsUUFBQUE7QUFGRyxPQUFELENBQUo7QUFJRDtBQUNGLEdBM0JEO0FBNEJEOztBQUVELFNBQVNDLElBQVQsR0FBd0I7QUFBQSxNQUFWdEIsR0FBVSx1RUFBSixFQUFJO0FBQ3RCLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFRixVQUFVLENBQUNDLEdBQUQ7QUFEWCxHQUFQO0FBR0Q7O0FBRUQsZUFBZXNCLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBub3coKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gYCR7W1xuICAgIGQuZ2V0RnVsbFllYXIoKSxcbiAgICBkLmdldE1vbnRoKCkgKyAxLFxuICAgIGQuZ2V0RGF0ZSgpLFxuICBdLmpvaW4oJy8nKX0gJHtcbiAgICBbZC5nZXRIb3VycygpLFxuICAgICAgZC5nZXRNaW51dGVzKCksXG4gICAgICBkLmdldFNlY29uZHMoKSxcbiAgICAgIGQuZ2V0TWlsbGlzZWNvbmRzKCldLmpvaW4oJzonKX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZW5kKG9wdCA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBzZW5kID0gKCkgPT4ge30sXG4gICAgZ2V0UGFnZVVybCA9ICgpID0+IChQcm9taXNlLnJlc29sdmUoJycpKSwgLy8g5byC5q2l5pa55rOVXG4gIH0gPSBvcHQ7XG4gIFxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gc2VuZExvZyhsb2dEYXRhID0ge30sIGNvbnRleHQpIHtcbiAgICBjb25zdCBoYm1hc3RlciA9IGxvZ0RhdGEua2V5d29yZDtcbiAgICBcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAga2V5d29yZDogJ2NsaWNrQnV0dG9uJyxcbiAgICAgIGJ1dHRvbk5hbWU6IGhibWFzdGVyLFxuICAgICAgcGFnZUlkOiAnaGItY3JvdycsXG4gICAgICBjYXRlZ29yeUlkOiAnaGItY3JvdycsXG4gICAgICBhZGRpdGlvblR5cGU6ICdoYi1jcm93JyxcbiAgICAgIGFkZGl0aW9uVmFsdWU6IHtcbiAgICAgICAgaGJtYXN0ZXIsXG4gICAgICAgIC4uLmxvZ0RhdGEsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGxvY2FsVGltZTogbm93KCksXG4gICAgICAgIGxvY2FsVGltZXN0YW1wOiArbmV3IERhdGUoKSxcbiAgICAgICAgcGFnZV91cmw6IGF3YWl0IGdldFBhZ2VVcmwoKS50aGVuKCguLi5hcmdzKSA9PiBhcmdzKS5jYXRjaCgnJyksXG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgc2VuZChkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZW5kKHtcbiAgICAgICAga2V5d29yZDogJ2Nyb3dFcnJvcicsXG4gICAgICAgIGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIENyb3cob3B0ID0ge30pIHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kOiBjcmVhdGVTZW5kKG9wdClcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JvdztcbiJdfQ==