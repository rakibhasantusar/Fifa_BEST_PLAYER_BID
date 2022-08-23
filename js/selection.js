const playerNameList = document.getElementById('player-list'); // added on two function

//function for adding player list and alert validation
function playerSelection(element) {
    element.disabled = true;  // button disabled done for bonus mark
    element.style.backgroundColor = '#434343';
    element.style.color = '#000';


    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerListName = document.createElement('li');
    playerListName.innerHTML = `<p class="mt-5 font-normal text-lg" >${playerName}</p>`
    playerNameList.appendChild(playerListName);
    const p = document.querySelectorAll('#player-list')
    p.disabled = true

    if (playerNameList.children.length >= 6) {
        alert("Already Five Players added")
        const playerLimit = playerNameList.children[5]
        playerNameList.removeChild(playerLimit)

    } else {
        return
    }
    return
}

//function for calculation player cost
function perPlayercost(elementId) {
    const playerCount = playerNameList.children.length;
    const perPlayerBudget = document.getElementById(elementId)
    const perPlayerBudgetString = perPlayerBudget.value;
    const perPlayerBudgetValue = parseFloat(perPlayerBudgetString)
    const playerPerCost = perPlayerBudgetValue * playerCount;
    perPlayerBudget.value = "";
    return playerPerCost
}


// calulation common function
function playerExpenses(testId) {
    const everyPlayerCost = perPlayercost('per-player-cost')
    const playerExpenses = document.getElementById(testId);
    playerExpenses.innerText = everyPlayerCost.toFixed(2)
    return playerExpenses.innerText
}



// common function for manager + coach input for bonus mark

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
    const totalplayerCostvalue = totalplayerCostString.innerText;
    const totalplayerCost = parseFloat(totalplayerCostvalue);
    return totalplayerCost
}


document.getElementById('calculate-total').addEventListener('click', function () {
    const playerCost = playesrCost()
    const managerCost = managerCoachCommon('manager-input');
    const coachCost = managerCoachCommon('coach-input');

    const totalCost = managerCost + coachCost + playerCost;
    const totalCostOutput = document.getElementById('total-team-cost');
    totalCostOutput.innerText = totalCost.toFixed(2);

})
