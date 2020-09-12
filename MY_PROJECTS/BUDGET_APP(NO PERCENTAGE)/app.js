// PROJECT IS DIVIDED INTO 3 SECTION AS PER DISTRIBUTION PLAN

// UI CONTROLER, BUDGET APP CONTROLER, CONTROLER
//IIFI IS USED FOR DATA PRIVACY
console.log()

//BUDGET CONTROLER
let id = 0;
let addInc = 0;
let addExp = 0;
let BudgetControler = (() => {
    class Expence {
        constructor(id, des, value) {
            this.id = id;
            this.des = des;
            this.value = value;
            this.percentage = -1;
        }
    }

    class Income {
        constructor(id, des, value) {
            this.id = id;
            this.des = des;
            this.value = value;
            this.percentage = -1;
        }
    }
    let data = {
        allItem: { exp: [], inc: [] },
        total: { exp: 0, inc: 0 },
        budget: 0,
        percentage: -1,
    };

    return {
        //Calc id and data
        getId: function (el, type, des, value) {
            if (el === "del") {
                values = data.allItem[type].map(
                    (
                        current //using arrow function
                    ) =>
                        //map use to return the array
                        current.value
                );
                var ad = 0;
                //Using for ES6 of loop where i is looping through the value of values
                for (let i of values) {
                    ad = ad + i;
                    //console.log(`this is i value = ${i}, of the values = ${values}`) //For testing
                }
                //ES5 way of doing
                //     for (let i = 0; i < values.length; i++) {
                //         ad = ad + values[i];
                //     }
                data.total[type] = ad;
            } else {
                var newItem, add;
                id = id + 1;
                if (type == "inc") {
                    //ASSIGN VALUE TO INCOME
                    newItem = new Income(id, des, value);
                    add = addInc + value;
                } else if (type == "exp") {
                    //ASSIGN VALUE TO EXPENCE
                    newItem = new Expence(id, des, value);
                    add = addExp + value;
                }
                //ASSIGN VALUE TO DATA STRUCTURE
                data.allItem[type].push(newItem);
                data.total[type] += add;

                return newItem;
            }
        },

        //Calculate the percentage
        calcPersentage: function (total, type, totalExp, totalInc) {
            var totalBudgetExpPerc, expPerc, pers, exp;
            pers = (totalExp / totalInc) * 100;
            if (total === exp && type === "exp") {
                totalBudgetExpPerc = 100;
            } else if (type === "exp" && total === exp) {
                totalBudgetExpPerc = 50;
                expPerc = total / exp / 100;
            } else if (type === "exp") {
                totalBudgetExpPerc = totalExp / total / 100;
                expPerc = total / exp / 100;
            }
            //console.log(pers); FOR TESTING PURPOSE

            return { totalBudgetExpPerc, expPerc, pers };
        },

        //1)Calculate the total budget
        calcTotalBudget: function (addExp, addInc) {
            let total;
            total = addInc - addExp;
            data.budget = total;
        },

        //GETING ID FOR DELETED ITEM
        delItem: (type, id) => {
            ids = data.allItem[type].map(function (current) {
                //map use to return the array
                return current.id;
            });

            index = ids.indexOf(id); //use to find position of item in array

            if (index !== -1) {
                data.allItem[type].splice(index, 1); //use to remove item from array && slice is use to copy piece of array into someplace else
            }
        },

        // USE TO GET DETAILS OF ITEM DELETED
        delType: () => {
            var itemID, itype, splitID, id;
            //  per = this.pers.totalBudgetExpPerc

            itemID =
                event.target.parentNode.parentNode.parentNode.parentNode.id;

            if (itemID) {
                splitID = itemID.split("-"); //use to split any string into array with common diffrentiating mark
                [itype, id] = [splitID[0], parseInt(splitID[1])];  //Using destructuring to assign values
                return { itemID, itype, id };
            }
        },

        //RETURN THE DATA FORMAT
        getData: () => data
    };
})();

var UIControler = (() => {
    var DomUtility = {
        inpType: "add__type", //Value inc or exp
        inputDescription: ".add__description",
        inputValue: ".add__value",
        selectBtn: ".add__btn",
        budget: ".budget__value",
        budgetInc: ".budget__income--value",
        budgetExp: ".budget__expenses--value",
        budgetPercentage: ".budget__expenses--percentage",
        expContainer: ".expenses__list",
        incContainer: ".income__list",
        container: ".container",
        month: ".budget__title--month",
    };

    return {
        //GET INPUT DETAILS
        inputField: () => {
            return {
                type: document.querySelector(".add__type").value, // Will be either inc or exp
                description: document.querySelector(DomUtility.inputDescription)
                    .value,
                value: parseFloat(
                    document.querySelector(DomUtility.inputValue).value
                ),
            };
        },
        //CHANGE IN HTML|| DISPLAY INC, EXP
        dataStructure: (item, input, per) => {
            var Html;
            if (input === "inc") {
                var element = document.querySelector(DomUtility.incContainer);

                Html = `<div class="item clearfix" id="inc-${item.id}"><div class="item__description">${item.des}</div><div class="right clearfix"><div class="item__value">+ ${item.value}</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
            } else if (input === "exp") {
                var element = document.querySelector(DomUtility.expContainer);

                Html = `<div class="item clearfix" id="exp-${item.id}"><div class="item__description">${item.des}</div><div class="right clearfix"><div class="item__value">- ${item.value}</div><div class="item__percentage">${per}%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>
`;
            }
            element.insertAdjacentHTML("beforeend", Html);
        },
        //INITIALIZE the site
        clearFields: function () {
            // Using Map DataStructure instead of direct code
            if (isNaN(this.inputField.value)) {
                let a = new Map();
                a.set(1, DomUtility.budget);
                a.set(2, DomUtility.budgetInc);
                a.set(3, DomUtility.budgetExp);
                a.set(4, DomUtility.budgetPercentage);

                a.forEach(
                    (value) => (document.querySelector(value).textContent = 0)
                );

                // document.querySelector(DomUtility.budget).textContent = 0;
                // document.querySelector(DomUtility.budgetInc).textContent = 0;
                // document.querySelector(DomUtility.budgetExp).textContent = 0;

                // //Percentage display
                // document.querySelector(
                //     DomUtility.budgetPercentage
                // ).textContent = "--";
            }
        },

        // Display month
        displayMonth: () => {
            var now, month;

            now = new Date();
            month = now.getMonth();

            months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];

            year = now.getFullYear();

            document.querySelector(DomUtility.month).innerHTML =
                months[month] + " " + year;
        },

        //CHANGE THE TOTAL BUDGET UI
        displayTotalBudget: function (
            ...val //(budget, budgetInc, budgetExp, pers  Using Rest Parameter
        ) {
            document.querySelector(DomUtility.budget).textContent = val[0];
            document.querySelector(DomUtility.budgetInc).textContent = val[1];
            document.querySelector(DomUtility.budgetExp).textContent = val[2];

            //Percentage display
            document.querySelector(DomUtility.budgetPercentage).textContent =
                val[3];
        },
        //REMOVE DELETED ITEM FROM UI
        removeItem: function (selectorID) {
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        // Lern later
        arrowKey: function (type) {
            // type[right, left]
            if (type === "right") {
               //console.log("right press");
            } else if (type === "left") {
                //console.log("left press");
            }
        },

        getDomUtility: () => {
            return DomUtility;
        },
    };
})();

var controller = (function (budgetCltr, UICltr) {
    //1)Enable the click button || enter button || it read the input fileds
    var DOM = UICltr.getDomUtility();
    var data = budgetCltr.getData();

    var setupEventListener = () => {
        document
            .querySelector(DOM.selectBtn)
            .addEventListener("click", CltrAddItem);

        document
            .querySelector(DOM.container)
            .addEventListener("click", CltrDelItem);

        document.addEventListener("keydown", function (event) {
            if (event.keycode === 13 || event.which === 13) {
                //ENTER Key
                CltrAddItem();
            }
            if (event.keycode === 37 || event.which === 37) {
                UICltr.arrowKey("left");
            }
            if (event.keycode === 39 || event.which === 39) {
                UICltr.arrowKey("right");
            }
        });
    };

    //LINK TO UPDATE AND ADD DETAIL TO UI
    var CltrAddItem = () => {
        var input, newItem, pers, bl;
        //1)Use input field and calculate budget
        input = UICltr.inputField();

        //Use to avaoid empty entries

        if (input.description != "" && !isNaN(input.value) && input.value > 0) {
            //2)Add item structure use to manupilate the html
            newItem = budgetCltr.getId(
                bl,
                input.type,
                input.description,
                input.value
            );

            //3) Calculate the total budget
            budgetCltr.calcTotalBudget(data.total.exp, data.total.inc);

            //4)get percentage value
            pers = budgetCltr.calcPersentage(
                data.budget,
                input.type,
                data.total.exp,
                data.total.inc
            );

            //5)Update the budget UI
            UICltr.dataStructure(newItem, input.type, pers.expPerc);

            //6)Update the total budget UI
            UICltr.displayTotalBudget(
                data.budget,
                data.total.inc,
                data.total.exp,
                pers.totalBudgetExpPerc
            );
        }
    };

    var CltrDelItem = (event) => {
        var delItem = budgetCltr.delType();

        //1) Delete item from data structure
        budgetCltr.delItem(delItem.itype, delItem.id);

        //2) Delete item form UI
        UICltr.removeItem(delItem.itemID);

        //3) Update the budget
        updateDelBudget();
    };

    updateDelBudget = () => {
        var delItem = budgetCltr.delType();

        var el = "del";
        input = UICltr.inputField();
        //get TOTAL after del value
        newItem = budgetCltr.getId(el, delItem.itype);

        budgetCltr.calcTotalBudget(data.total.exp, data.total.inc);

        UICltr.displayTotalBudget(
            data.budget,
            data.total.inc,
            data.total.exp,
            el
        );
    };
    function init() {
        console.log("Application has started");
        UICltr.displayMonth();
        UICltr.clearFields();
        setupEventListener();
    }
    init();
})(BudgetControler, UIControler);
//testing USE ONLY
Testing = () => console.log(BudgetControler.getData());
