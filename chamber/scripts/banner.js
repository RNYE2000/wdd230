var banner = document.querySelector('.banner');

var dayOfWeek = (new Date).getDay();

if(dayOfWeek > 0 && dayOfWeek < 3){
    banner.innerHTML = '<div style="display:flex; flex-grow:1;"></div><p>Join us for a Chamber of Commerce meet & greet Wednesday at 7:00pm</p><div style="display:flex; flex-grow:1;"></div><div class="close-banner" onclick="closeBanner()">❌</div>'
} else if(dayOfWeek == 3){s
    banner.innerHTML = '<div style="display:flex; flex-grow:1;"></div><p>Join us for a Chamber of Commerce meet & greet at 7:00pm</p><div style="display:flex; flex-grow:1;"></div><div class="close-banner" onclick="closeBanner()">❌</div>'
}


function closeBanner(){
    document.querySelector('.banner').innerHTML = '';
}
