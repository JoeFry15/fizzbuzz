for (let i = 1; i <= 105; i++) {

        let str = '';
        if (i % 3 === 0) str += 'Fizz';
        if (i % 5 === 0) str += 'Buzz';
        if (i % 7 === 0) str += 'Bang';
        if (i % 11 === 0) str += 'Snap';

        console.log( str ? str : i);
}