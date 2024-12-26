
export default function Home() {
  return (
  <div className="">
    <img className=" w-screen h-screen object-cover" src="my-bg-pic.png" alt="bg" />
    <div className="fixed w-screen top-72 text-white font-bold md:top-96 lg:top-72">
      <h1 className="text-[40px] ml-10 lg:ml-16 lg:text-[50px] text-center sm:text-center sm:justify-center md:text-center  ">Welcome to My Watches</h1>
      <p className="text-[20px] lg:ml-28 md:ml-10 md:text-[20px] text-center sm:text-center md:text-center ">The Best and Branded Watches are Available</p>
      <a href="/watches">
      <button className="bg-orange-500 p-2 flex justify-center m-auto mt-5 rounded-lg ">Shop Now</button>
      </a>
    </div>
    

  </div>
  );
}
