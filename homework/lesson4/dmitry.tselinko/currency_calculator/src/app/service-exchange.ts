interface IExchangeStore {
  base: string;
  date: string;
  rates: Object;
}

export interface IServiceExchange {
  _store: IExchangeStore;
  baseCurrency: string;
  getCurrencyList(): Promise<Array<string>>;
  convert(value: number, from: string, to: string): Promise<number>;
}
