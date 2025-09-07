import './Estadisticas'

const Estadisticas = () => {
    const stats = [
        {
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    {/* Three people with raised hands */}
                    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M20 26v8M16 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18 18l2 2M22 18l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    
                    <circle cx="32" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M32 24v8M28 30h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M30 16l2 2M34 16l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    
                    <circle cx="44" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M44 26v8M40 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M42 18l2 2M46 18l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    
                    {/* Hearts floating above */}
                    <path d="M16 12c0-2 1-3 2-3s2 1 2 3c0 2-2 4-2 4s-2-2-2-4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M48 12c0-2 1-3 2-3s2 1 2 3c0 2-2 4-2 4s-2-2-2-4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    
                    {/* Small stars */}
                    <path d="M12 8l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <path d="M52 8l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" stroke="currentColor" strokeWidth="1" fill="none"/>
                </svg>
            ),
            value: "985+",
            description: "Donation Received"
        },
        {
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    {/* Open cardboard box */}
                    <rect x="16" y="24" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M16 24l16-8 16 8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M20 24v24M44 24v24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    
                    {/* Hearts floating above the box */}
                    <path d="M24 16c0-1.5 0.5-2.5 1.5-2.5s1.5 1 1.5 2.5c0 1.5-1.5 3-1.5 3s-1.5-1.5-1.5-3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M40 16c0-1.5 0.5-2.5 1.5-2.5s1.5 1 1.5 2.5c0 1.5-1.5 3-1.5 3s-1.5-1.5-1.5-3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
            ),
            value: "$10 M",
            description: "Money Donated"
        },
        {
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    {/* Megaphone */}
                    <path d="M20 16l8-4 16 8v16l-16 8-8-4V16z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M28 12v8M36 16v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    
                    {/* Heart inside speech bubble */}
                    <ellipse cx="40" cy="24" rx="8" ry="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M40 20c0-1 0.5-1.5 1-1.5s1 0.5 1 1.5c0 1-1 2-1 2s-1-1-1-2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M32 24l4 2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            ),
            value: "12+",
            description: "Active Campaigns"
        },
        {
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    {/* Open hand with peace symbol */}
                    <ellipse cx="32" cy="32" rx="12" ry="16" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M24 20v16M32 16v20M40 20v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M28 24h8M28 32h8M28 40h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    
                    {/* Peace symbol on palm */}
                    <circle cx="32" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M30 28h4M32 26v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            ),
            value: "$60 M",
            description: "Charity in last Year"
        }
    ];

    return (
        <section className="bg-teal-800 py-20 font-bogart">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <div className="flex-shrink-0 text-white">
                                {stat.icon}
                            </div>
                            <div className="flex-1">
                                <div className="text-4xl font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-white text-sm opacity-90">
                                    {stat.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Estadisticas }