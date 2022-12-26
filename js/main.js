// navbar-start
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav_menu-bar')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active1')
  toggleButton.classList.toggle("active1")
})

document.querySelectorAll(".nav_link").forEach(n => n.
  addEventListener("click", () => {
    toggleButton.classList.remove("active1");
    navbarLinks.classList.remove("active1");
  }))
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


// Swiper Js-partners
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 1,
    grabCursor: true,
    autoplay: {
      delay: 6000,
    },
    loop: true,
    loopFillGroupWithBlank: true
  });