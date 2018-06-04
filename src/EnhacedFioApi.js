// @flow
import { DateTime } from 'luxon';
import FioApi from './FioApi';
import Info from './Info';
import Transaction from './Transaction';

type TransactionsResponse = { info: Info, transactions: Array<Transaction> };

// $FlowFixMe
export default class EnhacedFioApi extends FioApi {
    // eslint-disable-next-line no-useless-constructor
    constructor(key: string) {
        super(key);
    }

    processTransactionResponse(data: Object): TransactionsResponse {
        const { accountStatement } = data;
        return {
            info: new Info(accountStatement.info),
            transactions: accountStatement.transactionList.transaction.map((transaction) => {
                return new Transaction(transaction);
            }),
        };
    }

    async getTransactions(start: DateTime, end: DateTime): Promise<TransactionsResponse> {
        const { data } = await FioApi.prototype.getTransactions.call(this, start, end);
        return this.processTransactionResponse(data);
    }

    async getLastTransactions(): Promise<TransactionsResponse> {
        const { data } = await FioApi.prototype.getLastTransactions.call(this);
        return this.processTransactionResponse(data);
    }

    async getTransactionOverview(year: number, overviewNumber: number): Promise<TransactionsResponse> {
        const { data } = await FioApi.prototype.getTransactionOverview.call(this, year, overviewNumber);
        return this.processTransactionResponse(data);
    }
}
