import { ApiResponseType } from 'rest-api-handler';

export default class FioApiException extends Error {
    /**
     * Response from server that throwed an error.
     */
    protected response: ApiResponseType<Object | string>;

    /**
     * Constructor.
     *
     * @param response - Processed response from server.
     */
    public constructor(response: ApiResponseType<Object | string>) {
        super(`Fio exception: ${JSON.stringify(response.data)}`);
        this.response = response;
    }

    public getResponse() {
        return this.response;
    }

    public getRequest() {
        return this.response.request;
    }
}
