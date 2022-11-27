function displayContact(){
    var contact=document.getElementById("contactform")
    contact.style.display="block";
}
function closeform(){
    var close=document.getElementById("contactform");
    close.style.display="none";
}


var pageno=document.getElementById("pageno").value;

if(pageno==0){
    pageno=1;
}
// console.log(pageno)
var list1=document.getElementById("list1");
var list2=document.getElementById("list2")
var list3=document.getElementById("list3")
function nextPage(){
    if(pageno==1){
        list1.style.display="none";
        list2.style.display="block";
        list3.style.display="none"

        pageno++;


        // const button = document.querySelector('#prebtn');

        // const enableButton = () => {
        // button.disabled = false;
        // };

        // button.addEventListener('click', enableButton);
        // // console.log(pageno)
    }
    else if(pageno==2){
        list1.style.display="none";
        list2.style.display="none";
        list3.style.display="block";

        pageno++;

        // const button = document.querySelector('#prebtn');

        // const enableButton = () => {
        // button.disabled = false;
        // };

        // button.addEventListener('click', enableButton);
    }
    else if(pageno>2){
        // const button = document.querySelector('#nxtbtn');

        // const disableButton = () => {
        // button.disabled = true;
        // };

        // button.addEventListener('click', disableButton);
        alert("This is Last Page")
    }
    console.log(pageno)
}
function previousPage(){
    if(pageno==1){
        // const button = document.querySelector('#prebtn');

        // const disableButton = () => {
        // button.disabled = true;
        // };

        // button.addEventListener('click', disableButton);
        alert("This is First Page")
    }
    else if(pageno==2){
        list3.style.display="none";
        list2.style.display="none";
        list1.style.display="block";
        pageno--;

        // const button = document.querySelector('#nxtbtn');

        // const enableButton = () => {
        // button.disabled = false;
        // };

        // button.addEventListener('click', enableButton);
    }
    else if(pageno==3){
        list3.style.display="none";
        list2.style.display="block";
        list1.style.display="none";
        pageno--;
        // const button = document.querySelector('#nxtbtn');

        // const enableButton = () => {
        // button.disabled = false;
        // };

        // button.addEventListener('click', enableButton);
    }
    // console.log(pageno);
}