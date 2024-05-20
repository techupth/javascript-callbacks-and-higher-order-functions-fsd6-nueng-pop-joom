//EX1
let employeeSalaries = [20005,40000,32000,14500,344000];

salariesPlus = (money,callback) => {
    return money = money.map(callback)
}

moneyUp = (value) =>  value + 5000;

employeeSalaries = salariesPlus(employeeSalaries,moneyUp)
console.log(employeeSalaries)