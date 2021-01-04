const homeButton = document.getElementById('footer-button-home-id')
const aboutMeButton = document.getElementById('footer-button-about-me-id')
const downloadsButton = document.getElementById('footer-button-downloads-id')
const onlineGamesButton = document.getElementById('footer-button-online-games-id')

const yt = document.getElementById('yt')
const ds = document.getElementById('di')
const re = document.getElementById('re')
const st = document.getElementById('st')
const mmf = document.getElementById('mmf')



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


yt.addEventListener("click", ()=>{
    window.open('https://www.youtube.com/channel/UCkBZFi_acIdsJZpmOvdzVvg?view_as=subscriber')
})
ds.addEventListener("click", ()=>{
    window.open('https://discord.gg/ugFfsRJ')
})
st.addEventListener("click", ()=>{
    window.alert('My steam code is: 892333832')
})
re.addEventListener("click", ()=>{
    window.open('https://www.reddit.com/user/GalaxyGamingBoy')
})
mmf.addEventListener("click", ()=>{
    window.open('https://forms.gle/SYxeDyhpELoJVFJG7')
})

function changePageTp(https){
    window.location.href = https
}
