const BottomHero = () => {
    return (
      <div className="grid px-2 lg:px-0 lg:grid-cols-12 lg:gap-x-24 my-48">
        <div className="col-span-6 flex flex-col items-end">
          <div>
            <img className="w-14" src="./friskay.png" alt="" />
          </div>

          <h1 className="font-extrabold text-5xl text-right pt-3 lg:w-2/3">
            Are you ready to go bonkers?
          </h1>
        </div>

        <div className="col-span-6 flex justify-center lg:justify-start items-center">
          <button className="mt-12 bg-btncream px-8 py-4 rounded-md hover:border-2 border-black">
            <span className="text-2xl font-bold">Get Bonkers</span>
          </button>
        </div>
      </div>
    );
}

export default BottomHero;