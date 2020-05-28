let newStudentNames = [];


let oldArrayNames = JSON.parse(localStorage.getItem('sNames'));
console.log(oldArrayNames);


function addStudentName() {
    newStudentNames.push(document.getElementById('name').value);

    let studentNames = oldArrayNames.concat(newStudentNames);
    document.getElementById('name').value = "";

let JSONnames = JSON.stringify(studentNames)

 localStorage.setItem('sNames',  JSONnames);

}
let list ='<ul>' ;
    for (i = 0; i <oldArrayNames.length; i++){
    list = list + `<li>${oldArrayNames[i]}</li>`;
    }
    list = list + '</ul>'

document.getElementById('listOfNames').innerText = list;

for (let i = 0 ; i < JSON.parse(loccalstorage.getItem('tArr2').length ); i++);

