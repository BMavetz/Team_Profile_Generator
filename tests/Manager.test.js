const manager = require('../lib/manager');

const newManager = new manager('John', '1441', 'John@gmail.com', '10A');

describe('Manager info', () =>{
    it('Gets Manager contructor for manager name, ID, email, and office number.', () =>{
        expect(newManager.name).toBe('John');
        expect(newManager.emplID).toBe('1441');
        expect(newManager.email).toBe('John@gmail.com');
        expect(newManager.officeNum).toBe('10A');

    })
})