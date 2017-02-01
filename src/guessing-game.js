class GuessingGame {
    constructor() {
    	this.minValue = 0;
    	this.maxValue = 0;
    	this.avgValue = 0;
    }

    setRange(min, max) {
    	this.minValue = min;
    	this.maxValue = max;
    }

    guess() {
       	this.avgValue = Math.round((this.minValue + this.maxValue) / 2);
       	return this.avgValue
    }

    lower() {
    	this.maxValue = this.avgValue;
    }

    greater() {
    	this.minValue = this.avgValue;

    }
}

module.exports = GuessingGame;
