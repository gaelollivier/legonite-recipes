import React, { useState } from "react";
import "./App.css";
import { RECIPES, RECIPES_BY_NAME, Recipe } from "./recipes";

interface ItemToBuild {
  name: string;
  quantity: number;
  dependencies?: Array<ItemToBuild>;
}

const classNames = (...classes: Array<string | undefined | null>): string =>
  classes.filter(Boolean).join(" ");

function getDependencies(
  recipesToBuild: Array<ItemToBuild>
): Array<ItemToBuild> {
  return recipesToBuild.map((item) => {
    const recipe = RECIPES_BY_NAME[item.name];

    if (!recipe) {
      return item;
    }

    return {
      ...item,
      dependencies: getDependencies(
        (recipe.ingredients ?? []).map((dependency) => ({
          ...dependency,
          quantity: dependency.quantity * item.quantity,
        }))
      ),
    };
  });
}

function flattenDependencies(
  itemsToBuild: Array<ItemToBuild>
): Array<ItemToBuild> {
  const dependencies: Array<ItemToBuild> = itemsToBuild.flatMap((item) =>
    item.dependencies ? flattenDependencies(item.dependencies) : []
  );
  return [...itemsToBuild, ...dependencies];
}

const COLORS_BY_LEVEL = {
  Common: "bg-gray-600",
  Uncommon: "bg-green-800",
  Rare: "bg-cyan-800",
  Epic: "bg-purple-900",
};

const CardButton = ({
  onClick,
  disabled,
  children,
}: {
  onClick?: () => void;
  disabled?: boolean;
  children: JSX.Element;
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={classNames(
      "py-1 text-white rounded h-5",
      disabled
        ? "bg-gray-800 border-gray-600 text-gray-500"
        : "bg-gray-700 hover:bg-gray-600 border border-gray-600"
    )}
  >
    <span className="relative -top-2">{children}</span>
  </button>
);

const RecipeCard = ({
  recipeName,
  add,
  remove,
  count,
}: {
  recipeName: string;
  add?: () => void;
  remove?: () => void;
  count: number;
}) => {
  const recipe = RECIPES_BY_NAME[recipeName];
  if (!recipe) {
    return null;
  }

  const backgroundColor = recipe.level
    ? COLORS_BY_LEVEL[recipe.level]
    : "bg-gray-600";

  return (
    <div className="w-24 h-36 flex flex-col items-stretch float-start ml-4 mb-4 rounded shadow-lg">
      <CardButton disabled={!add} onClick={add}>
        <>+</>
      </CardButton>
      <div
        className={classNames(
          backgroundColor,
          "flex flex-col flex-grow p-1 border border-gray-700 rounded my-1"
        )}
      >
        <div className="flex-grow text-sm text-center text-white">
          {recipe.name}
        </div>
        <div className="text-right text-l font-bold text-white">{count}</div>
      </div>
      <CardButton disabled={!remove || count === 0} onClick={remove}>
        <>-</>
      </CardButton>
    </div>
  );
};

const RecipesGroup = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-400">{title}</h2>
      <div className="flex flex-wrap">{children}</div>
    </div>
  );
};

function App() {
  const [recipesToBuild, setRecipesToBuild] = useState<Record<string, number>>(
    {}
  );

  const [search, setSearch] = useState<string>("");

  const addItemToBuild = (name: string) => {
    setRecipesToBuild({
      ...recipesToBuild,
      [name]: (recipesToBuild[name] ?? 0) + 1,
    });
  };

  const removeItemToBuild = (name: string) => {
    const newQuantity = Math.max(0, (recipesToBuild[name] ?? 0) - 1);
    // Remove from object entirely
    if (newQuantity <= 0) {
      const { [name]: _ignored, ...rest } = recipesToBuild;
      setRecipesToBuild(rest);
    } else {
      setRecipesToBuild({ ...recipesToBuild, [name]: newQuantity });
    }
  };

  const recipesToBuildsWithDependencies = getDependencies(
    Object.entries(recipesToBuild).map(([name, quantity]) => ({
      name,
      quantity,
    }))
  );

  const flattenedDependencies = flattenDependencies(
    recipesToBuildsWithDependencies
  );

  const filteredRecipes =
    search === ""
      ? RECIPES
      : RECIPES.filter((recipe) =>
          recipe.name.toLowerCase().includes(search.toLowerCase())
        );

  const filteredRecipesByType = filteredRecipes.reduce<{
    [type: string]: Array<Recipe>;
  }>(
    (acc, recipe) => ({
      ...acc,
      [recipe.type]: [...(acc[recipe.type] ?? []), recipe],
    }),
    {}
  );

  return (
    <div className="container mx-auto p-8">
      <input
        type="search"
        placeholder="Search..."
        className="mb-8 p-2 w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <RecipesGroup title="Items to Build">
        <>
          {Object.entries(recipesToBuild).length > 0 ? (
            Object.entries(recipesToBuild).map(([recipe, count], recipeKey) => (
              <RecipeCard
                key={recipeKey}
                recipeName={recipe}
                add={() => addItemToBuild(recipe)}
                remove={() => removeItemToBuild(recipe)}
                count={count}
              />
            ))
          ) : (
            <div className="w-24 h-36 flex flex-col pt-2 ml-4 mb-4 bg-gray-800 rounded shadow-lg text-sm text-center text-gray-300">
              Select Items Below
            </div>
          )}
        </>
      </RecipesGroup>
      {Object.entries(filteredRecipesByType).map(([type, recipes], key) => (
        <RecipesGroup key={key} title={type}>
          <>
            {recipes.map((recipe, recipeKey) => (
              <RecipeCard
                key={recipeKey}
                recipeName={recipe.name}
                add={() => addItemToBuild(recipe.name)}
                remove={() => removeItemToBuild(recipe.name)}
                count={recipesToBuild[recipe.name] ?? 0}
              />
            ))}
          </>
        </RecipesGroup>
      ))}
      <div className="p-3 text-white">
        <RecipesGroup title="Dependencies">
          <>
            {flattenedDependencies.map((itemToBuild, key) => (
              <RecipeCard
                key={key}
                recipeName={itemToBuild.name}
                count={itemToBuild.quantity}
              />
            ))}
          </>
        </RecipesGroup>
      </div>
    </div>
  );
}

export default App;
