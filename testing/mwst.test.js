const { mwst, brutto } = require('./mwst.js');

test('mwst: 7% von 100 = 7', () => {
    expect(mwst(100, 0.07)).toBe(7);
});

test('mwst: 19% von 200 = 38', () => {
    expect(mwst(200, 0.19)).toBe(38);
});

test('mwst: Betrag 0 -> Steuer 0', () => {
    expect(mwst(0, 0.19)).toBe(0);
});

test('brutto: 100 netto bei 19% -> 119 Brutto', () => {
    expect(brutto(100, 0.19)).toBe(119);
});

test('brutto: 50 netto bei 7% -> 53.5 Brutto', () => {
    expect(brutto(50, 0.07)).toBe(53.5);
});