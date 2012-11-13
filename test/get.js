describe('.get(obj, path)', function () {
  it('should get the value for simple nested object', function () {
    var obj = { hello: { universe: 'world' }}
      , val = properties.get(obj, 'hello.universe');
    val.should.equal('world');
  });

  it('should get the value for simple array', function () {
    var obj = { hello: [ 'zero', 'one' ] }
      , val = properties.get(obj, 'hello[1]');
    val.should.equal('one');
  });

  it('should get the value of nested array', function () {
    var obj = { hello: [ 'zero', [ 'a', 'b' ] ] }
      , val = properties.get(obj, 'hello[1][0]');
    val.should.equal('a');
  });

  it('should get the value of array only', function () {
    var obj = [ 'zero', 'one' ]
      , val = properties.get(obj, '[1]');
    val.should.equal('one');
  });

  it('should get the value of array only nested', function () {
    var obj = [ 'zero', [ 'a', 'b' ] ]
      , val = properties.get(obj, '[1][1]');
    val.should.equal('b');
  });
});
