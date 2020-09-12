// CODING CHALLENGE
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Eements {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class parks extends Eements {
    constructor(name, buildYear, totalTrees, Area, Age = 50) {
        super(name, buildYear);
        this.totalTrees = totalTrees;
        this.Area = Area;
        this.Age = Age;
    }

    treeDensity() {
        let density = this.totalTrees / this.Area;
        console.log(
            `Tree dencity of park ${
                this.name
            } in the town is avg : ${Math.round(density)} sq km`
        );
    }
}

class Streets extends Eements {
    constructor(name, buildYear, length, size) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
}

const allParks = [
    new parks("Orantal", 2019, 1000, 60),
    new parks("Carbon", 2018, 2000, 55, 70),
    new parks("Rational", 2017, 500, 50, 65),
];

const allStreets = [
    new Streets("Gandhi", 2019, 1000, 60),
    new Streets("Way 51", 2018, 2000, 55),
    new Streets("New Street", 2017, 500, 50),
    new Streets("Old Street", 2017, 300, 95),
];

let streetSize = new Map();
streetSize.set(10, "tiny");
streetSize.set(20, "small");
streetSize.set(30, "normal");
streetSize.set(40, "big");
streetSize.set(50, "huge");
streetSize.set("default", "normal");

function parkReport(el) {
    console.log(`-----This is park report-----`);

    //Tree density of each park
    el.forEach((el) => {
        el.treeDensity();
    });

    let a = 0;
    //Calc the avg age of the park
    const t = el.map((el) => (a += el.Age));
    let total = parseInt(t.splice(2, 1)); // splice will del and give the last number
    console.log(
        `Average age of each town's park is ${Math.round(total / 3)} Years.`
    );
    el.forEach((el) => {
        if (el.totalTrees > 1000) {
            console.log(`park that have more than 1000 trees is : ${el.name}`);
        }
    });
}

function streetReport(el) {
    console.log(`-----This is Street report-----`);
    let a = 0;
    //Street length and total average length of each street and Size classification of all the streets

    el.forEach((el) => {
        a += el.length;
        el.size >= 90 //terniary operator
            ? console.log(
                  //True part
                  `The total length of ${el.name} Street is ${
                      el.length
                  } and size is ${streetSize.get(50)} `
              ) //else part
            : console.log(
                  `The total length of ${el.name} Street is ${
                      el.length
                  } and size is ${streetSize.get("default")} `
              );

        //// other Meathod
        // if (el.size > 90) {
        //     console.log(
        //         `The total length of ${el.name} Street is ${
        //             el.length
        //         } and size is ${streetSize.get(50)} `
        //     );
        // } else {
        //     console.log(
        //         `The total length of ${el.name} Street is ${
        //             el.length
        //         } and size is ${streetSize.get("default")} `
        //     );
        // }
    });
    console.log(`The total length of all Street is ${a}`);

}

parkReport(allParks);
streetReport(allStreets);
