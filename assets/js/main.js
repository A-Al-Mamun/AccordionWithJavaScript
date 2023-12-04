    // NavBar Section Start
        
    function myFunction() {
        var navBar = document.getElementsByClassName("menu")[0];
        if (navBar.style.display === "block") {
            navBar.style.display = "none";
        } else {
            navBar.style.display = "block";
        }
    }
    // NavBar Section End
    
    // Accordion Start
    const accordItem = document.querySelectorAll('.accord-item');

    accordItem.forEach(item => {
        const title = item.querySelector('.accord-title');

        title.addEventListener('click', () => {
            const plus = document.querySelector('.plus');
            const minus = document.querySelector('.minus');
            for(let i = 0; i < accordItem.length; i++){
                if((accordItem[i] != item) && (minus.style.display != 'none')){
                    accordItem[i].classList.remove('active');
                    plus.style.display = 'block';
                    // minus.style.display = 'none';
                }else{
                    item.classList.toggle('active');
                    plus.style.display = 'none';
                    minus.style.display = 'block';
                }
            }
        });
    });