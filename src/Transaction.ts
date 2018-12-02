import { DateTime } from 'luxon';
import { PLATBA_KARTOU, TransactionType } from './transaction-types';

type Data = {
    issueDate: DateTime,
    createdDate: DateTime,
    type: TransactionType,
    comment: string | null,
    transactionId: number,
    approvalId: number,
    amount: number,
    currency: string,
    originalAmount: number,
    originalCurrency: string,
    vs: number | null,
    ks: number | null,
    ss: number | null,
    info: string | null,
    message: string | null,
    author: string | null,
    sendToAccountNumber: string | null,
    sendToAccountName: string | null,
    sendToBankCode: string | null,
    sendToBank: string | null,
};

export default class Transaction {
    protected data: Data;

    protected source: Object;

    // eslint-disable-next-line complexity,sonarjs/cognitive-complexity
    public constructor(source: {[key: string]: { value: any }}) {
        this.source = source;
        const comment = source.column25 ? source.column25.value : null;
        const type = source.column8.value;
        const issueDate = DateTime.fromFormat(source.column0.value, 'yyyy-MM-ddZZZ');
        const createdDate = type === PLATBA_KARTOU && comment
            ? DateTime.fromFormat(comment.split(/dne (\d*\.\d*\.\d{4})/g)[1], 'd.M.yyyy')
            : issueDate;
        const amount = source.column1.value;
        const currency = source.column14.value;
        const message = source.column16 ? source.column16.value : null;

        this.data = {
            issueDate,
            createdDate,
            type,
            comment,
            transactionId: source.column22.value,
            approvalId: source.column17.value,
            amount,
            originalAmount: amount,
            currency,
            originalCurrency: currency,
            message,
            vs: source.column5 ? source.column5.value : null,
            ks: source.column4 ? source.column4.value : null,
            ss: source.column6 ? source.column6.value : null,
            info: source.column7 ? source.column7.value : null,
            author: source.column9 ? source.column9.value : null,
            sendToAccountNumber: source.column2 ? source.column2.value : null,
            sendToAccountName: source.column10 ? source.column10.value : null,
            sendToBankCode: source.column3 ? source.column3.value : null,
            sendToBank: source.column12 ? source.column12.value : null,
        };

        if (type === PLATBA_KARTOU && message) {
            const [
                // eslint-disable-next-line no-unused-vars
                text,
                originalAmount,
                originalCurrency,
            ] = message.match(/částka {2}(\d*\.\d{2}) (([a-zA-Z]|\u010D){2,3})/);

            this.data.originalAmount = Number(originalAmount) * (amount / Math.abs(amount));
            this.data.originalCurrency = originalCurrency === 'Kč' ? 'CZK' : originalCurrency;
        }
    }

    public getIssueDate(): DateTime {
        return this.data.issueDate;
    }

    public getCreatedDate(): DateTime {
        return this.data.createdDate;
    }

    public getTransactionId(): number {
        return this.data.transactionId;
    }

    public getApprovalId(): number {
        return this.data.approvalId;
    }

    public getAmount(): number {
        return this.data.amount;
    }

    public getCurrency(): string {
        return this.data.currency;
    }

    public getOriginalAmount(): number {
        return this.data.originalAmount;
    }

    public getOriginalCurrency(): string {
        return this.data.originalCurrency;
    }

    public getCounterpartyAccountNumber(): string | null {
        return this.data.sendToAccountNumber;
    }

    public getCounterpartyAccountName(): string | null {
        return this.data.sendToAccountName;
    }

    public getCounterpartyBankName() {
        return this.data.sendToBank;
    }

    public getCounterpartyBankNumber() {
        return this.data.sendToBankCode;
    }

    public getVs() {
        return this.data.vs;
    }

    public getKs() {
        return this.data.ks;
    }

    public getSs() {
        return this.data.ss;
    }

    public getInfo() {
        return this.data.info;
    }

    public getMessage() {
        return this.data.message;
    }

    public getAuthor() {
        return this.data.author;
    }

    public getData() {
        return this.data;
    }
}
