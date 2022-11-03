


   window.addEventListener('load', ()=>{



      const generateListOfNumberWithStep = (begin, end, step) =>{
      
         if (begin>end)
         {
            const wrong = document.createElement('p');
            wrong.innerText = 'Wrong interval';
            const body = document.body;
            body.appendChild(wrong);
         }

         else if(step <=0)
         {
            const span = document.createElement('span');
            span.innerText = 'Interval must be positive number';
            const body = document.body;
            body.appendChild(span);
         }

         else{
      
            const ul = document.createElement('ul');
      
            while (begin <= end)
            {
              const li = document.createElement('li');
              li.innerText = begin;
              ul.appendChild(li);
              begin = begin+step;
            }
            const body = document.body;
            body.appendChild(ul);
      
         }
      
      }
      
      generateListOfNumberWithStep(1,6,2);
      
      
      
      })



