export class Challenge {  
  static solution(num: number) {
    let sol = 0; 
    for (let i = 0; i < num; i++) {
      if(i%3 === 0 || i%5 === 0 ) {
        sol += i
      }
    }
    
    return sol
  }
}