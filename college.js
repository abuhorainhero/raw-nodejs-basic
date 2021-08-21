const EventEmitter = require('events');

class College extends EventEmitter {
    endPeriod() {
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'Second',
                text: 'ended',
            });
        }, 2000);
    }
}

module.exports = College;
