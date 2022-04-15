const entry = prompt('Press 1 for deposit or press 2 for withdrawal');
let balance = 300;

if (entry == 1) {
    const amount = Number(prompt('How much do you want to deposit?'));
    alert(`Your new balance is ${balance + amount}!`);
    if (balance + amount <= 0) {
        alert(`You dont have  money`);
    } else {
        alert(`You have money!!`);
    }
} else if (entry == 2) {
    const amount = Number(prompt('How much do you want to widthdrawl?'));
    alert(`Your new balance is ${balance - amount}!`);
};