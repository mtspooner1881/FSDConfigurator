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

export type UnitCardType = {
  points: number;
  name: string;
  description: string;
  stats: UnitStatsType;
  equipment: UnitEquipmentType[];
  damage: UnitDamageType[];
};