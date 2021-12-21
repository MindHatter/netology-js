"use scrict";

class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        if (id === undefined){
            throw new Error('error text');
        } else if (this.alarmCollection.some(x => x.id === id)){
            console.error('Already exist');
        } else {
            this.alarmCollection.push({id:id, time: time, callback: callback})
        }
    }

    removeClock(id){
        this.alarmCollection = this.alarmCollection.filter(x => x.id !== id);
    }

    getCurrentFormattedTime(){
        let today = new Date();
        return today.getHours() + ":" + today.getMinutes();
    }

    start(){
        
    }

    stop(){

    }

    printAlarms(){
        this.alarmCollection.forEach(x => console.log(x.id, x.time))
    }

    clearAlarms(){
        this.alarmCollection = [];
    }
}