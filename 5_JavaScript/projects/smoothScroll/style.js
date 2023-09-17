    /*
    offset
    0
    845
    1425
    2481
    3590
    4648
    */

    var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");

    // for (var i = 0; i < navMenuAnchorTags.length; i++) {
    //   navMenuAnchorTags[i].addEventListener("click", function(event) {
    //     event.preventDefault();
    //     var targetSectionID = this.textContent.trim().toLowerCase();
    //     var targetSection = document.getElementById(targetSectionID);
    //     console.log(targetSection);
    //     var interval =setInterval(function() {
    //        var targetSectionCoordinates = targetSection.getBounding
    //        if(targetSectionCoordinates.top <= 0){
    //         clearInterval(interval);
    //         return;
    //        } 
    //        window.scrollBy(0, 50);
    //     }, 20);
    //   });
    // }

    for (var i = 0; i < navMenuAnchorTags.length; i++) {
        navMenuAnchorTags[i].addEventListener("click", function(event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        var interval = setInterval(function() {
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if (targetSectionCoordinates.top <= 0) {
            clearInterval(interval);
            return;
            }
            window.scrollBy(0, 50);
        }, 20);
        });
    }
    
