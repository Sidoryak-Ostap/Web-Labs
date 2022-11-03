

const outscreen = document.querySelector('.outfiled');
const calculator = document.querySelector('.calc')

calculator.addEventListener('click', function(event){

   if(!event.target.classList.contains('button')) return;

   const value = event.target.innerText;

   switch(value){
      case 'c': 
      outscreen.innerText = '';
      break;

      case '=':
         const result = outscreen.innerText;
         
         outscreen.innerText = eval(result).toFixed(1);
         break;

      case '*':
         if(outscreen.innerText != '')
         {
            const lastElem = outscreen.innerText[outscreen.innerText.length-1];
            if(['+','-','*','/','.'].includes(lastElem))
            {
               return;
            }
             outscreen.innerText +='*';
         }
         else
            return;
         break; 

      case '/':
         if(outscreen.innerText != '')
         {
            const lastElem = outscreen.innerText[outscreen.innerText.length-1];
            if(['+','-','*','/','.'].includes(lastElem))
            {
               return;
            }
             outscreen.innerText +='/';
         }
         else
            return;
         break; 

      case '.':
         if(outscreen.innerText != '')
         {
            const lastElem = outscreen.innerText[outscreen.innerText.length-1];
            if(['+','-','*','/','.'].includes(lastElem))
            {
               return;
            }
             outscreen.innerText +='.';
         }
         else
            return;
         break; 
         
      case '-':
         if(outscreen.innerText != '')
         {
            const lastElem = outscreen.innerText[outscreen.innerText.length-1];
            if(['+','-','*','/','.'].includes(lastElem))
            {
               return;
            }
             outscreen.innerText +='-';
         }
         else
            return;
         break; 

      case '+':
         if(outscreen.innerText != '')
         {
            const lastElem = outscreen.innerText[outscreen.innerText.length-1];
            if(['+','-','*','/','.'].includes(lastElem)){
               return 0;
            }
            outscreen.innerText +='+';
         }
          else
            return;
         break; 
         

      default:
      outscreen.innerText += value;
   }


})

