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
      '1-1-2': 17.77,
      '1-2-2': 30.8,
      '1-3-2': 60.2,
      '1-4-2': 81.81,
      '2-2-2': 80.8,
      '2-2-2-t': 34.37
    },
    hardwarePrices: {
      '3-85-110': 0.24,
      '3-85-111': 1.85,
      '3-85-112': 5.42,
      '3-85-116': 1.2,
      '3-85-115': 3.1,
      '3-85-117': 3.99,
      '3-85-118': 5.42,
      '3-85-119': 5.42
    }
  };

  public tetriaPricingData = {
    partsList: {},
    servicePrices: {
      flatTilePrice: 63.65,
      tetriaTilePrice: 84.87
    },
    hardwarePrices: {},
  }

  public clarioPricingData = {
    partsList: {},
    servicePrices: {
      flatTilePrice: 24.52,
      clario24Price: 51.38,
      clario48Price: 102.74
    },
    hardwarePrices: {},
  }

  public veloPricingData = {
    partsList: {},
    servicePrices: {
      variaSheetCost: 508.16,
      variaDiffusionAdditionalCost: 105.0,
      feltCost: 79.57,
      variaCost: 81.11
    },
    hardwarePrices: {
      variaConnectionKitCost: 7.06,
      feltConnectionKitCost: 0.48,
      drillBitCost: 11.08,
      variaPunchToolCost: 18.02,
      C1cableKitCost: 12.84,
      C2cableKitCost: 14.54
    },
  }

  public clarioCloudPricingData = {
    partsList: {},
    servicePrices: {
      sTile: 346.21,
      ccTile: 351.97
    },
    hardwarePrices: {
      sTile: 51.36,
      ccTile: 45.60
    },
    productsPrices: {
      sTile: 82.43,
      ccTile: 82.43
    }
  }

  constructor() {}
}
