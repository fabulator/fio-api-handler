import { FioApi } from './../src';

describe('FioApi testing', () => {
    it('create api object', () => {
        const fioApi = new FioApi('api-key');

        expect(fioApi.apiKey).toEqual('api-key');
    });
});
