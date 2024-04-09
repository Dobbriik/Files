const nav = document.querySelector('#nav') 
const navBtv = document.querySelector('#nav-btn') 
const navBtvImg = document.querySelector('#nav-btn-img')

navBtv.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtvImg.src ="img/icons/nav-close.svg";
  } else {
    navBtvImg.src ="img/icons/nav-open.svg";

  }

}

AOS.init({
  // once : true
});