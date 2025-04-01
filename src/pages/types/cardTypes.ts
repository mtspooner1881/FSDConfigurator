export type UnitStatsType = {
  cmd: number;
  defense: number;
  save: string;
  move: number;
}

export type UnitEquipmentUseCostType = {
  isFree: boolean;
  readyCost?: number[][];
}

export type UnitEquipmentType = {
  sPlacement: number;
  name: string;
  useCost: UnitEquipmentUseCostType;
  damage?: string;
  effect?: string;
  minDistance?: number;
  maxDistance: number;
  modifiers?: string[];
  isReadied: boolean;
  isDestroyed: boolean;
}

export type UnitDamageType = {
  dieRoll: number[];
  damagePlacement: string;
}

export type CardPointCost = {
  points: number;
  amount?: number;
}

export type UnitCardType = {
  cardCost: CardPointCost;
  name: string;
  description: string;
  stats: UnitStatsType;
  equipment: UnitEquipmentType[];
  abilities: string[];
  damage: UnitDamageType[];
};