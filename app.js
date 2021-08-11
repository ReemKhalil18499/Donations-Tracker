'use strict'

let form =document.getElementById('form');
let table=document.getElementById('table');

let all=[];

function Information(Name,Amount){
    this.name=Name;
    this.Amount=Amount;
    this.age=0;
    all.push(this);
}
Information.prototype.RandomNumber=function(){
    this.Age=Math.floor(Math.random() * 60) + 20;
}

form.addEventListener('submit',Submitter);

function Submitter(event){
    event.preventDefault();
    let name=event.target.name.value;
    let Amount=event.target.Amount.value;
    new Information (name,Amount);





    let stringArr=JSON.stringify(all);
    localStorage.setItem('key',stringArr)

    let parsed=localStorage.getItem('key');
    parse=JOSN.parse(parsed);

 if(parse !==null){
     for (let i = 0; i < parse.length; i++) {
         all=[];
         new Information (parse[i].name,parse[i].Amount)
        }
        }
        for (let i = 0; i < all.length; i++) {
            all[i].RandomNumber();


}
console.log();

}








function render(){
     table.textContent="";
     let tableHead=document.createElement('Thead');
     table.appendChild(tableHead);

    let nameData=document.createElement('th');
    tableHead.appendChild(nameData);
    nameData.textContent="Donator Name"
    
    let AmountData=document.createElement('th');
    tableHead.appendChild(AmountData);
    AmountData.textContent="Donation Amount"

    let ageData=document.createElement('th');
    tableHead.appendChild(ageData);
    ageData.textContent="Age"
}
for (let i = 0; i < all.length; i++) {

let row=document.createElement('tr');
table.appendChild(row);

let nameTd=document.createElement('td');
row.appendChild(nameTd);
nameTd.textContent=all[i].name;

let AmountTd=document.createElement('td');
row.appendChild(AmountTd);
AmountTd.textContent=all[i].Amount;

let ageTd=document.createElement('td');
row.appendChild(ageTd);
ageTd.textContent=all[i].Age;
}
render();

let button=document.getElementById('clear');
button.addEventListener('click',clear);

function clear(){
    localStorage.clear;
    localStorage.reload;
}