// navbar-start
function toggle_button(){
    var element = document.getElementsByClassName("nav_menu-bar")[0]
    element.classList.toggle("active1");
}
// navbar-end

// portfolio-start
const list = document.querySelectorAll('.list')
const itemBox = document.querySelectorAll('.item-box')

list.forEach((elem)=>{
    elem.addEventListener('click',function(){
        list.forEach((elem)=>{
            elem.classList.remove('active');
        });
        this.classList.add('active');

        let value = this.getAttribute('data-filter');
        itemBox.forEach(element=>{
            element.classList.add('hide');
            if(element.getAttribute('data-item') == value || value == "all"){
                element.classList.remove('hide');
            }
        })

    })

})
// portfolio-end

// Swiper Js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 6000,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });