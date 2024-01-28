// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class Timer {
    constructor() {
        this.gameTime = 0;
        this.maxStep = 0.05;
        this.lastTimestamp = 0;
        this.ticks = [];
    };

    tick() {
        var current = Date.now();
        var delta = (current - this.lastTimestamp) / 1000; // convert milliseconds to seconds
        this.lastTimestamp = current;

        var gameDelta = Math.min(delta, this.maxStep);
        this.gameTime += gameDelta;

        this.ticks.push(delta);
    
        let index = this.ticks.length - 1;
        let sum = 0;
        while(sum <= 1 && index >= 0) {
            sum += this.ticks[index--];
        }
        index++;
    
        this.ticks.splice(0,index);

        return gameDelta;
    };
};
