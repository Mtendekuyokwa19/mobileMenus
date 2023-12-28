// eslint-disable-next-line no-unused-vars
const printOutName = (() => {
  const navbtn = document.querySelectorAll('.iconbtn')

  const navTitle = document.querySelectorAll('.navTitle')
  const iconsSvg = document.querySelectorAll('svg')

  function settingFunctiontobtns () {
    for (let i = 0; i < navbtn.length; i++) {
      navbtn[i].addEventListener('click', function () {
        switchingDisplayOfbtns(i)
      })
    }
  }
  settingFunctiontobtns()
  function showTitle (index) {
    navTitle[index].style.setProperty('display', 'flex')
  }

  function setTodefaultBtns () {
    navTitle.forEach((navTitle) => {
      navTitle.style.setProperty('display', 'none')
    })
    iconsSvg.forEach((iconsSvg) => {
      iconsSvg.style.setProperty('fill', 'none')
      iconsSvg.style.setProperty('stroke', '#9DB2CE')
    })
  }

  function switchingDisplayOfbtns (index) {
    setTodefaultBtns()
    showTitle(index)
    changingbtnColor(index)
  }

  function changingbtnColor (index) {
    iconsSvg[index].style.setProperty('fill', '#386BF6')
    iconsSvg[index].style.setProperty('stroke', '#1E1E1E')
  }
})()
