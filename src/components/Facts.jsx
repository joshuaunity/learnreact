const Facts = () => {
  return (
    <div className="bg-snackfacts relative mt-[350px] mb-24">
      <div className="w-full flex justify-center items-center absolute top-[-160px]">
        <img className="w-1/4 justi" src="./bowl.png" alt="" />
      </div>

      <div className="container mx-auto pt-48 pb-14 grid gap-y-12 gap-x-56 grid-cols-2">
        <div className="col-span-1">
          <h1 className="text-lg font-extrabold bg-factpill inline-block py-0.5 px-2 rounded-md -cus-rotate">
            FACT 1
          </h1>
          <p className="text-xl py-6">
            Free from artificial colors, flavors, and preservatives, our cat
            food offers a natural and nutritious diet for your feline friend.
          </p>
        </div>
        <div className="col-span-1">
          <h1 className="text-lg font-extrabold bg-factpill inline-block py-0.5 px-2 rounded-md -cus-rotate">
            FACT 2
          </h1>
          <p className="text-xl py-6">
            Enriched with omega-3 and omega-6 fatty acids, it promotes a shiny
            coat and healthy skin, making it ideal for cats with sensitive skin
          </p>
        </div>
        <div className="col-span-1">
          <h1 className="text-lg font-extrabold bg-factpill inline-block py-0.5 px-2 rounded-md -cus-rotate">
            FACT 3
          </h1>
          <p className="text-xl py-6">
            Packed with high-quality protein, our new cat food supports strong
            muscles and a healthy heart in cats of all ages.
          </p>
        </div>
        <div className="col-span-1">
          <h1 className="text-lg font-extrabold bg-factpill inline-block py-0.5 px-2 rounded-md -cus-rotate">
            FACT 4
          </h1>
          <p className="text-xl py-6">
            Formulated with prebiotics and probiotics, this cat food aids in
            digestion and supports a balanced gut microbiome.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
