 let someNum = [1,2,3,4,5,6];
   

   let forms = document.createElement('form')
   forms.id = 'forms2'
   document.body.appendChild(forms)

// different sections of the HTML

   let page = document.createElement('div');
   page.id = 'pageDiv';
   page.innerText = 'This is the Page Div';
   document.body.appendChild(page);


   let header = document.createElement('div');
   header.id = 'headerDiv';
   header.innerText = 'This is the Header Div';
   document.body.appendChild(header);

   let body1 = document.createElement('div');
   body1.id = 'body div';
   body1.innerText = 'This is the Body Div';
   document.body.appendChild(body1);

   // there input bar locations
   let input = document.createElement('input');
   input.id - 'input1';
   header.appendChild(input);

   let input2 = document.createElement('input');
   input2.id - 'input2';
   page.appendChild(input2);

   let input3 = document.createElement('input');
   input3.id - 'input3';
   body1.appendChild(input3);


   //there search buttons
   let searchButton1  = document.createElement('button');
   searchButton1.id = 'searchButton';
   searchButton1.innerText = 'Search Button Page Div ';
   page.appendChild(searchButton1);

   let searchButton2  = document.createElement('button');
   searchButton2.id = 'searchButton2';
   searchButton2.innerText = 'Search Button Header Div ';
  header.appendChild(searchButton2);

  let searchButton3  = document.createElement('button');
  searchButton3.id = 'searchButton3';
  searchButton3.innerText = 'Search Button Body Div ';
  body1.appendChild(searchButton3);

   // there dropdwn
   let selector = document.createElement('select');
   selector.id = 'select';
   selector.innerText = ' Selecting Things';
   header.appendChild(selector);


   let selector1 = document.createElement('select');
   selector1.id = 'select';
   selector.innerText = ' Selecting Things';
   page.appendChild(selector1);

   let selector2 = document.createElement('select');
   selector2.id = 'select';
   selector2.innerText = ' Selecting Things';
   body1.appendChild(selector2);



      //////////// NEEDS WORK!!!
   let dropDown = document.getElementById('selector')

      for (i = 0; i < someNum.length; i++){
      selector.innerHTML = someNum[i]
         console.log(someNum)
      }
////////////////////////




// ///////// /////// NEEDS WORK
      body1.addEventListener('submit',function(e){
    e.preventDefault();
    const value = body1.querySelector('input[type="text"]').value;
    const li = document.createElement('li')
   const inputText = document.createElement('span')
   inputText.textContent = value;
   const deleteBtn = document.createElement('span')
   deleteBtn.textContent = 'delete'
   
   inputTextclassList.add('name');
   deleteBtn.classList.add('delete');

   li.appendChild(inputText);
   li.appendChild(deleteBtn);
   body1.appendChild(li);
});


   // let image2 = document.createElement('div')
   // image2.id = 'image2'
   // image2.innerHTML = `< a href  "https://www.google.com/search?q=sunset&rlz=1C5CHFA_enUS903US903&sxsrf=ALeKk02IuTMJgnAfXdSMa6L4CHg7eCuPcg:1591723369517&tbm=isch&source=iu&ictx=1&fir=3u8K4ZBP7u2rrM%253A%252Cl7ZGtmREnA0oSM%252C_&vet=1&usg=AI4_-kQYfJLvZoxXUlq-6s8VD0kyKQj-tQ&sa=X&ved=2ahUKEwjt35TQn_XpAhX5knIEHRYnAtIQ9QEwAnoECAsQMg&biw=1198&bih=903#imgrc=3u8K4ZBP7u2rrM"> </a href> ' `
   // page.appendChild(image2)



//    let searchButton3  = document.createElement('button')
//    searchButton3.id = 'searchButton3'
//    searchButton3.innerText = 'Search Button Header Div '
//   header.appendChild(searchButton3)


//    let page = document.createElement('div')
//    page.id = 'pageDiv'
//    page.innerText = 'This is the Page Div'
//    document.body.appendChild(page)