const playerNameList = document.getElementById('player-list');

function playerSelection(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerListName = document.createElement('li');
    playerListName.innerHTML = `${playerName}
    `

    playerNameList.appendChild(playerListName);


    if (playerNameList.childNodes.length > 6) {
        alert("hocce")
    } else {
        return
    }

    return
}

function perPlayercost(elementId) {
    const playerCount = playerNameList.children.length;
    const perPlayerBudget = document.getElementById(elementId)
    const perPlayerBudgetString = perPlayerBudget.value;
    const perPlayerBudgetValue = parseInt(perPlayerBudgetString)
    const playerPerCost = perPlayerBudgetValue * playerCount;
    perPlayerBudget.value = "";
    return playerPerCost
}


document.getElementById('calculate-player-cost').addEventListener('click', function () {
    const everyPlayerCost = perPlayercost('per-player-cost')
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = everyPlayerCost
})

