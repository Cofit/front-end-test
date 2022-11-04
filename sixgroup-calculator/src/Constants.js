export default {
  CALORIES: "calories",
  SIXGROUPS: [
    "fruits",
    "vegetables",
    "grains",
    "meat_beans_low_fat",
    "meat_beans_medium_fat",
    "meat_beans_high_fat",
    "meat_beans_super_high_fat",
    "milk_skim",
    "milk_low_fat",
    "milk_whole_fat",
    "oil",
  ],
  MACROS: ["carbohydrate", "protein", "fat"],
  MACROS_PERCENTAGES: [
    "carbohydrate_percentage",
    "protein_percentage",
    "fat_percentage",
  ],
  MACROS_UNIT_CALORIES: {
    // calories per gram
    carbohydrate: 4,
    protein: 4,
    fat: 9,
  },
  MACROS_COLORS: {
    carbohydrate: "#ffde00",
    protein: "#ffac23",
    fat: "#96c827",
  },
  SIX_GROUPS_TO_MACROS: {
    // grams per portion
    milk_whole_fat: {
      protein: 8,
      carbohydrate: 12,
      fat: 8,
    },
    milk_low_fat: {
      protein: 8,
      carbohydrate: 12,
      fat: 4,
    },
    milk_skim: {
      protein: 8,
      carbohydrate: 12,
      fat: 0,
    },
    meat_beans_low_fat: {
      protein: 7,
      carbohydrate: 0,
      fat: 3,
    },
    meat_beans_medium_fat: {
      protein: 7,
      carbohydrate: 0,
      fat: 5,
    },
    meat_beans_high_fat: {
      protein: 7,
      carbohydrate: 0,
      fat: 10,
    },
    meat_beans_super_high_fat: {
      protein: 7,
      carbohydrate: 0,
      fat: 14,
    },
    grains: {
      protein: 2,
      carbohydrate: 15,
      fat: 0,
    },
    vegetables: {
      protein: 1,
      carbohydrate: 5,
      fat: 0,
    },
    fruits: {
      protein: 0,
      carbohydrate: 15,
      fat: 0,
    },
    oil: {
      protein: 0,
      carbohydrate: 0,
      fat: 5,
    },
  },
};
