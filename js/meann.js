var imglist= Array.from( document.querySelectorAll('.row img'))
var lightBoxContainer= document.getElementById("lightBoxContainer")
var next= document.getElementById("next")
var prev= document.getElementById("prev")
var cls= document.getElementById("cls")
var curentIndex = 0;

for (var i=0 ; i<imglist.length ; i++){


    imglist[i].addEventListener('click' , function (e){


        // console.log('hello roqaia')
        lightBoxContainer.style.display='flex'

        var imglistSellect = e.target.getAttribute('src')
        console.log(e.target.getAttribute('src'))

        lightBox.style.backgroundImage = `url(${imglistSellect})`


        curentIndex = imglist.indexOf(e.target)

        console.log(curentIndex)

    }
    
    )




}

function nextSlider(){
    curentIndex ++;
    if(curentIndex==imglist.length){
        curentIndex=0
    }


  var imglistSellect = imglist[curentIndex].getAttribute('src')
  lightBox.style.backgroundImage = `url(${imglistSellect})`
}

next.addEventListener('click' , function(){
    nextSlider()
})

function prevSlider(){
    curentIndex --;
    if(curentIndex<0){
        curentIndex=imglist.length-1
    }


  var imglistSellect = imglist[curentIndex].getAttribute('src')
  lightBox.style.backgroundImage = `url(${imglistSellect})`
}

prev.addEventListener('click' , function(){
    prevSlider()
})


cls.addEventListener('click' , function(){
    lightBoxContainer.style.display='none'

})

document.addEventListener('keyup',function(e){

    if ( e.key==  'ArrowRight' ){
        nextSlider()
    }

    else if (e.key == 'ArrowLeft'){
        prevSlider()
    }

    else if ( e.key == 'Escape'){
    lightBoxContainer.style.display='none'
        
    }


})