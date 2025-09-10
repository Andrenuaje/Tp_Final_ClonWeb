import './Noticias'



const Noticias=() =>{
    return (
        <>
           
            <section className="bg-orange-50 px-26 py-26 ">
                <div className="max-w-7xl px-5 py-5">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center border-red-500">
                        <div className="col-span-2">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Support Your<br />Community
                            </h2>

                            <p className="text-gray-600 mb-8 max-w-md">
                                The target definition of a charity organization
                                ahead of charity causes fundraising sustainable and to
                                achieve them effectively and innovatively.
                            </p>

                           
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <img
                                        src="/public/img/Noticias/vacuna.jpg"
                                        alt="Covid"
                                        className="w-64 h-64 object-cover bg-center"
                                    />
                                    <h3 className="font-semibold">Covid - 19</h3>
                                </div>

                               
                                <div className="space-y-4">
                                    <img
                                        src="/public/img/Noticias/alimentos.jpg"
                                        alt="Food Bank"
                                        className="w-64 h-64 object-cover bg-center"
                                    />
                                    <h3 className="font-semibold">Food Bank</h3>
                                </div>
                            </div>
                        </div>

                        
                        <div className="w-full h-full">
                            <div className="bg-white w-full h-5/6">
                                <img src="/public/img/Noticias/agua.jpg" alt=""
                                    className="w-full h-5/6 object-cover"
                                />
                                <h3 className="font-semibold p-5 text-left">Safe Water</h3>
                            </div>
                            <div className="mt-6">
                                <a href="#" className="underline">View All Campaign</a>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="border-gray-300 w-7/10 border-t-3 mx-auto mt-25"></hr>
            </section>
        </>
    )
}

export { Noticias}