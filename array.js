console.log('Congrats dude  ... you are going shine.')


const arr=[1,2,3,47,5,8,9,3,7];

// Traversing all element

// arr.forEach((item, index)=>{
//     console.log(`Item at ${index} is:  ${item}`)
// })


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

// insertion in Array
let arr1=[2,1,5,7,8,10,12,54];
function insertElement(){
    console.log(arr1)
    let inp=parseInt(document.querySelector('#element').value);
    let position=parseInt(document.querySelector('#position').value);
    let para2= document.querySelector('#para2')
    if(typeof inp ==='number' && typeof position==='number'){
        for(let i=arr1.length; i>=position; i--){
            arr1[i]=arr1[i-1]
            if(i==position){
                arr1[position]=parseInt(inp)
            }
        }
    }
    console.log(arr1)
    
}

//default method for insertion -- splice()
// arr1.splice(2,1,1000);
// console.log(arr1)



//Deletion of Element
let arr3=[20,12,45,54,32,50,80]
function deleteElement(){
    let input=parseInt(document.querySelector('.input3').value);
    console.log(input)
    console.log(arr3)
    for(let i=input; i<arr3.length; i++){
        arr3[i]=arr3[i+1];
    }
    input=''
    arr3.length=arr3.length-1;
    console.log(arr3);
}

let arr4=[1,2,5,8,7,6,0,4,3]
function searchElement(){
    let inp=document.querySelector('.inp').value;
    let p=document.getElementById('#p');
    for(let i=0;i<arr4.length; i++){
        if(arr4[i]==inp){
            p.innerHTML=`Element present at index : ${i}`
            break
        }else{
            p.innerHTML='Element is not present inside array'
        }
    }
}


let arrOne=[1,7,8,5,4,9]
let arrTwo=[8,3,8,1,0]
let arrThird=[]

function mergeArr(){
    for(i=0; i<arrOne.length; i++){
        arrThird[i]=arrOne[i];
    }
    for(i=0; i< arrTwo.length; i++){
        arrThird[arrOne.length +i]=arrTwo[i]
    }
    let arr=[...arrOne, ...arrTwo]
    let arr4=arrOne.concat(arrTwo)
    console.log(arrThird)
    console.log(arr)
    console.log(arr4);
    let arr9=arr4.reverse()
    console.log(arr9);
}

let arrayA=[1,2,5,7,9];
let arrayB=[3,4,6,8]
let arrayC=[]

function mergeArrayWhile(){
    let i=j=0;
    while(i<arrayA.length && j < arrayB.length){
        if(arrayA[i] < arrayB[j]){
            arrayC[i+j]=arrayA[i];
            i++;
        }else{
            arrayC[i+j]=arrayB[j];
            j++;
        }
    }
    
    while(i<arrayA.length){
      arrayC[i+j]=arrayA[i];
      i++          
    }
    while(j<arrayB.length){
      arrayC[i+j]=arrayB[j];
      j++          
    }
    console.log(arrayC)
}


let arrSort=[40,30,12,25];
function arraySorting(){
 
    for(let i=0; i<arrSort.length;i++){
        for(let j=0; j<arrSort.length-i; j++){
            if(arrSort[j]>arrSort[j+1]){
                let temp=arrSort[j];
                arrSort[j]=arrSort[j+1];
                arrSort[j+1]=temp
            }
        }
    }
    console.log(arrSort);
    
}


function recurssionExamp(num){
    if(num==1){
        return 1;
    }
    let result= num * recurssionExamp(num-1);
    console.log(result)
    return result;
}

function recurssionExamp2(num){
    let fabResult=1;
    for(let i=1;i<=num;i++){
        fabResult = fabResult*i;
    }
    console.log(fabResult);
}
