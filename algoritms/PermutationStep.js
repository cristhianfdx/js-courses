//Coderbyte Challenge - PermutationStep
//
//Using the JavaScript language, have the function PermutationStep(num)
//take the num parameter being passed and return the next number greater
//than num using the same digits. For example: if num is 123 return 132,
//if it's 12453 return 12534. If a number has no greater permutations,
//return -1 (ie. 999). 

function PermutationStep(num) {
   let permArr = [];
   let usedChars = [];

   function permute(numArr){
           
        for(let i = 0; i < numArr.length; i++){
           let ch = numArr.splice(i, 1)[0];
           usedChars.push(ch);
           if(numArr.length === 0){
               permArr.push(usedChars.slice());
           }
           permute(numArr);
           numArr.splice(i, 0, ch);
           usedChars.pop();
       }
        return permArr;
    }
    permute(Array.from(num.toString()))

   for(let i = 0; i< permArr.length; i++){
        permArr[i] = Number(permArr[i].join(''));
   }

   permArr = permArr.sort((a, b)=>{
       return a - b;
   });

   for(let j = 0; j < permArr.length; j++){
       if(permArr[j] > num){
           return permArr[j];
       }
   }

   return - 1;

}

console.log(PermutationStep(123));
