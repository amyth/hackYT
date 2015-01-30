
(function() {
    window.hackyt.init = function() {
        var lastNum = -1;
        var videoNum = 0;
        var videoUrls = [];

        while (videoNum != lastNum) {
            var x = window.hackyt.clickMoreButton();
            console.log(x);
        }

    };

    window.hackyt.clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });

    window.hackyt.getVidNums = function() {
        var vids = document.getElementsByClassName('yt-lockup-title');
        return vids.length;
    };

    window.hackyt.clickMoreButton = function() {
        lastNum = videoNum;
        var loadMB = document.getElementsByClassName('load-more-button');
        if (loadMB.length > 0) {
            loadMB = loadMB[0];
        } else {
            return false;
        }

        loadMB.dispatchEvent(window.hackyt.clickEvent);
        videoNum = window.hackyt.getVidNums();

        return videoNum;
    }

    // Call the initialize method on script
    // insertion. If the script is already
    // been inserted to the DOM, this method
    // should be called explicitly
    window.hackyt.init();
})();
