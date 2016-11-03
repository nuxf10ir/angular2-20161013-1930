import { Injectable } from '@angular/core';
import { StaticExchangeService } from './static-exchange.service';
import { ApiExchangeService } from './api-exchange.service';

export enum Modes {
  API,
  STATIC
}

@Injectable()
export class ExchangeFactoryService {
  static getInstance(key: Modes) {
    if (key === Modes.API) {
      return new ApiExchangeService();
    } else if (key === Modes.STATIC) {
      return new StaticExchangeService();
    }
  }

  static getModes() {
    return Modes;
  }
}
