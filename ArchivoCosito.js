const input = document.querySelector('input')
const btn = document.querySelector('.btn')
const ul = document.querySelector('ul');




btn.addEventListener("click", (e) => {
    e.preventDefault();
    

    const text = input.value;

    const li= document.createElement('li')
    const p = document.createElement('p')
    p.textContent = text;


    li.appendChild(p)
    li.appendChild(btndelete())
    ul.appendChild(li)

    input.value=""

});


function btndelete(){
    const btndele = document.createElement('button')
    btndele.textContent = 'X'
    btndele.className= "btn-delete";

    btndele.addEventListener('click', (e)=>{
        const item= e.target.parentElement;
        ul.removeChild(item);

    })

    return btndele
}