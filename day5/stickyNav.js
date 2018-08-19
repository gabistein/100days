const navSticky = document.querySelector('#main');
    let topOfNav = navSticky.offsetTop;
    function fixNav() {
      if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = navSticky.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }
    }
    window.addEventListener('scroll', fixNav);