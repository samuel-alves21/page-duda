const general = () => {
  const section01 = document.querySelector('.section01')
  const section02 = document.querySelector('.section02')

  if (window.innerWidth < 576) {
    section01.style.height = `${window.innerHeight / 2}px`
    section02.style.height = `${window.innerHeight / 2}px`
  } else {
    section01.style.height = `${window.innerHeight}px`
    section02.style.height = `${window.innerHeight}px`
  }

  const handleResize = () => {
    if (window.innerWidth < 576) {
      section01.style.height = `${window.innerHeight / 2}px`
      section02.style.height = `${window.innerHeight / 2}px`
    } else {
      section01.style.height = `${window.innerHeight}px`
      section02.style.height = `${window.innerHeight}px`
    }
  }

  window.onresize = handleResize
}

general()
