let score=document.querySelector(".parascore")
let result=document.querySelector(".result")
let buttons=document.querySelectorAll("button")
let img=document.querySelector(".result img")
let scores=0

let array=["images/dice_1.png","images/dice_2.png","images/dice_3.png","images/dice_4.png","images/dice_5.png","images/dice_6.png"]
let valueofbutton;
buttons.forEach((ele,index)=>{
    buttons[index].addEventListener("click",()=>{
          valueofbutton=  buttons[index].innerHTML
    })
})

img.addEventListener("click",()=>{
        let randomvalue=Math.floor(Math.random()*array.length)
        if(randomvalue+1==valueofbutton){
            console.log(randomvalue,valueofbutton)
          scores+=15
          score.innerHTML=scores
        }
        else{
            scores-=5
            score.innerHTML=scores
        }
        img.src=array[randomvalue]
})







