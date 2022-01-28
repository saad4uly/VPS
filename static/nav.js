// Mobile NAV BAR
window.addEventListener('resize', function(){
    addRequiredClass();
  })
  
  
  function addRequiredClass() {
    if (window.innerWidth < 1280) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile') 
    }
  }
  
  window.onload = addRequiredClass
  
  let hamburger = document.querySelector('.hamburger')
  let mobileNav = document.querySelector('.nav-list')
  
  let bars = document.querySelectorAll('.hamburger span')
  
  let isActive = false
  
  hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open')
    if(!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false
    }  
  })

//////////////
function toggleHide(){
  let seemore = document.getElementById('seemore');
  let para = document.getElementById('seemore-para');
  if(para.style.display !='none'){
    para.style.display = 'none';
    seemore.innerText = 'Read more';
  }
  else{
    para.style.display = 'block';
    seemore.innerText = 'Read less';
}
}