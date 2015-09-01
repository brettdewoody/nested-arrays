var expect = chai.expect;
var should = chai.should();

describe('unNestArrayByString()', function() {
  it ('should return an empty array if no arguments are passed', function() {
    expect(unNestArrayByString()).to.eql([]);
  });

  it ('should return an empty array if passed an empty array', function() {
    expect(unNestArrayByString([])).to.eql([]);
  });

  it('should return the orginal array if there are no nested items', function() {
    expect(unNestArrayByString([1,2,3,4])).to.eql([1,2,3,4]);
  });

  it ('should return an unnested array', function(){
    expect(unNestArrayByString([1,2,3,[4,5],6])).to.eql([1,2,3,4,5,6]);
  });

  it ('should return an unnested array', function(){
    expect(unNestArrayByString([[1,2,[3]],4])).to.eql([1,2,3,4]);
  });

  it ('should return an unnested array', function(){
    expect(unNestArrayByString([1,2,3,[4,[5,6]],7])).to.eql([1,2,3,4,5,6,7]);
  });

  it ('should return an unnested array', function(){
    expect(unNestArrayByString([[[1,2]]])).to.eql([1,2]);
  });
  it ('should return an unnested array', function(){
    expect(unNestArrayByString([[1,2],[3,4]])).to.eql([1,2,3,4]);
  });
});

describe('unNestArray()', function() {
  it ('should return an empty array if no arguments are passed', function() {
    expect(unNestArray()).to.eql([]);
  });

  it ('should return an empty array if passed an empty array', function() {
    expect(unNestArray([])).to.eql([]);
  });

  it('should return the orginal array if there are no nested items', function() {
    expect(unNestArray([1,2,3,4])).to.eql([1,2,3,4]);
  });

  it ('should return an unnested array', function(){
    expect(unNestArray([1,2,3,[4,5],6])).to.eql([1,2,3,4,5,6]);
  });

  it ('should return an unnested array', function(){
    expect(unNestArray([[1,2,[3]],4])).to.eql([1,2,3,4]);
  });

  it ('should return an unnested array', function(){
    expect(unNestArray([1,2,3,[4,[5,6]],7])).to.eql([1,2,3,4,5,6,7]);
  });

  it ('should return an unnested array', function(){
    expect(unNestArray([[[1,2]]])).to.eql([1,2]);
  });
  it ('should return an unnested array', function(){
    expect(unNestArray([[1,2],[3,4]])).to.eql([1,2,3,4]);
  });
});
