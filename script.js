const inputItem = document.querySelector('input');
const btnAddItem = document.querySelector('.btn-add-item');
const ul = document.querySelector('ul');

// create button elements

const listItemButtons = (li) => {
    let btnUp = document.createElement('i');
    btnUp.classList.add('up', 'ion-ios-arrow-thin-up');
    li.appendChild(btnUp);

    let btnDown = document.createElement('i');
    btnDown.classList.add('down', 'ion-ios-arrow-thin-down');
    li.appendChild(btnDown);

    let btnRemove = document.createElement('i');
    btnRemove.classList.add('btn-red', 'ion-ios-close-outline');
    li.appendChild(btnRemove);
   
    let btnAdd = document.createElement('i');
    btnAdd.classList.add('btn-disabled', 'btn-green', 'ion-ios-checkmark-outline');
    li.appendChild(btnAdd);
}

// Add elements to the list

const createLi = () => {
    let li = document.createElement('li');
    li.innerHTML = `<span>&raquo; ${inputItem.value}</span>`;
    inputItem.value = '';
    listItemButtons(li);
    ul.appendChild(li);   
}

btnAddItem.addEventListener('click', (e) => {
    if (inputItem.value) {
        createLi();
    }
});

inputItem.addEventListener('keypress', (e) => {
    console.log(e);
    if (e.keyCode === 13 && inputItem.value) {
        createLi();  
    }
});


// Conditions for the buttons event

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
        if (e.target.classList.contains('up')) {
            let li = e.target.parentElement;
            let preLi = li.previousElementSibling;
            let ul = li.parentElement;
            if (preLi) {
                ul.insertBefore(li, preLi);
            }

        } else if (e.target.classList.contains('down')) {
            let li = e.target.parentElement;
            let nextLi = li.nextElementSibling;
            let ul = li.parentElement;
            if (nextLi) {
                ul.insertBefore(nextLi, li);
            }

        } else if (e.target.classList.contains('btn-red')) {
            let li = e.target.parentElement;
            let ul = li.parentElement;
            li.className = 'remove-item';
            ul.append(li);
            e.target.nextElementSibling.classList.remove('btn-disabled');
            e.target.classList.add('btn-disabled');

        } else if (e.target.classList.contains('btn-green')) {
            let li = e.target.parentElement;
            let ul = li.parentElement;
            li.classList.remove('remove-item');
            ul.prepend(li);
            e.target.previousElementSibling.classList.remove('btn-disabled');
            e.target.classList.add('btn-disabled');
        }
    }
});


// function getCompleted:
    // loop through li's in the ul
        // check if li has completed
            // add li to array of "results"

    // return results