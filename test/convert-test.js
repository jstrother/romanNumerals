const should = require('chai').should();

function convert(number) {
    let roman = '';
    if (number < 10) {
        roman = convertOnesColumn(number);
    }
    if (number === 10) {
        roman = 'X';
    }
    if (number > 10 && number < 20) {
        let ones = number - 10;
        roman = 'X' + convertOnesColumn(ones)
    }
    if (number === 20) {
        roman = 'XX';
    }
    if (number > 20 && number < 30) {
        let ones = number - 20;
        roman = 'XX' + convertOnesColumn(ones)
    }
    if (number === 30) {
        roman = 'XXX';
    }
    return roman;

    function convertOnesColumn(ones) {
        let subRoman = '';
        for (let i = 1; i <= ones; i++) {
            subRoman += 'I';
        }    
        if (ones === 4) {
            subRoman = 'IV';
        }
        if (ones === 5) {
            subRoman = 'V';
        }
        if (5 < ones && ones < 9) {
            subRoman = 'V';
            for (let j = 6; j <= ones; j++) {
                subRoman += 'I';
            }
        }
        if (ones === 9) {
            subRoman = 'IX';
        }
        return subRoman;
    }
}

it('should convert 1, 2, or 3 to I, II, or III', () => {
    const count = 3;
    let roman = '';
    for (let i = 1; i <= count; i++) {
        roman += 'I';
        convert(i).should.equal(roman);
    }
});

it('should convert 4 to IV', () => {
    convert(4).should.equal('IV');
});

it('should convert 5 to V', () => {
    convert(5).should.equal('V');
});

it('should convert 6 to VI', () => {
    convert(6).should.equal('VI');
});

it('should convert 7 to VII', () => {
    convert(7).should.equal('VII');
});

it('should convert 8 to VIII', () => {
    convert(8).should.equal('VIII');
});

it('should convert 9 to IX', () => {
    convert(9).should.equal('IX');
});

it('should convert 10 to X', () => {
    convert(10).should.equal('X');
});

it('should convert 11 to XI', () => {
    convert(11).should.equal('XI');
});

it('should convert 12 to XII', () => {
    convert(12).should.equal('XII');
});

it('should convert 13 to XIII', () => {
    convert(13).should.equal('XIII');
});

it('should convert 14 to XIV', () => {
    convert(14).should.equal('XIV');
});

it('should convert 15 to XV', () => {
    convert(15).should.equal('XV');
});

it('should convert 16 to XVI', () => {
    convert(16).should.equal('XVI');
});

it('should convert 17 to XVII', () => {
    convert(17).should.equal('XVII');
});

it('should convert 18 to XVIII', () => {
    convert(18).should.equal('XVIII');
});

it('should convert 19 to XIX', () => {
    convert(19).should.equal('XIX');
});

it('should convert 20 to XX', () => {
    convert(20).should.equal('XX');
});

it('should convert 21 to XXI', () => {
    convert(21).should.equal('XXI');
});

it('should convert 22 to XXII', () => {
    convert(22).should.equal('XXII');
});

it('should convert 23 to XXIII', () => {
    convert(23).should.equal('XXIII');
});

it('should convert 24 to XXIV', () => {
    convert(24).should.equal('XXIV');
});

it('should convert 25 to XXV', () => {
    convert(25).should.equal('XXV');
});

it('should convert 26 to XXVI', () => {
    convert(26).should.equal('XXVI');
});

it('should convert 27 to XXVII', () => {
    convert(27).should.equal('XXVII');
});

it('should convert 28 to XXVIII', () => {
    convert(28).should.equal('XXVIII');
});

it('should convert 29 to XXIX', () => {
    convert(29).should.equal('XXIX');
});

it('should convert 30 to XXX', () => {
    convert(30).should.equal('XXX');
});