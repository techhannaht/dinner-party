// Put your code here
console.log("My Enemies List!")
console.log("----------------")

const enemies = [
        {
            name: "Joshue Flowers",
            offenses: ["Being a jerk to me in elementary school",
            "Not being nice to me in elementary school"],
            IsReallyHated: true
        },
        {
            name: "Darth Vader",
            offenses: ["Cut off Luke's hand",
            "Murdered all those kids",
            "Unkind management practices"],
            IsReallyHated: false
        },
        {
            name: "Betty Rudelady",
            offenses: ["Phone calls in the theater",
            "Phone calls on the bus",
            "Phone calls in line at the grocery store",
            "Poor conversationalist"],
            IsReallyHated: true
        },
        {
            name: "Leon Peck",
            offenses: ["Keeps giving me a hotplate"],
            IsReallyHated: false
        }
    ]

    for (let enemy of enemies) {
        if (enemy.IsReallyHated === true)
        {
            console.log(`${enemy.name} (Really, really dislike!) .`);
        }
        else
        {
            console.log(`${enemy.name}`);
        }
    }