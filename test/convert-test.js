const should = require('chai').should();

function convert(number) {
    let roman = '';
    for (let i = 1; i <= number; i++) {
        roman += 'I';
    }    
    if (number === 4) {
        return 'IV';
    }
    if (number === 5) {
        return 'V';
    }
    if (5 < number && number < 9) {
        roman = 'V';
        for (let j = 6; j <= number; j++) {
            roman += 'I';
        }
    }
    if (number === 9) {
        return 'IX';
    }
    return roman;
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
