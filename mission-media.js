const Billy = {
    mind: "XXX",
    heart: "Love",
    gut: "Natty Boh",
    designExperience: true,
    funPersonality: true,
    creativity: true,
    bachelors: true,
    passion: true,
    continuousLearning: true,
    agencyExperience: true,
    fortune500Experience: true,
    fromBaltimore: true,
}

let inherentMindValue = []
let inherentHeartValue = []
let inherentGutValue = []

let yearsExperience = 7

function missionMedia(employee, salary) {
    for (var i = 0; i < employee.mind.length; i++) {
        inherentMindValue.push(employee.mind.charCodeAt(i))
    }
    for (var i = 0; i < employee.heart.length; i++) {
        inherentHeartValue.push(employee.heart.charCodeAt(i))
    }
    for (var i = 0; i < employee.gut.length; i++) {
        inherentGutValue.push(employee.gut.charCodeAt(i))
    }

    var totalInherentMindValue = inherentMindValue.reduce((a, b) => a + b, 0)
    var totalInherentHeartValue = inherentHeartValue.reduce((a, b) => a + b, 0)
    var totalInherentGutValue = inherentGutValue.reduce((a, b) => a + b, 0)

    let totalEmployeeValue = (totalInherentGutValue + totalInherentHeartValue + totalInherentMindValue)


    if (employee.designExperience === true) {
        totalEmployeeValue *= 2
    }

    if (employee.funPersonality === true) {
        totalEmployeeValue *= 1.5
    }

    if (employee.creativity === true) {
        totalEmployeeValue *= 2
    }

    if (employee.passion === true) {
        totalEmployeeValue *= 2.5
    }

    if (employee.continuousLearning === true) {
        totalEmployeeValue *= 1.5
    }

    if (employee.agencyExperience === true) {
        totalEmployeeValue *= 2
    }

    if (employee.fortune500Experience === true) {
        totalEmployeeValue *= 1.25
    }

    if (employee.fromBaltimore === true) {
        totalEmployeeValue *= 1.5
    }


    if (salary) {
        console.log("Total Approximant Employee Value:", totalEmployeeValue);

        if (salary > totalEmployeeValue) {
            console.log("Not Worth Heiring:", salary - totalEmployeeValue, "Potential Loss")
        } else if (totalEmployeeValue > salary) {
            console.log("Hire Employee:", totalEmployeeValue - salary, "Potential Profit")
        }

        console.log("Value is a perception of reality, intrinsic value of humanity unknown.");

    } else {
        console.log("Add salary to missionMedia(Billy, $salary) function as second argument to see if you should hire Billy.");
    }


}


missionMedia(Billy)
