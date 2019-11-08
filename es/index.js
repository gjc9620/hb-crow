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

    try {
      send(_objectSpread({}, logData, {
        context,
        localTime: now(),
        localTimestamp: +new Date(),
        page_url: await getPageUrl().then(...(args => args)).catch('')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJub3ciLCJkIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiam9pbiIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJjcmVhdGVTZW5kIiwib3B0Iiwic2VuZCIsImdldFBhZ2VVcmwiLCJyZXNvbHZlIiwic2VuZExvZyIsImxvZ0RhdGEiLCJjb250ZXh0IiwibG9jYWxUaW1lIiwibG9jYWxUaW1lc3RhbXAiLCJwYWdlX3VybCIsInRoZW4iLCJhcmdzIiwiY2F0Y2giLCJlIiwia2V5d29yZCIsIkNyb3ciXSwibWFwcGluZ3MiOiI7OztBQUVBLFNBQVNBLEdBQVQsR0FBZTtBQUNiLFFBQU1DLENBQUMsR0FBRyxJQUFJQyxJQUFKLEVBQVY7QUFDQSxTQUFRLEdBQUUsQ0FDUkQsQ0FBQyxDQUFDRSxXQUFGLEVBRFEsRUFFUkYsQ0FBQyxDQUFDRyxRQUFGLEtBQWUsQ0FGUCxFQUdSSCxDQUFDLENBQUNJLE9BQUYsRUFIUSxFQUlSQyxJQUpRLENBSUgsR0FKRyxDQUlFLElBQ1YsQ0FBQ0wsQ0FBQyxDQUFDTSxRQUFGLEVBQUQsRUFDRU4sQ0FBQyxDQUFDTyxVQUFGLEVBREYsRUFFRVAsQ0FBQyxDQUFDUSxVQUFGLEVBRkYsRUFHRVIsQ0FBQyxDQUFDUyxlQUFGLEVBSEYsRUFHdUJKLElBSHZCLENBRzRCLEdBSDVCLENBR2lDLEVBUm5DO0FBU0Q7O0FBRUQsU0FBU0ssVUFBVCxHQUE4QjtBQUFBLE1BQVZDLEdBQVUsdUVBQUosRUFBSTtBQUFBLG9CQUl4QkEsR0FKd0IsQ0FFMUJDLElBRjBCO0FBQUEsUUFFMUJBLElBRjBCLDBCQUVuQixNQUFNLENBQUUsQ0FGVztBQUFBLDBCQUl4QkQsR0FKd0IsQ0FHMUJFLFVBSDBCO0FBQUEsUUFHMUJBLFVBSDBCLGdDQUdiLE1BQU8sU0FBUUMsT0FBUixDQUFnQixFQUFoQixDQUhNO0FBTTVCLFNBQU8sZUFBZUMsT0FBZixHQUE4QztBQUFBLFFBQXZCQyxPQUF1Qix1RUFBYixFQUFhO0FBQUEsUUFBVEMsT0FBUzs7QUFDbkQsUUFBSTtBQUNGTCxNQUFBQSxJQUFJLG1CQUNDSSxPQUREO0FBRUZDLFFBQUFBLE9BRkU7QUFHRkMsUUFBQUEsU0FBUyxFQUFFbkIsR0FBRyxFQUhaO0FBSUZvQixRQUFBQSxjQUFjLEVBQUUsQ0FBQyxJQUFJbEIsSUFBSixFQUpmO0FBS0ZtQixRQUFBQSxRQUFRLEVBQUUsTUFBTVAsVUFBVSxHQUFHUSxJQUFiLENBQWtCLElBQUdDLElBQUksSUFBSUEsSUFBWCxDQUFsQixFQUFtQ0MsS0FBbkMsQ0FBeUMsRUFBekM7QUFMZCxTQUFKO0FBT0QsS0FSRCxDQVFFLE9BQU9DLENBQVAsRUFBVTtBQUNWWixNQUFBQSxJQUFJLENBQUM7QUFDSGEsUUFBQUEsT0FBTyxFQUFFLFdBRE47QUFFSEQsUUFBQUE7QUFGRyxPQUFELENBQUo7QUFJRDtBQUNGLEdBZkQ7QUFnQkQ7O0FBRUQsU0FBU0UsSUFBVCxHQUF3QjtBQUFBLE1BQVZmLEdBQVUsdUVBQUosRUFBSTtBQUN0QixTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRUYsVUFBVSxDQUFDQyxHQUFEO0FBRFgsR0FBUDtBQUdEOztBQUVELGVBQWVlLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZnVuY3Rpb24gbm93KCkge1xuICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgcmV0dXJuIGAke1tcbiAgICBkLmdldEZ1bGxZZWFyKCksXG4gICAgZC5nZXRNb250aCgpICsgMSxcbiAgICBkLmdldERhdGUoKSxcbiAgXS5qb2luKCcvJyl9ICR7XG4gICAgW2QuZ2V0SG91cnMoKSxcbiAgICAgIGQuZ2V0TWludXRlcygpLFxuICAgICAgZC5nZXRTZWNvbmRzKCksXG4gICAgICBkLmdldE1pbGxpc2Vjb25kcygpXS5qb2luKCc6Jyl9YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VuZChvcHQgPSB7fSkge1xuICBjb25zdCB7XG4gICAgc2VuZCA9ICgpID0+IHt9LFxuICAgIGdldFBhZ2VVcmwgPSAoKSA9PiAoUHJvbWlzZS5yZXNvbHZlKCcnKSksIC8vIOW8guatpeaWueazlVxuICB9ID0gb3B0O1xuICBcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIHNlbmRMb2cobG9nRGF0YSA9IHt9LCBjb250ZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHNlbmQoe1xuICAgICAgICAuLi5sb2dEYXRhLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBsb2NhbFRpbWU6IG5vdygpLFxuICAgICAgICBsb2NhbFRpbWVzdGFtcDogK25ldyBEYXRlKCksXG4gICAgICAgIHBhZ2VfdXJsOiBhd2FpdCBnZXRQYWdlVXJsKCkudGhlbiguLi5hcmdzID0+IGFyZ3MpLmNhdGNoKCcnKSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNlbmQoe1xuICAgICAgICBrZXl3b3JkOiAnY3Jvd0Vycm9yJyxcbiAgICAgICAgZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gQ3JvdyhvcHQgPSB7fSkge1xuICByZXR1cm4ge1xuICAgIHNlbmQ6IGNyZWF0ZVNlbmQob3B0KVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDcm93O1xuIl19