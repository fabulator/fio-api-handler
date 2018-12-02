import { DateTime } from 'luxon';
import { DefaultResponseProcessor, Api, ApiResponseType } from 'rest-api-handler';
import FioApiException from './FioApiException';

export default class FioApi extends Api<ApiResponseType<any>> {
    public apiKey: string;

    public format: string;

    protected dateFormat = 'yyyy-MM-dd';

    public constructor(apiKey: string, format = 'json') {
        super('https://www.fio.cz/ib_api/rest', [
            new DefaultResponseProcessor(FioApiException),
        ]);
        this.apiKey = apiKey;
        this.format = format;
    }

    public getTransactionOverview(year: number, overviewNumber: number): Promise<any> {
        return this.get(this.getTransactionsApiUrl('by-id', `${year}/${overviewNumber}`));
    }

    public getTransactions(start: DateTime, end: DateTime): Promise<any> {
        return this.get(this.getTransactionsApiUrl('periods', `${start.toFormat(this.dateFormat)}/${end.toFormat(this.dateFormat)}`));
    }

    public getLastTransactions(): Promise<any> {
        return this.get(this.getTransactionsApiUrl('last'));
    }

    public setLastTransactionById(id: number) {
        return this.get(this.getLastTransactionSetApiUrl('id', id.toString()));
    }

    public setLastTransactionBydate(date: DateTime) {
        return this.get(this.getLastTransactionSetApiUrl('date', date.toFormat(this.dateFormat)));
    }

    public getApiUrl(action: string, namespace: string, format: string = this.format): string {
        return `${action}/${this.apiKey}/${namespace}${format ? `.${format}` : '/'}`;
    }

    public getTransactionsApiUrl(action: string, namespace?: string): string {
        return this.getApiUrl(action, `${namespace ? `/${namespace}/` : ''}transactions`);
    }

    public getLastTransactionSetApiUrl(action: string, value: string): string {
        return this.getApiUrl(`set-last-${action}`, value, undefined);
    }
}
