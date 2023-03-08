import { expect } from 'chai';

describe('USER CRUD Operation', () => { 
    it('checking get operation', async function() {
        const res = await get('http://localhost:3005/v1/get-user');
        res.forEach(element => {
            expect(element).to.have.own.property('phone');
            expect(element).to.have.own.property('email');
            expect(element).to.have.own.property('name');
        });
      });    
});