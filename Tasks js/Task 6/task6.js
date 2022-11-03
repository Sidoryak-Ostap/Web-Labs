

const SetInnerText = (id, value) =>{

   const elem = document.getElementById(id);
   if(elem)
   {
      elem.innerText = value;
      return true;
   }
   else{
      return false;
   }
}


console.log(SetInnerText('text', 'Java Script'));