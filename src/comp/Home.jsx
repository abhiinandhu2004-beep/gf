import { useState  } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const positions = [
    { top: "283px", left: "400px", text:"No" },
    { top: "350px", left: "300px" , text:"No"},
    { top: "330px", left: "130px" , text:"don't do this😢"},
    { top: "300px", left: "500px" , text:"Think again😒"},
    { top: "380px", left: "200px" , text:"Please No🥹"},
  ]

  const navigate = useNavigate();
  const [index, setIndex] = useState(0)

  const moveButton = () => {
    setIndex((prev) => (prev + 1) % positions.length)
  }

  return (
    <div className='flex w-full h-screen bg-pink-200 items-center justify-center relative'>
      <span className='absolute top-25 left-75 text-9xl z-20'>🎀</span>
      <div className=' relative flex flex-col w-200 h-110 bg-white items-center  rounded-3xl gap-4'>
        <div className='bg-linear-to-r from-red-500/90 to-white w-200 h-10 rounded-tr-3xl' />
        <p className='text-4xl font-bold mt-10'>Sreyaah ,</p>
        <p className='text-4xl font-bold'>Will Youh Be My Swan...!🥹💕</p>
        <p className='text-sm font-semibold'>Choose Wisely . (the "NO button is...Shy.")</p>
        <div className='flex gap-7 mt-10'>
          <button className="bg-red-500 text-white w-25 h-10 -ml-30 rounded-lg font-semibold
shadow-[0_0_10px_rgba(239,68,68,0.7)]
hover:shadow-[0_0_20px_rgba(239,68,68,0.9)]
hover:bg-red-600
transition-all duration-300"
onClick={()=>navigate("/Yes")}>
            Yes
          </button>

        </div>
        <button
          onClick={moveButton}
          style={{
            top: positions[index].top,
            left: positions[index].left
          }}
          className="absolute bg-white h-10 w-25 rounded-lg text-sm font-semibold shadow-md border border-gray-300 transition-all duration-300"
        >
          {positions[index].text}
        </button>
      </div>

    </div>
  )
}

export default Home
