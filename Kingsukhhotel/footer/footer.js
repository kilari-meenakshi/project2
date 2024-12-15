
 let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    navbar.classList.add('navbar-hidden');
  } else if (currentScroll < lastScrollTop) {
    navbar.classList.remove('navbar-hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


document.querySelectorAll('.list').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.list.active').classList.remove('active');
        item.classList.add('active');
    });
});


  function openWhatsApp() {
    const phoneNumber = "9007062180"; 
    const message = "I would like to book a room.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
   
    window.open(whatsappLink, "_blank");
  }
 let popupTimeout;

  function showPopup() {
    console.log("Popup shown");
    const popup = document.getElementById("aboutPopup");
    if (popup) {
      popup.classList.add("show"); 
      console.log("Popup class added"); 
    } else {
      console.log("Popup not found in DOM");
    }

   
    clearTimeout(popupTimeout);
  }

  function hidePopup() {
    console.log("Popup hidden");
    const popup = document.getElementById("aboutPopup");
    if (popup) {
      
      popupTimeout = setTimeout(() => {
        popup.classList.remove("show"); 
        console.log("Popup class removed");
      }, 300); 
    } else {
      console.log("Popup not found in DOM");
    }
  }



function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
}


function handleScrollAnimations() {
  const aboutUsSection = document.getElementById('About');
  
  
  if (isElementInViewport(aboutUsSection) && !aboutUsSection.classList.contains('visible')) {
    aboutUsSection.classList.add('visible'); 
  }
}


window.addEventListener('scroll', handleScrollAnimations);

window.addEventListener('load', handleScrollAnimations);


handleScrollAnimations();
