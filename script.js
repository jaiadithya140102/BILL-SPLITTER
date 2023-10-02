let bill = document.getElementById('BillAmt')
let tip = document.getElementById('TipAmt')
let nop = document.getElementById('numofpeople')
let btn1 = document.getElementById('PlusButton')
let btn2 = document.getElementById('MinusButton')
let finalres = document.getElementById('result')
// let prep =0 
calculate = () =>
{
    const billamt = Number(bill.value)
    const tipamt = Number(tip.value)/100
    const pp = Number(nop.innerText)  
    const perp = (billamt+billamt*tipamt)/pp
    finalres.innerText = `Rs${perp.toFixed(2)}`
  
}
let counter = 1
btn1.onclick = () => {
    counter+=1
    nop.innerText=counter
    calculate()
}
btn2.onclick = () => {
    if(Number(nop.innerText) <= 1){
       return
    }
    else{
    counter-=1
    nop.innerText=counter}
    calculate()
}