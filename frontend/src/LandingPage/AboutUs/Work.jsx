function Work({heading, image, paragraph, join}) {
    return (
        <div className="mt-4">
            <div className="relative max-w-md mx-4 overflow-hidden rounded-2xl shadow-md group shadow-green-700 ">
                <img 
                    src={image}
                    className="opacity-90 group-hover:opacity-20 transition-transform group-hover:scale-110 duration-200"
                ></img>
                <div  className="absolute inset-0 flex items-end bg-gradient-to-t from-black">
                    <div>
                        <b className="text-green-100 invisible group-hover:visible">{heading} </b>
                        <p className="text-green-100 invisible group-hover:visible"> {paragraph}</p>
                        <button className="bg-green-900 p-1 rounded-lg shadow mb-3 mt-2 px-2 invisible group-hover:visible">{join}</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Work;