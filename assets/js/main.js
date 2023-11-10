    
    const accordItem = document.querySelectorAll('.accord-item');

    accordItem.forEach(item => {
        const title = item.querySelector('.accord-title');

        title.addEventListener('click', () => {
            for(let i = 0; i < accordItem.length; i++){
                if(accordItem[i] != item){
                    accordItem[i].classList.remove('active');
                }else{
                    item.classList.toggle('active');
                }
            }
        });
    });