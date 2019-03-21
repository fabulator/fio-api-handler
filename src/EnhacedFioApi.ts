import { DateTime } from 'luxon';
import FioApi from './FioApi';
import Info from './Info';
import Transaction from './Transaction';

interface TransactionsResponse { info: Info, transactions: Transaction[] }

export default class EnhacedFioApi extends FioApi {
    // eslint-disable-next-line no-useless-constructor
    public constructor(key: string) {
        super(key);
    }

    public processTransactionResponse(data: any): TransactionsResponse {
        const { accountStatement } = data;
        return {
            info: new Info(accountStatement.info),
            transactions: accountStatement.transactionList.transaction.map((transaction: any) => {
                return new Transaction(transaction);
            }),
        };
    }

    public async getTransactions(start: DateTime, end: DateTime): Promise<TransactionsResponse> {
        const { data } = await FioApi.prototype.getTransactions.call(this, start, end);
        return this.processTransactionResponse(data);
    }

    public async getLastTransactions(): Promise<TransactionsResponse> {
        const { data } = await FioApi.prototype.getLastTransactions.call(this);
        return this.processTransactionResponse(data);
    }

    public async getTransactionOverview(year: number, overviewNumber: number): Promise<TransactionsResponse> {
        const { data } = await FioApi.prototype.getTransactionOverview.call(this, year, overviewNumber);
        return this.processTransactionResponse(data);
    }
}
