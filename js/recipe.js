var carbonara = {"title":"Carbonara",
  "level": 2,
  "time" : 30,
  "imageLink":"assets/images/carbonara.png",
  "tools":["Pot","Frying Pan","Strainer","Whisk"],
  "main":[{"name":"Linguine","amount":70,"unit":"g"},
    {"name":"Bacon","amount":28,"unit":"g"},
    {"name":"Egg","amount":0.5,"unit":""},
    {"name":"Milk","amount":100,"unit":"ml"},
    {"name":"Garlic","amount":1,"unit":""},
    {"name":"Cream","amount":100,"unit":"ml"},
    {"name":"Olive Oil","amount":1,"unit":"table spoon"}],
  "sub":[{"name":"Onion","amount":0.25,"unit":""},
    {"name":"Paprika","amount":0.25,"unit":""},
    {"name":"Shrimp","amount":6,"unit":""}],
    "steps": [{
          "step": 0,
          "text": "Crush the onion thickly and Slice the garlic and bacon,too",
          "difficulty": 1,
          "time": 7
      }, {
          "step": 1,
          "text": "Pour whipping cream,milk to the bowl and Mix them",
          "difficulty": 0,
          "time": 5
      }, {
          "step": 2,
          "text": "Boil linquine in salty water for 7 minutes",
          "difficulty": 0,
          "time": 10
      }, {
          "step": 3,
          "text": "Put olive oil to heated pan and fry onion,garlic",
          "difficulty": 0,
          "time": 5
      }, {
          "step": 4,
          "text": "Put bacon and fry it until it becomes somewhat thick",
          "difficulty": 0,
          "time": 5
      }, {
          "step": 5,
          "text": "Turn off the gas and mix them with the yolk",
          "difficulty": 1,
          "time": 4
      }, {
          "step": 6,
          "text": "Put the boiled linquine and fry with them",
          "difficulty": 1,
          "time": 3
      }, {
          "step": 7,
          "text": "Sprinkle powders in your favor",
          "difficulty": 0,
          "time": 2
      }, ]
};
var omelet_rice = {"title": "Omelet with Rice",
  "level": 1,
  "time": 20,
  "imageLink": "assets/images/omelet_rice.jpg",
  "tools":[],
  "main":[{"name": "Egg", "amount": 2, "unit": ""},
    {"name": "Milk", "amount": 1/4, "unit": "cup"},
    {"name": "chopped beef", "amount": 1/4, "unit": "cup"},
    {"name": "Stemmed rice", "amount": 1, "unit": "cup"},
    {"name": "Olive Oil", "amount": 1, "unit": "table spoon"}],
  "sub":[{"name": "Chicken thigh", "amount": 1, "unit": ""}],
  "steps": [{
        "step": 0,
        "text": "Cut chicken thigh into 1 pieces. Cut onion finely.",
        "difficulty": 1,
        "time": 7
    }, {
        "step": 1,
        "text": "Melt butter and add oil in a frying pan at medium heat",
        "difficulty": 0,
        "time": 5
    }, {
        "step": 2,
        "text": "Add chicken and cook for 1-2 minutes. Add onion and cook until onion becomes translucent",
        "difficulty": 0,
        "time": 10
    }, {
        "step": 3,
        "text": "Add cooked rice and cook mixing for 2 minutes. Season rice with salt and pepper. ",
        "difficulty": 0,
        "time": 5
    }, {
        "step": 4,
        "text": "Make room in the frying pan and add ketchup. Cook only ketchup for 30 seconds to cook it down",
        "difficulty": 0,
        "time": 5
    }, {
        "step": 5,
        "text": "Mix rice and ketchup and fry together for 1-2 minutes. Then add frozen peas and cook some more.",
        "difficulty": 1,
        "time": 4
    }, {
        "step": 6,
        "text": "lace half of the ketchup rice into a rice bowl or similar kind of bowl, pack lightly, and unmold on a plate. Make another one.",
        "difficulty": 1,
        "time": 3
    }, {
        "step": 7,
        "text": "Beat eggs and a pinch of salt together. Heat frying pan with 1/2 tsp oil. Pour 1/2 of egg mixture onto hot frying pan and make a crepe-like thin round egg sheet.",
        "difficulty": 0,
        "time": 2
    }, ]
};

var recipes = [carbonara, omelet_rice];
