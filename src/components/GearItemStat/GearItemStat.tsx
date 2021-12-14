import { useEffect, useMemo, useState, VoidFunctionComponent } from 'react';
import {
  GearItemStatBar,
  GearItemStatBarPositive,
  GearItemStatBarProgress,
  GearItemStatIconAbsorption,
  GearItemStatIconAirRotation,
  GearItemStatIconDeepSnow,
  GearItemStatIconEngineBoost,
  GearItemStatIconGrip,
  GearItemStatIconMobility,
  GearItemStatIconMobilityHorizontal,
  GearItemStatIconMobilityVertical,
  GearItemStatIconSlowMode,
  GearItemStatIconSpeed,
  GearItemStatIconSprint,
  GearItemStatLabel,
  GearItemStatValue,
  GearItemStatValueBest,
  GearItemStatValueWorst,
  StyledGearItemStat,
} from './GearItemStat.styled';
import { GearItemStatProps } from './types';

export const GearItemStat: VoidFunctionComponent<GearItemStatProps> = props => {
  const { comparison, type, value } = props;

  // Base progress bar (black) and bonus part (green) value states
  const [progress, setProgress] = useState(0);
  const [bonus, setBonus] = useState(0);

  // Icon component associated with the current stats type
  const icon = useMemo(() => {
    switch (type) {
      case 'absorption':
        return <GearItemStatIconAbsorption />;
      case 'air-rotation':
        return <GearItemStatIconAirRotation />;
      case 'deep-snow':
        return <GearItemStatIconDeepSnow />;
      case 'engine-boost':
        return <GearItemStatIconEngineBoost />;
      case 'grip':
        return <GearItemStatIconGrip />;
      case 'mobility':
        return <GearItemStatIconMobility />;
      case 'mobility-horizontal':
        return <GearItemStatIconMobilityHorizontal />;
      case 'mobility-vertical':
        return <GearItemStatIconMobilityVertical />;
      case 'slow-mode':
        return <GearItemStatIconSlowMode />;
      case 'speed':
        return <GearItemStatIconSpeed />;
      case 'sprint':
        return <GearItemStatIconSprint />;
    }
  }, [type]);

  // Human readable label associated with the current stats type
  const label = useMemo(() => {
    switch (type) {
      case 'absorption':
        return 'Absorption';
      case 'air-rotation':
        return 'Air Rotation';
      case 'deep-snow':
        return 'Deep Snow';
      case 'engine-boost':
        return 'Engine Boost';
      case 'grip':
        return 'Grip';
      case 'mobility':
        return 'Mobility';
      case 'mobility-horizontal':
        return 'Horizontal Mobility';
      case 'mobility-vertical':
        return 'Vertical Mobility';
      case 'slow-mode':
        return 'Slow Mode';
      case 'speed':
        return 'Speed';
      case 'sprint':
        return 'Sprint';
    }
  }, [type]);

  // Numeric value label
  const valueLabel = useMemo(() => {
    // Show the value in green if it's the best in current specialization
    if (
      comparison &&
      comparison.worst !== comparison.best &&
      value > 0 &&
      value === comparison.best
    ) {
      return <GearItemStatValueBest>{value}</GearItemStatValueBest>;
    }

    // Show the value in green if it's the worst in current specialization
    if (
      comparison &&
      comparison.worst !== comparison.best &&
      value > 0 &&
      value === comparison.worst
    ) {
      return <GearItemStatValueWorst>{value}</GearItemStatValueWorst>;
    }

    return <GearItemStatValue>{value || '?'}</GearItemStatValue>;
  }, [comparison, value]);

  // Populate base and bonus values shortly after component renders
  useEffect(() => {
    // Schedule a timeout to enable animating progress bars
    const timeout = setTimeout(() => {
      if (!value) {
        // Reset progress if no value is available
        setProgress(0);
        setBonus(0);
      } else if (comparison) {
        // Ensure zero values do not gain in size
        const base = Math.min(comparison.second ?? value, value);

        // Calculate difference between current value and second best
        const extra = value - base;

        setProgress(base);
        setBonus(extra);
      } else {
        // Render values as-is if no comparison object is available
        setProgress(value);
        setBonus(0);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [comparison, value]);

  return (
    <StyledGearItemStat>
      {icon}
      <GearItemStatLabel>{label}</GearItemStatLabel>
      {valueLabel}
      <GearItemStatBar>
        <GearItemStatBarProgress style={{ width: `${progress}%` }} />
        <GearItemStatBarPositive style={{ width: `${bonus}%` }} />
      </GearItemStatBar>
    </StyledGearItemStat>
  );
};
