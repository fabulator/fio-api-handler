// @flow
import { DateTime } from 'luxon';
import DefaultResponseProcessor from 'rest-api-handler/src/DefaultResponseProcessor';
import Api from 'rest-api-handler/src/Api';
import type { ApiResponseType } from 'rest-api-handler/src';
import FioApiException from './FioApiException';

export default class FioApi extends Api<ApiResponseType<*>> {
    apiKey: string;
    format: string;
    dateFormat = 'yyyy-MM-dd';
    getTransactionOverview: (year: number, overviewNumber: number) => *;
    getTransactions: (start: DateTime, end: DateTime) => *;
    getLastTransactions: () => *;

    constructor(apiKey: string, format: string = 'json') {
        super('https://www.fio.cz/ib_api/rest', [
            new DefaultResponseProcessor(FioApiException),
        ]);
        this.apiKey = apiKey;
        this.format = format;
    }

    getTransactionOverview(year: number, overviewNumber: number) {
        return this.get(this.getTransactionsApiUrl('by-id', `${year}/${overviewNumber}`));
    }

    getTransactions(start: DateTime, end: DateTime) {
        return this.get(this.getTransactionsApiUrl('periods', `${start.toFormat(this.dateFormat)}/${end.toFormat(this.dateFormat)}`));
    }

    getLastTransactions() {
        return this.get(this.getTransactionsApiUrl('last'));
    }

    setLastTransactionById(id: number) {
        return this.get(this.getLastTransactionSetApiUrl('id', id.toString()));
    }

    setLastTransactionBydate(date: DateTime) {
        return this.get(this.getLastTransactionSetApiUrl('date', date.toFormat(this.dateFormat)));
    }

    getApiUrl(action: string, namespace: string, format: ?string = this.format) {
        return `${action}/${this.apiKey}/${namespace}${format ? `.${format}` : '/'}`;
    }

    getTransactionsApiUrl(action: string, namespace: ?string) {
        return this.getApiUrl(action, `${namespace ? `/${namespace}/` : ''}transactions`);
    }

    getLastTransactionSetApiUrl(action: string, value: string) {
        return this.getApiUrl(`set-last-${action}`, value, null);
    }
}
