'use strict'

  const displayCount = document.getElementById('count')
  const increaseButton = document.getElementById('increase')
  const decreaseButton = document.getElementById('decrease')
  const resetButton = document.getElementById('reset')

  let clickCount = 0

  increaseButton.addEventListener("click",function(){
    clickCount+=1
    displayCount.innerHTML = clickCount
    if (clickCount < 0){
      displayCount.style.color = 'red'
    }else if (clickCount > 0){
      displayCount.style.color = 'green'
    }else{
      displayCount.style.color = 'black'
    }
  })
  decreaseButton.addEventListener('click',function(){
    clickCount-=1
    displayCount.innerHTML = clickCount
    if (clickCount < 0){
      displayCount.style.color = 'red'
    }else if (clickCount > 0){
      displayCount.style.color = 'green'
    }else{
      displayCount.style.color = 'black'
    }
  })

  resetButton.addEventListener('click', function() {
    clickCount = 0
    displayCount.innerHTML = clickCount
    displayCount.style.color = 'black'
  })
