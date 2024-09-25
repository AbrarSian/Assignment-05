function getTheMoneyAmount(id){
    let man = document.getElementById(id).innerText;
    const numericValue = Number(man.replace(/\D/g, ''))
    return numericValue;
}
function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}