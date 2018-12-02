import { DateTime } from 'luxon';

type Source = {
    accountId: string,
    bankId: string,
    currency: string,
    iban: string,
    bic: string,
    openingBalance: number,
    closingBalance: number,
    dateStart: string,
    dateEnd: string,
    yearList: number | undefined,
    idList: number | undefined,
    idFrom: number,
    idTo: number,
    idLastDownload: number | undefined,
};

type Data = {
    accountId: number,
    bankId: number,
    dateStart: DateTime,
    dateEnd: DateTime,
    currency: string,
    iban: string,
    bic: string,
    openingBalance: number,
    closingBalance: number,
    yearList: number | undefined,
    idList: number | undefined,
    idFrom: number,
    idTo: number,
    idLastDownload: number | undefined,
};

export default class Info {
    protected data: Data;

    protected source: Source;

    public constructor(source: Source) {
        const dateFormat = 'yyyy-MM-ddZZZ';
        this.source = source;
        // $FlowFixMe
        this.data = {
            ...source,
            accountId: Number(source.accountId),
            bankId: Number(source.bankId),
            dateStart: DateTime.fromFormat(source.dateStart, dateFormat),
            dateEnd: DateTime.fromFormat(source.dateEnd, dateFormat),
        };
    }

    public getAccountId(): number {
        return this.data.accountId;
    }

    public getBankId(): number {
        return this.data.bankId;
    }

    public getCurrency(): string {
        return this.data.currency;
    }

    public getIban(): string {
        return this.data.iban;
    }

    public getBic(): string {
        return this.data.bic;
    }

    public getOpeningBalance(): number {
        return this.data.openingBalance;
    }

    public getClosingBalance(): number {
        return this.data.closingBalance;
    }

    public getStart(): DateTime {
        return this.data.dateStart;
    }

    public getEnd(): DateTime {
        return this.data.dateEnd;
    }

    public getYearList() {
        return this.data.yearList;
    }

    public getIdList() {
        return this.data.idList;
    }

    public getIdFrom(): number {
        return this.data.idFrom;
    }

    public getIdTo(): number {
        return this.data.idTo;
    }

    public getIdLastDownload() {
        return this.data.idLastDownload;
    }

    public getData(): Data {
        return this.data;
    }

    public getSource(): Source {
        return this.source;
    }
}
