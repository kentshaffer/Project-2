const { DateTime } = require('luxon');

module.exports = {
  diffDate: (dateCreated) => {
    //Please note date from Sequelize must be in DATEONLY format
    let format = DateTime.fromISO(dateCreated);
    let getDiff = format.diffNow('days').values.days;
    let convert = getDiff * -1;
    let round = Math.round(convert);
    return round;
  },
};
