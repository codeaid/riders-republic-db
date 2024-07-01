import type { GearStatType } from '@/types/stats';

export const statIconMap = new Map<GearStatType, string>([
  ['absorption', 'bg-icon-stat-absorption'],
  ['air-rotation', 'bg-icon-stat-air-rotation'],
  ['board-tricks', 'bg-icon-stat-board-tricks'],
  ['deep-snow-race', 'bg-icon-stat-deep-snow-race'],
  ['deep-snow-tricks', 'bg-icon-stat-deep-snow-tricks'],
  ['engine-boost', 'bg-icon-stat-engine-boost'],
  ['grip', 'bg-icon-stat-grip'],
  ['mobility', 'bg-icon-stat-mobility'],
  ['mobility-horizontal', 'bg-icon-stat-mobility-horizontal'],
  ['mobility-vertical', 'bg-icon-stat-mobility-vertical'],
  ['slow-mode', 'bg-icon-stat-slow-mode'],
  ['speed', 'bg-icon-stat-speed'],
  ['sprint', 'bg-icon-stat-sprint'],
]);

export const statNameMap = new Map<GearStatType, string>([
  ['absorption', 'Absorption'],
  ['air-rotation', 'Air Rotation'],
  ['board-tricks', 'Board Tricks'],
  ['deep-snow-race', 'Deep Snow'],
  ['deep-snow-tricks', 'Deep Snow'],
  ['engine-boost', 'Engine Boost'],
  ['grip', 'Grip'],
  ['mobility', 'Mobility'],
  ['mobility-horizontal', 'Horizontal Mobility'],
  ['mobility-vertical', 'Vertical Mobility'],
  ['slow-mode', 'Slow Mode'],
  ['speed', 'Speed'],
  ['sprint', 'Sprint'],
]);
