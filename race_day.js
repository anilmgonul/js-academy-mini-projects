let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegisteredEarly = true

let runnerAge = Math.floor(Math.random() * 80 )

if(runnerAge > 18 && runnerRegisteredEarly){
  raceNumber += 1000
  console.log(`${raceNumber} - You will race at 9:30 am`)
}else if (runnerAge > 18 && !runnerRegisteredEarly) {
  console.log(`${raceNumber} - You will race at 11:00 am`)
}else if (runnerAge < 18) {
  console.log(`${raceNumber} - You will race at 12:30 pm`)
}else{
  console.log('Please refer to the registration desk.')
}
