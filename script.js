let texte = document.querySelector('#texte');
let inpt = document.querySelector('input');
let btn = document.querySelector('#bouton');
let liste = document.querySelector('ul');

btn.addEventListener('click',function ajoutTache(){
    const tache = texte.value.trim();
    if (tache !==""){
        const li = document.createElement('li');
        li.setAttribute('class','liste mt-2');
        li.textContent = tache;
        liste.appendChild(li);

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Fafao';
        delBtn.setAttribute('class','btn btn-danger mt-1 mb-1 mx-2');
        delBtn.addEventListener('click',function (){
            liste.removeChild(li);
        })
        li.appendChild(delBtn);
        texte.value = "";
    }else {
        alert('Mampidira lisitra');
    }
});

function btnEnter(){
    const tache = texte.value.trim();
    if (tache !==""){
        const li = document.createElement('li');
        li.setAttribute('class','liste mt-2');
        li.textContent = tache;
        liste.appendChild(li);

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Fafao';
        delBtn.setAttribute('class','btn btn-danger mt-1 mb-1 mx-2');
        delBtn.addEventListener('click',function (){
            liste.removeChild(li);
        })
        li.appendChild(delBtn);
        texte.value = "";
    }else {
        alert('Mampidira lisitra');
    }
}

texte.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        btnEnter();
    }
});

// function rajouterTache (tache){
//     const tache = texte.value.trim();
//     let item = document.createElement('li');
//     item.setAttribute('class','liste');
//     liste.appendChild('item');

//     let check = document.createElement('input');
//     check.setAttribute('type','checkbox');
//     item.appendChild('check');

//     let txt = document.createElement('span');
//     txt.setAttribute('class','txt');
//     txt.textContent = tache; 
//     item.appendChild(txt);
// };