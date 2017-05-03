(function() {
  document.write("<script src='" + (document.location.protocol === "https:" ? "https://secure-" : "http://") + "ds.serving-sys.com/BurstingScript/EBLoader.js'><\/script>");
})();

(function onEBReady(){
    if (typeof(EB) == 'undefined') {
        setTimeout(onEBReady, 10);
    } else {
        if (!EB.isInitialized()) {
            EB.addEventListener(EBG.EventName.EB_INITIALIZED, initSizmek);
        } else {
            initSizmek()
        }
    }
})();

function initSizmek() {
    // Get handle to video dom element by its id (in this case "VIDEO")
    var VIDEO = document.getElementById('VIDEO');
    // Attach EB API to your video as a global variable called 'myVideo'. 
    // This "wires up" the Sizmek analytics system to the video.
    window.myVideo = new EBG.VideoModule(VIDEO);
}