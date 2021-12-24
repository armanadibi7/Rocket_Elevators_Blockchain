const sum = require('./public/config/config');


test('Check if the contract address is correct', () => {
 expect(sum).toEqual(
    expect.objectContaining({
      CONTRACT_ADDRESS: '0x497659c8e7A434330e855E2d46bc66C6769eD924'
    })
  );
});

test('Check if max_supply is correct amount', () => {
 expect(sum).toEqual(
    expect.objectContaining({
      MAX_SUPPLY: 1000
    })
  );
});

test('Check if wei cost is correct', () => {
 expect(sum).toEqual(
    expect.objectContaining({
      WEI_COST: 10000000000000000
    })
  );
});