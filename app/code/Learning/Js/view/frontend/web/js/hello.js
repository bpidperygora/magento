define(
    function($){
        "use strict";
        return function more(config) {
            let button = document.getElementById('myBtn');
            let dots = document.getElementById("dots");
            let moreText = document.getElementById("more");

            console.log(button);
            button.addEventListener('click', function () {
                if (moreText.classList.contains('visible')){
                    dots.style.display = 'none';
                    moreText.classList.remove('visible');
                    moreText.innerText = '';
                    button.innerHTML = 'Read more'
                } else {
                    dots.style.display = 'inline';
                    moreText.classList.add('visible');
                    moreText.innerText = config.text;
                    button.innerHTML = 'Read less'
                }

            })
        }
    }
);
