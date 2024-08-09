import { recipes } from "@/utils/Colors";

const LatestRecipes = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 space-y-4">
        <h2 className="text-xl font-bold">Latest Recipes</h2>
        <div className="grid grid-cols-4 gap-4">
          {recipes.map((elem, index) => (
            <div
              className={`aspect-square  rounded-3xl p-4 shadow-md`}
              style={{ background: elem.hex }}
              key={index}
            >
              lol
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LatestRecipes;
