import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const add_Category = async (req: any, res: any) => {
  try {
    const createdData = await prisma.featureRow.create({
      data: {
        Title: "Tasty Discounts",
        Description: "Everyone's been enjoying this jucie discount!",
        Dishes: {
          create: [
            {
              Title: "Us (Pizza)",
              Rating: 5,
              Genre: "United state",
              Address: "San Francisco",
              ImageURL:
                "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg",
              Short_description:
                "All boogers are basically dried out mucus. Our bodies make mucus, a slimy substance that is mostly water, to trap tiny particles of diseases (like a cold virus) and environmental irritants (like pollen and dust) and keep them from traveling down to our lungs.",
              RestaurantsDishes: {
                create: [
                  {
                    Title: "Canada (Pizza)",
                    ImageURL:
                      "https://images.healthshots.com/healthshots/en/uploads/2023/02/09155200/pizza-1.jpg",
                    Short_description:
                      "Along with the glutamate, during the pizza cooking process, the maillard reaction brings forward the flavor compounds that give pizza its distinct flavor",
                    Price: 19,
                  },
                  {
                    Title: "Us (Pizza)",
                    ImageURL:
                      "https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800",
                    Short_description:
                      "We've put together some pizza history facts in honour of the world's favourite comfort food.",
                    Price: 18,
                  },
                  {
                    Title: "Chese (Pizza)",
                    ImageURL:
                      "data:image/jpeg;base64,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",
                    Short_description:
                      "During the cooking process, the sugars and amino acids in the dough and pizza toppings converge to create the flavor compounds",
                    Price: 17,
                  },
                  {
                    Title: "Norway (Pizza)",
                    ImageURL:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBeI1tL4f7b1RDqxvmjOfibk57eXg2HcG6Q&usqp=CAU",
                    Short_description:
                      "Based on etymology, the “Vocabolario Etimologico della Lingua Italiana” reveals that pizza comes from the dialectal pinza from the Latin pinsere, which means to pound or stamp.",
                    Price: 19,
                  },
                  {
                    Title: "Italy (Pizza North)",
                    ImageURL:
                      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
                    Short_description:
                      "A precursor of pizza was probably the focaccia, a flatbread known to the Romans as panis focacius,",
                    Price: 20,
                  },
                  {
                    Title: "Italy (Pizza South)",
                    ImageURL:
                      "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_640.jpg",
                    Short_description:
                      "A precursor of pizza was probably the focaccia, a flatbread known to the Romans as panis focacius",
                    Price: 19,
                  },
                ],
              },
              Long: -122.424978,
              Lat: 37.761095,
            },
            {
              Title: "Bugar (King)",
              Rating: 5,
              Genre: "United state",
              Address: "San Francisco",
              ImageURL:
                "https://media-cdn.tripadvisor.com/media/photo-s/1b/05/a8/4e/chicken-burger.jpg",
              Short_description:
                "If you’ve had it at Indian Market in Santa Fe or to a powwow or pueblo anywhere in the country, you’re probably salivating at the very thought.",
              RestaurantsDishes: {
                create: [
                  {
                    Title: "Bugar (Us)",
                    ImageURL:
                      "https://media-cdn.tripadvisor.com/media/photo-s/1c/76/4d/7c/200-g.jpg",
                    Short_description:
                      "A flame-grilled beef patty, topped with tomatoes, fresh cut lettuce, mayo, pickles, a swirl of ketchup, and sliced onions on a soft sesame seed bun.",
                    Price: 6,
                  },
                  {
                    Title: "Bugar (Canada)",
                    ImageURL:
                      "https://img.freepik.com/premium-photo/burger-with-onion-ring-top_759095-4180.jpg",
                    Short_description:
                      "Our bodies make mucus, a slimy substance that is mostly water, to trap tiny particles of diseases (like a cold virus) and environmental irritants (like pollen and dust) and keep them from traveling down to our lungs",
                    Price: 7,
                  },
                  {
                    Title: "Black (Bugar)",
                    ImageURL:
                      "https://media-cdn.tripadvisor.com/media/photo-s/1b/d4/be/83/crispy-chicken-burger.jpg",
                    Short_description:
                      "our restaurants are known for serving high-quality, great-tasting, and affordable food. ",
                    Price: 8,
                  },
                  {
                    Title: "Taco (North Us)",
                    ImageURL:
                      "https://img.taste.com.au/R_dRdL7V/taste/2022/09/healthy-tacos-recipe-181113-1.jpg",
                    Short_description:
                      "When crafted using healthy ingredients, such as fresh veggies and grilled meats, tacos are considered a balanced meal.",
                    Price: 7,
                  },
                  {
                    Title: "Mexican (Taco)",
                    ImageURL:
                      "https://www.thespruceeats.com/thmb/ereeBcFkDEbDT2VSlDe34sqXO_8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tinga-tinga-de-pollo-4773239-Hero_01-1bd1d960c02a4fdb812323b8c60fd55b.jpg",
                    Short_description:
                      "That's because they offer a good balance of protein, fats, and carbohydrates. Also, they can be a good source of fiber, calcium, and iron",
                    Price: 8,
                  },
                  {
                    Title: "Taco (Canada)",
                    ImageURL:
                      "https://kristineskitchenblog.com/wp-content/uploads/2023/02/tacos-recipe-16-2.jpg",
                    Short_description:
                      "Authentic Mexican tacos involve corn tortillas, not flour. American tacos usually involve hard taco shells",
                    Price: 7,
                  },
                ],
              },
              Long: -122.424978,
              Lat: 37.761095,
            },
            {
              Title: "Cioppino",
              Rating: 4.9,
              Genre: "United state",
              Address: "San Francisco",
              ImageURL:
                "https://media.cnn.com/api/v1/images/stellar/prod/170203151358-cioppino.jpg?q=x_2,y_97,h_1150,w_2043,c_crop/h_720,w_1280/f_webp",
              Short_description:
                "San Francisco’s answer to French bouillabaisse, cioppino (cho-pea-no) is fish stew with an Italian flair.",
              RestaurantsDishes: {
                create: [
                  {
                    Title: "Oden",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5be3dd472e094.jpg?20201127091340&q=80",
                    Short_description:
                      "Oden is a tasty, light, hot dish you’d especially enjoy on those cold winter days. This is another variety of one-pot dishes consisting of several ingredients",
                    Price: 13,
                  },
                  {
                    Title: "Okonomiyaki",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bcd1da4c5d14.jpg?20201127091340&q=80",
                    Short_description:
                      "If you’re visiting the country, you’ll want to try one of the many kinds of this staple dish. Hard to compare to other dishes",
                    Price: 7,
                  },
                  {
                    Title: "Omuraisu",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d763be983.jpg?20201127091340&q=80",
                    Short_description:
                      "The name of this flavorful dish derives from the contraction of the words omelet and rice. Omuraisu",
                    Price: 4,
                  },
                  {
                    Title: "Onigiri",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d9aef3a4c.jpg?20201127091340&q=80",
                    Short_description:
                      "Who hasn’t seen in anime, movies, videos, or documentaries the famous Japanese rice ball, the onigiri?",
                    Price: 6,
                  },
                ],
              },
              Long: -122.424978,
              Lat: 37.761095,
            },
            {
              Title: "Cobb salad",
              Rating: 4.9,
              Genre: "United state",
              Address: "San Francisco",
              ImageURL:
                "https://media.cnn.com/api/v1/images/stellar/prod/170206144051-cobb-salad-2.jpg?q=x_68,y_176,h_1489,w_2647,c_crop/h_720,w_1280/f_webp",
              Short_description:
                "The chef’s salad originated back East, but American food innovators working with lettuce out West weren’t going to be outdone.",
              RestaurantsDishes: {
                create: [
                  {
                    Title: "Ramen",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d9fe5f14f.jpg?20201127091340&q=80",
                    Short_description:
                      "Most people know ramen, especially for its world-famous instant variety, but in Japan, you’ll be surprised by its fantastic taste.",
                    Price: 15,
                  },
                  {
                    Title: "Soba",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1da961d880.jpg?20201127091340&q=80",
                    Short_description:
                      "Soba is a buckwheat noodle specialty of Japan. It’s extremely popular, and it’s served both in general noodle restaurants and in specialized (often expensive) ones.",
                    Price: 11,
                  },
                  {
                    Title: "Somen",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1dace2d4b4.jpg?20201127091340&q=80",
                    Short_description:
                      "Somen is the Japanese version of a prevalent kind of noodle across Asia. Made out of wheat flour, it’s usually served cold",
                    Price: 6,
                  },
                ],
              },
              Long: -122.424978,
              Lat: 37.761095,
            },
            {
              Title: "Tempura",
              Rating: 4.3,
              Genre: "United state",
              Address: "San Francisco",
              ImageURL:
                "https://media.cnn.com/api/v1/images/stellar/prod/150527112722-cnngo-miami-best-eats-joes-keylime-pie.jpg?q=x_4,y_627,h_1939,w_3446,c_crop/h_720,w_1280/f_webp",
              Short_description:
                "If life gives you limes, don’t make limeade, make a Key lime pie. The official state pie of Florida, this sassy tart has made herself a worldwide reputation, which started in – where else? – the Florida Keys, from whence come the tiny limes that gave the pie its name.",
              RestaurantsDishes: {
                create: [
                  {
                    Title: "Sushi and sashimi",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1db1ab3249.jpg?20201127091340&q=80",
                    Short_description:
                      "Of course, we all know these dishes, but we can’t avoid mentioning them in this guide. Sushi and sashimi are among the foods at the pinnacle of Japanese cuisine.",
                    Price: 8,
                  },
                  {
                    Title: "Takowasa",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1db4b206a1.jpg?20201127091340&q=80",
                    Short_description:
                      "Takowasa is raw octopus (tako) served in a wasabi sauce (wasa). This is one of those Japanese dishes that, depending on your cultural background, may appear weird.",
                    Price: 15,
                  },
                  {
                    Title: "Tempura",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1db74630c8.jpg?20201127091340&q=80",
                    Short_description:
                      "Tempura is a great dish all year round, especially for those of you who enjoy sharing a few drinks with friends.",
                    Price: 8,
                  },
                ],
              },
              Long: -122.424978,
              Lat: 37.761095,
            },
            {
              Title: "Mexican flat enchiladas",
              Rating: 4.8,
              Genre: "United state",
              Address: "San Francisco",
              ImageURL:
                "https://media.cnn.com/api/v1/images/stellar/prod/170203122442-new-mexican-flat-enchiladas.jpg?q=x_0,y_101,h_1152,w_2048,c_crop/h_720,w_1280/f_webp",
              Short_description:
                "It was the pre-Columbian Maya who invented tortillas, and apparently the Aztecs who started wrapping them around bits of fish and meat. You have only to go to any Mexican or Tex-Mex place to see what those ancients wrought when someone dipped tortillas",
              RestaurantsDishes: {
                create: [
                  {
                    Title: "Tonkatsu",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1dbe7b1240.jpg?20201127091340&q=80",
                    Short_description:
                      "Tonkatsu is a top-rated and easy-to-find dish of breaded pork cutlet deep-fried in vegetable oil.",
                    Price: 14,
                  },
                  {
                    Title: "Udon",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1dc14d3a0b.jpg?20201127091340&q=80",
                    Short_description:
                      "Of the huge variety of noodles you can find in Japan, udon, similarly to ramen, is one of the most popular. Udon is a thick wheat flour noodle that you can enjoy in its simplest form (broth made of dashi, mirin and soy sauce), or in a variety of combinations.",
                    Price: 8,
                  },
                  {
                    Title: "Yakitori",
                    ImageURL:
                      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1dcb74b63f.jpg?20201127091340&q=80",
                    Short_description:
                      "Although the word yakitori literally means grilled chicken, this concept encompasses all kinds of skewered meat (and vegetables) prepared on a grill. ",
                    Price: 10,
                  },
                ],
              },
              Long: -122.424978,
              Lat: 37.761095,
            },
            {
              Title: "Nachos",
              Rating: 4.8,
              Genre: "United state",
              Address: "San Francisco",
              ImageURL:
                "https://www.rd.com/wp-content/uploads/2022/06/GettyImages-1396261684.jpg?resize=700,467",
              Short_description:
                "Here’s some food trivia for you: This beloved bar snack can be traced back to 1943, when chef Ignacio Anaya García threw together tortilla chips,",
              RestaurantsDishes: {
                create: [
                  {
                    Title: "Mexican Rice",
                    ImageURL:
                      "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Best-Mexican-Dishes-Mexican-Rice.jpg",
                    Short_description:
                      "Mexican Rice, also known as Spanish Rice is a staple in Mexican cooking that is slow-cooked in a crockpot.",
                    Price: 4,
                  },
                  {
                    Title: "Menudo (Tripe Soup)",
                    ImageURL:
                      "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Best-Mexican-Dishes-Menudo.jpg",
                    Short_description:
                      "This Mexican meal may not be for everyone, as it contains tripe (cow stomach). That said, it’s one of the most widely enjoyed dishes throughout Mexico and Central America, making it a must for those looking to experience authentic Mexican cuisine.",
                    Price: 13,
                  },
                  {
                    Title: "Pozole (Hominy Soup)",
                    ImageURL:
                      "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Traditional-Mexican-Dishes-Pozole.jpg",
                    Short_description:
                      "Mexican cuisine is a unique blend of Mesoamerican recipes and Spanish influences. But pozole is entirely Mesoamerican.Made of locally-grown hominy (maize kernels), pozole is a foam-like soup with a slightly sweet flavor.",
                    Price: 12,
                  },
                ],
              },
              Long: -122.424978,
              Lat: 37.761095,
            },
            {
              Title: "Wonton soup",
              Rating: 4.8,
              Genre: "United state",
              Address: "San Francisco",
              ImageURL:
                "https://www.rd.com/wp-content/uploads/2022/06/GettyImages-1032803180.jpg?resize=700,467",
              Short_description:
                "It should come as no surprise that this Chinese cuisine standard is popular with those ordering food delivery. Small dumplings filled with minced pork floating in salty briny chicken broth—what’s not to love?",
              RestaurantsDishes: {
                create: [
                  {
                    Title: "Chicken Fajitas",
                    ImageURL:
                      "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Traditional-Mexican-Foods-Fajitas.jpg",
                    Short_description:
                      "Nowadays a Fajita is basically any type of protein that can be wrapped in a flour tortilla. Traditionally it was a snack that was served to Mexican",
                    Price: 8,
                  },
                  {
                    Title: "Torta Ahogada (Pork Sandwich)",
                    ImageURL:
                      "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Traditional-Mexican-Dishes-Torta-Ahogada.jpg",
                    Short_description:
                      "If you have access to a crispy sub-style bread (like baguettes), you can make Torta Ahogada at home.",
                    Price: 9,
                  },
                  {
                    Title: "Enchiladas",
                    ImageURL:
                      "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Traditional-Mexican-Dishes-Enchiladas.jpg",
                    Short_description:
                      "If you’ve ever eaten at a Mexican restaurant, there’s a good chance you’ve tried enchiladas. After all, these tortilla-based delights are one of the most popular foods in Mexico and the U.S.!",
                    Price: 5,
                  },
                ],
              },
              Long: -122.424978,
              Lat: 37.761095,
            },
            {
              Title: "Bean burrito",
              Rating: 4.8,
              Genre: "United state",
              Address: "San Francisco",
              ImageURL:
                "https://www.rd.com/wp-content/uploads/2022/06/GettyImages-937568924.jpg?resize=700,467",
              Short_description:
                "Bean burritos ranked number one on this list back in 2018, but they seem to have lost some of their luster in recent years.",
              RestaurantsDishes: {
                create: [
                  {
                    Title: "Burritos ",
                    ImageURL:
                      "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Best-Mexican-Foods-Burritos.jpg",
                    Short_description:
                      "Burritos (which translates to tiny donkeys) date back to ancient Mesoamerican civilizations.",
                    Price: 4,
                  },
                  {
                    Title: "Caldo De Res (Beef And Vegetable Soup)",
                    ImageURL:
                      "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Traditional-Mexican-Foods-Caldo-de-Res.jpg",
                    Short_description:
                      "Caldo de Res is one of the most popular dishes in Central and South America, especially during winter.",
                    Price: 9,
                  },
                  {
                    Title: "Tourtiere",
                    ImageURL:
                      "https://xyuandbeyond.com/wp-content/uploads/poutine-1024x689.jpg",
                    Short_description:
                      "Another Québécois favourite this pie is available again all over Canada. This pie must have a pastry top and bottom and is packed with a mix of veal and pork meat.",
                    Price: 9,
                  },
                ],
              },
              Long: -122.424978,
              Lat: 37.761095,
            },
            {
              Title: "Cheesy fiesta potatoes",
              Rating: 4.8,
              Genre: "United state",
              Address: "San Francisco",
              ImageURL:
                "https://www.rd.com/wp-content/uploads/2020/11/RD-favorite-food-fiesta-potatoes-via-avneets.eats-.jpg?resize=700,467",
              Short_description:
                "Yes, this refers to the famous Taco Bell favorite. The dish is made up of lightly breaded and crispy russet potatoes coated in nacho cheese and reduced-fat sour cream. ",
              RestaurantsDishes: {
                create: [
                  {
                    Title: "Soupe à l’oignon (French Onion Soup)",
                    ImageURL:
                      "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-onion-soup.jpg.webp",
                    Short_description:
                      "When ushering in the new year, soupe à l’oignon can be eaten well after dinner! But in my opinion and in the opinion of many French people, it’s best to have it as a starter.",
                    Price: 8,
                  },
                  {
                    Title: "Bouillabaisse",
                    ImageURL:
                      "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-bouillabaisse.jpg.webp",
                    Short_description:
                      "This fish recipe was once a traditional fishermen’s dish made from unsold fish. Today, the bouillabaisse from Marseille is a French classic made with all sorts of cooked seafood that can be found in the south of France.",
                    Price: 9,
                  },
                  {
                    Title: "Bisque",
                    ImageURL:
                      "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-bisque.jpg.webp",
                    Short_description:
                      "Like bouillabaisse, bisqueis a lovely fish soup with lots of flavor. It’s traditionally made with a base of seafood – mostly lobster or crab – along with white wine, herbs, and spices.",
                    Price: 7,
                  },
                ],
              },
              Long: -122.424978,
              Lat: 37.761095,
            },
            {
              Title: "Tacos",
              Rating: 4.8,
              Genre: "United state",
              Address: "San Francisco",
              ImageURL:
                "https://www.rd.com/wp-content/uploads/2022/06/GettyImages-960337396.jpg?resize=700,467",
              Short_description:
                "This Mexican classic has certainly been Americanized—just look at Taco Bell for proof.",
              RestaurantsDishes: {
                create: [
                  {
                    Title: "Salade Niçoise",
                    ImageURL:
                      "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-salade-nicoise.jpg.webp",
                    Short_description:
                      "This salad is a typical French dish from the city of Nice. It can be eaten throughout the year and brings a burst of sunshine to your meal!",
                    Price: 8,
                  },
                  {
                    Title: "Terrine",
                    ImageURL:
                      "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-terrine.jpg.webp",
                    Short_description:
                      "This French delicacy is a long-standing culinary tradition in many French households. In fact, almost every family has its own recipe!",
                    Price: 7,
                  },
                  {
                    Title: "Foie Gras",
                    ImageURL:
                      "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-cold-foie-gras.jpg.webp",
                    Short_description:
                      "Foie gras is one of the most popular French foods. It’s a classic French dish that French people are quite proud of.",
                    Price: 5,
                  },
                ],
              },
              Long: -122.424978,
              Lat: 37.761095,
            },
            {
              Title: "Gyoza",
              Rating: 4.8,
              Genre: "United state",
              Address: "San Francisco",
              ImageURL:
                "https://www.rd.com/wp-content/uploads/2022/06/GettyImages-1286079699.jpg?resize=700,467",
              Short_description:
                "It’s hard to eat just one of these Japanese fried dumplings (often filled with pork and cabbage).",
              RestaurantsDishes: {
                create: [
                  {
                    Title: "Ratatouille",
                    ImageURL:
                      "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-ratatouille.jpg.webp",
                    Short_description:
                      "Ratatouille is one of the most comforting French foods. Originally from the south of France, it’s a delicious and healthy mix of vegetables like onions, garlic, tomatoes, zucchini, peppers, and eggplant.",
                    Price: 10,
                  },
                  {
                    Title: "Quiche Lorraine",
                    ImageURL:
                      "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-quiche-lorraine.jpg.webp",
                    Short_description:
                      "Quiche lorraine is one of the most well-known French dishes. It’s a traditional type of quiche that’s delicious and very easy to prepare. Originally from the east of France, it can be enjoyed either as a starter or as a main course.",
                    Price: 5,
                  },
                  {
                    Title: "Tartiflette",
                    ImageURL:
                      "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-tartiflette.jpg.webp",
                    Short_description:
                      "Tartiflette is one of the most delicious traditional dishes from the French Alps. It combines the amazing taste of a soft melted cheese called “reblochon” with fried onions, soft potatoes, and diced ham.",
                    Price: 12,
                  },
                  {
                    Title: "Confit de Canard",
                    ImageURL:
                      "Confit de canard is an incredibly tasty culinary specialty from the southwest region of France.",
                    Short_description:
                      "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-confit-de-canard.jpg.webp",
                    Price: 8,
                  },
                ],
              },
              Long: -122.424978,
              Lat: 37.761095,
            },
          ],
        },
      },
    });
    res.json(createdData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while adding data." });
  }
};

export { add_Category };

/*
      {
        Title: "Featured",
        Description: "Paid placements from our partners",
        Dishes: [
          {
            Title: "Tempura",
            Rating: 5,
            Genre: "Japanese",
            Address: "Osaka",
            ImageURL:
              "https://top.his-usa.com/destination-japan/up_img/cke/imgs/20171122/tempura.jpg",
            Short_description:
              "Fried food may not always be the best for you, but no one can deny how delicious it can be. In Japan, one of the most famous types of fried food is tempura.",
            RestaurantsDishes: [
              {
                Title: "Tempura crispy",
                ImageURL:
                  "data:image/jpeg;base64,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",
                Short_description:
                  "Tempura is a popular Japanese dish in which food (most commonly seafood, vegetables, or sushi) is lightly battered and deep fried to create a light, crispy coating.",
                Price: 12,
              },
              {
                Title: "Sushi!",
                ImageURL:
                  "https://top.his-usa.com/destination-japan/up_img/cke/imgs/20171122/sushi.jpg",
                Short_description:
                  "One of the first Japanese foods that come to mind when Japan is mentioned is probably sushi.",
                Price: 25,
              },
              {
                Title: "Ramen",
                ImageURL:
                  "https://top.his-usa.com/destination-japan/up_img/cke/imgs/20171122/ramen.jpg",
                Short_description:
                  "Ramen is another dish that is very popular in Japan. Although the origins of ramen are unclear, some say it has its roots in China",
                Price: 25,
              },
              {
                Title: "Japanese curry",
                ImageURL:
                  "https://top.his-usa.com/destination-japan/up_img/cke/imgs/20171122/japaensecurry.jpg",
                Short_description:
                  "Japanese curry is similar to some curries found in other parts of east asia, but it greatly differs from curry found in places like India",
                Price: 13,
              },
              {
                Title: "Okonomiyaki",
                ImageURL:
                  "https://top.his-usa.com/destination-japan/up_img/cke/imgs/20171122/hiroshimaokonomiyaki.jpg",
                Short_description:
                  "Okonomiyaki is a dish that we've covered in many other of our blogs. It is a savory pancake made from a flour and water batter",
                Price: 14,
              },
              {
                Title: "Udon",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-udon/Blog-page-156-udon?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  " One of the three main noodle varieties eaten in Japan; udon noodles are thick, chewy, and traditionally made from wheat flour and brine water.",
                Price: 15,
              },
              {
                Title: "Miso Soup",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d5f3733ed.jpg?20201127091340&q=80",
                Short_description:
                  "When talking about food in Japan, we cannot avoid mentioning miso soup. This dish, served in almost any combination of breakfast,",
                Price: 13,
              },
              {
                Title: "Nabe",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d61fa154c.jpg?20201127091340&q=80",
                Short_description:
                  "Nabe means cooking pot. It’s sometimes referred to as nabemono (literally, “things in a cooking pot”).",
                Price: 16,
              },
            ],
            Long: 34.704311,
            Lat: 135.496242,
          },
          {
            Title: "Sushi",
            Rating: 5,
            Genre: "Japanese",
            Address: "Osaka",
            ImageURL:
              "https://res.cloudinary.com/simplotel/image/upload/x_0,y_26,w_500,h_282,r_0,c_crop,q_80,fl_progressive/w_455,f_auto,c_fit/evoma---business-hotel-k-r-puram-bangalore/japanese-food_Evoma_Whitefield_Bangalore_rds4kt",
            Short_description:
              "One of the first Japanese foods that come to mind when Japan is mentioned is probably sushi. And why wouldn't it be? Sushi is widely available in many countries throughout the globe, and is commonly associated with Japan.",
            RestaurantsDishes: [
              {
                Title: "Tempura (crispy)",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-156-tempura/Blog-156-tempura?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "If you enjoy crispy fried foods, then you will love tempura. Tempura are pieces or slices of meat.",
                Price: 14,
              },
              {
                Title: "Yakitori",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Yakitori-Grilled-Skewers/Blog-page-156-Yakitori-Grilled-Skewers?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "While we in the UK might pick up a serving of chips or a hot dog during a sports match, the Japanese will pick up some yakitori. With a name literally meaning ‘barbecued chicken’",
                Price: 13,
              },
              {
                Title: "Sashimi",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-sashimi/Blog-page-156-sashimi?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Possibly one of the most controversial dishes in all of Japanese cuisine, sashimi is raw fish or meat that has been expertly cut into thin slices and typically .",
                Price: 25,
              },
              {
                Title: "Ramen (North)",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-ramen/Blog-page-156-ramen?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Ramen is a noodle soup dish consisting of wheat noodles (also known as ’ramen noodles’), a savoury broth (soy sauce, salt, miso, and tonkotsu pork bone are the four main ramen broth bases) and toppings of meat, protein,",
                Price: 25,
              },
              {
                Title: "Donburi",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Oyakodon/Blog-page-156-Oyakodon?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "This rice bowl dish is almost as popular as ramen in Japan and a common lunchtime choice among busy Japanese workers. Donburi is made by preparing ",
                Price: 16,
              },
            ],
            Long: 34.704311,
            Lat: 135.496242,
          },
          {
            Title: "Udon",
            Rating: 4.8,
            Genre: "Japanese",
            Address: "Osaka",
            ImageURL:
              "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-udon/Blog-page-156-udon?$poi$&w=556&h=391&sm=c&fmt=auto",
            Short_description:
              "One of the three main noodle varieties eaten in Japan; udon noodles are thick, chewy, and traditionally made from wheat flour and brine water.",
            RestaurantsDishes: [
              {
                Title: "Oden",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Oden-Hot-Pot/Blog-page-156-Oden-Hot-Pot?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "No cold Japanese winter would be complete without oden. This winter hot pot dish, or nabemono, is made by taking an assortment of vegetables and proteins ",
                Price: 22,
              },
              {
                Title: "Tamagoyaki",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Tamagoyaki-Japanese-Omelette/Blog-page-156-Tamagoyaki-Japanese-Omelette?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "A versatile delicacy that can be enjoyed for breakfast, lunch, or dinner, tamagoyaki (which literally means ‘cooked egg’) is a Japanese omelette made",
                Price: 16,
              },
              {
                Title: " Soba",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Zaru-Soba-Chilled-Noodles/Blog-page-156-Zaru-Soba-Chilled-Noodles?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Otherwise known as ‘buckwheat noodles’ (‘soba’ is the Japanese word for ‘buckwheat’), soba are one of the three main varieties of noodle most frequently eaten in Japan.",
                Price: 15,
              },
              {
                Title: "Tonkatsu",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-tonkatsu-pork-cutlets/Blog-page-156-tonkatsu-pork-cutlets?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Tonkatsu pork cutlets are one of the many yoshoku, or ‘western-style’ foods, that were originally introduced to Japan by Europeans. Like most other yoshoku foods,",
                Price: 14,
              },
            ],
            Long: 34.704311,
            Lat: 135.496242,
          },
          {
            Title: "Donburi",
            Rating: 4.5,
            Genre: "Japanese",
            Address: "Osaka",
            ImageURL:
              "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Oyakodon/Blog-page-156-Oyakodon?$poi$&w=556&h=391&sm=c&fmt=auto",
            Short_description:
              "This rice bowl dish is almost as popular as ramen in Japan and a common lunchtime choice among busy Japanese workers.",
            RestaurantsDishes: [
              {
                Title: "Sukiyaki",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-sukiyaki/Blog-page-156-sukiyaki?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Like oden, sukiyaki is a Japanese nabemono hot pot dish most commonly enjoyed during the winter. ",
                Price: 17,
              },
              {
                Title: "Miso Soup",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-miso-soup/Blog-page-156-miso-soup?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Few Japanese dishes are consumed more often or more consistently than miso soup.",
                Price: 14,
              },
              {
                Title: "Okonomiyaki",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-okonomiyaki-japanese-savoury-pancake/Blog-page-156-okonomiyaki-japanese-savoury-pancake?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Okonomiyaki is made by mixing together batter, sliced cabbage, and other savoury ingredients; spooning the mixture onto a hot plate;",
                Price: 13.7,
              },
              {
                Title: "Mentaiko",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-mentaiko/Blog-page-156-mentaiko?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Lovers of salty seafood will reach the peak of their desires with mentaiko.",
                Price: 7,
              },
              {
                Title: "Nikujaga",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Nikujaga-Meat-and-Potato-Stew/Blog-page-156-Nikujaga-Meat-and-Potato-Stew?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "A flavoursome savoury dish of meat, potatoes and assorted vegetables simmered in soy sauce, sake, mirin and sugar, Nikujaga",
                Price: 14,
              },
            ],
            Long: 34.704311,
            Lat: 135.496242,
          },
          {
            Title: "Oden",
            Rating: 4.5,
            Genre: "Japanese",
            Address: "Osaka",
            ImageURL:
              "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Oden-Hot-Pot/Blog-page-156-Oden-Hot-Pot?$poi$&w=556&h=391&sm=c&fmt=auto",
            Short_description:
              "No cold Japanese winter would be complete without oden. This winter hot pot dish, or nabemono",
            RestaurantsDishes: [
              {
                Title: "Onigiri",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Omusubi-Mixed-Onigiri-Rice-Ball/Blog-page-156-Omusubi-Mixed-Onigiri-Rice-Ball?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Like the sandwich could be considered the original portable food of British cuisine, the onigiri rice ball is the original portable food of Japan.",
                Price: 3,
              },
              {
                Title: "Curry Rice",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-curry-rice/Blog-page-156-curry-rice?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Known in Japanese as kare or kare raisu, Japanese curry is a yoshoku dish that was originally introduced to the Japanese ",
                Price: 6,
              },
              {
                Title: "Unagi no Kabayaki",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-unagi--no-kabayaki/Blog-page-156-unagi--no-kabayaki?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Unagi’ is the Japanese word for ‘freshwater eel’, and unagi no kabayaki is one popular unagi dish that dates back to the Edo period (1603-1868),",
                Price: 11,
              },
              {
                Title: "Shabu shabu hot pot",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Shabu-Shabu-Hot-Pot/Blog-page-156-Shabu-Shabu-Hot-Pot?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Shabushabu is a nabemono hot pot dish similar to sukiyaki, made by boiling vegetables.",
                Price: 15,
              },
            ],
            Long: 34.704311,
            Lat: 135.496242,
          },
          {
            Title: "Tamagoyaki",
            Rating: 4.6,
            Genre: "Japanese",
            Address: "Osaka",
            ImageURL:
              "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Tamagoyaki-Japanese-Omelette/Blog-page-156-Tamagoyaki-Japanese-Omelette?$poi$&w=556&h=391&sm=c&fmt=auto",
            Short_description:
              "A versatile delicacy that can be enjoyed for breakfast, lunch, or dinner, tamagoyaki (which literally means ‘cooked egg’) is a Japanese omelette made by sequentially cooking and rolling up several layers of beaten egg",
            RestaurantsDishes: [
              {
                Title: "Gyoza",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Gyoza-dumplings/Blog-page-156-Gyoza-dumplings?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "Gyoza are savoury moon-shaped dumplings, made from a minced mixture of savoury fillings (pork mince, cabbage, green onion and mushroom is a common combination,",
                Price: 8,
              },
              {
                Title: "Takoyaki",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-takoyaki-octopus-balls/Blog-page-156-takoyaki-octopus-balls?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "As far as Japanese street vendor foods are concerned, few are more notorious than takoyaki.",
                Price: 7,
              },
              {
                Title: "Kaiseki Ryori",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-kaiseki-ryori/Blog-page-156-kaiseki-ryori?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "If you are hoping to experience the Japanese equivalent of haute cuisine, then you need to try kaiseki ryori. ",
                Price: 20,
              },
            ],
            Long: 34.704311,
            Lat: 135.496242,
          },
          {
            Title: "Soba",
            Rating: 4.5,
            Genre: "Japanese",
            Address: "Osaka",
            ImageURL:
              "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Zaru-Soba-Chilled-Noodles/Blog-page-156-Zaru-Soba-Chilled-Noodles?$poi$&w=556&h=391&sm=c&fmt=auto",
            Short_description:
              "Otherwise known as ‘buckwheat noodles’ (‘soba’ is the Japanese word for ‘buckwheat’), soba are one of the three main varieties of noodle most frequently eaten in Japan.",
            RestaurantsDishes: [
              {
                Title: "Yakisoba",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-yakisoba-noodles/Blog-page-156-yakisoba-noodles?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "It is virtually impossible to attend a summer festival in Japan and not come across a yakisoba stand.",
                Price: 6,
              },
              {
                Title: "Wagashi",
                ImageURL:
                  "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-wagashi/Blog-page-156-wagashi?$poi$&w=556&h=391&sm=c&fmt=auto",
                Short_description:
                  "The most authentic way to finish off a Japanese meal or matcha tea ceremony is with wagashi",
                Price: 3,
              },
              {
                Title: "Buta-No-Shogayaki (Ginger Pork)",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d19857598.jpg?20201127091340&q=80",
                Short_description:
                  "This is one of the most common (and tasty) Japanese dishes. Try it in many restaurants,",
                Price: 5,
              },
            ],
            Long: 34.704311,
            Lat: 135.496242,
          },
          {
            Title: "Tonkatsu",
            Rating: 4.2,
            Genre: "Japanese",
            Address: "Osaka",
            ImageURL:
              "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-tonkatsu-pork-cutlets/Blog-page-156-tonkatsu-pork-cutlets?$poi$&w=556&h=391&sm=c&fmt=auto",
            Short_description:
              "Tonkatsu pork cutlets are one of the many yoshoku, or ‘western-style’ foods, that were originally introduced to Japan by Europeans. Like most other yoshoku foods, the Japanese took the original tonkatsu and made it their own.",
            RestaurantsDishes: [
              {
                Title: "Champon",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d1cb90395.jpg?20201127091340&q=80",
                Short_description:
                  "This dish may look like ramen at first sight (and you could say it belongs to the same category),",
                Price: 15,
              },
              {
                Title: "Edamame",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d1fb5d0c5.jpg?20201127091340&q=80",
                Short_description:
                  "Okay, so they're not really a dish, but they are a wildly popular food in Japan. These are not yet mature soybeans,",
                Price: 2,
              },
              {
                Title: "Fugu",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d24292bdf.jpg?20201127091340&q=80",
                Short_description:
                  "For those looking not only for amazing food in Japan, but also for a thrilling experience, fugu is the dish to try!",
                Price: 13,
              },
            ],
            Long: 34.704311,
            Lat: 135.496242,
          },
          {
            Title: "Sukiyaki",
            Rating: 4.4,
            Genre: "Japanese",
            Address: "Osaka",
            ImageURL:
              "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-sukiyaki/Blog-page-156-sukiyaki?$poi$&w=556&h=391&sm=c&fmt=auto",
            Short_description:
              "Like oden, sukiyaki is a Japanese nabemono hot pot dish most commonly enjoyed during the winter. Sukiyaki hot pots are prepared by searing beef slices in the hot pot",
            RestaurantsDishes: [
              {
                Title: "Gyudon",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d32fb27cf.jpg?20201127091340&q=80",
                Short_description:
                  "Gyudon is a mouth-watering one-dish meal of beef over rice (gyu = beef). Gyudon is a quick meal served in specific restaurants or Japanese fast-food chains such as Yoshinoya.",
                Price: 7,
              },
              {
                Title: "Gyukatsu (Beef cutlet)",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d374d4ee2.jpg?20201127091340&q=80",
                Short_description:
                  "A wonderful beef variation of the popular pork-based tonkatsu (which we also recommend you try) ",
                Price: 13,
              },
              {
                Title: "Gyutan",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d3a0bd6f4.jpg?20201127091340&q=80",
                Short_description:
                  "Depending on your country of origin, this dish may appear, at a glance, too atypical, but bear with us and keep reading.",
                Price: 12,
              },
            ],
            Long: 34.704311,
            Lat: 135.496242,
          },
          {
            Title: "Miso Soup",
            Rating: 4.2,
            Genre: "Japanese",
            Address: "Osaka",
            ImageURL:
              "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-miso-soup/Blog-page-156-miso-soup?$poi$&w=556&h=391&sm=c&fmt=auto",
            Short_description:
              "Few Japanese dishes are consumed more often or more consistently than miso soup. ",
            RestaurantsDishes: [
              {
                Title: "Karaage",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d402dbfd2.jpg?20201127091340&q=80",
                Short_description:
                  "As soon as you set foot in Japan, you’ll start seeing the typical Japanese fried chicken: karaage. Now, ",
                Price: 9,
              },
              {
                Title: "Katsudon",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d42aa27b4.jpg?20201127091340&q=80",
                Short_description:
                  "Like gyudon, but prepared with pork, this is another popular Japanese food and often neglected (by foreigners)",
                Price: 15,
              },
              {
                Title: "Kushikatsu",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d47447a86.jpg?20201127091340&q=80",
                Short_description:
                  "This dish, also known as kushiage, is crunchy deep-fried skewered meat, fish, or vegetables. The etymology refers to its preparation",
                Price: 5,
              },
            ],
            Long: 34.704311,
            Lat: 135.496242,
          },
        ],
      },
      {
        Title: "Tasty Discounts",
        Description: "Everyone's been enjoying this jucie discount!",
        Dishes: [
          {
            Title: "Us (Pizza)",
            Rating: 5,
            Genre: "United state",
            Address: "San Francisco",
            ImageURL:
              "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg",
            Short_description:
              "All boogers are basically dried out mucus. Our bodies make mucus, a slimy substance that is mostly water, to trap tiny particles of diseases (like a cold virus) and environmental irritants (like pollen and dust) and keep them from traveling down to our lungs.",
            RestaurantsDishes: [
              {
                Title: "Canada (Pizza)",
                ImageURL:
                  "https://images.healthshots.com/healthshots/en/uploads/2023/02/09155200/pizza-1.jpg",
                Short_description:
                  "Along with the glutamate, during the pizza cooking process, the maillard reaction brings forward the flavor compounds that give pizza its distinct flavor",
                Price: 19,
              },
              {
                Title: "Us (Pizza)",
                ImageURL:
                  "https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800",
                Short_description:
                  "We've put together some pizza history facts in honour of the world's favourite comfort food.",
                Price: 18,
              },
              {
                Title: "Chese (Pizza)",
                ImageURL:
                  "data:image/jpeg;base64,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",
                Short_description:
                  "During the cooking process, the sugars and amino acids in the dough and pizza toppings converge to create the flavor compounds",
                Price: 17,
              },
              {
                Title: "Norway (Pizza)",
                ImageURL:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBeI1tL4f7b1RDqxvmjOfibk57eXg2HcG6Q&usqp=CAU",
                Short_description:
                  "Based on etymology, the “Vocabolario Etimologico della Lingua Italiana” reveals that pizza comes from the dialectal pinza from the Latin pinsere, which means to pound or stamp.",
                Price: 19,
              },
              {
                Title: "Italy (Pizza North)",
                ImageURL:
                  "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
                Short_description:
                  "A precursor of pizza was probably the focaccia, a flatbread known to the Romans as panis focacius,",
                Price: 20,
              },
              {
                Title: "Italy (Pizza South)",
                ImageURL:
                  "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_640.jpg",
                Short_description:
                  "A precursor of pizza was probably the focaccia, a flatbread known to the Romans as panis focacius",
                Price: 19,
              },
            ],
            Long: -122.424978,
            Lat: 37.761095,
          },
          {
            Title: "Bugar (King)",
            Rating: 5,
            Genre: "United state",
            Address: "San Francisco",
            ImageURL:
              "https://media-cdn.tripadvisor.com/media/photo-s/1b/05/a8/4e/chicken-burger.jpg",
            Short_description:
              "If you’ve had it at Indian Market in Santa Fe or to a powwow or pueblo anywhere in the country, you’re probably salivating at the very thought.",
            RestaurantsDishes: [
              {
                Title: "Bugar (Us)",
                ImageURL:
                  "https://media-cdn.tripadvisor.com/media/photo-s/1c/76/4d/7c/200-g.jpg",
                Short_description:
                  "A flame-grilled beef patty, topped with tomatoes, fresh cut lettuce, mayo, pickles, a swirl of ketchup, and sliced onions on a soft sesame seed bun.",
                Price: 6,
              },
              {
                Title: "Bugar (Canada)",
                ImageURL:
                  "https://img.freepik.com/premium-photo/burger-with-onion-ring-top_759095-4180.jpg",
                Short_description:
                  "Our bodies make mucus, a slimy substance that is mostly water, to trap tiny particles of diseases (like a cold virus) and environmental irritants (like pollen and dust) and keep them from traveling down to our lungs",
                Price: 7,
              },
              {
                Title: "Black (Bugar)",
                ImageURL:
                  "https://media-cdn.tripadvisor.com/media/photo-s/1b/d4/be/83/crispy-chicken-burger.jpg",
                Short_description:
                  "our restaurants are known for serving high-quality, great-tasting, and affordable food. ",
                Price: 8,
              },
              {
                Title: "Taco (North Us)",
                ImageURL:
                  "https://img.taste.com.au/R_dRdL7V/taste/2022/09/healthy-tacos-recipe-181113-1.jpg",
                Short_description:
                  "When crafted using healthy ingredients, such as fresh veggies and grilled meats, tacos are considered a balanced meal.",
                Price: 7,
              },
              {
                Title: "Mexican (Taco)",
                ImageURL:
                  "https://www.thespruceeats.com/thmb/ereeBcFkDEbDT2VSlDe34sqXO_8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tinga-tinga-de-pollo-4773239-Hero_01-1bd1d960c02a4fdb812323b8c60fd55b.jpg",
                Short_description:
                  "That's because they offer a good balance of protein, fats, and carbohydrates. Also, they can be a good source of fiber, calcium, and iron",
                Price: 8,
              },
              {
                Title: "Taco (Canada)",
                ImageURL:
                  "https://kristineskitchenblog.com/wp-content/uploads/2023/02/tacos-recipe-16-2.jpg",
                Short_description:
                  "Authentic Mexican tacos involve corn tortillas, not flour. American tacos usually involve hard taco shells",
                Price: 7,
              },
            ],
            Long: -122.424978,
            Lat: 37.761095,
          },
          {
            Title: "Cioppino",
            Rating: 4.9,
            Genre: "United state",
            Address: "San Francisco",
            ImageURL:
              "https://media.cnn.com/api/v1/images/stellar/prod/170203151358-cioppino.jpg?q=x_2,y_97,h_1150,w_2043,c_crop/h_720,w_1280/f_webp",
            Short_description:
              "San Francisco’s answer to French bouillabaisse, cioppino (cho-pea-no) is fish stew with an Italian flair.",
            RestaurantsDishes: [
              {
                Title: "Oden",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5be3dd472e094.jpg?20201127091340&q=80",
                Short_description:
                  "Oden is a tasty, light, hot dish you’d especially enjoy on those cold winter days. This is another variety of one-pot dishes consisting of several ingredients",
                Price: 13,
              },
              {
                Title: "Okonomiyaki",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bcd1da4c5d14.jpg?20201127091340&q=80",
                Short_description:
                  "If you’re visiting the country, you’ll want to try one of the many kinds of this staple dish. Hard to compare to other dishes",
                Price: 7,
              },
              {
                Title: "Omuraisu",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d763be983.jpg?20201127091340&q=80",
                Short_description:
                  "The name of this flavorful dish derives from the contraction of the words omelet and rice. Omuraisu",
                Price: 4,
              },
              {
                Title: "Onigiri",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d9aef3a4c.jpg?20201127091340&q=80",
                Short_description:
                  "Who hasn’t seen in anime, movies, videos, or documentaries the famous Japanese rice ball, the onigiri?",
                Price: 6,
              },
            ],
            Long: -122.424978,
            Lat: 37.761095,
          },
          {
            Title: "Cobb salad",
            Rating: 4.9,
            Genre: "United state",
            Address: "San Francisco",
            ImageURL:
              "https://media.cnn.com/api/v1/images/stellar/prod/170206144051-cobb-salad-2.jpg?q=x_68,y_176,h_1489,w_2647,c_crop/h_720,w_1280/f_webp",
            Short_description:
              "The chef’s salad originated back East, but American food innovators working with lettuce out West weren’t going to be outdone.",
            RestaurantsDishes: [
              {
                Title: "Ramen",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1d9fe5f14f.jpg?20201127091340&q=80",
                Short_description:
                  "Most people know ramen, especially for its world-famous instant variety, but in Japan, you’ll be surprised by its fantastic taste.",
                Price: 15,
              },
              {
                Title: "Soba",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1da961d880.jpg?20201127091340&q=80",
                Short_description:
                  "Soba is a buckwheat noodle specialty of Japan. It’s extremely popular, and it’s served both in general noodle restaurants and in specialized (often expensive) ones.",
                Price: 11,
              },
              {
                Title: "Somen",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1dace2d4b4.jpg?20201127091340&q=80",
                Short_description:
                  "Somen is the Japanese version of a prevalent kind of noodle across Asia. Made out of wheat flour, it’s usually served cold",
                Price: 6,
              },
            ],
            Long: -122.424978,
            Lat: 37.761095,
          },
          {
            Title: "Tempura",
            Rating: 4.3,
            Genre: "United state",
            Address: "San Francisco",
            ImageURL:
              "https://media.cnn.com/api/v1/images/stellar/prod/150527112722-cnngo-miami-best-eats-joes-keylime-pie.jpg?q=x_4,y_627,h_1939,w_3446,c_crop/h_720,w_1280/f_webp",
            Short_description:
              "If life gives you limes, don’t make limeade, make a Key lime pie. The official state pie of Florida, this sassy tart has made herself a worldwide reputation, which started in – where else? – the Florida Keys, from whence come the tiny limes that gave the pie its name.",
            RestaurantsDishes: [
              {
                Title: "Sushi and sashimi",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1db1ab3249.jpg?20201127091340&q=80",
                Short_description:
                  "Of course, we all know these dishes, but we can’t avoid mentioning them in this guide. Sushi and sashimi are among the foods at the pinnacle of Japanese cuisine.",
                Price: 8,
              },
              {
                Title: "Takowasa",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1db4b206a1.jpg?20201127091340&q=80",
                Short_description:
                  "Takowasa is raw octopus (tako) served in a wasabi sauce (wasa). This is one of those Japanese dishes that, depending on your cultural background, may appear weird.",
                Price: 15,
              },
              {
                Title: "Tempura",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1db74630c8.jpg?20201127091340&q=80",
                Short_description:
                  "Tempura is a great dish all year round, especially for those of you who enjoy sharing a few drinks with friends.",
                Price: 8,
              },
            ],
            Long: -122.424978,
            Lat: 37.761095,
          },
          {
            Title: "Mexican flat enchiladas",
            Rating: 4.8,
            Genre: "United state",
            Address: "San Francisco",
            ImageURL:
              "https://media.cnn.com/api/v1/images/stellar/prod/170203122442-new-mexican-flat-enchiladas.jpg?q=x_0,y_101,h_1152,w_2048,c_crop/h_720,w_1280/f_webp",
            Short_description:
              "It was the pre-Columbian Maya who invented tortillas, and apparently the Aztecs who started wrapping them around bits of fish and meat. You have only to go to any Mexican or Tex-Mex place to see what those ancients wrought when someone dipped tortillas",
            RestaurantsDishes: [
              {
                Title: "Tonkatsu",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1dbe7b1240.jpg?20201127091340&q=80",
                Short_description:
                  "Tonkatsu is a top-rated and easy-to-find dish of breaded pork cutlet deep-fried in vegetable oil.",
                Price: 14,
              },
              {
                Title: "Udon",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1dc14d3a0b.jpg?20201127091340&q=80",
                Short_description:
                  "Of the huge variety of noodles you can find in Japan, udon, similarly to ramen, is one of the most popular. Udon is a thick wheat flour noodle that you can enjoy in its simplest form (broth made of dashi, mirin and soy sauce), or in a variety of combinations.",
                Price: 8,
              },
              {
                Title: "Yakitori",
                ImageURL:
                  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/en/a0002670_parts_5bb1dcb74b63f.jpg?20201127091340&q=80",
                Short_description:
                  "Although the word yakitori literally means grilled chicken, this concept encompasses all kinds of skewered meat (and vegetables) prepared on a grill. ",
                Price: 10,
              },
            ],
            Long: -122.424978,
            Lat: 37.761095,
          },
          {
            Title: "Nachos",
            Rating: 4.8,
            Genre: "United state",
            Address: "San Francisco",
            ImageURL:
              "https://www.rd.com/wp-content/uploads/2022/06/GettyImages-1396261684.jpg?resize=700,467",
            Short_description:
              "Here’s some food trivia for you: This beloved bar snack can be traced back to 1943, when chef Ignacio Anaya García threw together tortilla chips,",
            RestaurantsDishes: [
              {
                Title: "Mexican Rice",
                ImageURL:
                  "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Best-Mexican-Dishes-Mexican-Rice.jpg",
                Short_description:
                  "Mexican Rice, also known as Spanish Rice is a staple in Mexican cooking that is slow-cooked in a crockpot.",
                Price: 4,
              },
              {
                Title: "Menudo (Tripe Soup)",
                ImageURL:
                  "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Best-Mexican-Dishes-Menudo.jpg",
                Short_description:
                  "This Mexican meal may not be for everyone, as it contains tripe (cow stomach). That said, it’s one of the most widely enjoyed dishes throughout Mexico and Central America, making it a must for those looking to experience authentic Mexican cuisine.",
                Price: 13,
              },
              {
                Title: "Pozole (Hominy Soup)",
                ImageURL:
                  "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Traditional-Mexican-Dishes-Pozole.jpg",
                Short_description:
                  "Mexican cuisine is a unique blend of Mesoamerican recipes and Spanish influences. But pozole is entirely Mesoamerican.Made of locally-grown hominy (maize kernels), pozole is a foam-like soup with a slightly sweet flavor.",
                Price: 12,
              },
            ],
            Long: -122.424978,
            Lat: 37.761095,
          },
          {
            Title: "Wonton soup",
            Rating: 4.8,
            Genre: "United state",
            Address: "San Francisco",
            ImageURL:
              "https://www.rd.com/wp-content/uploads/2022/06/GettyImages-1032803180.jpg?resize=700,467",
            Short_description:
              "It should come as no surprise that this Chinese cuisine standard is popular with those ordering food delivery. Small dumplings filled with minced pork floating in salty briny chicken broth—what’s not to love?",
            RestaurantsDishes: [
              {
                Title: "Chicken Fajitas",
                ImageURL:
                  "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Traditional-Mexican-Foods-Fajitas.jpg",
                Short_description:
                  "Nowadays a Fajita is basically any type of protein that can be wrapped in a flour tortilla. Traditionally it was a snack that was served to Mexican",
                Price: 8,
              },
              {
                Title: "Torta Ahogada (Pork Sandwich)",
                ImageURL:
                  "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Traditional-Mexican-Dishes-Torta-Ahogada.jpg",
                Short_description:
                  "If you have access to a crispy sub-style bread (like baguettes), you can make Torta Ahogada at home.",
                Price: 9,
              },
              {
                Title: "Enchiladas",
                ImageURL:
                  "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Traditional-Mexican-Dishes-Enchiladas.jpg",
                Short_description:
                  "If you’ve ever eaten at a Mexican restaurant, there’s a good chance you’ve tried enchiladas. After all, these tortilla-based delights are one of the most popular foods in Mexico and the U.S.!",
                Price: 5,
              },
            ],
            Long: -122.424978,
            Lat: 37.761095,
          },
          {
            Title: "Bean burrito",
            Rating: 4.8,
            Genre: "United state",
            Address: "San Francisco",
            ImageURL:
              "https://www.rd.com/wp-content/uploads/2022/06/GettyImages-937568924.jpg?resize=700,467",
            Short_description:
              "Bean burritos ranked number one on this list back in 2018, but they seem to have lost some of their luster in recent years.",
            RestaurantsDishes: [
              {
                Title: "Burritos ",
                ImageURL:
                  "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Best-Mexican-Foods-Burritos.jpg",
                Short_description:
                  "Burritos (which translates to tiny donkeys) date back to ancient Mesoamerican civilizations.",
                Price: 4,
              },
              {
                Title: "Caldo De Res (Beef And Vegetable Soup)",
                ImageURL:
                  "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/Traditional-Mexican-Foods-Caldo-de-Res.jpg",
                Short_description:
                  "Caldo de Res is one of the most popular dishes in Central and South America, especially during winter.",
                Price: 9,
              },
              {
                Title: "Tourtiere",
                ImageURL:
                  "https://xyuandbeyond.com/wp-content/uploads/poutine-1024x689.jpg",
                Short_description:
                  "Another Québécois favourite this pie is available again all over Canada. This pie must have a pastry top and bottom and is packed with a mix of veal and pork meat.",
                Price: 9,
              },
            ],
            Long: -122.424978,
            Lat: 37.761095,
          },
          {
            Title: "Cheesy fiesta potatoes",
            Rating: 4.8,
            Genre: "United state",
            Address: "San Francisco",
            ImageURL:
              "https://www.rd.com/wp-content/uploads/2020/11/RD-favorite-food-fiesta-potatoes-via-avneets.eats-.jpg?resize=700,467",
            Short_description:
              "Yes, this refers to the famous Taco Bell favorite. The dish is made up of lightly breaded and crispy russet potatoes coated in nacho cheese and reduced-fat sour cream. ",
            RestaurantsDishes: [
              {
                Title: "Soupe à l’oignon (French Onion Soup)",
                ImageURL:
                  "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-onion-soup.jpg.webp",
                Short_description:
                  "When ushering in the new year, soupe à l’oignon can be eaten well after dinner! But in my opinion and in the opinion of many French people, it’s best to have it as a starter.",
                Price: 8,
              },
              {
                Title: "Bouillabaisse",
                ImageURL:
                  "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-bouillabaisse.jpg.webp",
                Short_description:
                  "This fish recipe was once a traditional fishermen’s dish made from unsold fish. Today, the bouillabaisse from Marseille is a French classic made with all sorts of cooked seafood that can be found in the south of France.",
                Price: 9,
              },
              {
                Title: "Bisque",
                ImageURL:
                  "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-bisque.jpg.webp",
                Short_description:
                  "Like bouillabaisse, bisqueis a lovely fish soup with lots of flavor. It’s traditionally made with a base of seafood – mostly lobster or crab – along with white wine, herbs, and spices.",
                Price: 7,
              },
            ],
            Long: -122.424978,
            Lat: 37.761095,
          },
          {
            Title: "Tacos",
            Rating: 4.8,
            Genre: "United state",
            Address: "San Francisco",
            ImageURL:
              "https://www.rd.com/wp-content/uploads/2022/06/GettyImages-960337396.jpg?resize=700,467",
            Short_description:
              "This Mexican classic has certainly been Americanized—just look at Taco Bell for proof.",
            RestaurantsDishes: [
              {
                Title: "Salade Niçoise",
                ImageURL:
                  "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-salade-nicoise.jpg.webp",
                Short_description:
                  "This salad is a typical French dish from the city of Nice. It can be eaten throughout the year and brings a burst of sunshine to your meal!",
                Price: 8,
              },
              {
                Title: "Terrine",
                ImageURL:
                  "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-terrine.jpg.webp",
                Short_description:
                  "This French delicacy is a long-standing culinary tradition in many French households. In fact, almost every family has its own recipe!",
                Price: 7,
              },
              {
                Title: "Foie Gras",
                ImageURL:
                  "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-cold-foie-gras.jpg.webp",
                Short_description:
                  "Foie gras is one of the most popular French foods. It’s a classic French dish that French people are quite proud of.",
                Price: 5,
              },
            ],
            Long: -122.424978,
            Lat: 37.761095,
          },
          {
            Title: "Gyoza",
            Rating: 4.8,
            Genre: "United state",
            Address: "San Francisco",
            ImageURL:
              "https://www.rd.com/wp-content/uploads/2022/06/GettyImages-1286079699.jpg?resize=700,467",
            Short_description:
              "It’s hard to eat just one of these Japanese fried dumplings (often filled with pork and cabbage).",
            RestaurantsDishes: [
              {
                Title: "Ratatouille",
                ImageURL:
                  "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-ratatouille.jpg.webp",
                Short_description:
                  "Ratatouille is one of the most comforting French foods. Originally from the south of France, it’s a delicious and healthy mix of vegetables like onions, garlic, tomatoes, zucchini, peppers, and eggplant.",
                Price: 10,
              },
              {
                Title: "Quiche Lorraine",
                ImageURL:
                  "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-quiche-lorraine.jpg.webp",
                Short_description:
                  "Quiche lorraine is one of the most well-known French dishes. It’s a traditional type of quiche that’s delicious and very easy to prepare. Originally from the east of France, it can be enjoyed either as a starter or as a main course.",
                Price: 5,
              },
              {
                Title: "Tartiflette",
                ImageURL:
                  "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-tartiflette.jpg.webp",
                Short_description:
                  "Tartiflette is one of the most delicious traditional dishes from the French Alps. It combines the amazing taste of a soft melted cheese called “reblochon” with fried onions, soft potatoes, and diced ham.",
                Price: 12,
              },
              {
                Title: "Confit de Canard",
                ImageURL:
                  "Confit de canard is an incredibly tasty culinary specialty from the southwest region of France.",
                Short_description:
                  "https://www.willflyforfood.net/wp-content/uploads/2022/10/french-food-confit-de-canard.jpg.webp",
                Price: 8,
              },
            ],
            Long: -122.424978,
            Lat: 37.761095,
          },
        ],
      },
      */
