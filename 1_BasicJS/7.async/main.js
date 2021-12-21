// тут вы можете вызывать функции из task.js
clock = new AlarmClock();

console.log(clock.alarmCollection);
clock.addClock("16:45", f => f, 1);

printAlarms()
