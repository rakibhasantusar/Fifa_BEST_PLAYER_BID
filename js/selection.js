const playerNameList = document.getElementById('player-list');

function playerSelection(element) {
    element.disabled = true;  // button disabled done
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
    const perPlayerBudgetValue = parseFloat(perPlayerBudgetString)
    const playerPerCost = perPlayerBudgetValue * playerCount;
    perPlayerBudget.value = "";
    return playerPerCost
}
function playerExpenses(testId) {
    const everyPlayerCost = perPlayercost('per-player-cost')
    const playerExpenses = document.getElementById(testId);
    // const playerExpensesString = playerExpenses.innerText
    // const playerExpensValue = parseFloat(playerExpensesString)
    playerExpenses.innerText = everyPlayerCost
    return playerExpenses.innerText
}



// common function for manager coach input

function managerCoachCommon(inputId) {
    const managerCoachCommonInput = document.getElementById(inputId);
    const managerCoachCommonInputString = managerCoachCommonInput.value;
    const managerCoachCommon = parseFloat(managerCoachCommonInputString)

    managerCoachCommonInput.value = "";
    return managerCoachCommon
}


document.getElementById('calculate-player-cost').addEventListener('click', function () {
    playerExpenses('player-expenses');
})

function playesrCost() {
    const totalplayerCostString = document.getElementById('player-expenses');
    const totalplayerCostvalue = totalplayerCostString.innerText
    const totalplayerCost = parseFloat(totalplayerCostvalue)
    return totalplayerCost
}


document.getElementById('calculate-total').addEventListener('click', function () {
    const playerCost = playesrCost()
    const managerCost = managerCoachCommon('manager-input');
    const coachCost = managerCoachCommon('coach-input');

    const totalCost = managerCost + coachCost + playerCost;
    const totalCostOutput = document.getElementById('total-team-cost');
    totalCostOutput.innerText = totalCost;

    console.log(totalCost);
})
