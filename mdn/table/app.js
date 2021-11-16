const bodyEl = document
  .querySelector('body')
  .insertBefore(
    document.createElement('button'),
    document.querySelector('table')
  )
document.write('<table width= 100%>')
for (let i = 0; i <= 5; i++) {
  document.write('<tr>')
  for (let j = 1; j <= 5; j++) {
    document.write('<td>' + 'Солбон Болбес' + '</td>')
  }
  document.write('</tr>')
}
