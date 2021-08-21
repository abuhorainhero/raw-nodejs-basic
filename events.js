const College = require('./college');

const college = new College();

college.on('bellRing', ({ period, text }) => {
    console.log(`We need to run. because, ${period} ${text}`);
});

college.endPeriod();
