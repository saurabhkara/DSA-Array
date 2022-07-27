console.log('Congrats dude  ... you are going shine.')


const arr=[1,2,3,47,5,8,9,3,7];

// Traversing all element

arr.forEach((item, index)=>{
    console.log(`Item at ${index} is:  ${item}`)
})


// document.getElementsByTagName('h1')[0].innerHTML='Hari Om';

// Accessing an Element at user given index

function getElement(){
    let input= document.querySelector('.inputE').value;
    let inp= document.querySelector('.inputE');
    if(typeof parseInt(input)==='number' && input < arr.length && input >0){
        let p=document.querySelector('#para');
        p.innerHTML=`Element at ${input} index is: ${arr[input]}`
        inp.value=''
    }else{
        inp.value=''
        alert('Please Provide Valid Input')
    }
}

