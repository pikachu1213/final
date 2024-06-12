// 回到頂部功能
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
});

// 輪播圖片
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // 變換時間為 2 秒
}

// 本月特賣滑動功能
let slidePosition = 0;
const slides = document.getElementsByClassName('recommendation-set');
const totalSlides = slides.length;

function updateSlidePosition() {
    const wrapper = document.querySelector('.recommendations-wrapper');
    wrapper.style.transform = 'translateX(' + (-slidePosition * 100 / totalSlides) + '%)';
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}

document.querySelector('.prev').addEventListener('click', function() {
    moveToPrevSlide();
});

document.querySelector('.next').addEventListener('click', function() {
    moveToNextSlide();
});

// 倒數計時功能
function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let countdownMinutes = 60 * 60, // 設定倒數計時的時間（單位：秒）
        display = document.querySelector('#countdown-timer');
    startCountdown(countdownMinutes, display);
};
