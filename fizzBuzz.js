for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        console.log(i);
    } else {
        const a = 'Fizz';
        const b = 'Buzz';
        const c = 'Bang';
        let str = '';
        if (i % 3 === 0) str += a;
        if (i % 5 === 0) str += b;
        if (i% 7 === 0) str += c;
        console.log(str);
    }
}