var john = 0;
var no = 0; //Used in cal avgTip 
function calTip(amt) {
    if (amt < 50) {
        return amt * 0.2;
    } else if (amt >= 50 && amt <= 200) {
        return amt * 0.15;
    } else if (amt > 200) {
        return amt * 0.1;
    }
}

john = {
    firstName: "john",
    billValues: ["124", "48", "268", "180", "42"],
    calbill: function() {
        this.tipAmt = [];
        this.finalAmt = [];
        this.tipAvg  ;
        for (var i = 0; i < this.billValues.length; i++) {
            amt = this.billValues[i];
            var tip = calTip(amt);
            this.tipAmt[i] = parseInt(tip);
            this.finalAmt[i] = parseInt(tip) + parseInt(amt);
            no += this.tipAmt[i];    
            this.tipAvg = no / this.billValues.length ;
        }
    }
};
john.calbill();
console.log(john);

mark = {
    firstName: "mark",
    billValues: ["77", "375", "110", "45"],
    calTip: function() {
        this.tipAmt = [];
        this.finalAmt = [];
        this.tipAvg ;
        for (var i = 0; i < this.billValues.length; i++) {
            amt = this.billValues[i];
            var tip;
            if (amt < 100) {
                tip = amt * 0.2;
            } else if (amt >= 100 && amt <= 300) {
                tip = amt * 0.1;
            } else {
                tip = amt * 0.25;
            }
            this.tipAmt[i] = tip;
            this.finalAmt[i] = parseInt(tip) + parseInt(amt);
        //avgTip
            no += this.tipAmt[i];
            this.tipAvg = no /this.billValues.length ;
        }

    }
};
mark.calTip();
console.log(mark);

if (john.tipAvg > mark.tipAvg) {
    console.log('yeah john\'s family paid the highest tip. ' , john.tipAvg);
} else {
    console.log('yeah mark\'s family paid the highest tip. ' , mark.tipAvg);
}