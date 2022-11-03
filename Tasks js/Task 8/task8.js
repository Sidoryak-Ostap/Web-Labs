
card = 
   {
      title: 'Title 1',
      imageUrl: 'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
      description: 'Eu ut non sint ullamco minim anim laboris sit nulla.'
   }



const generatecard = (obj) =>{

   const body = document.body;

   const div = document.createElement('div');
   div.classList.add('card');

   const h4 = document.createElement('h4');
   h4.innerText = obj.title;

   const photo = document.createElement('img');
   photo.src = obj.imageUrl;
   photo.width = 150;
   photo.height = 100;
   photo.alt = 'alternative text was not provided';

   const p = document.createElement('p');
   p.innerText = obj.description;

   const br = document.createElement('br');

   div.appendChild(h4);
   div.appendChild(br);
   div.appendChild(photo);
   div.appendChild(p);

   body.appendChild(div);


}


generatecard(card);

