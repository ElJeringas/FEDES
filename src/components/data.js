
const charData = [
    {
      "country": "AD",
      "hot dog": 174,
      "hot dogColor": "hsl(295, 70%, 50%)",
      "burger": 98,
      "burgerColor": "hsl(58, 70%, 50%)",
      "sandwich": 156,
      "sandwichColor": "hsl(218, 70%, 50%)",
      "kebab": 136,
      "kebabColor": "hsl(284, 70%, 50%)",
      "fries": 55,
      "friesColor": "hsl(37, 70%, 50%)",
      "donut": 45,
      "donutColor": "hsl(296, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 68,
      "hot dogColor": "hsl(168, 70%, 50%)",
      "burger": 18,
      "burgerColor": "hsl(32, 70%, 50%)",
      "sandwich": 141,
      "sandwichColor": "hsl(161, 70%, 50%)",
      "kebab": 5,
      "kebabColor": "hsl(194, 70%, 50%)",
      "fries": 109,
      "friesColor": "hsl(348, 70%, 50%)",
      "donut": 114,
      "donutColor": "hsl(201, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 65,
      "hot dogColor": "hsl(44, 70%, 50%)",
      "burger": 197,
      "burgerColor": "hsl(0, 70%, 50%)",
      "sandwich": 159,
      "sandwichColor": "hsl(311, 70%, 50%)",
      "kebab": 166,
      "kebabColor": "hsl(203, 70%, 50%)",
      "fries": 146,
      "friesColor": "hsl(134, 70%, 50%)",
      "donut": 35,
      "donutColor": "hsl(122, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 122,
      "hot dogColor": "hsl(11, 70%, 50%)",
      "burger": 88,
      "burgerColor": "hsl(58, 70%, 50%)",
      "sandwich": 136,
      "sandwichColor": "hsl(130, 70%, 50%)",
      "kebab": 106,
      "kebabColor": "hsl(51, 70%, 50%)",
      "fries": 53,
      "friesColor": "hsl(306, 70%, 50%)",
      "donut": 41,
      "donutColor": "hsl(303, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 34,
      "hot dogColor": "hsl(6, 70%, 50%)",
      "burger": 200,
      "burgerColor": "hsl(29, 70%, 50%)",
      "sandwich": 12,
      "sandwichColor": "hsl(41, 70%, 50%)",
      "kebab": 138,
      "kebabColor": "hsl(254, 70%, 50%)",
      "fries": 147,
      "friesColor": "hsl(194, 70%, 50%)",
      "donut": 104,
      "donutColor": "hsl(79, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 185,
      "hot dogColor": "hsl(325, 70%, 50%)",
      "burger": 144,
      "burgerColor": "hsl(29, 70%, 50%)",
      "sandwich": 115,
      "sandwichColor": "hsl(74, 70%, 50%)",
      "kebab": 198,
      "kebabColor": "hsl(247, 70%, 50%)",
      "fries": 94,
      "friesColor": "hsl(344, 70%, 50%)",
      "donut": 179,
      "donutColor": "hsl(101, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 123,
      "hot dogColor": "hsl(254, 70%, 50%)",
      "burger": 34,
      "burgerColor": "hsl(27, 70%, 50%)",
      "sandwich": 136,
      "sandwichColor": "hsl(359, 70%, 50%)",
      "kebab": 120,
      "kebabColor": "hsl(336, 70%, 50%)",
      "fries": 33,
      "friesColor": "hsl(239, 70%, 50%)",
      "donut": 130,
      "donutColor": "hsl(68, 70%, 50%)"
    }
  ];

const lineData = [
    {
      "id": "japan",
      "color": "hsl(261, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 137
        },
        {
          "x": "helicopter",
          "y": 258
        },
        {
          "x": "boat",
          "y": 84
        },
        {
          "x": "train",
          "y": 299
        },
        {
          "x": "subway",
          "y": 2
        },
        {
          "x": "bus",
          "y": 37
        },
        {
          "x": "car",
          "y": 277
        },
        {
          "x": "moto",
          "y": 134
        },
        {
          "x": "bicycle",
          "y": 164
        },
        {
          "x": "horse",
          "y": 69
        },
        {
          "x": "skateboard",
          "y": 113
        },
        {
          "x": "others",
          "y": 40
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(172, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 148
        },
        {
          "x": "helicopter",
          "y": 289
        },
        {
          "x": "boat",
          "y": 57
        },
        {
          "x": "train",
          "y": 39
        },
        {
          "x": "subway",
          "y": 134
        },
        {
          "x": "bus",
          "y": 47
        },
        {
          "x": "car",
          "y": 218
        },
        {
          "x": "moto",
          "y": 228
        },
        {
          "x": "bicycle",
          "y": 244
        },
        {
          "x": "horse",
          "y": 44
        },
        {
          "x": "skateboard",
          "y": 235
        },
        {
          "x": "others",
          "y": 230
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(192, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 205
        },
        {
          "x": "helicopter",
          "y": 240
        },
        {
          "x": "boat",
          "y": 142
        },
        {
          "x": "train",
          "y": 169
        },
        {
          "x": "subway",
          "y": 114
        },
        {
          "x": "bus",
          "y": 16
        },
        {
          "x": "car",
          "y": 207
        },
        {
          "x": "moto",
          "y": 247
        },
        {
          "x": "bicycle",
          "y": 235
        },
        {
          "x": "horse",
          "y": 185
        },
        {
          "x": "skateboard",
          "y": 255
        },
        {
          "x": "others",
          "y": 161
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(254, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 190
        },
        {
          "x": "helicopter",
          "y": 123
        },
        {
          "x": "boat",
          "y": 113
        },
        {
          "x": "train",
          "y": 193
        },
        {
          "x": "subway",
          "y": 298
        },
        {
          "x": "bus",
          "y": 55
        },
        {
          "x": "car",
          "y": 222
        },
        {
          "x": "moto",
          "y": 50
        },
        {
          "x": "bicycle",
          "y": 290
        },
        {
          "x": "horse",
          "y": 81
        },
        {
          "x": "skateboard",
          "y": 261
        },
        {
          "x": "others",
          "y": 27
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(331, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 237
        },
        {
          "x": "helicopter",
          "y": 73
        },
        {
          "x": "boat",
          "y": 110
        },
        {
          "x": "train",
          "y": 29
        },
        {
          "x": "subway",
          "y": 107
        },
        {
          "x": "bus",
          "y": 242
        },
        {
          "x": "car",
          "y": 273
        },
        {
          "x": "moto",
          "y": 230
        },
        {
          "x": "bicycle",
          "y": 58
        },
        {
          "x": "horse",
          "y": 26
        },
        {
          "x": "skateboard",
          "y": 146
        },
        {
          "x": "others",
          "y": 168
        }
      ]
    }
  ];

export {charData, lineData}