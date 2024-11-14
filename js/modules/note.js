export function addTask (){

    const displayAddTask = document.querySelector('.tasks__options--add')
    const addTask = document.querySelector('.note')

    const pomodoroTitle = document.querySelector('.note__add--tittle-input')
    const pomodoroCount = document.querySelector('.note__add--count-input')
    const pomodoroNote = document.querySelector('.note__add--text-notes')

    const pomodoroSave = document.querySelector('.note__add--options-save')
    const cancelMenu = document.querySelector('.note__add--options-cancel')
    //Open Note
    function showMenu() {
        addTask.classList.remove('note__disable')
        textNote.classList.add('note__add--text-hidden')
        textNote.value =''
        pomodoroTitle.value = ''
        pomodoroCount.value =1   
        pomodoroTitle.classList.remove('note__add--tittle-input-error') 
    }

    cancelMenu.addEventListener('click',()=>{
        addTask.classList.add('note__disable')
    })
    displayAddTask.addEventListener('click',showMenu)

    cancelMenu.addEventListener('click',()=>{
        addTask.classList.add('note__disable')
    })

    //Button Adding count
    const addCount = document.querySelector('.note__add--btn-plus')
    const substractCount = document.querySelector('.note__add--btn-less')

    addCount.addEventListener('click',()=>{
        pomodoroCount.value = parseInt(pomodoroCount.value) + 1;
    })
    substractCount.addEventListener('click',()=>{
        if(parseInt(pomodoroCount.value) > 1 ){
            pomodoroCount.value = parseInt(pomodoroCount.value) - 1;
        } 
    })

const openNote = document.querySelector('.note__add--text-open')
const textNote = document.querySelector('.note__add--text-notes')
    //Adding Note
    openNote.addEventListener('click',()=>{
        textNote.classList.remove('note__add--text-hidden')
    })

//Function create new div for the task
function pomodoroCreateTask (title,count,note) {
    //work
    let work = document.createElement('div')
    work.className = 'work'
    //work__note
    let workNote = document.createElement('div')
    workNote.className = 'work__note'
    //work__note--title
    let workNoteTitle = document.createElement('div')
    workNoteTitle.className = 'work__note--title'
    //work__note--title--icon
    let workNoteTitleIcon = document.createElement('svg')
    workNoteTitleIcon.className = 'work__note--title-icon'
    workNoteTitleIcon.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/></svg>`;
    //work__note--title-text
    let workNoteTitleText = document.createElement('h2')
    workNoteTitleText.className = 'work__note--title-text'
    workNoteTitleText.textContent = title
    //work__note--title-number
    let workNoteTitleNumber = document.createElement('h3')
    workNoteTitleNumber.className = 'work__note--title-number'
    workNoteTitleNumber.textContent= `0/${count}`
    //work__note--title-options
    let workNoteTitleOption = document.createElement('button')
    workNoteTitleOption.className = 'work__note--title-options'
    workNoteTitleOption.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/></svg>`
                
       //NOTAAAAAA
    //work__note--subtitle 
    let workNoteSubtitle = document.createElement('div')
    workNoteSubtitle.className = 'work__note--subtitle'
    workNoteSubtitle.textContent= note
    


    //Attatching all elements to the main div
    workNoteTitle.appendChild(workNoteTitleIcon)
    workNoteTitle.appendChild(workNoteTitleText)
    workNoteTitle.appendChild(workNoteTitleNumber)
    workNoteTitle.appendChild(workNoteTitleOption)

    workNote.appendChild(workNoteTitle)
    workNote.appendChild(workNoteSubtitle)

    work.appendChild(workNote)
    document.getElementById('container').appendChild(work);
}
pomodoroSave.addEventListener('click',()=>{
    if(pomodoroTitle.value.trim().length === 0){
        pomodoroTitle.classList.add('note__add--tittle-input-error')}
     else if (pomodoroNote.value.trim().length === 0){
        pomodoroCreateTask(
            pomodoroTitle.value,
            pomodoroCount.value)
            addTask.classList.add('note__disable')
     }
    else {
        pomodoroCreateTask(
            pomodoroTitle.value,
            pomodoroCount.value,
            pomodoroNote.value)
            addTask.classList.add('note__disable')
    }

})

document.getElementById('container').addEventListener('click', (event) => {
    if (event.target.closest('.work__note--title-icon')) {
        const icon = event.target.closest('.work__note--title-icon');
        const titleText = icon.closest('.work__note').querySelector('.work__note--title-text');
        
        icon.classList.toggle('work__note--title-icon-done');
        titleText.classList.toggle('work__note--title-text-done');
    }
});

}