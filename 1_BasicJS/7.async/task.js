"use scrict";

class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        if (id === undefined){
            throw new Error('Error text');
        } else if (this.alarmCollection.some(x => x.id === id)){
            console.error('Already exist');
        } else {
            this.alarmCollection.push({id, time, callback})
        }
    }

    removeClock(id){
        this.alarmCollection = this.alarmCollection.filter(x => x.id !== id);
    }

    getCurrentFormattedTime(){
        let today = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return today
    }

    start(){
        function checkClock(alarm) {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(x => checkClock(x));
            }, 1000);
        }
    }

    stop(){
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(x => console.log(x.id, x.time))
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}