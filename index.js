const class1 = document.querySelector(".slider-pic1"),
class2 = document.querySelector(".slider-pic2"),
class3 = document.querySelector(".slider-pic3"),
class4 = document.querySelector(".slider-pic4"),
leftBtn = document.querySelector(".leftbtn"),
rightBtn = document.querySelector(".rightbtn"),
icon1 = document.querySelector(".Icon1"),
icon2 = document.querySelector(".Icon2"),
icon3 = document.querySelector(".Icon3"),
icon4 = document.querySelector(".Icon4");

const slide = [class1,class2,class3,class4];

slide[0].classList.add("active");
icon1.classList.add("active1");

var x = 0;
setInterval(function(){
   if(x == slide.length-1){
      x = 0;
      slide[0].classList.add("active");
      slide[3].classList.remove("active");
      icon1.classList.add("active1");
      icon4.classList.remove("active1");
   }else{
      x++;
      a=slide[x];
      if(a==slide[1]){
         slide[1].classList.add("active");
         slide[0].classList.remove("active");
         icon2.classList.add("active1");
         icon1.classList.remove("active1");
      }else if(a==slide[2]){
         slide[2].classList.add("active");
         slide[1].classList.remove("active");
         icon3.classList.add("active1");
         icon2.classList.remove("active1");
      }else{
         slide[3].classList.add("active");
         slide[2].classList.remove("active");
         icon4.classList.add("active1");
         icon3.classList.remove("active1");
      }
   }   
},5000);

leftBtn.addEventListener("click",function(){
    if(x == 0){
        x = slide.length-1;
       slide[3].classList.add("active");
       slide[0].classList.remove("active");
       icon4.classList.add("active1");
       icon1.classList.remove("active1");
    }else{
        x--;
        a=slide[x];
        if(a==slide[1]){
           slide[1].classList.add("active");
           slide[2].classList.remove("active");
           icon2.classList.add("active1");
           icon3.classList.remove("active1");
        }else if(a==slide[2]){
           slide[2].classList.add("active");
           slide[3].classList.remove("active");
           icon3.classList.add("active1");
           icon4.classList.remove("active1");
        }else{
           slide[0].classList.add("active");
           slide[1].classList.remove("active");
           icon1.classList.add("active1");
           icon2.classList.remove("active1");
        }
    }   
});

rightBtn.addEventListener("click",function(){
   if(x == slide.length-1){
      x = 0;
     slide[0].classList.add("active");
     slide[3].classList.remove("active");
     icon1.classList.add("active1");
     icon4.classList.remove("active1");
  }else{
      x++;
      a=slide[x];
      if(a==slide[1]){
         slide[1].classList.add("active");
         slide[0].classList.remove("active");
         icon2.classList.add("active1");
         icon1.classList.remove("active1");
      }else if(a==slide[2]){
         slide[2].classList.add("active");
         slide[1].classList.remove("active");
         icon3.classList.add("active1");
         icon2.classList.remove("active1");
      }else{
         slide[3].classList.add("active");
         slide[2].classList.remove("active");
         icon4.classList.add("active1");
         icon3.classList.remove("active1");
      }
  }  
});