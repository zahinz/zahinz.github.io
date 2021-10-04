// ? variable declaration
darkModeInput = document.getElementById('darkMode')
darkModeIcon = document.getElementById('darkModeIcon')

titleColor = document.querySelectorAll('.color-title')
bodyColor = document.querySelectorAll('.color-body')
elementLogo = document.querySelectorAll('.element-logo')


// ? dark mode function
// onload keep the web on darkmode
window.onload = (evt) => {
    darkModeInput.checked = true
    // html body color
    document.querySelector('body').style.backgroundColor = '#1C1026'
    // text title color
    for (let i = 0; i < titleColor.length; i++) {
        titleColor[i].style.color = 'white'
    }
    // text body color
    for (let i = 0; i < bodyColor.length; i++) {
        bodyColor[i].style.color = '#c2c2c2'
    }
    // dark mode icon
    darkModeIcon.innerHTML = '<i class="bi bi-moon"></i>'
    // png elements color
    for (let i = 0; i < elementLogo.length; i++) {
        elementLogo[i].style.filter = 'initial'
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
                bodyColor[i].style.color = '#c2c2c2'
            }
            // dark mode icon
            darkModeIcon.innerHTML = '<i class="bi bi-moon"></i>'
            // png elements color
            for (let i = 0; i < elementLogo.length; i++) {
                elementLogo[i].style.filter = 'initial'
            }
            break;
            
    
        case false:
            // html body color
            document.querySelector('body').style.backgroundColor = 'white'
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
            break;
    }
}


