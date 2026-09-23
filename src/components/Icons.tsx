import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

// Engine - Piston with connecting rod
export const EngineIcon: React.FC<IconProps> = ({ className, color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2" width="10" height="8" rx="1.5" />
    <line x1="10" y1="5" x2="14" y2="5" />
    <line x1="12" y1="10" x2="12" y2="14" />
    <circle cx="12" cy="16" r="2.5" />
    <line x1="12" y1="18.5" x2="12" y2="22" />
    <line x1="9" y1="22" x2="15" y2="22" />
    <path d="M9 2V1M15 2V1" />
  </svg>
);

// Transmission - Gear/Cog
export const TransmissionIcon: React.FC<IconProps> = ({ className, color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

// Brakes - Brake disc with caliper
export const BrakesIcon: React.FC<IconProps> = ({ className, color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1" fill={color} />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    <path d="M18 8l-2 1M18 16l-2-1M6 8l2 1M6 16l2-1" />
  </svg>
);

// Suspension - Coil spring with damper
export const SuspensionIcon: React.FC<IconProps> = ({ className, color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="4" />
    <path d="M8 5h8" />
    <path d="M8 5l4 2 4-2" />
    <path d="M8 9l4 2 4-2" />
    <path d="M8 13l4 2 4-2" />
    <path d="M8 17l4 2 4-2" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="9" y1="22" x2="15" y2="22" />
  </svg>
);

// Exhaust - Exhaust pipe with muffler
export const ExhaustIcon: React.FC<IconProps> = ({ className, color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h4c1 0 2-1 2-2V7c0-1 1-2 2-2h4c1 0 2 1 2 2v3c0 1 1 2 2 2h1" />
    <path d="M3 12v4c0 1 1 2 2 2h14c1 0 2-1 2-2v-4" />
    <circle cx="12" cy="14" r="2" />
    <path d="M19 4c.5 0 1 .5 1 1s-.5 1-1 1" />
    <path d="M21 3c.5 0 1 .5 1 1s-.5 1-1 1" />
  </svg>
);

// Electrical - Lightning bolt
export const ElectricalIcon: React.FC<IconProps> = ({ className, color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
  </svg>
);

// Body - Car body panel
export const BodyIcon: React.FC<IconProps> = ({ className, color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17h14" />
    <path d="M3 17v-2.5L5.5 9c.5-1 1.5-1.5 2.5-1.5h8c1 0 2 .5 2.5 1.5L21 14.5V17" />
    <path d="M5 17v1a1.5 1.5 0 003 0v-1" />
    <path d="M16 17v1a1.5 1.5 0 003 0v-1" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

// Interior - Dashboard/Seat
export const InteriorIcon: React.FC<IconProps> = ({ className, color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 19v-8c0-2 1.5-3 3-3h6c1.5 0 3 1 3 3v8" />
    <path d="M4 19h16" />
    <path d="M9 8V5c0-1.5 1-2.5 2.5-2.5h1c1.5 0 2.5 1 2.5 2.5v3" />
    <line x1="6" y1="14" x2="18" y2="14" />
  </svg>
);

// Wheels - Wheel rim
export const WheelsIcon: React.FC<IconProps> = ({ className, color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v7M12 15v7M2 12h7M15 12h7" />
    <path d="M4.93 4.93l4.95 4.95M14.12 14.12l4.95 4.95M4.93 19.07l4.95-4.95M14.12 9.88l4.95-4.95" />
  </svg>
);

// Cooling - Snowflake/Radiator
export const CoolingIcon: React.FC<IconProps> = ({ className, color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    <path d="M12 6l-2-2M12 6l2-2M12 18l-2 2M12 18l2 2M6 12l-2-2M6 12l-2 2M18 12l2-2M18 12l2 2" />
  </svg>
);

// Steering - Steering wheel
export const SteeringIcon: React.FC<IconProps> = ({ className, color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 10V5" />
    <path d="M10.5 13L6 17" />
    <path d="M13.5 13L18 17" />
  </svg>
);

// Intake - Air filter/Turbo
export const IntakeIcon: React.FC<IconProps> = ({ className, color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
    <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6" />
    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2" />
    <path d="M8 4l2 3M16 4l-2 3M4 8l3 2M4 16l3-2M8 20l2-3M16 20l-2-3M20 8l-3 2M20 16l-3-2" />
  </svg>
);

export const getIconComponent = (id: string): React.FC<IconProps> => {
  const icons: Record<string, React.FC<IconProps>> = {
    engine: EngineIcon,
    transmission: TransmissionIcon,
    brakes: BrakesIcon,
    suspension: SuspensionIcon,
    exhaust: ExhaustIcon,
    electrical: ElectricalIcon,
    body: BodyIcon,
    interior: InteriorIcon,
    wheels: WheelsIcon,
    cooling: CoolingIcon,
    steering: SteeringIcon,
    intake: IntakeIcon,
  };
  return icons[id] || EngineIcon;
};
