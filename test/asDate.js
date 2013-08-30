var should = require('should')
  , i64    = require('../i64.js')
  , a64    = i64.new()
;



describe('asDate()', function() {
    describe('select date', function() {
        var result;
        it('returns "38tkcf00"', function() {
            var date = new Date(2013, 08, 29, 20, 12, 15, 0);
            result = a64.asDate(date);
            should.exist(result);
            result = a64.valueOf();
            result.should.equal('38tkcf00');
        });

        it('returns "2013-09-30T02:12:15.000Z"', function() {
            result = a64.asDate();
            should.exist(result);
            result = result.toISOString();
            result.should.equal('2013-09-30T02:12:15.000Z');
        });
    });
});
