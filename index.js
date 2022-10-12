// Distance From HQ In Blocks
function distanceFromHqInBlocks(value) {
    return (Math.abs(value - 42));
}

// Distance From HQ In Feet
// 1 Block = 264 Feet
function distanceFromHqInFeet(value) {
    return (distanceFromHqInBlocks(value) * 264);
}

// Distance Traveled In Feet
function distanceTravelledInFeet(start, end) {
    const blocksTraveled = Math.abs(start - end);
    const feetTraveled = blocksTraveled * 264;
    return feetTraveled;
}

// Calculate Fare Price
function calculatesFarePrice(start, end) {
    const feetTraveled = distanceTravelledInFeet(start, end);
    let farePrice;
    if (feetTraveled <= 400) {
        farePrice = 0;
    }
    else if ((feetTraveled > 400) && (feetTraveled <= 2000)) {
        farePrice = ((feetTraveled - 400) * 0.02);
    }
    else if ((feetTraveled > 2000) && (feetTraveled <= 2500)) {
        farePrice = 25;
    }
    else {
        return `cannot travel that far`;
    }
    return farePrice;
}