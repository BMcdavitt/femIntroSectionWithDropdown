const hamburger = document.getElementById('hamburger')
const hamburgerClose = document.getElementById('hamburgerClose')
const hamburgerMenu = document.getElementById('hamburgerMenu')
const grayOut = document.getElementsByClassName('grayOut')[0]

const hamburgerLineTop = document.getElementsByClassName('lineTop')[0]
const hamburgerLineMiddle = document.getElementsByClassName('lineMiddle')[0]
const hamburgerLineBottom = document.getElementsByClassName('lineBottom')[0]

const featuresMenu = document.getElementById('featuresMenu')
const featuresMenuContent = document.getElementById('featuresMenuContent')
const featuresDropDownIcon = document.getElementById('featuresDropDownIcon')
const companyMenu = document.getElementById('companyMenu')
const companyMenuContent = document.getElementById('companyMenuContent')
const companyDropDownIcon = document.getElementById('companyDropDownIcon')

const desktopFeaturesMenu = document.getElementById('desktopFeaturesMenu')
const desktopFeaturesDropdown = document.getElementById('desktopFeaturesDropdown')
const desktopFeaturesDropdownIcon = document.getElementById('desktopFeaturesDropDownIcon')
const desktopCompanyMenu = document.getElementById('desktopCompanyMenu')
const desktopCompanyDropdown = document.getElementById('desktopCompanyDropdown')
const desktopCompanyDropdownIcon = document.getElementById('desktopCompanyDropDownIcon')
const transparantCover = document.getElementsByClassName('transparantCover')[0]

const topOptionClass = document.getElementById('menuTopOption')

let lastWidth = window.outerWidth

let topOptionArray = []
topOptionArray.push(document.getElementById('menuTopOption1'))
topOptionArray.push(document.getElementById('menuTopOption2'))
topOptionArray.push(document.getElementById('menuTopOption3'))
topOptionArray.push(document.getElementById('menuTopOption4'))
const topOption2 = document.getElementById('menuTopOption2')
const topOption3 = document.getElementById('menuTopOption3')
const topOption4 = document.getElementById('menuTopOption4')

let subOptionArray = []
subOptionArray[0] = { size: 4, elements: [] }
subOptionArray[1] = { size: 3, elements: [] }

subOptionArray[0] = {
  ...subOptionArray[0],
  elements: [
    document.getElementById('menuSubOption1-1'),
    document.getElementById('menuSubOption1-2'),
    document.getElementById('menuSubOption1-3'),
    document.getElementById('menuSubOption1-4'),
  ],
}

subOptionArray[1] = {
  ...subOptionArray[1],
  elements: [
    document.getElementById('menuSubOption2-1'),
    document.getElementById('menuSubOption2-2'),
    document.getElementById('menuSubOption2-3'),
  ],
}

const topOption1SubOption1 = document.getElementById('menuSubOption1-1')
const topOption1SubOption2 = document.getElementById('menuSubOption1-2')
const topOption1SubOption3 = document.getElementById('menuSubOption1-3')
const topOption1SubOption4 = document.getElementById('menuSubOption1-4')

const topOption2SubOption1 = document.getElementById('menuSubOption2-1')
const topOption2SubOption2 = document.getElementById('menuSubOption2-2')
const topOption2SubOption3 = document.getElementById('menuSubOption2-3')

const bottomOptions = document.getElementsByClassName('menuBottomOptions')[0]

let optionTravel = 0
let companySpecificTravel = 0

let subOptionPosition

let menuActive = false
let featuresSubMenuActive = false
let companySubMenuActive = false
let desktopFeaturesSubMenuActive = false
let desktopCompanySubMenuActive = false

let topOptionPosition
const optionSpace = 46
const topOptionStartPosition = 82
const subOptionStartPosition = 23

let delay = 0

for (let i = 0; i < 4; i++) {
  if (i === 0) {
    topOptionArray[i].style.top = `${(topOptionPosition = topOptionStartPosition)}px`
  } else {
    topOptionArray[i].style.top = `${(topOptionPosition += optionSpace)}px`
  }
}

for (let x = 0; x < 2; x++) {
  for (let y = 0; y < subOptionArray[x].size; y++) {
    if (y === 0) {
      subOptionArray[x].elements[y].style.top = `${(subOptionPosition = subOptionStartPosition)}px`
    } else {
      subOptionArray[x].elements[y].style.top = `${(subOptionPosition += optionSpace)}px`
    }
  }
}

hamburger.addEventListener('click', toggleMenu)
hamburgerClose.addEventListener('click', toggleMenu)
grayOut.addEventListener('click', toggleMenu)

function toggleMenu() {
  if (menuActive) {
    setTimeout(() => {
      hamburgerMenu.style.display = 'none'
      grayOut.style.display = 'none'
    }, 1000)

    hamburgerMenu.classList.add('hideMenu')
    hamburgerMenu.classList.remove('drawMenu')

    hamburgerLineTop.classList.remove('openMenuLineTop')
    hamburgerLineMiddle.classList.remove('openMenuLineMid')
    hamburgerLineBottom.classList.remove('openMenuLineBottom')

    hamburgerLineTop.classList.add('closeMenuLineTop')
    hamburgerLineMiddle.classList.add('closeMenuLineMid')
    hamburgerLineBottom.classList.add('closeMenuLineBottom')

    menuControl(topOptionArray, 'closeTopOption', 'showTopOption')

    if (companySubMenuActive) toggleCompanyMenu('quick')
    if (featuresSubMenuActive) toggleFeaturesMenu('quick')

    bottomOptions.classList.remove('fadeInBottomOptions')
    bottomOptions.classList.add('fadeOutBottomOptions')
  } else {
    hamburgerMenu.style.display = 'block'
    grayOut.style.display = 'block'

    hamburgerMenu.classList.add('drawMenu')
    hamburgerMenu.classList.remove('hideMenu')

    hamburgerLineTop.classList.remove('closeMenuLineTop')
    hamburgerLineMiddle.classList.remove('closeMenuLineMid')
    hamburgerLineBottom.classList.remove('closeMenuLineBottom')

    hamburgerLineTop.classList.add('openMenuLineTop')
    hamburgerLineMiddle.classList.add('openMenuLineMid')
    hamburgerLineBottom.classList.add('openMenuLineBottom')

    menuControl(topOptionArray, 'showTopOption', 'closeTopOption')

    bottomOptions.classList.add('fadeInBottomOptions')
    bottomOptions.classList.remove('fadeOutBottomOptions')
  }

  menuActive = !menuActive
}

featuresMenu.addEventListener('click', toggleFeaturesMenu)

function toggleFeaturesMenu(quick) {
  console.log('click')
  if (featuresSubMenuActive) {
    featuresDropDownIcon.classList.remove('rollUpIconAnimateOpen')
    featuresDropDownIcon.classList.add('rollUpIconAnimateClose')

    setTimeout(
      () => {
        optionTravel -= 200
        companySpecificTravel -= 200

        topOption2.style.cssText += `transition: transform 0.5s; transform: translate(0px,${companySpecificTravel}px);`
        topOption3.style.cssText += `transition: transform 0.5s; transform: translate(0px,${optionTravel}px);`
        topOption4.style.cssText += `transition: transform 0.5s; transform: translate(0px,${optionTravel}px);`
        bottomOptions.style.cssText += `transition: transform 0.5s; transform: translate(0px,${optionTravel}px);`
      },
      quick === 'quick' ? 1000 : 200
    )

    menuControl(subOptionArray[0].elements, 'closeTopOptionFast', 'showTopOptionFast')
  } else {
    featuresMenuContent.style.display = 'block'
    featuresDropDownIcon.classList.add('rollUpIconAnimateOpen')
    featuresDropDownIcon.classList.remove('rollUpIconAnimateClose')

    optionTravel += 200
    companySpecificTravel += 200

    topOption2.style.cssText += `transition: transform 0.5s; transform: translate(0px,${companySpecificTravel}px);`
    topOption3.style.cssText += `transition: transform 0.5s; transform: translate(0px,${optionTravel}px);`
    topOption4.style.cssText += `transition: transform 0.5s; transform: translate(0px,${optionTravel}px);`
    bottomOptions.style.cssText += `transition: transform 0.5s; transform: translate(0px,${optionTravel}px);`

    menuControl(subOptionArray[0].elements, 'showTopOptionFast', 'closeTopOptionFast')
  }

  featuresSubMenuActive = !featuresSubMenuActive
}

companyMenu.addEventListener('click', toggleCompanyMenu)

function toggleCompanyMenu(quick) {
  console.log('company')
  if (companySubMenuActive) {
    companyDropDownIcon.classList.remove('rollUpIconAnimateOpen')
    companyDropDownIcon.classList.add('rollUpIconAnimateClose')

    setTimeout(
      () => {
        optionTravel -= 150
        topOption3.style.cssText += `transition: transform 0.5s; transform: translate(0px,${optionTravel}px);`
        topOption4.style.cssText += `transition: transform 0.5s; transform: translate(0px,${optionTravel}px);`
        bottomOptions.style.cssText += `transition: transform 0.5s; transform: translate(0px,${optionTravel}px);`
      },
      quick === 'quick' ? 1000 : 200
    )

    menuControl(subOptionArray[1].elements, 'closeTopOptionFast', 'showTopOptionFast')
  } else {
    companyMenuContent.style.display = 'block'
    companyDropDownIcon.classList.add('rollUpIconAnimateOpen')
    companyDropDownIcon.classList.remove('rollUpIconAnimateClose')

    optionTravel += 150

    topOption3.style.cssText += `transition: transform 0.5s; transform: translate(0px,${optionTravel}px);`
    topOption4.style.cssText += `transition: transform 0.5s; transform: translate(0px,${optionTravel}px);`
    bottomOptions.style.cssText += `transition: transform 0.5s; transform: translate(0px,${optionTravel}px);`

    menuControl(subOptionArray[1].elements, 'showTopOptionFast', 'closeTopOptionFast')
  }

  companySubMenuActive = !companySubMenuActive
}

desktopFeaturesMenu.addEventListener('click', toggleDesktopFeaturesDropdown)
desktopCompanyMenu.addEventListener('click', toggleDesktopCompanyDropdown)

transparantCover.addEventListener('click', () => {
  if (desktopFeaturesSubMenuActive) {
    toggleDesktopFeaturesDropdown()
  }

  if (desktopCompanySubMenuActive) {
    toggleDesktopCompanyDropdown()
  }
})

function toggleDesktopFeaturesDropdown(force) {
  if (desktopCompanySubMenuActive) {
    toggleDesktopCompanyDropdown()
  }

  if (desktopFeaturesSubMenuActive) {
    setTimeout(() => {
      desktopFeaturesDropdown.style.display = 'none'
      transparantCover.style.display = 'none'
    }, 250)

    desktopFeaturesDropdownIcon.classList.remove('rollUpIconAnimateOpen')
    desktopFeaturesDropdownIcon.classList.add('rollUpIconAnimateClose')

    desktopFeaturesDropdown.classList.remove('desktopExpandDropdown')
    desktopFeaturesDropdown.classList.add('desktopCollapseDropdown')
  } else {
    desktopFeaturesDropdown.style.display = 'block'
    transparantCover.style.display = 'block'

    desktopFeaturesDropdownIcon.classList.add('rollUpIconAnimateOpen')
    desktopFeaturesDropdownIcon.classList.remove('rollUpIconAnimateClose')

    desktopFeaturesDropdown.classList.add('desktopExpandDropdown')
    desktopFeaturesDropdown.classList.remove('desktopCollapseDropdown')
  }

  desktopFeaturesSubMenuActive = !desktopFeaturesSubMenuActive
}

function toggleDesktopCompanyDropdown() {
  if (desktopFeaturesSubMenuActive) {
    toggleDesktopFeaturesDropdown()
  }

  if (desktopCompanySubMenuActive) {
    setTimeout(() => {
      desktopCompanyDropdown.style.display = 'none'
      transparantCover.style.display = 'none'
    }, 250)

    desktopCompanyDropdownIcon.classList.remove('rollUpIconAnimateOpen')
    desktopCompanyDropdownIcon.classList.add('rollUpIconAnimateClose')

    desktopCompanyDropdown.classList.remove('desktopExpandDropdown')
    desktopCompanyDropdown.classList.add('desktopCollapseDropdown')
  } else {
    desktopCompanyDropdown.style.display = 'block'
    transparantCover.style.display = 'block'

    desktopCompanyDropdownIcon.classList.add('rollUpIconAnimateOpen')
    desktopCompanyDropdownIcon.classList.remove('rollUpIconAnimateClose')

    desktopCompanyDropdown.classList.add('desktopExpandDropdown')
    desktopCompanyDropdown.classList.remove('desktopCollapseDropdown')
  }

  desktopCompanySubMenuActive = !desktopCompanySubMenuActive
}

function menuControl(array, addClass, removeClass) {
  delay = 0
  array.forEach((element) => {
    element.classList.remove(removeClass)
    element.classList.add(addClass)
    element.style.animationDelay = `${delay}s`
    delay += 0.1
  })
}

addEventListener('resize', (a, b) => {
  if (lastWidth !== window.outerWidth) {
    lastWidth = window.outerWidth

    if (desktopCompanySubMenuActive) {
      toggleDesktopCompanyDropdown()
    }

    if (desktopFeaturesSubMenuActive) {
      toggleDesktopFeaturesDropdown()
    }

    if (menuActive) {
      toggleMenu()
    }
  }
})
