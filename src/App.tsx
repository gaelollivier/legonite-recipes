import { useState } from "react";
import "./App.css";
import { RECIPES, RECIPES_BY_ITEM } from "./recipes";

interface ItemToBuild {
  name: string;
  quantity: number;
  dependencies?: Array<ItemToBuild>;
}

function getDependencies(itemsToBuild: Array<ItemToBuild>): Array<ItemToBuild> {
  return itemsToBuild.map((item) => {
    const recipe = RECIPES_BY_ITEM[item.name];

    if (!recipe) {
      return item;
    }

    return {
      ...recipe,
      ...item,
      dependencies: getDependencies(
        recipe.ingredients.map((dependency) => ({
          ...dependency,
          quantity: dependency.quantity * item.quantity,
        }))
      ),
    };
  });
}

function App() {
  const [itemsToBuild, setItemsToBuild] = useState<Array<ItemToBuild>>([
    { name: "Glider", quantity: 3 },
  ]);

  const itemsToBuildsWithDependencies = getDependencies(itemsToBuild);

  return (
    <div className="p-3">
      <pre>{JSON.stringify({ itemsToBuildsWithDependencies }, null, 4)}</pre>
    </div>
  );
}

export default App;
