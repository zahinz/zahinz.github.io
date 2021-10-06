// ? variable declaration
darkModeInput = document.getElementById('darkMode')
darkModeIcon = document.getElementById('darkModeIcon')

titleColor = document.querySelectorAll('.color-title')
bodyColor = document.querySelectorAll('.color-body')
elementLogo = document.querySelectorAll('.element-logo')
darkBorder = document.querySelectorAll('.dark-border')

nextSlidesIcon = document.querySelectorAll('.carousel-control-next-icon')
prevSlidesIcon = document.querySelectorAll('.carousel-control-prev-icon')
slideIndicator = document.querySelectorAll('.carousel-indicators [data-bs-target]')


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

// sidenav display

sidenavBar = document.querySelector('.sidenav')
sidenavStatus = false

function displaySidenav() {
    switch (sidenavStatus) {
        case false:
            console.log(sidenavStatus);
            sidenavBar.style.transform = 'translateX(0%)'
            sidenavStatus = true
            console.log(sidenavStatus);
            break;
        case true:
            console.log(sidenavStatus);
            sidenavBar.style.transform = 'translateX(-100%)'
            sidenavStatus = false
            console.log(sidenavStatus);
            break;
    }
}

window.addEventListener('resize', reportWindowSize)
function reportWindowSize(e) {
    if (window.innerWidth >= 700){
        sidenavBar.style.transform = 'translateX(0%)'
        sidenavStatus = true
    }
    else if (window.innerWidth <= 700){
        sidenavBar.style.transform = 'translateX(-100%)'
        sidenavStatus = false
    }
}



