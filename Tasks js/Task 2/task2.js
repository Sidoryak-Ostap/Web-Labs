



const GetNextNumber = (num) =>{

   if (num>0)
   {
      return ++num;
   }
   else if(num<0)
   {
      return --num;
   }
   else 
   {
      return 0;
   }
}

const result = GetNextNumber(-1);
console.log(result);