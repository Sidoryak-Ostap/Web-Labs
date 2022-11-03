

const GetSeconds = (value, type) =>{

   if (type == 'minutes')
   {
      return value*60;
   }
   else if(type == 'hours')
   {
      return value*3600;
   }
   else if(type == 'seconds')
   {
      return value;
   }
   else{
      return -1;
   }
}

const result = GetSeconds(5, 'minutes');
console.log(result);

