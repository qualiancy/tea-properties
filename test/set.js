describe('.set(obj, path, value)', function () {
  it('should allow value to be set in simple object', function () {
    var obj = {};
    properties.set(obj, 'hello', 'universe');
    obj.should.deep.equal({ hello: 'universe' });
  });

  it('should allow nested object value to be set', function () {
    var obj = {};
    properties.set(obj, 'hello.universe', 'properties');
    obj.should.deep.equal({ hello: { universe: 'properties' }});
  });

  it('should allow nested array value to be set', function () {
    var obj = {};
    properties.set(obj, 'hello.universe[1].properties', 'galaxy');
    obj.should.deep.equal({ hello: { universe: [ , { properties: 'galaxy' } ] }});
  });

  it('should allow value to be REset in simple object', function () {
    var obj = { hello: 'world' };
    properties.set(obj, 'hello', 'universe');
    obj.should.deep.equal({ hello: 'universe' });
  });

  it('should allow value to be set in complex object', function () {
    var obj = { hello: { }};
    properties.set(obj, 'hello.universe', 42);
    obj.should.deep.equal({ hello: { universe: 42 }});
  });

  it('should allow value to be REset in complex object', function () {
    var obj = { hello: { universe: 100 }};
    properties.set(obj, 'hello.universe', 42);
    obj.should.deep.equal({ hello: { universe: 42 }});
  });

  it('should allow for value to be set in array', function () {
    var obj = { hello: [] };
    properties.set(obj, 'hello[0]', 1);
    obj.should.deep.equal({ hello: [1] });
    properties.set(obj, 'hello[2]', 3);
    obj.should.deep.equal({ hello: [1 , , 3] });
  });

  it('should allow for value to be REset in array', function () {
    var obj = { hello: [ 1, 2, 4 ] };
    properties.set(obj, 'hello[2]', 3);
    obj.should.deep.equal({ hello: [ 1, 2, 3 ] });
  });
});
