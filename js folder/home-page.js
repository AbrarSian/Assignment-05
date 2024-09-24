document.getElementById('button-clicker').addEventListener('click',function(event){
    event.preventDefault();
    let addingMoney = document.getElementById('donate1').value;
    let donatedBox= getTheMoneyAmount('total-donate');
    let balance = getTheMoneyAmount('balance');
    if(!isNaN(addingMoney) && addingMoney >= 0 && addingMoney<balance){
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});

        let finalDonate = parseFloat(donatedBox)+parseFloat(addingMoney);
        let remainingBalance= balance - addingMoney;
        document.getElementById('total-donate').innerHTML = `<a href="" id="total-donate" class="pb-4 font-bold flex "><img class="pr-1" src="./images/coin.png" alt="">${finalDonate} BDT</a>`;
        document.getElementById('balance').innerHTML = `<p id="balance" class="flex items-center font-bold"><img class="pr-1" src="./images/coin.png" alt="">${remainingBalance} BDT</p>`;
        modal.classList.remove('hidden');

}
    else{
        alert("Please Provide us your donate, not your words or funny number");
    }
})
document.getElementById('button-clicker1').addEventListener('click',function(event){
    event.preventDefault();
    let addingMoney = document.getElementById('donate2').value;
    let donatedBox= getTheMoneyAmount('total-donate1');
    let balance = getTheMoneyAmount('balance');
    if(!isNaN(addingMoney) && addingMoney >= 0 && addingMoney<balance){
        const closeModalBtn = document.getElementById('closeModalBtn1');
        const modal = document.getElementById('myModal1');
        
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.add('hidden');
            }
        });
    let finalDonate = parseFloat(donatedBox)+parseFloat(addingMoney);
    let remainingBalance= balance - addingMoney;
    document.getElementById('total-donate1').innerHTML = `<a href="" id="total-donate" class="pb-4 font-bold flex"><img class="pr-1" src="./images/coin.png" alt="">${finalDonate} BDT</a>`;
    document.getElementById('balance').innerHTML = `<p id="balance" class="flex items-center font-bold"><img class="pr-1" src="./images/coin.png" alt="">${remainingBalance} BDT</p>`;
    modal.classList.remove('hidden');
    }
    else{
        alert("Please Provide us your donate, not your words or funny number");
    }
})
document.getElementById('button-clicker2').addEventListener('click',function(event){
    event.preventDefault();
    let addingMoney = document.getElementById('donate3').value;
    let donatedBox= getTheMoneyAmount('total-donate2');
    let balance = getTheMoneyAmount('balance');
    if(!isNaN(addingMoney) && addingMoney >= 0 && addingMoney<balance){
        const closeModalBtn = document.getElementById('closeModalBtn2');
        const modal = document.getElementById('myModal2');
        
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.add('hidden');
            }
        });
    let finalDonate = parseFloat(donatedBox)+parseFloat(addingMoney);
    let remainingBalance= balance - addingMoney;
    document.getElementById('total-donate2').innerHTML = `<a href="" id="total-donate2" class="pb-4 font-bold flex"><img class="pr-1" src="./images/coin.png" alt="">${finalDonate} BDT</a>`;
    document.getElementById('balance').innerHTML = `<p id="balance" class="flex items-center font-bold"><img class="pr-1" src="./images/coin.png" alt="">${remainingBalance} BDT</p>`;
    modal.classList.remove('hidden');
}
    else{
        alert("Please Provide us your donate, not your words or funny number");
    }
})