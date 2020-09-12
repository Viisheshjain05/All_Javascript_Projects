// Coding Challange 3

var john = 0;

function calculateTip(bill) {
    if (bill < 50) {
        return bill * 0.2;
    } else if (bill >= 50 && bill < 200) {
        return bill * 0.15;
    } else if (bill >= 200) {
        return bill * 0.1;
    }
}

function totalBill(bill) {
    return calculateTip(bill) + bill;
}

var johnRes1 = { totalBill1: totalBill(124), Tip: calculateTip(124) };
var johnRes2 = { totalBill2: totalBill(48), Tip: calculateTip(48) };
var johnRes3 = { totalBill3: totalBill(268), Tip: calculateTip(268) };

johnTotal = [johnRes1, johnRes2, johnRes3];

console.log(johnTotal);
