const addBtn = document.querySelector('.add-note')
const app = document.querySelector('.app')


addBtn.addEventListener('click', newNote)


function newNote(){
    const nNote = document.createElement('div')
    nNote.innerHTML = `<textarea class="note" placeholder="type smthing here..." maxlength="125"></textarea>
    <i class="fa-solid fa-trash" id="trash-btn"></i>`;
    nNote.classList.add('note-wrapper')
    app.insertBefore(nNote, addBtn)

    const delBtns = document.querySelectorAll('#trash-btn')
    delBtns.forEach(function(btn){
        btn.addEventListener('click', function(){
            btn.parentElement.remove()
        })
    })
    

}


