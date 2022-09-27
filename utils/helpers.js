const { DateTime } = require('luxon');
// const tsparticles = require('tsparticles-engine');

module.exports = {
  diffDate: (dateCreated) => {
    //Please note date from Sequelize must be in DATEONLY format
    let format = DateTime.fromISO(dateCreated);
    let getDiff = format.diffNow('days').values.days;
    let convert = getDiff * -1;
    let round = Math.round(convert);
    return round;
  },
  // confetti: (async () => {
  //   await loadConfettiPreset(tsparticles); // this is required only if you are not using the bundle script

  //   await tsparticles.load('tsparticles', {
  //     preset: 'confetti',
  //   });
  // })()
};