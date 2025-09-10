import './Estadistica'


const Estadistica = () => {
    const stats = [
        {
            image: "/public/img/Estadisticas/manocorazon.jpg", 
            alt: "Donaciones recibidas",
            value: "985+",
            description: "Donation Received"
        },
        {
            image: "/public/img/Estadisticas/cajacorazon.jpg", 
            alt: "Dinero donado",
            value: "$10 M",
            description: "Money Donated"
        },
        {
            image: "/public/img/Estadisticas/megafonocorazon.jpg", 
            alt: "Campañas activas",
            value: "12+",
            description: "Active Campaigns"
        },
        {
            image: "/public/img/Estadisticas/manopaz.jpg", 
            alt: "Caridad en el año",
            value: "$60 M",
            description: "Charity in last Year"
        }
    ];

    return (
        <section className="bg-[#00715D] py-20  font-bogart">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img 
                                    src={stat.image} 
                                    alt={stat.alt}
                                    className="w-16 h-16 object-contain"
                                />
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
export { Estadistica }