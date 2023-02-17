
let lastWidth = window.outerWidth

let topOptionArray = []
topOptionArray.push(document.getElementById('menuTopOption1'))
topOptionArray.push(document.getElementById('menuTopOption2'))
topOptionArray.push(document.getElementById('menuTopOption3'))
topOptionArray.push(document.getElementById('menuTopOption4'))


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

$('#hamburger').on('click', toggleMenu)
$('#hamburgerClose').on('click', toggleMenu)
$('.grayOut').on('click', toggleMenu)


function toggleMenu() {
  if (menuActive) {
    setTimeout(() => {
      $('#hamburgerMenu').css('display', 'none')
      $('.grayOut').css('display', 'none')
    }, 1000)

    $('#hamburgerMenu').removeClass('drawMenu').addClass('hideMenu')

    $('.lineTop').removeClass('openMenuLineTop').addClass('closeMenuLineTop')
    $('.lineMiddle').removeClass('openMenuLineMid').addClass('closeMenuLineMid')
    $('.lineBottom').removeClass('openMenuLineBottom').addClass('closeMenuLineBottom')

    menuControl(topOptionArray, 'closeTopOption', 'showTopOption')

    if (companySubMenuActive) toggleCompanyMenu('quick')
    if (featuresSubMenuActive) toggleFeaturesMenu('quick')

    $('.menuBottomOptions').removeClass('fadeInBottomOptions').addClass('fadeOutBottomOptions')
  } else {
    $('#hamburgerMenu').css('display', 'block')
    $('.grayOut').css('display', 'block')

    $('#hamburgerMenu').removeClass('hideMenu').addClass('drawMenu')

    $('.lineTop').removeClass('closeMenuLineTop').addClass('openMenuLineTop')
    $('.lineMiddle').removeClass('closeMenuLineMid').addClass('openMenuLineMid')
    $('.lineBottom').removeClass('closeMenuLineBottom').addClass('openMenuLineBottom')



    menuControl(topOptionArray, 'showTopOption', 'closeTopOption')

    $('.menuBottomOptions').removeClass('fadeOutBottomOptions').addClass('fadeInBottomOptions')
  }

  menuActive = !menuActive
}

$('#featuresMenu').on('click', toggleFeaturesMenu)

function toggleFeaturesMenu(quick) {
  console.log('click')
  if (featuresSubMenuActive) {
    $('#featuresDropDownIcon').removeClass('rollUpIconAnimateOpen').addClass('rollUpIconAnimateClose')

    setTimeout(
      () => {

        companySpecificTravel -= 200
        optionTravel -= 200

        companySpecificTravelObject = {
          'transition': 'transform 0.5s',
          'transform': `translate(0px,${companySpecificTravel}px)`
        }


        travelObject = {
          'transition': 'transform 0.5s',
          'transform': `translate(0px,${optionTravel}px)`
        }

        $('#menuTopOption2').css(companySpecificTravelObject)
        $('#menuTopOption3').css(travelObject)
        $('#menuTopOption4').css(travelObject)
        $('.menuBottomOptions').css(travelObject)
      },
      quick === 'quick' ? 1000 : 200
    )

    menuControl(subOptionArray[0].elements, 'closeTopOptionFast', 'showTopOptionFast')
  } else {

    $('#featuresDropDownIcon').removeClass('rollUpIconAnimateClose').addClass('rollUpIconAnimateOpen')


    companySpecificTravel += 200
    optionTravel += 200

    companySpecificTravelObject = {
      'transition': 'transform 0.5s',
      'transform': `translate(0px,${companySpecificTravel}px)`
    }

    travelObject = {
      'transition': 'transform 0.5s',
      'transform': `translate(0px,${optionTravel}px)`
    }

    $('#menuTopOption2').css(companySpecificTravelObject)
    $('#menuTopOption3').css(travelObject)
    $('#menuTopOption4').css(travelObject)
    $('.menuBottomOptions').css(travelObject)

    menuControl(subOptionArray[0].elements, 'showTopOptionFast', 'closeTopOptionFast')
  }

  featuresSubMenuActive = !featuresSubMenuActive
}

$('#companyMenu').on('click', toggleCompanyMenu)

function toggleCompanyMenu(quick) {
  console.log('company')
  if (companySubMenuActive) {
    $('#companyDropDownIcon').removeClass('rollUpIconAnimateOpen').addClass('rollUpIconAnimateClose')

    setTimeout(
      () => {
        optionTravel -= 150
        travelObject = {
          'transition': 'transform 0.5s',
          'transform': `translate(0px,${optionTravel}px)`
        }

        $('#menuTopOption3').css(travelObject)
        $('#menuTopOption4').css(travelObject)
        $('.menuBottomOptions').css(travelObject)
      },
      quick === 'quick' ? 1000 : 200
    )

    menuControl(subOptionArray[1].elements, 'closeTopOptionFast', 'showTopOptionFast')
  } else {
    $('#companyDropDownIcon').removeClass('rollUpIconAnimateClose').addClass('rollUpIconAnimateOpen')

    optionTravel += 150

    travelObject = {
      'transition': 'transform 0.5s',
      'transform': `translate(0px,${optionTravel}px)`
    }

    $('#menuTopOption3').css(travelObject)
    $('#menuTopOption4').css(travelObject)
    $('.menuBottomOptions').css(travelObject)

    menuControl(subOptionArray[1].elements, 'showTopOptionFast', 'closeTopOptionFast')
  }

  companySubMenuActive = !companySubMenuActive
}

$('#desktopFeaturesMenu').on('click', toggleDesktopFeaturesDropdown)
$('#desktopCompanyMenu').on('click', toggleDesktopCompanyDropdown)
$('.transparantCover').on('click', () => {

  console.log('hi')
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
      $('#desktopFeaturesDropdown').css('display', 'none')
      $('.transparantCover').css('display', 'none')

    }, 250)

    $('#desktopFeaturesDropDownIcon').removeClass('rollUpIconAnimateOpen').addClass('rollUpIconAnimateClose')
    $('#desktopFeaturesDropdown').removeClass('desktopExpandDropdown').addClass('desktopCollapseDropdown')

  } else {
    $('#desktopFeaturesDropdown').css('display', 'block')
    $('.transparantCover').css('display', 'block')

    $('#desktopFeaturesDropDownIcon').removeClass('rollUpIconAnimateClose').addClass('rollUpIconAnimateOpen')
    $('#desktopFeaturesDropdown').removeClass('desktopCollapseDropdown').addClass('desktopExpandDropdown')
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

      $('.transparantCover').css('display', 'none')
    }, 250)
    $('#desktopCompanyDropDownIcon').removeClass('rollUpIconAnimateOpen').addClass('rollUpIconAnimateClose')
    $('#desktopCompanyDropdown').removeClass('desktopExpandDropdown').addClass('desktopCollapseDropdown')

  } else {
    desktopCompanyDropdown.style.display = 'block'
    $('.transparantCover').css('display', 'block')

    $('#desktopCompanyDropDownIcon').removeClass('rollUpIconAnimateClose').addClass('rollUpIconAnimateOpen')
    $('#desktopCompanyDropdown').removeClass('desktopCollapseDropdown').addClass('desktopExpandDropdown')
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
