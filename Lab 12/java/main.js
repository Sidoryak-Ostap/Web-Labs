

let data = [];


// Перевірка попередніх елементів в Local storage
const Prev_data = localStorage.getItem('data');

if (Prev_data) {
   const information = JSON.parse(Prev_data);
   data.push(...information);
   information.forEach(element => {
 
      //Створення div з класом article
      const div = document.createElement('div');

      div.classList.add('article');

      // Створення div для title
      const title = document.createElement('div');
      title.classList.add('article_title');
      title.innerText = element.title;

      // Створення div для description

      const description = document.createElement('div');
      description.classList.add('article_description');
      description.innerText = element.description;

      // Створення div для content

      const content = document.createElement('div');
      content.classList.add('article_content');
      content.innerText = element.content;

      //Створення кнопки видалення
      const delete_button = document.createElement('button');
      delete_button.classList.add('delete_article');
      delete_button.innerText = 'Delete article';

      //Додавання елементів до div з класом article
      div.appendChild(title);
      div.appendChild(description);
      div.appendChild(content);
      div.appendChild(delete_button);

      //Додавання div з класом article до container.
      const container = document.querySelector('.container');
      container.appendChild(div);


      // Видалення елемента при натисканні на нього
      deleting_of_article();

      // При натисканні додати анімацію

      div.addEventListener('click', ()=>{
         const selectedElem = document.querySelector('.select'); 
         if(selectedElem)
         {
            selectedElem.classList.remove('select');
         }

         div.classList.add('select');


      })

      

   }); // foreach

} // if





// функція додає нову статтю
const add = () => {
   const nav = document.querySelector('.nav');
   const input_title = document.getElementById('input_title');
   const input_description = document.querySelector('.input_description');
   const input_content = document.querySelector('.input_content');

   if (input_title.value == '' || input_description.value == '' || input_content.value == '') {
      if (input_title.value == '') {
         input_title.style.border = '2px solid red';
      }

      if (input_description.value == '') {
         input_description.style.border = '2px solid red';
      }

      if (input_content.value == '') {
         input_content.style.border = '2px solid red';
      }

      //Створення Error message
      const error = document.createElement('div');
      error.classList.add('error');

      const error_title = document.createElement('div');
      error_title.classList.add('error_title');
      error_title.innerText = 'Error';

      const error_description = document.createElement('div');
      error_description.classList.add('error_description');
      error_description.innerText = 'Please fill in all fields';

      const error_button = document.createElement('div');
      error_button.classList.add('error_button');
      error_button.innerText = 'OK';


      error.appendChild(error_title);
      error.appendChild(error_description);
      error.appendChild(error_button);

      nav.appendChild(error);


      //Видалення error messgae при натисканні не неї
      error_button.addEventListener('click', () => {

         error.classList.add('delete_eror_mesage');

         setTimeout(() => {
            error.remove();
         }, 2000)
         

      })


      return;
   }

   //Зміна кольорів бордера після помилки
   input_title.style.border = '2px solid #fff';
   input_description.style.border = '2px solid #fff';
   input_content.style.border = '2px solid #fff';

   //Створення div з класом article
   const div = document.createElement('div');
   div.classList.add('article');

   // Створення div для title
   const title = document.createElement('div');
   title.classList.add('article_title');
   title.innerText = input_title.value;
   // Створення div для description

   const description = document.createElement('div');
   description.classList.add('article_description');
   description.innerText = input_description.value;

   // Створення div для content

   const content = document.createElement('div');
   content.classList.add('article_content');
   content.innerText = input_content.value;

   //Створення кнопки видалення
   const delete_button = document.createElement('button');
   delete_button.classList.add('delete_article');
   delete_button.innerText = 'Delete article';

   //Додавання елементів до div з класом article
   div.appendChild(title);
   div.appendChild(description);
   div.appendChild(content);
   div.appendChild(delete_button);

   //Додавання div з класом article до container.
   const container = document.querySelector('.container');
   container.appendChild(div);

   // Очищення всіх полів
   input_title.value = '';
   input_description.value = '';
   input_content.value = '';

   //При натисканні на елемент, додати анімацію

      div.addEventListener('click', ()=>{
         const selectedElem = document.querySelector('.select'); 
         if(selectedElem)
         {
            selectedElem.classList.remove('select');
         }

         div.classList.add('select');


      })

   
   //Додавання інформації про статтю в Local Storage
   const object = {
      title: title.innerText,
      description: description.innerText,
      content: content.innerText
   }

   data.push(object);


   localStorage.setItem('data', JSON.stringify(data));
}




// Натискаючи на кнопку ми викликаємо функцію, що додає нову статтю
const btn = document.querySelector('.add_article');
btn.addEventListener('click', () => {

   add();


   //Натискаючи на статтю ми видалаємо її
   
   deleting_of_article();
})











// Functions 


// Видалення статті
function deleting_of_article()
      {
         // Отримуємо колекцію кнопок
         const delete_buttons = document.getElementsByClassName('delete_article');

         for (const button of delete_buttons) {
            button.addEventListener('click', () => {
               const parent_of_button = button.parentElement;
   
               parent_of_button.classList.add('delete');
   
               //Затримка видалення
               setTimeout(() => {
                  parent_of_button.remove();
               }, 1500)
   
               remove_from_localStorage(parent_of_button);
            })
         }   

         
      }



//Функція очищення local storage відповідної статті
function remove_from_localStorage(el) {
   const current_title = el.querySelector('.article_title').innerText;
   const current_storage_data = JSON.parse(localStorage.getItem('data'));


   index = 0;
   for (const obj of current_storage_data)
   {
      if (obj.title == current_title) 
      {
         current_storage_data.splice(index,1);
      }
      else {
         index += 1;
      }
   }

   index2 = 0;
   for(const obj of data)
   {
      if(obj.title == current_title)
      {
         data.splice(index, 1);

      }
      else{
         index2 +=1;
      }
   }


   localStorage.setItem('data', JSON.stringify(current_storage_data));
}



