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
    const hbmaster = logData.keyword;
    
    const data = {
      keyword: 'clickButton',
      buttonName: hbmaster,
      pageId: 'hb-crow',
      categoryId: 'hb-crow',
      additionType: 'hb-crow',
      additionValue: {
        hbmaster,
        ...logData,
        context,
        localTime: now(),
        localTimestamp: +new Date(),
        page_url: await getPageUrl().then((...args) => args).catch(''),
      }
    };
    
    try {
      send(data);
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
