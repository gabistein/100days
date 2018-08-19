 const triggers = document.querySelectorAll('.cool > li');
    const background = document.querySelector('.dropdownBackground');
    const nav = document.querySelector('.top');
    const navSticky = document.querySelector('#main');
    const topOfNav = navSticky.offsetTop; 
    function handleEnter(){
        //parent list item
        this.classList.add('trigger-enter');
        //using an arrow function the value of this is inheirited from 
        //the parent function 
        setTimeout(()=>{
            if(this.classList.contains('trigger-enter')){
               
                this.classList.add('trigger-enter-active')
            }
        }, 150);
        background.classList.add('open');
        //need to find the dropdown that is hovered on 
        const dropdown = this.querySelector('.dropdown');
        const dropdownCoords = dropdown.getBoundingClientRect();
        const navCoords = nav.getBoundingClientRect();
        const coords = {
            height:dropdownCoords.height, 
            width: dropdownCoords.width,
            top: dropdownCoords.top - navCoords.top,
            left: dropdownCoords.left - navCoords.left
        };

        background.style.setProperty('width', `${coords.width}px`);
        background.style.setProperty('height', `${coords.height}px`);
        background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
        //console.log(dropdownCoords);
        //console.log('Enter!!');
    }
    function handleLeave(){
        this.classList.remove('trigger-enter', 'trigger-enter-ative');
        background.classList.remove('open'); 
        //console.log('Leave!!');
    } 
    function fixNav(){
        if(window.scrollY >topOfNav){
            document.body.style.paddingTop = nav.offsetHeight; 
            document.body.classList.add('fixed-nav');
        }else{
            document.body.style.paddingTop = nav.offsetHeight; 
            document.body.classList.remove('fixed-nav');
        }

       

    }

    

    window.addEventListener('scroll', fixNav);
    triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
    triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));