



const buutonpage = document.querySelector('.create_page');
const pagecontainer = document.querySelector('.page_holder');
const history = document.querySelector('.history_list');

let counterpage = 0; 
let a = 0;

let results =[];   // Масив для зберігання даних про історію


const prevResults_of_history = localStorage.getItem('pagename');

if(prevResults_of_history)
{
   const elems = JSON.parse(prevResults_of_history);
   results.push(...elems);
   for(const restElem of results)
   {
      const newhistoryitem = document.createElement('li');
      newhistoryitem.classList.add('history_item');
      newhistoryitem.innerText = restElem;
      history.appendChild(newhistoryitem);

      
   }
}





// Створення сторінки натисканням на кнопку
buutonpage.addEventListener('click', () =>{
   const newpage = document.createElement('div');
   newpage.classList.add('page');
   newpage.innerText = `Page ${++counterpage}`;
   pagecontainer.appendChild(newpage);   


   pages_name.push(newpage.innerText);
   localStorage.setItem('page_name', JSON.stringify(pages_name));


});

// Додавання сторіник в історію з лічильником
pagecontainer.addEventListener('click' , (event) =>{
   const value = event.target.innerText;
   const exist_already = document.querySelectorAll('.history_item_text');

   for(const el of exist_already)
   {
      if (value == el.innerText)
      {
         a=0;
         const parent_of_el = el.parentElement;
         const counter_of_el = parent_of_el.lastElementChild;
         const text_of_counter_el = counter_of_el.innerText;
         const getnumber_of_counter = text_of_counter_el.slice(3,6);
         const value_of_counter = Number(getnumber_of_counter);
         a = value_of_counter;
         counter_of_el.innerText = ` : ${++a}`;

         
         results.push(parent_of_el.innerText);
         localStorage.setItem('pagename', JSON.stringify(results));

         return;
      }
   }
  
   
   
   
   
   const newhistoryitem = document.createElement('li');  // створення елементу історії 
   newhistoryitem.classList.add('history_item');
   
   const history_item_text = document.createElement('span');
   history_item_text.innerText =  value;
   history_item_text.classList.add('history_item_text');
   
   const history_item_counter  = document.createElement('span');
   history_item_counter.classList.add('history_item_counter');
   history_item_counter.innerText = ' : 1';
   
   newhistoryitem.appendChild(history_item_text);
   newhistoryitem.appendChild(history_item_counter);
   
            
   history.appendChild(newhistoryitem);

   results.push(newhistoryitem.innerText);
   localStorage.setItem('pagename', JSON.stringify(results));

})




   //Кнопка reset_history (Видалення всіх елементів історії)
   const reset_history = document.querySelector('.reset_history');

   reset_history.addEventListener('click' , () =>{
      localStorage.setItem('pagename', JSON.stringify([]));
      results = [];
      const li_elems = document.querySelectorAll('.history li');
      for (const li of li_elems)
      {
         li.remove();
      }
      a = 0;
   });

   //Кнопка reset_pages (Видалення всіх сторінок)
   const reset_pages = document.querySelector('.reset_pages');

   reset_pages.addEventListener('click', () =>{

      pagecontainer.innerHTML = '';


      counterpage = 0; 

   });

