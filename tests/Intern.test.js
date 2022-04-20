const intern = require('../lib/intern');

const newIntern = new intern('Peter', '101int', 'Peter@gmail.com', 'UCLA');

describe('Intern info', () =>{
    it('Gets intern contructor for intern name, ID, email, and school', () =>{
        expect(newIntern.name).toBe('Peter');
        expect(newIntern.emplID).toBe('101int');
        expect(newIntern.email).toBe('Peter@gmail.com');
        expect(newIntern.school).toBe('UCLA');

    })
})