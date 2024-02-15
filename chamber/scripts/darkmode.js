const elements = document.querySelectorAll('.sun, .moon');

for(const element of elements){
    element.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        for(const ele of elements){
            ele.classList.toggle('hide');
        }
    })
}