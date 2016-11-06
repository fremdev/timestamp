const moment = require('moment');

const getTimestampObj = (data) => {
  const parsedData = moment(data, "MMMM-D-YYYY");
  let unix = null, natural = null;
  if(!isNaN(data)) {
    unix = +data;
    natural = moment.unix(data).format('MMMM D, YYYY');
  } else if(parsedData.isValid()) {
      unix = parsedData.unix();
      natural = data;
  }
  return {unix, natural};
}

module.exports = {getTimestampObj};
