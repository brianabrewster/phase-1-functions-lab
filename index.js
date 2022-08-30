function distanceFromHqInBlocks(pickup) {
    let distance = pickup - 42;
    return Math.abs(distance);
}
distanceFromHqInBlocks(50)


function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
  }

function calculatesFarePrice(start, destination) {
    let result = Math.abs(destination - start) * 264
    if (result <= 400) {
        return 0
    } else if (result > 400 && result <= 2000) {
        return (result - 400) * 0.02
    } else if (result > 2000 && result <= 2500) {
        return 25
    } else if (result > 2500) {
        return 'cannot travel that far'
    }
  }