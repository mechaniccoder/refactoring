function printOwing(invoice) {

    printBanner()

    let outstanding = calculateOutstanding(invoice);

    recordDueDate(invoice)
    printDetail(invoice, outstanding)

    function printBanner() {
        console.log("**");
        console.log("**고객채무**");
        console.log("**");
    }

    function printDetail(invoice, outstanding) {
        console.log(`고객명: ${invoice.customer}`);
        console.log(`채무액 ${outstanding}`)
    }

    function recordDueDate(invoice) {
        const today = Clock.today;
        invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    }

    function calculateOutstanding(invoice) {
        let result = 0;
        for (const o of invoice.orders) {
            result += o.amount;
        }
        return result
    }
}

module.exports = {};