const BottomHero = () => {
    return (
      <div className="grid grid-cols-12 gap-x-24 my-48">
        <div className="col-span-6 flex flex-col items-end">
          <div>
            <img className="w-14" src="./friskay.png" alt="" />
          </div>

          <h1 className="font-extrabold text-5xl text-right pt-3 w-2/3">
            Are you ready to go bonkers?
          </h1>
        </div>

        <div className="col-span-6 flex justify-start items-center">
          <button className="mt-12 bg-btncream px-8 py-4 rounded-md hover:border-2 border-black">
            <span className="text-2xl font-bold">Get Bonkers</span>
          </button>
        </div>
      </div>
    );
}

export default BottomHero;