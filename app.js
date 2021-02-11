// Get elements from HTML and assign them to variables
const addItem = document.querySelector('.add-item');
const text = document.querySelector('.text');
const items = document.querySelector('.list-items');
const clearBtn = document.querySelector('.clear-items');

const storedInput = localStorage.getItem('items');

let toDoItems = [];

if(storedInput){
   items.innerHTML = storedInput;
}

// Add Item event Listener
addItem.addEventListener('click', e=>{
   
   if(text.value === ''){
      alert('Please enter the text');
   } else {
      items.innerHTML += `
      <li class="list-item">
         <div class="text-item">${text.value}</div>

         <div class="btns">
            <i class="far fa-check-circle"></i>
            <i class="far fa-edit"></i>
            <i class="far fa-times-circle"></i>
         </div> 
      </li> 
       `
      text.value = '';

      saveToLocalStorage(items.innerHTML);
   }


   e.preventDefault();
});

// Save to Local Storage
const saveToLocalStorage = ite=>{

   toDoItems.push(ite);

   return localStorage.setItem('items', toDoItems);
}


// Remove All items from Local Storage
const removeItem = ()=>{
   localStorage.removeItem('items');
}

// Buttons event Listener
items.addEventListener('click', e=>{

   if(e.target.classList.contains('fa-check-circle')){
      e.target.parentElement.parentElement.childNodes[1].classList.toggle('check'); 
   }

   if(e.target.classList.contains('fa-edit')){
      e.target.parentElement.parentElement.remove(); 
      text.value = e.target.parentElement.parentElement.childNodes[1].childNodes[0].data;
   }

   if(e.target.classList.contains('fa-times-circle')){
      e.target.parentElement.parentElement.remove(); 
   }
   
})

// Clear event Listener
clearBtn.addEventListener('click', ()=>{
   items.innerHTML = '';
   removeItem();
}); 

