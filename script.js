function carregaBanners() {
    let banner = document.getElementById("principal")
    if(banner.classList == "banner1") {
        banner.classList.remove("banner1")
        banner.classList.add("banner2")
    } else if(banner.classList == "banner2") {
        banner.classList.remove("banner2")
        banner.classList.add("banner3")
    } else if(banner.classList == "banner3") {
        banner.classList.remove("banner3")
        banner.classList.add("banner4")
    } else if(banner.classList == "banner4") {
        banner.classList.remove("banner4")
        banner.classList.add("banner5")
    } else if(banner.classList == "banner5") {
        banner.classList.remove("banner5")
        banner.classList.add("banner1")
    }
}
setInterval(carregaBanners, 7000)

$("nav a#sobre").click(function(e) {
    e.preventDefault()
    let id = $(this).attr("href")
    targetOffset = $(id).offset().top -50
    $("html, body").animate({
        scrollTop: targetOffset
    }, 500)

    console.log(targetOffset)
})