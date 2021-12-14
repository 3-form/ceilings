import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  public hushBlocksPricingData = {
    partsList: {
      '1-1-2': {
        '3-85-110': 2,
        '3-85-111': 3,
        '3-85-116': 1
      },
      '1-2-2': {
        '3-85-110': 4,
        '3-85-111': 4,
        '3-85-119': 2
      },
      '1-3-2': {
        '3-85-110': 5,
        '3-85-111': 4,
        '3-85-115': 2
      },
      '1-4-2': {
        '3-85-110': 4,
        '3-85-111': 5,
        '3-85-117': 2
      },
      '2-2-2': {
        '3-85-110': 4,
        '3-85-111': 4,
        '3-85-112': 2
      },
      '2-2-2-t': {
        '3-85-110': 4,
        '3-85-111': 5,
        '3-85-118': 1
      }
    },
    servicePrices: {
      '1-1-2': 19.70,
      '1-2-2': 34.14,
      '1-3-2': 66.71,
      '1-4-2': 90.67,
      '2-2-2': 89.55,
      '2-2-2-t': 38.09,
    },
    hardwarePrices: {
      '3-85-110': 0.26,
      '3-85-111': 1.98,
      '3-85-112': 5.78,
      '3-85-116': 1.28,
      '3-85-115': 3.30,
      '3-85-117': 4.26,
      '3-85-118': 5.78,
      '3-85-119': 5.78,
    }
  };

  public tetriaPricingData = {
    partsList: {
      '3-15-2415': 0.74
    },
    servicePrices: {
      flatTilePrice: 94.06,
      tetriaTilePrice: 94.06,
    },
    hardwarePrices: {},
  }

  public clarioPricingData = {
    partsList: {
      '3-15-2415': 0.74
    },
    servicePrices: {
      flatTilePrice: 27.17,
      clario24Price: 56.94,
      clario48Price: 113.85,
    },
    hardwarePrices: {},
  }

  public veloPricingData = {
    partsList: {},
    servicePrices: {
      variaSheetCost: 547.22,
      variaDiffusionAdditionalCost: 116.36,
      feltCost: 85.68,
      variaCost: 87.34,
    },
    hardwarePrices: {
      variaConnectionKitCost: 7.53,
      feltConnectionKitCost: 0.51,
      drillBitCost: 11.81,
      variaPunchToolCost: 19.22,
      C1cableKitCost: 13.70,
      C2cableKitCost: 15.50,
    },
  }

  public clarioCloudPricingData = {
    partsList: {},
    servicePrices: {
      sTile: 383.68,
      ccTile: 390.06,
    },
    hardwarePrices: {
      sTile: 54.77,
      ccTile: 48.63,
    },
    productsPrices: {
      sTile: 88.77,
      ccTile: 88.77,
    }
  }

  public seeyondPricingData; // this is handled through the getPrices() request in seeyond.service.ts

  constructor() {}

}
