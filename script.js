const input = document.getElementById('number');
const botao = document.getElementById("convert-btn")
const result = document.getElementById("output")

botao.addEventListener('click', () =>{
  let num = input.value
  let romanNum = ''

      let romanArray =[
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ]

    if (input.value === ""){
    result.innerText = "Please enter a valid number"
  } else if (input.value > 3999){
    result.innerText = "Please enter a number less than or equal to 3999"
  } else if (input.value.includes("-") || input.value <= 0){
    result.innerText = "Please enter a number greater than or equal to 1"
  } else {

  for (let i = 0; i < romanArray.length; i++){
    while (num >= romanArray[i][1]){
      romanNum += romanArray[i][0]
      num -= romanArray[i][1]
    }
  }
  return result.innerText = `${romanNum}`
}})