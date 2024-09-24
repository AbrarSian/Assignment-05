function getTheMoneyAmount(id){
    let man = document.getElementById(id).innerText;
    const numericValue = Number(man.replace(/\D/g, ''))
    return numericValue;
}