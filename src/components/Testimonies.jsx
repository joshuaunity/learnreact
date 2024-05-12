const Testimonies = () => {
  return (
    <div className="mt-96 mb-24">
      <div className="grid grid-cols-4 gap-x-20">
        {/* start */}
        <div className="relative">
          <span className="absolute -top-5 -left-7 text-8xl text-quotegrey">
            “
          </span>
          <p>
            I've never seen a cat food like this before. The nutritional balance
            is exceptional, and I've noticed remarkable improvements in the coat
            and energy levels of the cats I've recommended it to. A game-changer!
          </p>
          <div className="flex pt-4">
            <img
              className="w-10 h-10 rounded-full"
              src="./profiles/one.jpg"
              alt=""
            />
            <div className="pl-4">
              <h1 className="font-bold">Sally Doe</h1>
              <p className="text-xs">Manhattan, New York</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <span className="absolute -top-5 -left-7 text-8xl text-quotegrey">
            “
          </span>
          <p>
            This cat food surpasses expectations. Its nutritional profile is
            unparalleled, leading to remarkable improvements in the health and
            vitality of cats. A true breakthrough in feline nutrition.
          </p>
          <div className="flex pt-4">
            <img
              className="w-10 h-10 rounded-full"
              src="./profiles/two.jpg"
              alt=""
            />
            <div className="pl-4">
              <h1 className="font-bold">Michael Stone</h1>
              <p className="text-xs">San Francisco, California</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <span className="absolute -top-5 -left-7 text-8xl text-quotegrey">
            “
          </span>
          <p>
            Witnessing this cat food's impact is astounding. Its balanced
            nutrition has led to impressive transformations in cats' well-being
            and energy levels. A revolutionary advancement in feline diet.
            완전한👌
          </p>
          <div className="flex pt-4">
            <img
              className="w-10 h-10 rounded-full"
              src="./profiles/three.jpg"
              alt=""
            />
            <div className="pl-4">
              <h1 className="font-bold">Kim Min Jeong - 김민정</h1>
              <p className="text-xs">Seoul, South Korea</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <span className="absolute -top-5 -left-7 text-8xl text-quotegrey">
            “
          </span>
          <p>
            Never have I encountered cat food like this. Its nutritional
            excellence has resulted in remarkable enhancements in cats' overall
            health and vigor. A groundbreaking innovation in feline nourishment.
            凄い!
          </p>
          <div className="flex pt-4">
            <img
              className="w-10 h-10 rounded-full"
              src="./profiles/four.jpg"
              alt=""
            />
            <div className="pl-4">
              <h1 className="font-bold">Daiki Ito - だいき 伊藤 </h1>
              <p className="text-xs">Hiroshima, Japan</p>
            </div>
          </div>
        </div>

        {/* end */}
      </div>
    </div>
  );
};

export default Testimonies;
