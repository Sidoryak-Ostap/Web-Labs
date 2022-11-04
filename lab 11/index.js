

const get_color = document.querySelector('.get_color');
const add_color = document.querySelector('.add_color');
const reset_colors = document.querySelector('.reset_colors');
const color_list = document.querySelector('.color_list');
const color_block = document.querySelector('.color_block');





let info = [];

const prev_info = localStorage.getItem('color');
if(prev_info)
{   
    
    const prev_colors = JSON.parse(prev_info);
    info.push(...prev_colors);

    prev_colors.forEach(color => {

        const div = document.createElement('div');
        div.classList.add('color');
        
        div.style.backgroundColor = color;
        
        color_list.appendChild(div);

        //Додавання до container при натисканні
        div.addEventListener('click', ()=>{

            const item = document.createElement('div');
            item.classList.add('item_color');
    
            item.style.backgroundColor = div.style.backgroundColor;
            color_block.appendChild(item);
        });


    });
}



// Стоворення блоку з кольором
add_color.addEventListener('click', () => {

    const div = document.createElement('div'); // Створення div блока кольору

    div.classList.add('color'); // Присвоєння класу
    div.style.backgroundColor = get_color.value;

    color_list.appendChild(div);

    // Добавлення в локал Storage кнопок кольорів
    info.push(div.style.backgroundColor);
    localStorage.setItem('color', JSON.stringify(info));

    // Додавання елемента при натисканні на нього в container color_block
    div.addEventListener('click', ()=>{

        const item = document.createElement('div');
        item.classList.add('item_color');

        item.style.backgroundColor = div.style.backgroundColor;
        color_block.appendChild(item);
    });

})


reset_colors.addEventListener('click', ()=>{

    color_list.innerHTML = '';
    info = [];
    localStorage.setItem('color', []);

})


