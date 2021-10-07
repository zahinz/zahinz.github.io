// ? variable declaration
// dark mode variables
darkModeInput = document.getElementById('darkMode')
darkModeIcon = document.getElementById('darkModeIcon')

titleColor = document.querySelectorAll('.color-title')
bodyColor = document.querySelectorAll('.color-body')
elementLogo = document.querySelectorAll('.element-logo')
darkBorder = document.querySelectorAll('.dark-border')

nextSlidesIcon = document.querySelectorAll('.carousel-control-next-icon')
prevSlidesIcon = document.querySelectorAll('.carousel-control-prev-icon')
slideIndicator = document.querySelectorAll('.carousel-indicators [data-bs-target]')

// sidenav variable
sidenavBar = document.querySelector('.sidenav')
sidenavStatus = false

// portfolio content
html = '<i class="fab fa-html5"></i>'
css = '<i class="fab fa-css3"></i>'
js = '<i class="fab fa-js-square"></i>'
database = '<i class="fas fa-database"></i>'
api = '<i class="fas fa-cogs"></i>'

portfolioContent = [
    {
        // music player
        backgroundImage : 'assets/UIUXeverydays/music-player.gif',
        githubLink : 'https://github.com/zahinz/SET-Day-9',
        webLink : 'https://zahinz.github.io/SET-Day-9/audio-player-challenge/index.html',
        technology: [html, css, js]
    },
    {
        // parallax mouse
        backgroundImage : 'assets/UIUXeverydays/parallax-mouse.gif',
        githubLink : 'https://github.com/zahinz/SET-Day-10',
        webLink : 'https://zahinz.github.io/SET-Day-10/challenge-2/index.html',
        technology: [html, css, js]
    },
    {
        // piano
        backgroundImage : 'assets/UIUXeverydays/piano.gif',
        githubLink : 'https://github.com/zahinz/SET-Day-11',
        webLink : 'https://zahinz.github.io/SET-Day-11/piano/index.html',
        technology: [html, css, js]
    },
    {
        // to-do list
        backgroundImage : 'assets/UIUXeverydays/to-do-list.gif',
        githubLink : 'https://github.com/zahinz/SET-Day-12',
        webLink : 'https://zahinz.github.io/SET-Day-12/to-do-task/index.html',
        technology: [html, css, js]
    },
    {
        // video player
        backgroundImage : 'assets/UIUXeverydays/video-player.gif',
        githubLink : 'https://github.com/zahinz/SET-Day-8',
        webLink : 'https://zahinz.github.io/SET-Day-8/video-player/index.html',
        technology: [html, css, js]
    },
    {
        // chat app
        backgroundImage : 'assets/UIUXeverydays/chat-app.gif',
        githubLink : 'https://github.com/zahinz/SET-Day-13',
        webLink : 'https://zahinz.github.io/SET-Day-13/chat-app/index.html',
        technology: [html, css, js, database]
    },
    {
        // weather API
        backgroundImage : 'assets/UIUXeverydays/weather-API.gif',
        githubLink : 'https://github.com/zahinz/SET-Day-14',
        webLink : 'https://zahinz.github.io/SET-Day-14/weather-apps/index.html',
        technology: [html, css, js, api]
    },
    {
        // parallax scroll
        backgroundImage : 'assets/UIUXeverydays/parallax-scroll.gif',
        githubLink : 'https://github.com/zahinz/SET-Day-10',
        webLink : 'https://zahinz.github.io/SET-Day-10/challenge-1/index.html',
        technology: [html, css, js]
    },
]
portfolioHolder = document.querySelector('.portfolio-holder')


// ? dark mode function
// onload keep the web on darkmode
window.onload = (evt) => {
    darkModeInput.checked = true
    // html body color
    document.querySelector('body').style.backgroundColor = '#1C1026'
    // text title color
    for (let i = 0; i < titleColor.length; i++) {
        titleColor[i].style.color = '#fdfdfd'
    }
    // text body color
    for (let i = 0; i < bodyColor.length; i++) {
        bodyColor[i].style.color = '#959595'
    }
    // dark mode icon
    darkModeIcon.innerHTML = '<i class="bi bi-moon"></i>'
    // png elements color
    for (let i = 0; i < elementLogo.length; i++) {
        elementLogo[i].style.filter = 'initial'
    }
    // dark mode border
    for (let i = 0; i < darkBorder.length; i++) {
        darkBorder[i].style.backgroundColor = '#0F0717'
    }
}
// dark mode upon switch onchange
function darkMode() {
    switch (darkModeInput.checked) {
        case true:
            // html body color
            document.querySelector('body').style.backgroundColor = '#1C1026'
            // text title color
            for (let i = 0; i < titleColor.length; i++) {
                titleColor[i].style.color = 'white'
            }
            // text body color
            for (let i = 0; i < bodyColor.length; i++) {
                bodyColor[i].style.color = '#959595'
            }
            // dark mode icon
            darkModeIcon.innerHTML = '<i class="bi bi-moon"></i>'
            // png elements color
            for (let i = 0; i < elementLogo.length; i++) {
                elementLogo[i].style.filter = 'initial'
            }
            // dark mode border
            for (let i = 0; i < darkBorder.length; i++) {
                darkBorder[i].style.backgroundColor = '#0F0717'
            }
            // bootstrap next and prev icon
            for (let i = 0; i < nextSlidesIcon.length; i++) {
                nextSlidesIcon[i].style.filter = 'initial'
            }
            for (let i = 0; i < prevSlidesIcon.length; i++) {
                prevSlidesIcon[i].style.filter = 'initial'
            }
            // bootstrap slides indicator
            for (let i = 0; i < slideIndicator.length; i++) {
                slideIndicator[i].style.backgroundColor = 'white'
                
            }

            break;
            
    
        case false:
            // html body color
            document.querySelector('body').style.backgroundColor = '#fdfdfd'
            // text title color
            for (let i = 0; i < titleColor.length; i++) {
                titleColor[i].style.color = '#3B4250'
            }
            // text body color
            for (let i = 0; i < bodyColor.length; i++) {
                bodyColor[i].style.color = '#8C92A3'
            }
            // dark mode icon
            darkModeIcon.innerHTML = '<i class="bi bi-sun"></i>'
            // png elements color
            for (let i = 0; i < elementLogo.length; i++) {
                elementLogo[i].style.filter = 'invert(76%) sepia(23%) saturate(396%) hue-rotate(181deg) brightness(97%) contrast(94%)'
            }
            // dark mode border
            for (let i = 0; i < darkBorder.length; i++) {
                darkBorder[i].style.backgroundColor = 'white'
            }
            // bootstrap next and prev icon
            for (let i = 0; i < nextSlidesIcon.length; i++) {
                nextSlidesIcon[i].style.filter = 'invert(60%) sepia(14%) saturate(540%) hue-rotate(191deg) brightness(99%) contrast(91%)'
            }
            for (let i = 0; i < prevSlidesIcon.length; i++) {
                prevSlidesIcon[i].style.filter = 'invert(60%) sepia(14%) saturate(540%) hue-rotate(191deg) brightness(99%) contrast(91%)'
            }
            // bootstrap slides indicator
            for (let i = 0; i < slideIndicator.length; i++) {
                slideIndicator[i].style.backgroundColor = '#b7b7b7'
                
            }
            break;
    }
}


function clickButton(link) {
    window.open(link, "_blank");
}


// ? sidenav display functionality 

function sidenavOpen () {
    sidenavBar.style.transform = 'translateX(0%)'
    sidenavStatus = true
}
function sidenavClose () {
    sidenavBar.style.transform = 'translateX(-100%)'
    sidenavStatus = false
}

function displaySidenav() {
    switch (sidenavStatus) {
        case false:
            sidenavOpen()
            break;
        case true:
            sidenavClose()
            break;
    }
}

window.addEventListener('resize', reportWindowSize)
function reportWindowSize(e) {
    if (window.innerWidth >= 700){
        sidenavOpen()
    }
    else if (window.innerWidth <= 700){
        sidenavClose()
    }
}

function touchSidenav() {
    if (window.innerWidth <= 700) {
        sidenavClose()
    }
}



// ? portfolio display

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

shuffle(portfolioContent)

for (let i = 0; i < portfolioContent.length; i++) {

    newPortfolioList = document.createElement('div')
    newPortfolioList.classList.add('portfolio-list', 'dark-border')

    newPortfolioGif = document.createElement('div')
    newPortfolioGif.classList.add('portfolio-gif')
    newPortfolioGif.style.backgroundImage = `url(${portfolioContent[i].backgroundImage})`

    newPortfolioCover = document.createElement('div')
    newPortfolioCover.classList.add('porfolio-cover')

    newGithubLink = document.createElement('a')
    newGithubLink.setAttribute('href', portfolioContent[i].githubLink)
    newGithubLink.setAttribute('target', 'blank')

    newGithubBtn = document.createElement('button')
    newGithubBtn.classList.add('my-btn')
    
    newGithubIcon = document.createElement('i')
    newGithubIcon.classList.add('bi', 'bi-github')

    newGithubText = document.createElement('p')
    newGithubText.innerHTML = 'Code repo'

    newWebLink = document.createElement('a')
    newWebLink.setAttribute('href', portfolioContent[i].webLink)
    newWebLink.setAttribute('target', 'blank')

    newWebBtn = document.createElement('button')
    newWebBtn.classList.add('my-btn')
    newWebBtn.innerHTML = 'view project'

    newTech = document.createElement('div')
    newTech.classList.add('technology')
    for (let j = 0; j < portfolioContent[i].technology.length; j++) {
        newTech.innerHTML += portfolioContent[i].technology[j]
    }
    

    newGithubLink.append(newGithubBtn)
    newGithubBtn.append(newGithubIcon, newGithubText)

    newWebLink.append(newWebBtn)

    newPortfolioCover.append(newGithubLink, newWebLink, newTech)
    newPortfolioList.append(newPortfolioGif, newPortfolioCover)
    portfolioHolder.append(newPortfolioList)

}
