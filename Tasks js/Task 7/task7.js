
window.addEventListener('load', ()=>{



const GenerateListOf = (begin, end) =>{

   if (begin>end)
   {
      const wrong = document.createElement('p');
      wrong.innerText = 'Wrong interval';
      const body = document.body;
      body.appendChild(wrong);
   }
   else{

      const ul = document.createElement('ul');

      while (begin <= end)
      {
        const li = document.createElement('li');
        li.innerText = begin;
        ul.appendChild(li);
        begin++;
      }
      const body = document.body;
      body.appendChild(ul);

   }

}

GenerateListOf(1,5);



})