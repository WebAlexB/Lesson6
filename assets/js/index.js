//     Знайти суму та кількість позитивних елементів.
//     Знайти максимальний елемент масиву та його порядковий номер.
//     Визначити кількість негативних елементів.
//     Знайти кількість непарних позитивних елементів.
//     Визначити кількість парних позитивних елементів.
//     Знайти суму парних позитивних елементів.
//     Знайти суму непарних позитивних елементів.
//     Знайти добуток позитивних елементів.

const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
if (Array.isArray(numbers)) {
    let sumTotalPositive = 0;
    let sumTotalMultiplyingPositive = 1;
    let sumPairTotalPositive = 0;
    let sumNotPairTotalPositive = 0;
    let positiveCount = 0;
    let negativeCount = 0;
    let pairValuePositiveCount = 0;
    let pairNotValuePositiveCount = 0;
    let maximumNumber = numbers[0];
    let index = 0;

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        if (number > 0) {
            sumTotalPositive += number;
            sumTotalMultiplyingPositive *= number;

            if (number > maximumNumber) {
                maximumNumber = number;
                index = i;
            } else if (number % 2 === 0) {
                sumPairTotalPositive += number;
                pairValuePositiveCount++;
            } else if (number % 2 !== 0) {
                sumNotPairTotalPositive += number;
                pairNotValuePositiveCount++;
            }

            positiveCount++;

        } else {
            negativeCount++;
        }
    }
    alert(
        'Сума позитивних елементів:' + sumTotalPositive +
        '\n' +
        'Кількість позитивних елементів:' + positiveCount +
        '\n' +
        'Mаксимальний елемент масиву' + maximumNumber +
        '\n' +
        'Порядковий номер максимального елемента:' + index +
        '\n' +
        'Кількість негативних елементів' + negativeCount +
        '\n' +
        'Кількість не парних позитивних елементів:' + pairNotValuePositiveCount +
        '\n' +
        'Кількість парних позитивних елементів:' + pairValuePositiveCount +
        '\n' +
        'Сума парних позитивних елементів:' + sumPairTotalPositive +
        '\n' +
        'Сума не парних позитивних елементів:' + sumNotPairTotalPositive +
        '\n' +
        'Добуток позитивних елементів:' + sumTotalMultiplyingPositive
    )
} else {
    alert('Not an array');
}

