const {
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat
} = require('../index');
const expect = require('chai').expect;

let cats;

beforeEach(function () {
  cats = ["Milo", "Otis", "Garfield"];
});

describe('cats array manipulation', function () {

  // Non-destructive tests

  it('appends a cat to the end of the cats array and returns a new array', function () {
    const newCats = appendCat('Broom');
    expect(newCats).to.have.lengthOf(4);
    expect(newCats).to.include('Broom');
    expect(cats).to.have.lengthOf(3); // Original array should remain unchanged
  });

  it('prepends a cat to the beginning of the cats array and returns a new array', function () {
    const newCats = prependCat('Arnold');
    expect(newCats).to.have.lengthOf(4);
    expect(newCats[0]).to.equal('Arnold');
    expect(cats).to.have.lengthOf(3); // Original array should remain unchanged
  });

  it('removes the last cat from the cats array and returns a new array', function () {
    const newCats = removeLastCat();
    expect(newCats).to.have.lengthOf(2);
    expect(newCats).to.not.include('Garfield');
    expect(cats).to.have.lengthOf(3); // Original array should remain unchanged
  });

  it('removes the first cat from the cats array and returns a new array', function () {
    const newCats = removeFirstCat();
    expect(newCats).to.have.lengthOf(2);
    expect(newCats).to.not.include('Milo');
    expect(cats).to.have.lengthOf(3); // Original array should remain unchanged
  });

  // Destructive tests

  it('appends a cat to the end of the cats array', function () {
    destructivelyAppendCat('Broom');
    expect(cats).to.have.lengthOf(4);
    expect(cats).to.include('Broom');
  });

  it('prepends a cat to the beginning of the cats array', function () {
    destructivelyPrependCat('Arnold');
    expect(cats).to.have.lengthOf(4);
    expect(cats[0]).to.equal('Arnold');
  });

  it('removes the last cat from the cats array', function () {
    destructivelyRemoveLastCat();
    expect(cats).to.have.lengthOf(2);
    expect(cats).to.not.include('Garfield');
  });

  it('removes the first cat from the cats array', function () {
    destructivelyRemoveFirstCat();
    expect(cats).to.have.lengthOf(2);
    expect(cats).to.not.include('Milo');
  });

});
