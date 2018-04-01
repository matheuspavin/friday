'use strict';
const expect = require('chai').expect;
const addressService = require('../services/addressService');


before(async function () {
});

describe('Simple Cases',  function () {
    
    it('Winterallee 3', async function () {
        const address = 'Winterallee 3';
        const addressResponse = await addressService.setAddress(address);
        expect(addressResponse[0]).to.be.equal('Winterallee');
        expect(addressResponse[1]).to.be.equal('3');
        expect(addressResponse[0] + ', ' + addressResponse[1]).to.be.equal('Winterallee, 3');
    });
    it('Musterstrasse 45', async function () {
        const address = 'Musterstrasse 45';
        const addressResponse = await addressService.setAddress(address);
        expect(addressResponse[0]).to.be.equal('Musterstrasse');
        expect(addressResponse[1]).to.be.equal('45');
        expect(addressResponse[0] + ", " + addressResponse[1]).to.be.equal('Musterstrasse, 45');
    });
    it('Blaufeldweg 123B', async function () {
        const address = 'Blaufeldweg 123B';
        const addressResponse = await addressService.setAddress(address);
        expect(addressResponse[0]).to.be.equal('Blaufeldweg');
        expect(addressResponse[1]).to.be.equal('123B');
        expect(addressResponse[0] + ", " + addressResponse[1]).to.be.equal('Blaufeldweg, 123B');
    });
});

describe('Complicated Cases',  function () {
    
    it('Am Bächle 23', async function () {
        const address = 'Am Bächle 23';
        const addressResponse = await addressService.setAddress(address);
        expect(addressResponse[0]).to.be.equal('Am Bächle');
        expect(addressResponse[1]).to.be.equal('23');
        expect(addressResponse[0] + ', ' + addressResponse[1]).to.be.equal('Am Bächle, 23');
    });
    it('Auf der Vogelwiese 23 b', async function () {
        const address = 'Auf der Vogelwiese 23 b';
        const addressResponse = await addressService.setAddress(address);
        expect(addressResponse[0]).to.be.equal('Auf der Vogelwiese');
        expect(addressResponse[1]).to.be.equal('23 b');
        expect(addressResponse[0] + ", " + addressResponse[1]).to.be.equal('Auf der Vogelwiese, 23 b');
    });
});

describe('Complicated Cases',  function () {
    
    it('4, rue de la revolution', async function () {
        const address = '4, rue de la revolution';
        const addressResponse = await addressService.setAddress(address);
        expect(addressResponse[0]).to.be.equal('rue de la revolution');
        expect(addressResponse[1]).to.be.equal('4');
        expect(addressResponse[0] + ', ' + addressResponse[1]).to.be.equal('rue de la revolution, 4');
    });
    it('200 Broadway Av', async function () {
        const address = '200 Broadway Av';
        const addressResponse = await addressService.setAddress(address);
        expect(addressResponse[0]).to.be.equal('Broadway Av');
        expect(addressResponse[1]).to.be.equal('200');
        expect(addressResponse[0] + ', ' + addressResponse[1]).to.be.equal('Broadway Av, 200');
    });
    it('Calle Aduana, 29', async function () {
        const address = 'Calle Aduana, 29';
        const addressResponse = await addressService.setAddress(address);
        expect(addressResponse[0]).to.be.equal('Calle Aduana');
        expect(addressResponse[1]).to.be.equal('29');
        expect(addressResponse[0] + ', ' + addressResponse[1]).to.be.equal('Calle Aduana, 29');
    });
    it('Calle 39 No 1540', async function () {
        const address = 'Calle 39 No 1540';
        const addressResponse = await addressService.setAddress(address);
        expect(addressResponse[0]).to.be.equal('Calle 39');
        expect(addressResponse[1]).to.be.equal('No 1540');
        expect(addressResponse[0] + ', ' + addressResponse[1]).to.be.equal('Calle 39, No 1540');
    });
});

after(async function () {
});