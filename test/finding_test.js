const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Finding records', function(done){
    
    var char;
    
    beforeEach(function(done){
        char = new MarioChar({
           name: 'Mario'
        });
        
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    })
    
    // Create tests
    it('Finds one record by ID from the database', function(done){
        
        MarioChar.findOne({ _id: char._id}).then(function(result){
            assert(result._id.toString() === char._id.toString());
            done();
        });
        
        
    });
    
});