const imgs = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];
const randomImg = imgs[Math.floor(Math.random()*imgs.length)];
const bgImg = document.createElement("img");
const clockClassAdd = document.querySelector("#clock");
const login = document.querySelector('.grid-container-item1-box-item-login-greeting');
const todolistColor =document.querySelector('.grid-container-item1-box-item-todo-list-show');
const clockClass = {
    init : function(){
        if(clockClassAdd.className)
            clockClassAdd.classList.remove(clockClassAdd.className)
    },
    addClass : function(){
        clockClassAdd.classList.add(randomImg)
    }
}


console.log(login.className[1])
if(randomImg==='0.jpg'){
    login.classList.add("set-black-color");
    todolistColor.classList.add("set-add-color");
} else {
    login.classList.add("set-white-color");
    todolistColor.classList.add("set-white-color");
}

bgImg.classList.add('bgImg');
bgImg.src = `img/${randomImg}`;
document.body.appendChild(bgImg);
// clockClass.init();
clockClass.addClass();
console.dir(bgImg);
console.dir(clockClassAdd);

 