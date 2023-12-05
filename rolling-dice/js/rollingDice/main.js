console.log("Let's roll some dice, baby!");
console.log("---------------------------");


for (let i = 0; i < 10; i++) {

    const Roll = () => {
        let dieValue = Math.floor(Math.random() * 10) + 1;
        let die = dieValue
        return die;
    }

    const die1 = Roll();
    const die2 = Roll();

    let message = (`${die1} + ${die2} = ${die1 + die2}`);

    if (die1 === die2) {
        message += " DOUBLES!";
    }

    console.log(message);
}

