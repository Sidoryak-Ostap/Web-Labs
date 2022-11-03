

const fontFamilies= ['Arial', 'Times New Roman','Verdana', 'Brush Script MT','Tahoma', 'Garamond',];

const elems = document.getElementsByClassName('random-font');




for(const el of elems)
{
   el.addEventListener('click', () =>{
const fontFamilies= ['Arial', 'Times New Roman','Verdana', 'Brush Script MT','Tahoma', 'Garamond',];
      el.style.fontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
   });
}








