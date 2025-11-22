export const calculateTax = (category, total) => {
    return (category == "groceries") ? ((.03 * total)) : ((.0475 * total));
};
console.log(calculateTax("groceries", 100));
console.log(calculateTax("Beauty", 100));
//# sourceMappingURL=taxCalculator.js.map