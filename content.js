
function every(delay, callback) {

  let complete = callback()

  if (!complete) {
    setTimeout(() => {
     every(delay, callback)
    }, delay)
  }

}

every(2000, () => {
  let barHighlight = document.getElementById('highlight-bar-option')
  let noteHighlight = document.getElementById('highlight-notes')
  let shape = document.getElementById('playhead-shape')

  if (barHighlight === null) {
    return false
  }

  setTimeout(() => {
    barHighlight.checked = true
    barHighlight.dispatchEvent(new Event('change'))
    noteHighlight.checked = false
    noteHighlight.dispatchEvent(new Event('change'))
    shape.value = '4'
    shape.dispatchEvent(new Event('change'))
  }, 2000)
  

  return true
})
