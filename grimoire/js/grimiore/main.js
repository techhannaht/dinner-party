// Put your code here
console.log("Do you believe in magic?")
console.log("------------------------")

const MakeGoodSpellBook = () => {
console.log("Good Book")

    const spells = [
        {
            name: "Turn enemy into a newt",
            IsEvil: true
        },
        {
            name: "Conjure some gold for a local charity",
            IsEvil: false
        },
        {
            name: "Give a deaf person the ability to heal",
            IsEvil: false
        },
        {
            name: "Make yourself emperor of the universe",
            IsEvil: true
        },
        {
            name: "Convince your relatives your political views are correct",
            IsEvil: false
        }
    ]

    for (let spell of spells) {
        if (spell.IsEvil === false) {
          console.log(spell.name)
        } 
      }
}

MakeGoodSpellBook();

console.log("  ")

const MakeEvilSpellBook = () => {
    console.log("Evil Book")
    
        const spells = [
            {
                name: "Turn enemy into a newt",
                IsEvil: true
            },
            {
                name: "Conjure some gold for a local charity",
                IsEvil: false
            },
            {
                name: "Give a deaf person the ability to heal",
                IsEvil: false
            },
            {
                name: "Make yourself emperor of the universe",
                IsEvil: true
            },
            {
                name: "Convince your relatives your political views are correct",
                IsEvil: false
            }
        ]
    
        for (let spell of spells) {
            if (spell.IsEvil === true) {
              console.log(spell.name)
            } 
          }
    }
    
    MakeEvilSpellBook();