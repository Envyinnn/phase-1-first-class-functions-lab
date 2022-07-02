// first deliverable
const returnFirstTwoDrivers = function(staff){
    const firstDrivers = staff.slice(0,2);
        return firstDrivers;
}
// second deliverable
const returnLastTwoDrivers = function(staff){
    const lastDrivers = staff.slice(2,4);
        return lastDrivers;
}
// third deliverable
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

// fourth deliverable
function createFareMultiplier(fare) {
    const multiplier = function (){
        return fare * fare;
    }
        return multiplier;
}

// fifth deliverable
function fareDoubler(fare){
    const doubler = fare * 2;
        return doubler;
}

// sixth deliverable
function fareTripler(fare){
    const tripler = fare * 3;
        return tripler;
}
// seventh deliverable
function selectDifferentDrivers(drivers,returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);
}

// complete 