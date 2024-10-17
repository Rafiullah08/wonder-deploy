
    // timeline button


    const timeline = document.getElementById("timeline");
    const timelineShow = document.getElementById("timelineShow");
    
    timeline.addEventListener('click', () => {
        if (timelineShow.style.display === 'none') {
            timelineShow.style.display = 'block';
        } else {
            timelineShow.style.display = 'none';
        }
    });
    



    // about us button
    const aboutinfo = document.getElementById("aboutinfo")
    const aboutus = document.getElementById("aboutus")
    const card1 = document.getElementById("card1")
    const aboutinfo2 = document.getElementById ("aboutinfo2")

    aboutus.addEventListener('click', () => {
        if (aboutinfo.style.display === 'none' || aboutinfo2.style.display === 'none'  ) {
            aboutinfo.style.display = 'block';
            aboutinfo2.style.display = 'block';
            card1.style.display = 'none'
        } else {
            aboutinfo.style.display = 'none';
            aboutinfo2.style.display = 'none';
            card1.style.display = 'block'

        }
    });



    // feeds button
    const feeds = document.getElementById("feeds"); 
    feeds.addEventListener('click', () => {
        if (timelineShow.style.display === 'none') {
            timelineShow.style.display = 'block';
        } else {
            timelineShow.style.display = 'none';
        }
    });


// friend list
    const friendlist = document.getElementById("friendlist")
    const friends = document.getElementById("friends")
    friends.addEventListener('click', () => {
        if (friendlist.style.display === 'none') {
            friendlist.style.display = 'block';
            card1.style.display = 'none'

        } else {
            friendlist.style.display = 'none';
            card1.style.display = 'block'

        }
    });


