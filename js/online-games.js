const homeButton = document.getElementById('footer-button-home-id')
const aboutMeButton = document.getElementById('footer-button-about-me-id')
const downloadsButton = document.getElementById('footer-button-downloads-id')
const onlineGamesButton = document.getElementById('footer-button-online-games-id')

homeButton.addEventListener("click", ()=>{
    console.log('Home Button Clicked')
    changePageTp("/index.html")
})
aboutMeButton.addEventListener("click", ()=>{
    console.log('About Me Button Clicked')
    changePageTp("/about-me.html")
})
downloadsButton.addEventListener("click", ()=>{
    console.log('Downloads Button Clicked')
    changePageTp("/downloads.html")
})
onlineGamesButton.addEventListener("click", ()=>{
    console.log('Online Games Button Clicked')
    changePageTp("/online-games.html")
})

function changePageTp(https){
    window.location.href = https
}