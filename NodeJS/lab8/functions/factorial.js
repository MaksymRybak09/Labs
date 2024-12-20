module.exports = (num) => {
    if (num < 0) {
        return null;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}