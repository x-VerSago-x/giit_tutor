const customName = document.getElementById('customname')
const randomize = document.querySelector('.randomize')
const story = document.querySelector('.story')
let storyText =
  'На улице было 94 градуса по Фаренгейту, поэтому :insertx: отправились на прогулку. Когда они дошли до :inserty:, то несколько мгновений смотрели в ужасе, а потом :insertz:. Боб видел все это, но не удивился - :insertx: весит 300 фунтов, а день был жаркий.'
const insertX = ['Гоблин Вилли', 'Большой папа', 'Дед Мороз']
const insertY = ['суповой кухни', 'Диснейленда', 'Белого дома']
const insertZ = [
  'спонтанно сгорели',
  'растаяли в луже на тротуаре.',
  'превратились в слизняка и уползли',
]

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length)
  return array[random]
}
randomize.addEventListener('click', result)

function result() {
  const newInsertX = randomValueFromArray(insertX)
  const newInsertY = randomValueFromArray(insertY)
  const newInsertZ = randomValueFromArray(insertZ)
  let newStory = storyText
    .replace(':insertx:', newInsertX)
    .replace(':inserty:', newInsertY)
    .replace(':insertz:', newInsertZ)
  if (customName.value !== '') {
    let name = customName.value
    newStory = newStory.replace('Боб', name)
  }

  if (document.getElementById('uk').checked) {
    let weight = Math.round(300 / 2.2) + ' Килограмм'
    let temperature = Math.round(94 / 1.8) + ' градуса по Цельсию'
    newStory = newStory
      .replace('94 градуса по Фаренгейту', temperature)
      .replace('300 фунтов', weight)
  }

  story.textContent = newStory.replace(':insertx:', newInsertX)
  story.style.visibility = 'visible'
}
