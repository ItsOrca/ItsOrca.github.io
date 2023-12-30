document.addEventListener('DOMContentLoaded', function () {
    const clickables = document.querySelectorAll('.clickable');
    const infos = document.querySelectorAll('.info');

    clickables.forEach((clickable) => {
        clickable.addEventListener('click', () => {
            const clickedInfo = clickable.nextElementSibling;

            // Toggle the clicked info box
            if (clickedInfo.style.maxHeight !== '0px') {
                clickedInfo.style.maxHeight = '0px';
            } else {
                // Hide other open info boxes
                infos.forEach((info) => {
                    if (info !== clickedInfo && info.style.maxHeight !== '0px') {
                        info.style.maxHeight = '0px';
                    }
                });

                clickedInfo.style.maxHeight = clickedInfo.scrollHeight + 'px';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const clickables = document.querySelectorAll('.clickable');

    clickables.forEach((clickable) => {
        clickable.addEventListener('click', (event) => {
            const clickSound = new Audio('click-sound.mp3');
            clickSound.currentTime = 0.3;
            clickSound.play(); // SFX play when pressing the title

            // Something I tried to do to fix the bug when you have to hit the title twice for it to appear. It does something, but It doesn't fix it entirely.
            // This issue might be related to the transition property used for the .info elements. When rapidly clicking between titles, it could interfere with the transition timing. 
            // Hence, I created this. You could probably do something with it.

            infos.forEach((info) => {
                info.style.maxHeight = null;
            });

            const clickedInfo = clickable.nextElementSibling;
            if (clickedInfo.style.maxHeight) {
                clickedInfo.style.maxHeight = null;
            } else {
                clickedInfo.style.maxHeight = clickedInfo.scrollHeight + 'px';

                // Resets the max-height to null for all .info elements before setting the max-height for the clicked one.
                // This way, the transition gets reset each time you click on a title.
                // Good luck on this one, if you want to
                // UPDATE* I fixed it. Just had to change some things to the code above
            }
        });
    });
});



