// @flow
import type { ApiResponseType } from 'rest-api-handler/src/responseProcessor';

export default class FioApiException extends Error {
    /**
     * Response from server that throwed an error.
     */
    response: ApiResponseType<Object | string>;

    /**
     * Request that failed.
     */
    request: Request;

    /**
     * Constructor.
     *
     * @param response - Processed response from server.
     * @param request - Fetch Request.
     */
    constructor(response: ApiResponseType<Object | string>, request: Request) {
        super(`Fio exception: ${JSON.stringify(response.data)}`);
        this.response = response;
        this.request = request;
    }
}
