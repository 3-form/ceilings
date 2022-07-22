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
      '1-1-2': 23.24,
      '1-2-2': 40.28,
      '1-3-2': 78.72,
      '1-4-2': 106.99,
      '2-2-2': 105.67,
      '2-2-2-t': 44.95,
    },
    hardwarePrices: {
      '3-85-110': 0.31,
      '3-85-111': 2.33,
      '3-85-112': 6.82,
      '3-85-116': 1.51,
      '3-85-115': 3.90,
      '3-85-117': 5.02,
      '3-85-118': 6.82,
      '3-85-119': 6.82,
    }
  };

  public tetriaPricingData = {
    partsList: {
      '3-15-2415': 0.83
    },
    servicePrices: {
      flatTilePrice: 104.40,
      tetriaTilePrice: 104.40,
    },
    hardwarePrices: {},
  }

  public clarioPricingData = {
    partsList: {
      '3-15-2415': 0.74
    },
    servicePrices: {
      flatTilePrice: 27.17,
      clario24Price: 36.165,
      clario48Price: 113.85,
    },
    hardwarePrices: {},
  }

  public veloPricingData = {
    partsList: {},
    servicePrices: {
      variaSheetCost: 596.47,
      variaDiffusionAdditionalCost: 126.84,
      feltCost: 93.40,
      variaCost: 95.20,
    },
    hardwarePrices: {
      variaConnectionKitCost: 8.21,
      feltConnectionKitCost: 0.56,
      drillBitCost: 12.88,
      variaPunchToolCost: 20.95,
      C1cableKitCost: 14.93,
      C2cableKitCost: 16.90,
    },
  }

  public clarioCloudPricingData = {
    partsList: {},
    servicePrices: {
      sTile: 460.41,
      ccTile: 448.57,
    },
    hardwarePrices: {
      sTile: 65.73,
      ccTile: 55.92,
    },
    productsPrices: {
      sTile: 106.52,
      ccTile: 102.08,
    }
  }

  public seeyondPricingData; // this is handled through the getPrices() request in seeyond.service.ts

  constructor() {}

}
