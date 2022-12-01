var back = document.createElement('div')
back.setAttribute('id', 'blur')
back.classList.add('blur')
back.append(popUp)
back.style.position = 'absolute'
back.style.left = '0%'
back.style.top = '0%'
back.style.zIndex = '50'
back.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
back.style.height = '100vh'
back.style.width = '100vw'
document.body.append(back)