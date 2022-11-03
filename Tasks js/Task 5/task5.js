

const GetCountByClassName = (value) =>{
   const amount = document.getElementsByClassName(value).length;
   return amount;
}

result = GetCountByClassName('elem');
console.log(result);