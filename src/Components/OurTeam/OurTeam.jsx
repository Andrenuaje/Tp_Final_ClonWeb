
import './OurTeam'


const teamMembers = [
    {
        name: 'Lily gomez',
        role: 'Founder',
        image:"/img/Lyli.png" ,
       
    },
    {
        name: 'Dm Lincoln',
        role: 'Co-Founder',
        image: "/img/DmLincon.png",
       
    },
    {
        name: 'Serena Mei',
        role: 'Manager',
        image:"/img/Serena.png" ,
       
    },
    {
        name: 'Abdel Latif',
        role: 'Supervisor',
        image:"/img/AbdelL.png",
       
    },
];


const OurTeam = () => {
    return(
           <section className="bg-[#F9F4E8] py-20 font-bogart">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Team</h2>
                <div className="w-16 h-1 bg-gray-800 mx-auto mb-16"></div>
                <div className="flex flex-wrap justify-center gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center w-64">
                            <div className={`relative w-40 h-40 rounded-full overflow-hidden mb-4 flex items-center justify-center `}>
                             
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-[90%] h-[90%] rounded-full object-cover z-10"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                            <p className="text-gray-600 text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        )
}

export { OurTeam }