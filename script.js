var birthDateInput = document.querySelector('#birth-date')
var luckyNoInput = document.querySelector('#lucky-no')
var checkAction = document.querySelector('#check')
var result = document.querySelector('#result')

function isYourBirthdayLucky() {
  let birthDate = parseInt(birthDateInput.value.split('-').join(''))
  let luckyNo = parseInt(luckyNoInput.value)
//   console.log("Hello!")
//   console.log(birthDate)
//   console.log(luckyNo)
  let dateSum = 0

  while (birthDate !== 0) {
    let unit = birthDate % 10
    // console.log(unit)
    dateSum += unit
    birthDate -= unit
    birthDate /= 10
    // console.log(birthDate)
  }

  // console.log(dateSum)
  if (dateSum % luckyNo === 0) {
    // console.log("Yes, your birthday is lucky! :)")
    result.textContent = 'Yes, your birthday is lucky! :)'
  }
  else {
    // console.log("No, your birthday is not lucky! :(")
    result.textContent = 'No, your birthday is not lucky! :('
  }
}

checkAction.addEventListener('click', isYourBirthdayLucky)