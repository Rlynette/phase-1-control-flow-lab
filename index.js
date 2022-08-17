function scuberGreetingForFeet(distance){
  // Write your code here! 
  if (distance > 2500){
    return 'No can do.'
  }else if (distance > 2000){
    return 'I will gladly take your thirty bucks.'
  }else if (distance <= 400 ){
    return 'This one is on me!'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
if (city === 'NYC'){
  return 'Ok, sounds good.'
}else if (city === 'Pittsburgh'){
  return 'No go.'
}
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous'){
    return 'Thank you so much.'
  }else if (tip === 'not as generous'){
    return 'Thank you.'
  }else if (tip === 'thanks for everything'){
    return 'Bye.'
  }
}