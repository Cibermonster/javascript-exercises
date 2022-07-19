const findTheOldest = function(people) {
    people.sort((a,b) => { 
        b.yearOfDeath ??= new Date().getFullYear()
        let aAge = a.yearOfDeath - a.yearOfBirth
        let bAge = b.yearOfDeath - b.yearOfBirth
        return aAge < bAge ? 1 : -1
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
