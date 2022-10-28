var muitiNum = 0;
document.querySelector(`.next`).addEventListener(`click` , function(){
    if(muitiNum < 3){  
    muitiNum = muitiNum + 1;
    console.log(muitiNum);
    document.querySelector(`#my-slider`).style.transform = `translateX(${muitiNum * -500}px)`;
    }
})
document.querySelector(`.perv`).addEventListener(`click` , function(){
    if(muitiNum > 0){  
    muitiNum = muitiNum - 1;
    console.log(muitiNum);
    document.querySelector(`#my-slider`).style.transform = `translateX(${muitiNum * -500}px)`;
    }
})