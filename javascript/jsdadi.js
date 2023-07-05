const randomNumb = Math.random(1, 6)
const diceBtn = document.querySelector(".dice-btn")
const diceResult = document.getElementById("dice-result")
const pcResult = document.querySelector(".PC")

diceBtn.addEventListener("click", function(){
    const userNumb = Math.floor(Math.random() * 6) + 1
    const pcNumb = Math.floor(Math.random() * 6) + 1
    
    pcResult.innerHTML=`il tiro del pc è ${pcNumb}`

    if (userNumb > pcNumb){
        diceResult.innerHTML=`il tuo tiro è di ${userNumb} e hai vinto`
    }
    else if (userNumb < pcNumb){
        diceResult.innerHTML=`il tuo tiro è di ${userNumb} e hai perso`
    }
    else if (userNumb === pcNumb){
        diceResult.innerHTML=`il tuo tiro è di ${userNumb} hai pareggiato`
    }

})

