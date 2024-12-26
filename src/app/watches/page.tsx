import React from 'react';

const Page = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-5 justify-items-center pt-32 md:w-screen md:h-screen lg:h-auto">
      <div className="bg-white p-5 text-center rounded-lg md:hover:translate-y-[-10px]">
        <img className="w-full max-w-[300px] h-auto" src="citizen.jpg" alt="Citizen Watch" />
        <h2 className="text-black text-xl mt-3">Citizen Watch</h2>
        <h3 className="text-green-500 text-xl"> $148</h3>
        <p className="bg-orange-600 text-white py-2 px-5 m-auto max-w-[100px] mt-2 rounded-lg cursor-pointer text-sm hover:bg-red-600">Buy Now</p>
      </div>

      <div className="bg-white p-5 text-center rounded-lg md:hover:translate-y-[-10px]">
        <img className="w-full max-w-[300px] h-auto" src="tissot.jpg" alt="Tissot Watch" />
        <h2 className="text-black text-xl mt-3">Tissot Watch</h2>
        <h3 className="text-green-500 text-xl"> $320</h3>
        <p className="bg-orange-600 text-white py-2 px-5 m-auto max-w-[100px] mt-2 rounded-lg cursor-pointer text-sm hover:bg-red-600">Buy Now</p>
      </div>

      <div className="bg-white p-5 text-center rounded-lg md:hover:translate-y-[-10px]">
        <img className="w-full max-w-[300px] h-auto" src="omega.jpg" alt="Omega Watch" />
        <h2 className="text-black text-xl mt-3">Omega Watch</h2>
        <h3 className="text-green-500 text-xl"> $550</h3>
        <p className="bg-orange-600 text-white py-2 px-5 m-auto max-w-[100px] mt-2 rounded-lg cursor-pointer text-sm hover:bg-red-600">Buy Now</p>
      </div>

      <div className="bg-white p-5 text-center rounded-lg md:hover:translate-y-[-10px]">
        <img className="w-full max-w-[300px] h-auto" src="patek.jpg" alt="Patek Watch" />
        <h2 className="text-black text-xl mt-3">Patek Watch</h2>
        <h3 className="text-green-500 text-xl"> $750</h3>
        <p className="bg-orange-600 text-white py-2 px-5 m-auto max-w-[100px] mt-2 rounded-lg cursor-pointer text-sm hover:bg-red-600">Buy Now</p>
      </div>

      <div className="bg-white p-5 text-center rounded-lg md:hover:translate-y-[-10px]">
        <img className="w-full max-w-[300px] h-auto" src="rolex.jpg" alt="Rolex Watch" />
        <h2 className="text-black text-xl mt-3">Rolex Watch</h2>
        <h3 className="text-green-500 text-xl"> $1200</h3>
        <p className="bg-orange-600 text-white py-2 px-5 m-auto max-w-[100px] mt-2 rounded-lg cursor-pointer text-sm hover:bg-red-600">Buy Now</p>
      </div>

      <div className="bg-white p-5 text-center rounded-lg md:hover:translate-y-[-10px]">
        <img className="w-full max-w-[300px] h-auto" src="seiko.jpg" alt="Seiko Watch" />
        <h2 className="text-black text-xl mt-3">Seiko Watch</h2>
        <h3 className="text-green-500 text-xl"> $100</h3>
        <p className="bg-orange-600 text-white py-2 px-5 m-auto max-w-[100px] mt-2 rounded-lg cursor-pointer text-sm hover:bg-red-600">Buy Now</p>
      </div>
    </div>
  );
};

export default Page;
