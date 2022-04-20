const engineer = require('../lib/engineer');

const newEngineer = new engineer('Sam', '4516', 'Sam@gmail.com', 'SamEngr');

describe('Engineer info', () =>{
    it('Gets engineer contructor for engineer name, ID, email, and github profile', () =>{
        expect(newEngineer.name).toBe('Sam');
        expect(newEngineer.emplID).toBe('4516');
        expect(newEngineer.email).toBe('Sam@gmail.com');
        expect(newEngineer.github).toBe('SamEngr');

    })
})