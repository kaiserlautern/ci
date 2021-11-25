const calc = require('./calc.js'); 

it('teste soma',()=>{
    expect(calc.soma(1,2)).toBe(3);
})

test('teste sub',()=>{
    expect(calc.sub(1,2)).toBe(-1);
})


afterEach(()=> console.log("after each executado"))