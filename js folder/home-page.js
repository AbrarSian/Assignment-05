document.getElementById('navigate-btn').addEventListener('click', function() {
    window.location.href = './blog.html';
});

document.getElementById('donationBtn').addEventListener('click',function(){
    document.getElementById('historyBtn').classList.remove('active',true);
    document.getElementById('donationBtn').classList.add('default',true);
    showSectionById('donation-section');
}
)

document.getElementById('historyBtn').addEventListener('click',function(){
    document.getElementById('donationBtn').classList.remove('default');
    document.getElementById('historyBtn').classList.add('active');
    showSectionById('history-section');
}
)

document.getElementById('button-clicker').addEventListener('click',function(event){
    event.preventDefault();
    let addingMoney = document.getElementById('donate1').value;
    let donatedBox= getTheMoneyAmount('total-donate');
    let balance = getTheMoneyAmount('balance');
    if(addingMoney !== '' && !isNaN(addingMoney) && addingMoney >= 0 && addingMoney<balance){
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

        const div= document.createElement('div');
        div.classList.add('border-solid','border-2','border-black','mb-4','p-3');
        const uniqueid = 'current-date-' + Date.now();
        div.innerHTML=`
        <h4 class="text-2xl font-bold">${addingMoney} Taka is donated for flood at Noakhali,Bangladesh</h4>
        <p>Date:<span id="${uniqueid}"></span></p>
        `
        document.getElementById('history-container').appendChild(div);
        document.getElementById(uniqueid).innerText = new Date().toString();
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
    if(addingMoney !== '' && !isNaN(addingMoney) && addingMoney >= 0 && addingMoney<balance){
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

    const div= document.createElement('div');
        div.classList.add('border-solid','border-2','border-black','mb-4','p-3');
        const uniqueid = 'current-date-' + Date.now();
        div.innerHTML=`
        <h4 class="text-2xl font-bold">${addingMoney} Taka is donated for Flood Relief in Feni,Bangladesh</h4>
        <p>Date:<span id="${uniqueid}"></span></p>
        `
        document.getElementById('history-container').appendChild(div);
        document.getElementById(uniqueid).innerText = new Date().toString();
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
    if(addingMoney !== '' && !isNaN(addingMoney) && addingMoney >= 0 && addingMoney<balance){
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

    const div= document.createElement('div');
        div.classList.add('border-solid','border-2','border-black','mb-4','p-3');
        const uniqueid = 'current-date-' + Date.now();
        div.innerHTML=`
        <h4 class="text-2xl font-bold">${addingMoney} Taka is Aided for Injured in the Quota Movement</h4>
        <p>Date:<span id="${uniqueid}"></span></p>
        `
        document.getElementById('history-container').appendChild(div);
        document.getElementById(uniqueid).innerText = new Date().toString();
}
    else{
        alert("Please Provide us your donate, not your words or funny number");
    }
})