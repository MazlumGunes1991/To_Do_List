const buttonDOM = document.querySelector('#liveToastBtn') // Receıved information about button click.
const liDOM = document.querySelector('#list')  // List information received.
const formDOM = document.querySelector('#task') // Form information received.


// A ready template has been created to add a new list.
const generateTemplate = (newTask) => {
    const li = `
        <li class="d-flex justify-content-between">
        <div class="list-checked">
            <i class="fa-solid fa-check"></i>
            <span class="ml-2">${newTask}</span>
        </div>
            <i class="fa-solid fa-trash trash"></i>
        </li>
    `
    liDOM.innerHTML += li
}


// The list has been added.
function newElement(event) {
    event.preventDefault()

    const newTask = task.value.trim()
    // console.log(newTask)

    if (newTask.length > 0) { // It was checked whether there is information in the list.
        generateTemplate(newTask)

        // Activating toast notifications
        $(document).ready(function () {
            $('.success').toast('show');
        });

        formDOM.value = "" // After adding the list, the input field is cleared.

    } else {

        // Activating toast notifications
        $(document).ready(function () {
            $('.error').toast('show');
        });

    }

    
}




// The task list has been removed.
liDOM.addEventListener('click', event => {
    if(event.target.classList.contains('trash')) {
        event.target.parentElement.remove()
    }

    
})




// Update the status of your tasks after they are done.
liDOM.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
    }
    
    
},false)



