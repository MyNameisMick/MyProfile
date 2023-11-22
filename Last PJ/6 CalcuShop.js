
function calculate() {
const price = Number(document.getElementById('price').value)
const items = Number(document.getElementById('items').value)
let result = 0

for (let i = 1 ; i <= items ; i++){
    result += price
    // console.log(result)
}
document.getElementById('total').innerHTML = result
}


