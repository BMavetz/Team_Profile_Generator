const employee = require('../lib/employee');

const newEmployee = new employee('John', '1441', 'John@gmail.com');

describe('Employee info', () =>{
    it('Gets employee contructor for employee name, ID, and email', () =>{
        expect(newEmployee.name).toBe('John');
        expect(newEmployee.emplID).toBe('1441');
        expect(newEmployee.email).toBe('John@gmail.com');

    })
})