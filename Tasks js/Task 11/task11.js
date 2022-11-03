


function randomIntFromInterval(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
 }
 

const getRandomColor = (type) => {

   if(type == 'rgb')
   {
         let num1 = Math.floor(Math.random() * 256);
         let num2 = Math.floor(Math.random() * 256);
         let num3 = Math.floor(Math.random() * 256);

         let rgb = `rgb(${num1}, ${num2}, ${num3})`
         return rgb;
   }


   else if(type == 'hex')
   {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
      let hex = '#';
      for(let i = 0; i<3; i++)
      {
         const number = randomIntFromInterval(1,9);
         hex+=number;
         
         const letter = letters[Math.floor(Math.random() * letters.length)];
         hex+=letter;
      }

      return hex;
   }


   else{
      return -1;
   }


}


console.log(getRandomColor('hex'));


