const findTheOldest = function(people) {
    people.sort(function(a,b) { 
        aAge = a.yearOfDeath - a.yearOfBirth
        bAge = b.yearOfDeath - b.yearOfBirth
        if (aAge < bAge) {
            return 1;
        } else {
            return -1;
        }
    });
    console.lod(Date().getFullYear());
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
