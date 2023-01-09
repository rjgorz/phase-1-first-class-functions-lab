// Code your solution in this file!
const returnFirstTwoDrivers = array => {
    return [array[0], array[1]];
}

const returnLastTwoDrivers = array => {
    const length = array.length - 1;
    return [array[length - 1], array[length]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = num => {
    return function (fare) {
        return fare * num;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, func) => {
    return func(drivers);
}