cards = [
   {
      title: 'title A',
      imageUrl: 'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
      description: 'description - 1'
   },
   {
      title: 'title B',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      description: 'description - 2'
   },
   {
      title: 'title C',
      imageUrl: 'https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0',
      description: 'description - 3'
   },
   {
      title: 'title D',
      imageUrl: 'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
      description: 'description - 4'
   }

]



const generateCrads = (obj) =>{

   const body = document.body;
   index = 0;
   for(const el of obj)
   {

   const div = document.createElement('div');
   div.classList.add('card');

   const h4 = document.createElement('h4');
   if(index % 2 == 0)
   {
      h4.innerText = `[${index}] ${el.title}`;
   }
   else{
      h4.innerText = el.title;
   }
   

   const photo = document.createElement('img');
   photo.src = el.imageUrl;
   photo.width = 150;
   photo.height = 100;
   photo.alt = 'alternative text was not provided';

   const p = document.createElement('p');
   p.innerText = el.description;

   const br = document.createElement('br');

   div.appendChild(h4);
   div.appendChild(br);
   div.appendChild(photo);
   div.appendChild(p);

   body.appendChild(div);
   index++;
   }
   
}

generateCrads(cards);