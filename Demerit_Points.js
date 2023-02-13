//Speed limit = 70 kmph
//At every 5 kmph after SpeedLimit 1 point would be considered (Eg. -> 50 kmph = 10 points)

function checkSpeed(speed) {
    const SpeedLimit = 70,
        kmPerPoint = 5;

    if (speed < SpeedLimit - kmPerPoint)
        console.log('Okay.');
    else {
        const points = Math.floor(speed - SpeedLimit) / 5;
        if (points >= 12)
            console.log('License Suspended.');
        else
            console.log('Points', points);
    }
}

checkSpeed(550);