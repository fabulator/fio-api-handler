// @flow
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
    yearList: ?number,
    idList: ?number,
    idFrom: number,
    idTo: number,
    idLastDownload: ?number,
}

type Data = {
    accountId: number,
    bankId: number,
    currency: string,
    iban: string,
    bic: string,
    openingBalance: number,
    closingBalance: number,
    dateStart: DateTime,
    dateEnd: DateTime,
    yearList: ?number,
    idList: ?number,
    idFrom: number,
    idTo: number,
    idLastDownload: ?number,
}

export default class Info {
    data: Data;
    source: Source;

    constructor(source: Source) {
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

    getAccountId(): number {
        return this.data.accountId;
    }

    getBankId(): number {
        return this.data.bankId;
    }

    getCurrency(): string {
        return this.data.currency;
    }

    getIban(): string {
        return this.data.iban;
    }

    getBic(): string {
        return this.data.bic;
    }

    getOpeningBalance(): number {
        return this.data.openingBalance;
    }

    getClosingBalance(): number {
        return this.data.closingBalance;
    }

    getStart(): DateTime {
        return this.data.dateStart;
    }

    getEnd(): DateTime {
        return this.data.dateEnd;
    }

    getYearList(): ?number {
        return this.data.yearList;
    }

    getIdList(): ?number {
        return this.data.idList;
    }

    getIdFrom(): number {
        return this.data.idFrom;
    }

    getIdTo(): number {
        return this.data.idTo;
    }

    getIdLastDownload(): ?number {
        return this.data.idLastDownload;
    }

    getData(): Data {
        return this.data;
    }

    getSource(): Source {
        return this.source;
    }
}
