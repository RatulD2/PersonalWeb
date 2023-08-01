export default function Hero() {
  return (
    <>
      <div className="m-auto container min-h-screen w-3/4">

          <div className="hero-content flex-col justify-between lg:flex-row-reverse">
            <img
              src="Ratul.jpeg"
              className="rounded-lg shadow-2xl"
            />
            <div className="">
              {/* responsive header */}
              <div className="flex justify-center items-center border-2 border-lime-400 rounded-2xl text-lime-400 w-28 h-4 p-4 bg-lime-50 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current"  width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <p>Kolkata</p>
          </div>
            <h1 className="text-3xl font-bold sm:text-5xl mt-5">Hi! I am a <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">Product Designer</span> </h1>
            <p className="py-6 flex gap-2 ">
            <svg width="20" height="20" viewBox="0 0 409.294 409.294" xmlns="http://www.w3.org/2000/svg"><path d="M0 204.647v175.412h175.412V204.647H58.471c0-64.48 52.461-116.941 116.941-116.941V29.235C78.684 29.235 0 107.919 0 204.647zM409.294 87.706V29.235c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412V204.647H292.353c0-64.48 52.461-116.941 116.941-116.941z"></path></svg>
              <ul>
                <li>Product Designer at Fueler.io</li>
                <li>Building Learnn.cc</li>
                <li>Scaling Escape Design</li>
              </ul>
            </p>
            <button className="btn bg-gradient-to-r from-lime-500 to-green-500 text-white font-semibold">Explore work</button>
          </div>
        </div>
      </div>
    </>
  );
}
