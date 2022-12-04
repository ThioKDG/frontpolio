
function bg_scroll() {
    var currentScroll = 0;
    function bg_scroll() {
        document.addEventListener('scroll', function(){
            currentScroll = document.documentElement.scrollTop;
            console.log(`${currentScroll}`);

            if(currentScroll == 200) {
                document.getElementById("header_nav").style.backgroundColor = "#fff";
            }else{
                document.getElementById("header_nav").style.backgroundColor = "transparent";;
            }
        })
    }
}