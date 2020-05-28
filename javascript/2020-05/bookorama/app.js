document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
if(e.target.className == 'delete'){
    const li =e.target.parentElement;
    list.removeChild(li);
}
})



const addForm = document.forms['add-book']

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li')
   const bookName = document.createElement('span')
   bookName.textContent = value;
   const deleteBtn = document.createElement('span')
   deleteBtn.textContent = 'delete'
   
   bookName.classList.add('name');
   deleteBtn.classList.add('delete');

   li.appendChild(bookName);
   li.appendChild(deleteBtn);
   list.appendChild(li);
});
    


    const hideBox = document.querySelector('#hide');
    
    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
            list.style.display= 'none'
        }else{
            list.style.display= 'initial'
        }
    })



   // how to make a searchbaR
   const searchBar = document.forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        book.style.display = 'block';
   } else {
        book.style.display = 'none';
  }
  });
  });

  // tabbed content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
   const targetPanel = document.querySelector(e.target.dataset.target);
   Array.from(panels).forEach((panel) => {
   if(panel == targetPanel){
          panel.classList.add('active');
  }else{
          panel.classList.remove('active');
  }
 });
 }
});


})

