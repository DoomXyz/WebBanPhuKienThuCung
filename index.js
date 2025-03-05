
const listImg = document.querySelector('.list-img')
const images = document.getElementsByTagName('img')
const btnleft = document.querySelector('.btn-left')
const btnright = document.querySelector('.btn-right')
// --------------------------SLIDE-SHOW-------------------------
let i = 0 
const changeslide = () => {   
  if(i == images.length - 21){
    i=0
    listImg.style.transform = `translateX(${1500*-1*i}px)`
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.index-item-'+ i).classList.add('active')
  }else{
    i++ 
    listImg.style.transform = `translateX(${1500*-1*i}px)`
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.index-item-'+ i).classList.add('active')
  }
}
let autochangeslide = setInterval(changeslide,4000)
btnright.addEventListener('click',() => {
  clearInterval(autochangeslide)
  changeslide()
  autochangeslide = setInterval(changeslide,4000)
})
btnleft.addEventListener('click',() => {
  clearInterval(autochangeslide)
  if(i == 0){
    i = images.length-21
    listImg.style.transform = `translateX(${1500*-1*i}px)`
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.index-item-'+ i).classList.add('active')
  }else{
    i--
    listImg.style.transform = `translateX(${1500*-1*i}px)`
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.index-item-'+ i).classList.add('active')
  }
  autochangeslide = setInterval(changeslide,4000)
})
// --------------------------MENU-CARTEGORY-------------------------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
  menu.addEventListener("click",function(){
    event.preventDefault();
    // itemsliderbar.forEach(function(item){
    //   if(item != menu){
    //     item.classList.remove("block")
    //   }
    // })
    menu.classList.toggle("block")
  })
})
// --------------------------PRODUCT-IMG--------------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-imgs img")
console.log("bigImg:", bigImg);
console.log("smallImg:", smallImg);
console.log("Số lượng ảnh nhỏ:", smallImg.length);
smallImg.forEach(function(imgItem,X){
  imgItem.addEventListener("click",function(){
    console.log("Small image src:", imgItem.src);
    bigImg.src = imgItem.src;
    console.log("Big image src after change:", bigImg.src);
  })
})