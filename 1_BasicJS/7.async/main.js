// тут вы можете вызывать функции из task.js
clock = new AlarmClock();

console.log(clock.alarmCollection);
clock.addClock("16:45", f => f, 1);
clock.addClock("15:30", f => f, 1);
clock.addClock("16:45", f => f, 2);
clock.removeClock(1);
clock.addClock("14:50", f => f, 3);
clock.printAlarms();
clock.start();
clock.stop();
clock.clearAlarms();
clock.printAlarms();
clock.getCurrentFormattedTime();