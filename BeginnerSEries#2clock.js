//Clock shows h hours, m minutes and s seconds after midnight.//

//Your task is to write a function which returns the time since midnight in milliseconds.//

//Example:
//h = 0
//m = 1
//s = 1

//result = 61000

Solution

function past(h, m, s){
    let secondsToMilliSec = s * 1000;
    let minutesToMilliSec = m * 60000;
    let hourToMilliSec = h * 3600000;
  
  
  return secondsToMilliSec + minutesToMilliSec + hourToMilliSec;
  }
