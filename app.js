const btn = document.querySelector('.btn');
const message = document.querySelector('.message');
const input_area = document.querySelector('.input_area');


const show_message = () =>{
    let msg = input_area.value;
    message.innerHTML+= `<p>${msg}</p>`
}

btn.addEventListener('click', show_message)
