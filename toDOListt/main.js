const input = document.querySelector('input')
const addBtn = document.querySelector('.add')
const ul = document.querySelector('ul')

addBtn.addEventListener('click', function(evt){
  const newTask = input.value
  const newLi = document.createElement('li')
  newLi.innerText = newTask
  ul.append(newLi)
  input.value = ''
})

