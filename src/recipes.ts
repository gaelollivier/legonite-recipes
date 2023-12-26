interface Recipe {
  type: string;
  name: string;
  level?: "Common" | "Uncommon" | "Rare" | "Epic";
  ingredients: Array<{ name: string; quantity: number }>;
  buff?: Array<{ name: string; quantity: number | null }>;
  item_requirement?: string;
  use?: string;
  station?: string;
}

export const RECIPES: Recipe[] = [
  // TOYS
  {
    type: "Toy",
    name: "Activation Switch",
    ingredients: [
      { name: "Wood", quantity: 1 },
      { name: "Blast Powder", quantity: 1 },
    ],
  },
  {
    type: "Toy",
    name: "Boom Barrel",
    ingredients: [
      { name: "Plank", quantity: 6 },
      { name: "Blast Powder", quantity: 3 },
    ],
  },
  {
    type: "Toy",
    name: "Small Thruster",
    ingredients: [
      { name: "Wooden Rod", quantity: 1 },
      { name: "Blast Powder", quantity: 1 },
      { name: "Torch", quantity: 1 },
    ],
  },
  {
    type: "Toy",
    name: "Large Thruster",
    ingredients: [
      { name: "Wooden Rod", quantity: 3 },
      { name: "Blast Powder", quantity: 2 },
    ],
  },
  {
    type: "Toy",
    name: "Wooden Crate",
    ingredients: [
      { name: "Copper Bar", quantity: 2 },
      { name: "Flexwood", quantity: 6 },
    ],
  },
  {
    type: "Toy",
    name: "Dynamic Foundation",
    ingredients: [{ name: "Flexwood", quantity: 4 }],
  },
  {
    type: "Toy",
    name: "Small Wheel",
    ingredients: [
      { name: "Flexwood Rod", quantity: 1 },
      { name: "Flexwood", quantity: 1 },
    ],
  },
  {
    type: "Toy",
    name: "Large Wheel",
    ingredients: [
      { name: "Flexwood Rod", quantity: 1 },
      { name: "Flexwood", quantity: 2 },
    ],
  },
  {
    type: "Toy",
    name: "Small Balloon",
    ingredients: [
      { name: "Silk Fabric", quantity: 1 },
      { name: "Torch", quantity: 1 },
      { name: "Cord", quantity: 1 },
    ],
  },
  {
    type: "Toy",
    name: "Large Balloon",
    ingredients: [
      { name: "Silk Fabric", quantity: 2 },
      { name: "Torch", quantity: 1 },
      { name: "Cord", quantity: 1 },
    ],
  },
  // FOOD
  {
    type: "Food",
    name: "Corn on the Cob",
    ingredients: [{ name: "Corn", quantity: 1 }],
    buff: [
      { name: "Hearts", quantity: 3 },
      { name: "Hunger", quantity: 5 },
      { name: "Stamina Regen", quantity: 2 },
    ],
    item_requirement: "Grill",
  },
  {
    type: "Food",
    name: "Fried Egg",
    ingredients: [{ name: "Egg", quantity: 2 }],
    buff: [
      { name: "Hearts", quantity: 5 },
      { name: "Hunger", quantity: 8 },
      { name: "Stamina Regen Boost", quantity: 2 },
    ],
    item_requirement: "Grill",
  },
  {
    type: "Food",
    name: "Grilled Meat",
    ingredients: [{ name: "Meat", quantity: 1 }],
    buff: [
      { name: "Hearts", quantity: 2 },
      { name: "Hunger", quantity: 8 },
    ],
    item_requirement: "Grill",
  },
  {
    type: "Food",
    name: "Spicy Burger",
    ingredients: [
      { name: "Flour", quantity: 1 },
      { name: "Meat", quantity: 1 },
      { name: "Spicy Pepper", quantity: 1 },
    ],
    buff: [
      { name: "Bonus Hearts", quantity: 4 },
      { name: "Hunger", quantity: 10 },
      { name: "Increased Cold Resistance (minutes)", quantity: 10 },
    ],
    item_requirement: "Grill",
  },
  {
    type: "Food",
    name: "Bread",
    ingredients: [
      { name: "Flour", quantity: 2 },
      { name: "Egg", quantity: 2 },
    ],
    buff: [
      { name: "Hearts", quantity: 10 },
      { name: "Hunger", quantity: 10 },
    ],
    item_requirement: "Oven",
  },
  {
    type: "Food",
    name: "Fruit Pie",
    ingredients: [
      { name: "Flour", quantity: 1 },
      { name: "Raspberry", quantity: 1 },
      { name: "Snowberry", quantity: 3 },
      { name: "Slap Berry", quantity: 3 },
    ],
    buff: [
      { name: "Hearts", quantity: 15 },
      { name: "Hunger", quantity: 8 },
      { name: "Stamina Regen Boost", quantity: 2 },
    ],
    item_requirement: "Oven",
  },
  {
    type: "Food",
    name: "Meat Pie",
    ingredients: [
      { name: "Flour", quantity: 1 },
      { name: "Meat", quantity: 1 },
      { name: "Egg", quantity: 1 },
    ],
    buff: [
      { name: "Hearts", quantity: 20 },
      { name: "Hunger", quantity: 20 },
      { name: "Extra Hearts", quantity: 4 },
    ],
    item_requirement: "Oven",
  },
  {
    type: "Food",
    name: "Pumpkin Pie",
    ingredients: [
      { name: "Flour", quantity: 1 },
      { name: "Pumpkin", quantity: 1 },
    ],
    buff: [
      { name: "Hearts", quantity: 10 },
      { name: "Hunger", quantity: 20 },
      { name: "Stamina Regen", quantity: 2 },
    ],
    item_requirement: "Oven",
  },
  {
    type: "Food",
    name: "Pizza",
    ingredients: [
      { name: "Flour", quantity: 2 },
      { name: "Meat", quantity: 1 },
      { name: "Spicy Pepper", quantity: 3 },
      { name: "Cheese", quantity: 1 },
    ],
    buff: [
      { name: "Hearts", quantity: 25 },
      { name: "Hunger", quantity: 20 },
      { name: "Bonus Hearts", quantity: 5 },
    ],
    item_requirement: "Oven",
  },
  {
    type: "Food",
    name: "Slap Juice",
    ingredients: [{ name: "Slap Berry", quantity: 2 }],
    buff: [
      { name: "Hunger", quantity: 5 },
      { name: "Bonus Hearts", quantity: 3 },
      { name: "Stamina Regen", quantity: 2 },
    ],
    item_requirement: "Juicer",
  },
  {
    type: "Food",
    name: "Slurp Juice",
    ingredients: [
      { name: "Raspberry", quantity: 2 },
      { name: "Slurp Mushroom", quantity: 2 },
    ],
    buff: [
      { name: "Hunger", quantity: 5 },
      { name: "Health Regen", quantity: 5 },
    ],
    item_requirement: "Juicer",
  },
  {
    type: "Food",
    name: "Snowberry Shake",
    ingredients: [
      { name: "Snowberry", quantity: 5 },
      { name: "Milk", quantity: 1 },
    ],
    buff: [
      { name: "Hearts", quantity: 12 },
      { name: "Hunger", quantity: 5 },
      { name: "Increased Heat Resistance (minutes)", quantity: 10 },
    ],
    item_requirement: "Juicer",
  },
  // TOOLS
  {
    type: "Tool",
    name: "Common Pickaxe",
    ingredients: [{ name: "Wood", quantity: 5 }],
    item_requirement: "Crafting Bench",
  },
  {
    type: "Tool",
    name: "Uncommon Pickaxe",
    ingredients: [
      { name: "Knotroot Rod", quantity: 3 },
      { name: "Bone", quantity: 3 },
    ],
    item_requirement: "Crafting Bench Lvl 2",
  },
  {
    type: "Tool",
    name: "Rare Pickaxe",
    ingredients: [
      { name: "Flexwood Rod", quantity: 3 },
      { name: "Sandclaw", quantity: 3 },
    ],
    item_requirement: "Crafting Bench Lvl 3",
  },
  {
    type: "Tool",
    name: "Epic Pickaxe",
    ingredients: [
      { name: "Obsidian Slab", quantity: 8 },
      { name: "Frostpine Rod", quantity: 5 },
    ],
    item_requirement: "Crafting Bench Lvl 4",
  },
  {
    type: "Tool",
    name: "Common Forest Axe",
    ingredients: [
      { name: "Wood", quantity: 5 },
      { name: "Granite", quantity: 2 },
    ],
    item_requirement: "Crafting Bench",
  },
  {
    type: "Tool",
    name: "Uncommon Forest Axe",
    ingredients: [
      { name: "Bone", quantity: 3 },
      { name: "Wooden Rod", quantity: 3 },
    ],
    item_requirement: "Crafting Bench Lvl 2",
  },
  {
    type: "Tool",
    name: "Rare Forest Axe",
    ingredients: [
      { name: "Cut Amber", quantity: 5 },
      { name: "Knotroot Rod", quantity: 3 },
    ],
    item_requirement: "Crafting Bench Lvl 3",
  },
  {
    type: "Tool",
    name: "Epic Forest Axe",
    ingredients: [
      { name: "Copper Bar", quantity: 3 },
      { name: "Knotroot Rod", quantity: 3 },
    ],
    item_requirement: "Crafting Bench Lvl 4",
  },
  {
    type: "Tool",
    name: "Common Shovel",
    ingredients: [
      { name: "Wooden Rod", quantity: 3 },
      { name: "Plank", quantity: 1 },
    ],
    item_requirement: "Crafting Bench",
  },
  {
    type: "Tool",
    name: "Uncommon Shovel",
    ingredients: [
      { name: "Knotroot Rod", quantity: 3 },
      { name: "Plank", quantity: 1 },
    ],
    item_requirement: "Crafting Bench Lvl 2",
  },
  {
    type: "Tool",
    name: "Rare Shovel",
    ingredients: [{ name: "Copper Bar", quantity: 8 }],
    item_requirement: "Crafting Bench Lvl 3",
  },
  {
    type: "Tool",
    name: "Epic Shovel",
    ingredients: [{ name: "Iron Bar", quantity: 8 }],
    item_requirement: "Crafting Bench Lvl 4",
  },
  // WEAPONS
  {
    type: "Weapon",
    name: "Shortsword",
    ingredients: [{ name: "Wooden Rod", quantity: 5 }],
    item_requirement: "Crafting Bench",
  },
  {
    type: "Weapon",
    name: "Longsword",
    ingredients: [{ name: "Knotroot Rod", quantity: 5 }],
    item_requirement: "Crafting Bench Lvl 2",
  },
  {
    type: "Weapon",
    name: "Rare Longsword",
    ingredients: [{ name: "Copper Bar", quantity: 12 }],
    item_requirement: "Crafting Bench Lvl 3",
  },
  {
    type: "Weapon",
    name: "Epic Longsword",
    ingredients: [{ name: "Iron Bar", quantity: 12 }],
    item_requirement: "Crafting Bench Lvl 4",
  },
  {
    type: "Weapon",
    name: "Recurve Crossbow",
    ingredients: [
      { name: "Wood", quantity: 5 },
      { name: "Cord", quantity: 1 },
    ],
    item_requirement: "Crafting Bench",
  },
  {
    type: "Weapon",
    name: "Uncommon Recurve Crossbow",
    ingredients: [
      { name: "Knotroot Rod", quantity: 8 },
      { name: "Drawstring", quantity: 1 },
    ],
    item_requirement: "Crafting Bench Lvl 2",
  },
  {
    type: "Weapon",
    name: "Rare Recurve Crossbow",
    ingredients: [
      { name: "Flexwood Rod", quantity: 8 },
      { name: "Drawstring", quantity: 1 },
    ],
    item_requirement: "Crafting Bench Lvl 3",
  },
  {
    type: "Weapon",
    name: "Epic Recurve Crossbow",
    ingredients: [
      { name: "Frostpine Rod", quantity: 8 },
      { name: "Drawstring", quantity: 1 },
      { name: "Iron Bar", quantity: 3 },
    ],
    item_requirement: "Crafting Bench Lvl 4",
  },
  {
    type: "Weapon",
    name: "Arrow",
    ingredients: [
      { name: "Wood", quantity: 1 },
      { name: "Feather", quantity: 1 },
    ],
    item_requirement: "Crafting Bench Lvl 2",
  },
  {
    type: "Weapon",
    name: "Dynamite",
    ingredients: [
      { name: "Blast Powder", quantity: 3 },
      { name: "Knotroot Rod", quantity: 3 },
    ],
    item_requirement: "Crafting Bench Lvl 2",
  },
  // SHIELDS
  {
    type: "Shield",
    name: "Knight Shield",
    ingredients: [
      { name: "Plank", quantity: 5 },
      { name: "Cord", quantity: 1 },
    ],
  },
  {
    type: "Shield",
    name: "Knight Shield - Uncommon",
    ingredients: [
      { name: "Flexwood Rod", quantity: 8 },
      { name: "Cord", quantity: 3 },
    ],
  },
  {
    type: "Shield",
    name: "Knight Shield - Rare",
    ingredients: [{ name: "Copper Bar", quantity: 15 }],
  },
  {
    type: "Shield",
    name: "Knight Shield - Epic",
    ingredients: [{ name: "Iron Bar", quantity: 25 }],
  },
  // CHARMS
  {
    type: "Charm",
    name: "Health Charm - Common",
    ingredients: [{ name: "Silk Thread", quantity: 3 }],
    buff: [
      { name: "Heart", quantity: 1 },
      { name: "Armor", quantity: 1 },
    ],
  },
  {
    type: "Charm",
    name: "Cool-Headed Charm - Uncommon",
    ingredients: [
      { name: "Silk Thread", quantity: 3 },
      { name: "Marble", quantity: 1 },
      { name: "Sand Claw", quantity: 3 },
    ],
    buff: [
      { name: "Hearts", quantity: 3 },
      { name: "Armor", quantity: 5 },
      { name: "Increased Heat Resistance", quantity: 1 },
    ],
  },
  {
    type: "Charm",
    name: "Health Charm - Uncommon",
    ingredients: [
      { name: "Silk Thread", quantity: 3 },
      { name: "Marble", quantity: 1 },
      { name: "Shell", quantity: 1 },
    ],
    buff: [
      { name: "Hearts", quantity: 2 },
      { name: "Armor", quantity: 3 },
    ],
  },
  {
    type: "Charm",
    name: "Hearty Totem - Uncommon",
    ingredients: [
      { name: "Wool Thread", quantity: 3 },
      { name: "Cut Amber", quantity: 5 },
      { name: "Sand Shell", quantity: 5 },
      { name: "Sand Claw", quantity: 6 },
    ],
    buff: [
      { name: "Hearts", quantity: 3 },
      { name: "Armor", quantity: 5 },
    ],
  },
  {
    type: "Charm",
    name: "Health Charm - Rare",
    ingredients: [
      { name: "Wool Thread", quantity: 3 },
      { name: "Cut Amber", quantity: 3 },
      { name: "Sand Claw", quantity: 3 },
      { name: "Flexwood Rod", quantity: 3 },
    ],
    buff: [
      { name: "Hearts", quantity: 3 },
      { name: "Armor", quantity: 5 },
    ],
  },
  {
    type: "Charm",
    name: "Inner Fire Charm - Rare",
    ingredients: [
      { name: "Wool Thread", quantity: 3 },
      { name: "Cut Ruby", quantity: 5 },
      { name: "Brightcore", quantity: 8 },
      { name: "Blast Core", quantity: 3 },
    ],
    buff: [
      { name: "Hearts", quantity: 4 },
      { name: "Armor", quantity: 7 },
      { name: "Increased Cold Resistance", quantity: 1 },
    ],
  },
  {
    type: "Charm",
    name: "Regeneration Charm - Rare",
    ingredients: [
      { name: "Wool Thread", quantity: 3 },
      { name: "Copper Bar", quantity: 5 },
      { name: "Brute Scale", quantity: 3 },
      { name: "Rough Amber", quantity: 10 },
    ],
    buff: [
      { name: "Hearts", quantity: 4 },
      { name: "Armor", quantity: 7 },
      { name: "Revive after dying", quantity: 1 },
    ],
  },
  {
    type: "Charm",
    name: "Totem of the Immortal - Rare",
    ingredients: [
      { name: "Wool Thread", quantity: 3 },
      { name: "Cut Amber", quantity: 5 },
      { name: "Obsidian Slab", quantity: 5 },
      { name: "Sand Brute Scale", quantity: 1 },
    ],
    buff: [
      { name: "Hearts", quantity: 4 },
      { name: "Armor", quantity: 7 },
      { name: "Revive after dying", quantity: 1 },
    ],
  },
  {
    type: "Charm",
    name: "Charm of Resilience - Rare",
    ingredients: [
      { name: "Wool Thread", quantity: 3 },
      { name: "Copper Bar", quantity: 5 },
      { name: "Obsidian Slab", quantity: 5 },
      { name: "Sand Shell", quantity: 10 },
    ],
    buff: [
      { name: "Hearts", quantity: 4 },
      { name: "Armor", quantity: 7 },
    ],
  },
  {
    type: "Charm",
    name: "Charm of Resilience - Epic",
    ingredients: [
      { name: "Heavy Wool Thread", quantity: 3 },
      { name: "Brightcore", quantity: 30 },
      { name: "Frost Brute Scale", quantity: 1 },
      { name: "Blast Core", quantity: 10 },
    ],
    buff: [
      { name: "Hearts", quantity: 5 },
      { name: "Defense Boost after getting hit", quantity: null },
    ],
  },
  {
    type: "Charm",
    name: "Health Charm - Epic",
    ingredients: [
      { name: "Heavy Wool Thread", quantity: 3 },
      { name: "Iron Bar", quantity: 5 },
      { name: "Arctic Claw", quantity: 3 },
      { name: "Brute Scale", quantity: 3 },
    ],
    buff: [{ name: "Hearts", quantity: 5 }],
  },
  {
    type: "Charm",
    name: "Inner Fire Charm - Epic",
    ingredients: [
      { name: "Heavy Wool Thread", quantity: 3 },
      { name: "Brightcore", quantity: 30 },
      { name: "Frost Brute Scale", quantity: 1 },
      { name: "Blast Core", quantity: 10 },
    ],
    buff: [
      { name: "Hearts", quantity: 5 },
      { name: "Increased Cold Resistance", quantity: 1 },
    ],
  },
  {
    type: "Charm",
    name: "Regeneration Charm - Epic",
    ingredients: [
      { name: "Heavy Wool Thread", quantity: 3 },
      { name: "Cut Sapphire", quantity: 5 },
      { name: "Cursed Bone", quantity: 5 },
      { name: "Frost Brute Scale", quantity: 1 },
    ],
    buff: [
      { name: "Hearts", quantity: 5 },
      { name: "Passive Health Regen", quantity: 1 },
    ],
  },
  {
    type: "Charm",
    name: "Hearty Totem - Rare",
    ingredients: [
      { name: "Heavy Wool Thread", quantity: 3 },
      { name: "Arctic Claw", quantity: 3 },
      { name: "Malachite Slab", quantity: 5 },
      { name: "Brute Scale", quantity: 3 },
    ],
    buff: [{ name: "Hearts", quantity: 4 }],
  },
  {
    type: "Charm",
    name: "Good Luck Charm - Rare",
    ingredients: [
      { name: "Heavy Wool Thread", quantity: 3 },
      { name: "Rough Ruby", quantity: 5 },
      { name: "Rough Amber", quantity: 5 },
      { name: "Rough Sapphire", quantity: 5 },
    ],
    buff: [
      { name: "Hearts", quantity: 4 },
      {
        name: "Increases chance of finding more valuable loot",
        quantity: 1,
      },
    ],
  },
  {
    type: "Charm",
    name: "Cool-Headed Charm - Rare",
    ingredients: [
      { name: "Heavy Wool Thread", quantity: 3 },
      { name: "Frost Shell", quantity: 5 },
      { name: "Malachite Slab", quantity: 3 },
      { name: "Sand Brute Scale", quantity: 1 },
    ],
    buff: [
      { name: "Hearts", quantity: 4 },
      { name: "Increased Heat resistance", quantity: null },
    ],
  },
  // GADGETS
  {
    type: "Gadget",
    name: "Glider",
    ingredients: [
      { name: "Flexwood Rod", quantity: 8 },
      { name: "Wool Fabric", quantity: 4 },
      { name: "Silk Fabric", quantity: 6 },
    ],
    use: "Used to glide through the skies from high places. Go sky-high.",
  },
  {
    type: "Gadget",
    name: "Grappler",
    ingredients: [
      { name: "Copper Bar", quantity: 3 },
      { name: "Blast Powders", quantity: 3 },
      { name: "Cords", quantity: 10 },
    ],
    use: "Launch a plunger and get pulled to your target. For those hard-to-reach areas.",
  },
  // PROCESSED MATERIALS
  {
    type: "Processed materials",
    name: "Cord",
    level: "Common",
    ingredients: [{ name: "Vines", quantity: 5 }],
    station: "Spinning Wheel",
  },
  {
    type: "Processed materials",
    name: "Drawstring",
    level: "Common",
    ingredients: [{ name: "Cord", quantity: 5 }],
    station: "Spinning Wheel",
  },
  {
    type: "Processed materials",
    name: "Granite Slab",
    level: "Common",
    ingredients: [{ name: "Granite", quantity: 1 }],
    station: "Stone Breaker",
  },
  {
    type: "Processed materials",
    name: "Plank",
    level: "Common",
    ingredients: [{ name: "Wood", quantity: 1 }],
    station: "Lumber Mill",
  },
  {
    type: "Processed materials",
    name: "Silk Fabric",
    level: "Common",
    ingredients: [{ name: "Silk Thread", quantity: 5 }],
    station: "Loom",
  },
  {
    type: "Processed materials",
    name: "Silk Thread",
    level: "Common",
    ingredients: [{ name: "Silk", quantity: 1 }],
    station: "Spinning Wheel",
  },
  {
    type: "Processed materials",
    name: "Wooden Rod",
    level: "Common",
    ingredients: [{ name: "Wood", quantity: 1 }],
    station: "Lumber Mill",
  },
  {
    type: "Processed materials",
    name: "Wool Fabric",
    level: "Common",
    ingredients: [{ name: "Wool Thread", quantity: 5 }],
    station: "Loom",
  },
  {
    type: "Processed materials",
    name: "Wool Thread",
    level: "Common",
    ingredients: [{ name: "Wool", quantity: 1 }],
    station: "Spinning Wheel",
  },
  {
    type: "Processed materials",
    name: "Cut Amber",
    level: "Uncommon",
    ingredients: [{ name: "Rough Amber", quantity: 1 }],
    station: "Gem Cutter",
  },
  {
    type: "Processed materials",
    name: "Flour",
    level: "Uncommon",
    ingredients: [{ name: "Wheat Grain", quantity: 1 }],
    station: "Grain Mill",
  },
  {
    type: "Processed materials",
    name: "Knotroot Rod",
    level: "Uncommon",
    ingredients: [{ name: "Knotroot", quantity: 1 }],
    station: "Lumber Mill",
  },
  {
    type: "Processed materials",
    name: "Marble Slab",
    level: "Uncommon",
    ingredients: [{ name: "Marble", quantity: 1 }],
    station: "Stone Breaker",
  },
  {
    type: "Processed materials",
    name: "Copper Bar",
    level: "Rare",
    ingredients: [
      { name: "Copper", quantity: 1 },
      { name: "Brightcore", quantity: 2 },
    ],
    station: "Metal Smelter",
  },
  {
    type: "Processed materials",
    name: "Cut Ruby",
    level: "Rare",
    ingredients: [{ name: "Rough Ruby", quantity: 1 }],
    station: "Gem Cutter",
  },
  {
    type: "Processed materials",
    name: "Flexwood Rod",
    level: "Rare",
    ingredients: [{ name: "Flexwood", quantity: 1 }],
    station: "Lumber Mill",
  },
  {
    type: "Processed materials",
    name: "Obsidian Slab",
    level: "Rare",
    ingredients: [{ name: "Obsidian", quantity: 1 }],
    station: "Stone Breaker",
  },
  {
    type: "Processed materials",
    name: "Cut Sapphire",
    level: "Epic",
    ingredients: [{ name: "Rough Sapphire", quantity: 1 }],
    station: "Gem Cutter",
  },
  {
    type: "Processed materials",
    name: "Frostpine Rod",
    level: "Epic",
    ingredients: [{ name: "Frostpine", quantity: 1 }],
    station: "Lumber Mill",
  },
  {
    type: "Processed materials",
    name: "Heavy Wool Thread",
    level: "Epic",
    ingredients: [{ name: "Heavy Wool", quantity: 1 }],
    station: "Spinning Wheel",
  },
  {
    type: "Processed materials",
    name: "Iron Bar",
    level: "Epic",
    ingredients: [
      { name: "Iron", quantity: 1 },
      { name: "Brightcore", quantity: 2 },
    ],
    station: "Metal Smelter",
  },
  {
    type: "Processed materials",
    name: "Malachite Slab",
    level: "Epic",
    ingredients: [{ name: "Malachite", quantity: 1 }],
    station: "Stone Breaker",
  },
];

export const RECIPES_BY_ITEM = RECIPES.reduce<{ [name: string]: Recipe }>(
  (acc, recipe) => ({ ...acc, [recipe.name]: recipe }),
  {}
);
