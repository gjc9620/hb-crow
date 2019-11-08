function now() {
  const d = new Date();
  return `${[
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate(),
  ].join('/')} ${
    [d.getHours(),
      d.getMinutes(),
      d.getSeconds(),
      d.getMilliseconds()].join(':')}`;
}

function createSend(opt = {}) {
  const {
    send = () => {},
    getPageUrl = () => (Promise.resolve('')), // 异步方法
  } = opt;
  
  return async function sendLog(logData = {}, context) {
    const hbKeyword = logData.keyword;
    delete logData.keyword;
    
    try {
      send({
        ...logData,
        hbKeyword,
        context,
        localTime: now(),
        localTimestamp: +new Date(),
        page_url: await getPageUrl().then((...args) => args).catch(''),
      });
    } catch (e) {
      send({
        keyword: 'crowError',
        e,
      });
    }
  };
}

function Crow(opt = {}) {
  return {
    send: createSend(opt)
  };
}

export default Crow;
