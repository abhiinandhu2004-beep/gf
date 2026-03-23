import hug from "../assets/love.mp4"

const Yes = () => {
    return (
        <div className='flex w-ful h-screen items-center justify-center bg-pink-200 '>
            <div className='flex w-180 h-140 shadow-black bg-white rounded-3xl pb-8   '>
                <div className='bg-linear-to-r from-red-500/60 to-white w-15 h-140 rounded-tl-3xl rounded-bl-3xl' />
                <div className='flex flex-col w-180 h-140 shadow-black bg-white items-center rounded-3xl pb-8  '>
                    <p className='text-6xl font-bold mt-7'>💖YAY!!!💖</p>
                    <div className='flex flex-col items-center justify-center w-full h-screen gap-6 '>
                        <p className='text-lg font-semibold mt-4'>Best Decision Ever😘</p>
                        <video src={hug}
                            autoPlay
                            muted
                            loop
                            className="w-85 rounded-2xl shadow-2xl "></video>
                        <p>I love youh❤️</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Yes
