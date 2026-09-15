interface ProductSchematicProps {
  type: string;
  capacity?: string;
  name: string;
}

export function ProductSchematic({ type, capacity, name }: ProductSchematicProps) {
  // Renders a high-precision, technical elevation catalog schematic with callouts
  return (
    <div className="relative w-full aspect-[4/3] bg-[#23262B] border border-[#3A3E45] overflow-hidden flex flex-col justify-between p-3 select-none">
      {/* Blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Top technical badge */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-wider text-[#A0A6B1] border-b border-[#353941] pb-1.5">
        <span className="flex items-center gap-1.5 text-[#E2E5EA] font-semibold">
          <span className="inline-block w-1.5 h-1.5 bg-[#8B1E1E]"></span>
          ANDAL SPEC CAD #{type.toUpperCase()}
        </span>
        <span className="text-[#8B939F] bg-[#1B1D21] px-1.5 py-0.5 rounded border border-[#2D3138]">
          {capacity || 'STD SPECS'}
        </span>
      </div>

      {/* Main technical drawing rendering */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-2">
        {type === 'wet-grinder' && (
          <svg className="w-full h-full max-h-[170px]" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Base Frame */}
            <rect x="40" y="140" width="190" height="24" rx="2" fill="#32363D" stroke="#5E6572" strokeWidth="1.5" />
            <rect x="50" y="164" width="16" height="8" fill="#1C1E22" stroke="#4B515C" />
            <rect x="204" y="164" width="16" height="8" fill="#1C1E22" stroke="#4B515C" />
            {/* Motor Housing */}
            <rect x="52" y="70" width="60" height="70" rx="3" fill="#292D34" stroke="#5A616E" strokeWidth="1.5" />
            {/* Motor cooling fins */}
            <line x1="58" y1="80" x2="106" y2="80" stroke="#444A55" strokeWidth="1.5" />
            <line x1="58" y1="92" x2="106" y2="92" stroke="#444A55" strokeWidth="1.5" />
            <line x1="58" y1="104" x2="106" y2="104" stroke="#444A55" strokeWidth="1.5" />
            <line x1="58" y1="116" x2="106" y2="116" stroke="#444A55" strokeWidth="1.5" />
            <text x="82" y="132" fill="#8B939F" fontSize="8" fontFamily="monospace" textAnchor="middle">COPPER MOTOR</text>
            
            {/* Tilting Hinge & Axis */}
            <circle cx="120" cy="100" r="8" fill="#8B1E1E" stroke="#B32B2B" strokeWidth="1.5" />
            <circle cx="120" cy="100" r="3" fill="#F0F2F5" />
            <line x1="120" y1="108" x2="120" y2="140" stroke="#8B1E1E" strokeWidth="2.5" strokeDasharray="3 2" />

            {/* Stainless Steel Grinding Drum */}
            <path d="M125 40 L225 40 L220 125 L130 125 Z" fill="#434954" stroke="#8F98A7" strokeWidth="2" />
            {/* Mirror Stainless Sheen */}
            <path d="M140 42 L160 42 L154 123 L134 123 Z" fill="#586170" opacity="0.4" />
            {/* Natural Black Granite Rollers inside drum */}
            <ellipse cx="160" cy="85" rx="16" ry="24" fill="#181A1C" stroke="#777F8E" strokeWidth="1.5" />
            <ellipse cx="195" cy="85" rx="16" ry="24" fill="#181A1C" stroke="#777F8E" strokeWidth="1.5" />
            <text x="178" y="88" fill="#C5CAD3" fontSize="8" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">GRANITE</text>

            {/* Heavy Tilting Lever / Gearbox */}
            <line x1="225" y1="75" x2="255" y2="60" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
            <circle cx="255" cy="60" r="5" fill="#8B1E1E" stroke="#FFFFFF" strokeWidth="1" />
            <text x="248" y="50" fill="#E2E5EA" fontSize="8" fontFamily="monospace">TILT LOCK</text>

            {/* SS 304 Drum Label */}
            <rect x="145" y="108" width="60" height="12" fill="#1B1E22" rx="1" />
            <text x="175" y="117" fill="#F3F4F6" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SS 304 DRUM</text>
          </svg>
        )}

        {type === 'mixer-grinder' && (
          <svg className="w-full h-full max-h-[170px]" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Aluminum Cast Base */}
            <path d="M70 145 L90 85 L180 85 L200 145 Z" fill="#2E333B" stroke="#667080" strokeWidth="1.5" />
            {/* Rubber Bush Feet */}
            <rect x="76" y="145" width="16" height="6" fill="#15171A" stroke="#4A5260" />
            <rect x="178" y="145" width="16" height="6" fill="#15171A" stroke="#4A5260" />
            {/* Rotary Speed Knob */}
            <circle cx="135" cy="120" r="12" fill="#1C1F24" stroke="#8B1E1E" strokeWidth="2" />
            <circle cx="135" cy="120" r="4" fill="#D1D5DB" />
            <line x1="135" y1="120" x2="135" y2="112" stroke="#FFFFFF" strokeWidth="2" />
            <text x="135" y="140" fill="#9CA3AF" fontSize="7" fontFamily="monospace" textAnchor="middle">3-SPEED + PULSE</text>
            
            {/* Heavy Stainless Steel Jar */}
            <path d="M102 85 L108 30 L162 30 L168 85 Z" fill="#4B5361" stroke="#9BA4B5" strokeWidth="2" />
            {/* Stainless Polish Bands */}
            <rect x="106" y="45" width="58" height="6" fill="#646F82" opacity="0.5" />
            {/* Jar Handle */}
            <path d="M165 40 C185 40, 185 75, 166 75" stroke="#1A1C1F" strokeWidth="5" strokeLinecap="round" fill="none" />
            {/* Polycarbonate Dome Lid */}
            <path d="M105 30 Q135 18 165 30 Z" fill="#3B424D" stroke="#D1D5DB" strokeWidth="1.5" />
            <rect x="127" y="15" width="16" height="6" rx="1" fill="#8B1E1E" />
            {/* Overload button callout */}
            <circle cx="95" cy="125" r="3" fill="#B91C1C" />
            <text x="75" y="112" fill="#E5E7EB" fontSize="7" fontFamily="monospace">OVERLOAD TRIP</text>
          </svg>
        )}

        {type === 'feather-cleaner' && (
          <svg className="w-full h-full max-h-[170px]" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stand Legs */}
            <line x1="75" y1="120" x2="65" y2="160" stroke="#48505E" strokeWidth="3" />
            <line x1="195" y1="120" x2="205" y2="160" stroke="#48505E" strokeWidth="3" />
            <line x1="70" y1="145" x2="200" y2="145" stroke="#373D48" strokeWidth="2" />
            {/* Motor Mounted Beneath */}
            <rect x="105" y="125" width="60" height="28" fill="#25282F" stroke="#5E6778" strokeWidth="1.5" />
            <text x="135" y="142" fill="#9CA3AF" fontSize="7.5" fontFamily="monospace" textAnchor="middle">1.5 HP MOTOR</text>

            {/* Stainless De-Feathering Barrel */}
            <rect x="75" y="45" width="120" height="75" rx="3" fill="#444C59" stroke="#909AA8" strokeWidth="2" />
            {/* Plucking Rubber Studs / Fingers */}
            {[60, 75, 90, 105].map((y) => (
              <g key={y}>
                <circle cx="95" cy={y} r="3" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
                <circle cx="115" cy={y} r="3" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
                <circle cx="135" cy={y} r="3" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
                <circle cx="155" cy={y} r="3" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
                <circle cx="175" cy={y} r="3" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
              </g>
            ))}
            {/* Water Inflow Ring */}
            <line x1="80" y1="42" x2="190" y2="42" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="193" cy="42" r="3" fill="#0284C7" />
            <text x="238" y="45" fill="#38BDF8" fontSize="7.5" fontFamily="monospace">WATER RING</text>
            {/* Waste Feather Chute */}
            <path d="M165 110 L195 130 L185 136 L158 118 Z" fill="#8B1E1E" stroke="#B91C1C" />
            <text x="235" y="125" fill="#E5E7EB" fontSize="7.5" fontFamily="monospace">FEATHER CHUTE</text>
          </svg>
        )}

        {type === 'atta-kneader' && (
          <svg className="w-full h-full max-h-[170px]" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Heavy Channel Base */}
            <rect x="50" y="135" width="170" height="24" fill="#282C33" stroke="#545B68" strokeWidth="1.5" />
            {/* Gearbox Column */}
            <rect x="55" y="45" width="55" height="90" fill="#343A45" stroke="#687282" strokeWidth="1.5" />
            <text x="82" y="80" fill="#9BA3AF" fontSize="7" fontFamily="monospace" textAnchor="middle">OIL-BATH</text>
            <text x="82" y="90" fill="#9BA3AF" fontSize="7" fontFamily="monospace" textAnchor="middle">GEARBOX</text>

            {/* Forward/Reverse Switch */}
            <circle cx="75" cy="115" r="5" fill="#1F2937" stroke="#10B981" strokeWidth="1.5" />
            <circle cx="90" cy="115" r="5" fill="#1F2937" stroke="#EF4444" strokeWidth="1.5" />

            {/* Stainless Steel Bowl */}
            <path d="M120 60 L195 60 L185 125 L130 125 Z" fill="#4B5463" stroke="#9EA7B5" strokeWidth="2" />
            <ellipse cx="157" cy="60" rx="37" ry="9" fill="#3E4552" stroke="#8E97A6" />
            
            {/* Spiral Arm in Bowl */}
            <path d="M150 40 L150 75 Q165 85 155 105" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="155" cy="105" r="3" fill="#8B1E1E" />
            
            <text x="157" y="145" fill="#E5E7EB" fontSize="8" fontFamily="monospace" textAnchor="middle">SS 304 ROTATING BOWL</text>
          </svg>
        )}

        {type === 'murukku-maker' && (
          <svg className="w-full h-full max-h-[170px]" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Upright Frame */}
            <rect x="65" y="140" width="140" height="20" fill="#2E333B" stroke="#5C6575" strokeWidth="1.5" />
            <rect x="80" y="30" width="16" height="110" fill="#3A414D" stroke="#6B7688" />
            <rect x="174" y="30" width="16" height="110" fill="#3A414D" stroke="#6B7688" />
            {/* Top Motor Gear Head */}
            <rect x="75" y="20" width="120" height="24" fill="#24282F" stroke="#8B1E1E" strokeWidth="1.5" />
            <text x="135" y="35" fill="#F3F4F6" fontSize="7.5" fontFamily="monospace" textAnchor="middle">ELECTRIC MOTOR DRIVE</text>

            {/* Center Cylinder & Piston */}
            <rect x="110" y="50" width="50" height="70" fill="#485160" stroke="#9AA3B2" strokeWidth="2" />
            <line x1="135" y1="44" x2="135" y2="70" stroke="#E5E7EB" strokeWidth="5" />
            
            {/* Brass Die Mount at Bottom */}
            <rect x="115" y="120" width="40" height="10" fill="#D97706" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="135" y="128" fill="#18181B" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">BRASS DIE</text>
            
            {/* Extruded Murukku lines */}
            <path d="M125 130 Q127 138 123 145" stroke="#FDE68A" strokeWidth="2" fill="none" />
            <path d="M135 130 Q138 138 135 145" stroke="#FDE68A" strokeWidth="2" fill="none" />
            <path d="M145 130 Q143 138 147 145" stroke="#FDE68A" strokeWidth="2" fill="none" />

            <text x="228" y="90" fill="#D97706" fontSize="7.5" fontFamily="monospace">6 BRASS DIES</text>
          </svg>
        )}

        {type === 'coconut-scraper' && (
          <svg className="w-full h-full max-h-[170px]" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stand Pedestal */}
            <rect x="90" y="145" width="90" height="15" fill="#2A2E35" stroke="#545D6B" strokeWidth="1.5" />
            <rect x="125" y="80" width="20" height="65" fill="#383E48" stroke="#606A7A" />
            {/* Motor in Center */}
            <rect x="100" y="55" width="70" height="35" rx="3" fill="#25282F" stroke="#8B1E1E" strokeWidth="1.5" />
            <text x="135" y="76" fill="#D1D5DB" fontSize="7.5" fontFamily="monospace" textAnchor="middle">0.5 HP MOTOR</text>

            {/* Left Scraper Head */}
            <line x1="100" y1="72" x2="65" y2="72" stroke="#9CA3AF" strokeWidth="4" />
            <path d="M65 60 L45 72 L65 84 Z" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1.5" />
            {/* Right Scraper Head */}
            <line x1="170" y1="72" x2="205" y2="72" stroke="#9CA3AF" strokeWidth="4" />
            <path d="M205 60 L225 72 L205 84 Z" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1.5" />

            {/* Dual Head Text */}
            <text x="55" y="102" fill="#E5E7EB" fontSize="7.5" fontFamily="monospace">HEAD A</text>
            <text x="215" y="102" fill="#E5E7EB" fontSize="7.5" fontFamily="monospace">HEAD B</text>

            <rect x="40" y="115" width="190" height="12" fill="#1C1F24" stroke="#3E4450" />
            <text x="135" y="124" fill="#9CA3AF" fontSize="7" fontFamily="monospace" textAnchor="middle">STAINLESS STEEL TRAY & SPLASH GUARD</text>
          </svg>
        )}

        {type === 'vegetable-cutter' && (
          <svg className="w-full h-full max-h-[170px]" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Base Housing */}
            <rect x="70" y="100" width="130" height="50" rx="3" fill="#323740" stroke="#687282" strokeWidth="1.5" />
            <text x="135" y="130" fill="#9CA3AF" fontSize="7.5" fontFamily="monospace" textAnchor="middle">1.0 HP GEARED MOTOR</text>

            {/* Upper Cutting Chamber */}
            <rect x="95" y="45" width="90" height="55" fill="#4B5361" stroke="#9AA3B2" strokeWidth="2" />
            {/* Dual Feed Hoppers */}
            <path d="M105 45 L115 20 L140 20 L135 45 Z" fill="#606A7C" stroke="#B0B8C5" />
            <rect x="150" y="22" width="22" height="23" rx="11" fill="#606A7C" stroke="#B0B8C5" />
            <text x="127" y="16" fill="#E5E7EB" fontSize="6.5" fontFamily="monospace">KIDNEY</text>
            <text x="161" y="16" fill="#E5E7EB" fontSize="6.5" fontFamily="monospace">ROUND</text>

            {/* Slicing Disc Callout */}
            <circle cx="140" cy="72" r="18" fill="#1F2329" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="3 2" />
            <line x1="126" y1="72" x2="154" y2="72" stroke="#8B1E1E" strokeWidth="2" />
            
            {/* Discharge Chute */}
            <path d="M185 85 L215 105 L205 115 L185 95 Z" fill="#8B1E1E" />
            <text x="238" y="105" fill="#E5E7EB" fontSize="7.5" fontFamily="monospace">OUTPUT CHUTE</text>
          </svg>
        )}
      </div>

      {/* Bottom Technical Spec strip */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#7D8592] border-t border-[#353941] pt-1.5">
        <span className="truncate">ORIGIN: PEELAMEDU, CBE</span>
        <span className="text-[#38BDF8] font-medium">AISI 304 STAINLESS STEEL</span>
      </div>
    </div>
  );
}
