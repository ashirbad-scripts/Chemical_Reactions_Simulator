"use client";
import {useState} from "react";

function MainComponent() {
  const [elements] = useState([
    {
      number: 1,
      symbol: "H",
      name: "Hydrogen",
      mass: "1.008",
      category: "nonmetal",
      group: 1,
      period: 1,
    },
    {
      number: 2,
      symbol: "He",
      name: "Helium",
      mass: "4.003",
      category: "noble",
      group: 18,
      period: 1,
    },
    {
      number: 3,
      symbol: "Li",
      name: "Lithium",
      mass: "6.94",
      category: "alkali",
      group: 1,
      period: 2,
    },
    {
      number: 4,
      symbol: "Be",
      name: "Beryllium",
      mass: "9.012",
      category: "alkaline",
      group: 2,
      period: 2,
    },
    {
      number: 5,
      symbol: "B",
      name: "Boron",
      mass: "10.81",
      category: "metalloid",
      group: 13,
      period: 2,
    },
    {
      number: 6,
      symbol: "C",
      name: "Carbon",
      mass: "12.01",
      category: "nonmetal",
      group: 14,
      period: 2,
    },
    {
      number: 7,
      symbol: "N",
      name: "Nitrogen",
      mass: "14.01",
      category: "nonmetal",
      group: 15,
      period: 2,
    },
    {
      number: 8,
      symbol: "O",
      name: "Oxygen",
      mass: "16.00",
      category: "nonmetal",
      group: 16,
      period: 2,
    },
    {
      number: 9,
      symbol: "F",
      name: "Fluorine",
      mass: "19.00",
      category: "halogen",
      group: 17,
      period: 2,
    },
    {
      number: 10,
      symbol: "Ne",
      name: "Neon",
      mass: "20.18",
      category: "noble",
      group: 18,
      period: 2,
    },
    {
      number: 11,
      symbol: "Na",
      name: "Sodium",
      mass: "22.99",
      category: "alkali",
      group: 1,
      period: 3,
    },
    {
      number: 12,
      symbol: "Mg",
      name: "Magnesium",
      mass: "24.31",
      category: "alkaline",
      group: 2,
      period: 3,
    },
    {
      number: 13,
      symbol: "Al",
      name: "Aluminum",
      mass: "26.98",
      category: "posttransition",
      group: 13,
      period: 3,
    },
    {
      number: 14,
      symbol: "Si",
      name: "Silicon",
      mass: "28.09",
      category: "metalloid",
      group: 14,
      period: 3,
    },
    {
      number: 15,
      symbol: "P",
      name: "Phosphorus",
      mass: "30.97",
      category: "nonmetal",
      group: 15,
      period: 3,
    },
    {
      number: 16,
      symbol: "S",
      name: "Sulfur",
      mass: "32.07",
      category: "nonmetal",
      group: 16,
      period: 3,
    },
    {
      number: 17,
      symbol: "Cl",
      name: "Chlorine",
      mass: "35.45",
      category: "halogen",
      group: 17,
      period: 3,
    },
    {
      number: 18,
      symbol: "Ar",
      name: "Argon",
      mass: "39.95",
      category: "noble",
      group: 18,
      period: 3,
    },
    {
      number: 19,
      symbol: "K",
      name: "Potassium",
      mass: "39.10",
      category: "alkali",
      group: 1,
      period: 4,
    },
    {
      number: 20,
      symbol: "Ca",
      name: "Calcium",
      mass: "40.08",
      category: "alkaline",
      group: 2,
      period: 4,
    },
    {
      number: 21,
      symbol: "Sc",
      name: "Scandium",
      mass: "44.96",
      category: "transition",
      group: 3,
      period: 4,
    },
    {
      number: 22,
      symbol: "Ti",
      name: "Titanium",
      mass: "47.87",
      category: "transition",
      group: 4,
      period: 4,
    },
    {
      number: 23,
      symbol: "V",
      name: "Vanadium",
      mass: "50.94",
      category: "transition",
      group: 5,
      period: 4,
    },
    {
      number: 24,
      symbol: "Cr",
      name: "Chromium",
      mass: "52.00",
      category: "transition",
      group: 6,
      period: 4,
    },
    {
      number: 25,
      symbol: "Mn",
      name: "Manganese",
      mass: "54.94",
      category: "transition",
      group: 7,
      period: 4,
    },
    {
      number: 26,
      symbol: "Fe",
      name: "Iron",
      mass: "55.85",
      category: "transition",
      group: 8,
      period: 4,
    },
    {
      number: 27,
      symbol: "Co",
      name: "Cobalt",
      mass: "58.93",
      category: "transition",
      group: 9,
      period: 4,
    },
    {
      number: 28,
      symbol: "Ni",
      name: "Nickel",
      mass: "58.69",
      category: "transition",
      group: 10,
      period: 4,
    },
    {
      number: 29,
      symbol: "Cu",
      name: "Copper",
      mass: "63.55",
      category: "transition",
      group: 11,
      period: 4,
    },
    {
      number: 30,
      symbol: "Zn",
      name: "Zinc",
      mass: "65.39",
      category: "transition",
      group: 12,
      period: 4,
    },
    {
      number: 31,
      symbol: "Ga",
      name: "Gallium",
      mass: "69.72",
      category: "posttransition",
      group: 13,
      period: 4,
    },
    {
      number: 32,
      symbol: "Ge",
      name: "Germanium",
      mass: "72.64",
      category: "metalloid",
      group: 14,
      period: 4,
    },
    {
      number: 33,
      symbol: "As",
      name: "Arsenic",
      mass: "74.92",
      category: "metalloid",
      group: 15,
      period: 4,
    },
    {
      number: 34,
      symbol: "Se",
      name: "Selenium",
      mass: "78.96",
      category: "nonmetal",
      group: 16,
      period: 4,
    },
    {
      number: 35,
      symbol: "Br",
      name: "Bromine",
      mass: "79.90",
      category: "halogen",
      group: 17,
      period: 4,
    },
    {
      number: 36,
      symbol: "Kr",
      name: "Krypton",
      mass: "83.80",
      category: "noble",
      group: 18,
      period: 4,
    },
    {
      number: 37,
      symbol: "Rb",
      name: "Rubidium",
      mass: "85.47",
      category: "alkali",
      group: 1,
      period: 5,
    },
    {
      number: 38,
      symbol: "Sr",
      name: "Strontium",
      mass: "87.62",
      category: "alkaline",
      group: 2,
      period: 5,
    },
    {
      number: 39,
      symbol: "Y",
      name: "Yttrium",
      mass: "88.91",
      category: "transition",
      group: 3,
      period: 5,
    },
    {
      number: 40,
      symbol: "Zr",
      name: "Zirconium",
      mass: "91.22",
      category: "transition",
      group: 4,
      period: 5,
    },
    {
      number: 41,
      symbol: "Nb",
      name: "Niobium",
      mass: "92.91",
      category: "transition",
      group: 5,
      period: 5,
    },
    {
      number: 42,
      symbol: "Mo",
      name: "Molybdenum",
      mass: "95.94",
      category: "transition",
      group: 6,
      period: 5,
    },
    {
      number: 43,
      symbol: "Tc",
      name: "Technetium",
      mass: "98",
      category: "transition",
      group: 7,
      period: 5,
    },
    {
      number: 44,
      symbol: "Ru",
      name: "Ruthenium",
      mass: "101.07",
      category: "transition",
      group: 8,
      period: 5,
    },
    {
      number: 45,
      symbol: "Rh",
      name: "Rhodium",
      mass: "102.91",
      category: "transition",
      group: 9,
      period: 5,
    },
    {
      number: 46,
      symbol: "Pd",
      name: "Palladium",
      mass: "106.42",
      category: "transition",
      group: 10,
      period: 5,
    },
    {
      number: 47,
      symbol: "Ag",
      name: "Silver",
      mass: "107.87",
      category: "transition",
      group: 11,
      period: 5,
    },
    {
      number: 48,
      symbol: "Cd",
      name: "Cadmium",
      mass: "112.41",
      category: "transition",
      group: 12,
      period: 5,
    },
    {
      number: 49,
      symbol: "In",
      name: "Indium",
      mass: "114.82",
      category: "posttransition",
      group: 13,
      period: 5,
    },
    {
      number: 50,
      symbol: "Sn",
      name: "Tin",
      mass: "118.71",
      category: "posttransition",
      group: 14,
      period: 5,
    },
    {
      number: 51,
      symbol: "Sb",
      name: "Antimony",
      mass: "121.76",
      category: "metalloid",
      group: 15,
      period: 5,
    },
    {
      number: 52,
      symbol: "Te",
      name: "Tellurium",
      mass: "127.60",
      category: "metalloid",
      group: 16,
      period: 5,
    },
    {
      number: 53,
      symbol: "I",
      name: "Iodine",
      mass: "126.90",
      category: "halogen",
      group: 17,
      period: 5,
    },
    {
      number: 54,
      symbol: "Xe",
      name: "Xenon",
      mass: "131.29",
      category: "noble",
      group: 18,
      period: 5,
    },
    {
      number: 55,
      symbol: "Cs",
      name: "Cesium",
      mass: "132.91",
      category: "alkali",
      group: 1,
      period: 6,
    },
    {
      number: 56,
      symbol: "Ba",
      name: "Barium",
      mass: "137.33",
      category: "alkaline",
      group: 2,
      period: 6,
    },
    {
      number: 57,
      symbol: "La",
      name: "Lanthanum",
      mass: "138.91",
      category: "lanthanide",
      group: 3,
      period: 6,
    },
    {
      number: 58,
      symbol: "Ce",
      name: "Cerium",
      mass: "140.12",
      category: "lanthanide",
      group: 4,
      period: 9,
    },
    {
      number: 59,
      symbol: "Pr",
      name: "Praseodymium",
      mass: "140.91",
      category: "lanthanide",
      group: 5,
      period: 9,
    },
    {
      number: 60,
      symbol: "Nd",
      name: "Neodymium",
      mass: "144.24",
      category: "lanthanide",
      group: 6,
      period: 9,
    },
    {
      number: 61,
      symbol: "Pm",
      name: "Promethium",
      mass: "145",
      category: "lanthanide",
      group: 7,
      period: 9,
    },
    {
      number: 62,
      symbol: "Sm",
      name: "Samarium",
      mass: "150.36",
      category: "lanthanide",
      group: 8,
      period: 9,
    },
    {
      number: 63,
      symbol: "Eu",
      name: "Europium",
      mass: "151.96",
      category: "lanthanide",
      group: 9,
      period: 9,
    },
    {
      number: 64,
      symbol: "Gd",
      name: "Gadolinium",
      mass: "157.25",
      category: "lanthanide",
      group: 10,
      period: 9,
    },
    {
      number: 65,
      symbol: "Tb",
      name: "Terbium",
      mass: "158.93",
      category: "lanthanide",
      group: 11,
      period: 9,
    },
    {
      number: 66,
      symbol: "Dy",
      name: "Dysprosium",
      mass: "162.50",
      category: "lanthanide",
      group: 12,
      period: 9,
    },
    {
      number: 67,
      symbol: "Ho",
      name: "Holmium",
      mass: "164.93",
      category: "lanthanide",
      group: 13,
      period: 9,
    },
    {
      number: 68,
      symbol: "Er",
      name: "Erbium",
      mass: "167.26",
      category: "lanthanide",
      group: 14,
      period: 9,
    },
    {
      number: 69,
      symbol: "Tm",
      name: "Thulium",
      mass: "168.93",
      category: "lanthanide",
      group: 15,
      period: 9,
    },
    {
      number: 70,
      symbol: "Yb",
      name: "Ytterbium",
      mass: "173.04",
      category: "lanthanide",
      group: 16,
      period: 9,
    },
    {
      number: 71,
      symbol: "Lu",
      name: "Lutetium",
      mass: "174.97",
      category: "lanthanide",
      group: 17,
      period: 9,
    },
    {
      number: 72,
      symbol: "Hf",
      name: "Hafnium",
      mass: "178.49",
      category: "transition",
      group: 4,
      period: 6,
    },
    {
      number: 73,
      symbol: "Ta",
      name: "Tantalum",
      mass: "180.95",
      category: "transition",
      group: 5,
      period: 6,
    },
    {
      number: 74,
      symbol: "W",
      name: "Tungsten",
      mass: "183.84",
      category: "transition",
      group: 6,
      period: 6,
    },
    {
      number: 75,
      symbol: "Re",
      name: "Rhenium",
      mass: "186.21",
      category: "transition",
      group: 7,
      period: 6,
    },
    {
      number: 76,
      symbol: "Os",
      name: "Osmium",
      mass: "190.23",
      category: "transition",
      group: 8,
      period: 6,
    },
    {
      number: 77,
      symbol: "Ir",
      name: "Iridium",
      mass: "192.22",
      category: "transition",
      group: 9,
      period: 6,
    },
    {
      number: 78,
      symbol: "Pt",
      name: "Platinum",
      mass: "195.08",
      category: "transition",
      group: 10,
      period: 6,
    },
    {
      number: 79,
      symbol: "Au",
      name: "Gold",
      mass: "196.97",
      category: "transition",
      group: 11,
      period: 6,
    },
    {
      number: 80,
      symbol: "Hg",
      name: "Mercury",
      mass: "200.59",
      category: "transition",
      group: 12,
      period: 6,
    },
    {
      number: 81,
      symbol: "Tl",
      name: "Thallium",
      mass: "204.38",
      category: "posttransition",
      group: 13,
      period: 6,
    },
    {
      number: 82,
      symbol: "Pb",
      name: "Lead",
      mass: "207.2",
      category: "posttransition",
      group: 14,
      period: 6,
    },
    {
      number: 83,
      symbol: "Bi",
      name: "Bismuth",
      mass: "208.98",
      category: "posttransition",
      group: 15,
      period: 6,
    },
    {
      number: 84,
      symbol: "Po",
      name: "Polonium",
      mass: "209",
      category: "posttransition",
      group: 16,
      period: 6,
    },
    {
      number: 85,
      symbol: "At",
      name: "Astatine",
      mass: "210",
      category: "halogen",
      group: 17,
      period: 6,
    },
    {
      number: 86,
      symbol: "Rn",
      name: "Radon",
      mass: "222",
      category: "noble",
      group: 18,
      period: 6,
    },
    {
      number: 87,
      symbol: "Fr",
      name: "Francium",
      mass: "223",
      category: "alkali",
      group: 1,
      period: 7,
    },
    {
      number: 88,
      symbol: "Ra",
      name: "Radium",
      mass: "226",
      category: "alkaline",
      group: 2,
      period: 7,
    },
    {
      number: 89,
      symbol: "Ac",
      name: "Actinium",
      mass: "227",
      category: "actinide",
      group: 3,
      period: 7,
    },
    {
      number: 90,
      symbol: "Th",
      name: "Thorium",
      mass: "232.04",
      category: "actinide",
      group: 4,
      period: 10,
    },
    {
      number: 91,
      symbol: "Pa",
      name: "Protactinium",
      mass: "231.04",
      category: "actinide",
      group: 5,
      period: 10,
    },
    {
      number: 92,
      symbol: "U",
      name: "Uranium",
      mass: "238.03",
      category: "actinide",
      group: 6,
      period: 10,
    },
    {
      number: 93,
      symbol: "Np",
      name: "Neptunium",
      mass: "237",
      category: "actinide",
      group: 7,
      period: 10,
    },
    {
      number: 94,
      symbol: "Pu",
      name: "Plutonium",
      mass: "244",
      category: "actinide",
      group: 8,
      period: 10,
    },
    {
      number: 95,
      symbol: "Am",
      name: "Americium",
      mass: "243",
      category: "actinide",
      group: 9,
      period: 10,
    },
    {
      number: 96,
      symbol: "Cm",
      name: "Curium",
      mass: "247",
      category: "actinide",
      group: 10,
      period: 10,
    },
    {
      number: 97,
      symbol: "Bk",
      name: "Berkelium",
      mass: "247",
      category: "actinide",
      group: 11,
      period: 10,
    },
    {
      number: 98,
      symbol: "Cf",
      name: "Californium",
      mass: "251",
      category: "actinide",
      group: 12,
      period: 10,
    },
    {
      number: 99,
      symbol: "Es",
      name: "Einsteinium",
      mass: "252",
      category: "actinide",
      group: 13,
      period: 10,
    },
    {
      number: 100,
      symbol: "Fm",
      name: "Fermium",
      mass: "257",
      category: "actinide",
      group: 14,
      period: 10,
    },
    {
      number: 101,
      symbol: "Md",
      name: "Mendelevium",
      mass: "258",
      category: "actinide",
      group: 15,
      period: 10,
    },
    {
      number: 102,
      symbol: "No",
      name: "Nobelium",
      mass: "259",
      category: "actinide",
      group: 16,
      period: 10,
    },
    {
      number: 103,
      symbol: "Lr",
      name: "Lawrencium",
      mass: "262",
      category: "actinide",
      group: 17,
      period: 10,
    },
    {
      number: 104,
      symbol: "Rf",
      name: "Rutherfordium",
      mass: "267",
      category: "transition",
      group: 4,
      period: 7,
    },
    {
      number: 105,
      symbol: "Db",
      name: "Dubnium",
      mass: "268",
      category: "transition",
      group: 5,
      period: 7,
    },
    {
      number: 106,
      symbol: "Sg",
      name: "Seaborgium",
      mass: "269",
      category: "transition",
      group: 6,
      period: 7,
    },
    {
      number: 107,
      symbol: "Bh",
      name: "Bohrium",
      mass: "270",
      category: "transition",
      group: 7,
      period: 7,
    },
    {
      number: 108,
      symbol: "Hs",
      name: "Hassium",
      mass: "269",
      category: "transition",
      group: 8,
      period: 7,
    },
  ]);
  const [selectedElements, setSelectedElements] = useState([]);
  const [reactionResult, setReactionResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleMixElements = async () => {
    if (selectedElements.length < 2) {
      setError("Please select at least 2 elements");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const elements = selectedElements.map((e) => e.name).join(" and ");
      const response = await fetch("/integrations/google-gemini-1-5/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `For the chemical reaction between ${elements}, provide a structured analysis in this format:
            1. Reaction Possibility: (yes/no and brief explanation)
            2. Chemical Equation: (if applicable)
            3. Product Properties:
               - Physical state
               - Color
               - Stability
               - Key characteristics
            4. Applications: (2-3 key real-world uses)
            5. Safety: (key hazards and precautions)
            
            Keep each section concise but informative.`,
            },
          ],
          json_schema: {
            name: "chemical_reaction",
            schema: {
              type: "object",
              properties: {
                possibility: {
                  type: "object",
                  properties: {
                    possible: { type: "boolean" },
                    explanation: { type: "string" },
                  },
                  required: ["possible", "explanation"],
                  additionalProperties: false,
                },
                equation: { type: "string" },
                properties: {
                  type: "object",
                  properties: {
                    physicalState: { type: "string" },
                    color: { type: "string" },
                    stability: { type: "string" },
                    characteristics: { type: "string" },
                  },
                  required: [
                    "physicalState",
                    "color",
                    "stability",
                    "characteristics",
                  ],
                  additionalProperties: false,
                },
                applications: {
                  type: "array",
                  items: { type: "string" },
                },
                safety: {
                  type: "object",
                  properties: {
                    hazards: { type: "array", items: { type: "string" } },
                    precautions: { type: "array", items: { type: "string" } },
                  },
                  required: ["hazards", "precautions"],
                  additionalProperties: false,
                },
              },
              required: [
                "possibility",
                "equation",
                "properties",
                "applications",
                "safety",
              ],
              additionalProperties: false,
            },
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setReactionResult(JSON.parse(data.choices[0].message.content));
    } catch (err) {
      setError("Failed to analyze reaction. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getColor = (category) => {
    const colors = {
      alkali: "#ff8a8a",
      alkaline: "#ffb266",
      transition: "#ffd666",
      posttransition: "#a6d854",
      metalloid: "#66c2a5",
      nonmetal: "#8da0cb",
      halogen: "#e78ac3",
      noble: "#a9a9a9",
      lanthanide: "#ffd700",
      actinide: "#daa520",
    };
    return colors[category];
  };
  const categories = [
    { name: "Alkali Metals", color: "#ff8a8a" },
    { name: "Alkaline Earth Metals", color: "#ffb266" },
    { name: "Transition Metals", color: "#ffd666" },
    { name: "Post-transition Metals", color: "#a6d854" },
    { name: "Metalloids", color: "#66c2a5" },
    { name: "Nonmetals", color: "#8da0cb" },
    { name: "Halogens", color: "#e78ac3" },
    { name: "Noble Gases", color: "#a9a9a9" },
    { name: "Lanthanides", color: "#ffd700" },
    { name: "Actinides", color: "#daa520" },
  ];
  const Element = ({ element, onClick }) => (
    <div
      className="w-[60px] h-[80px] p-1 text-center transition-transform hover:scale-105 hover:shadow-lg cursor-pointer"
      style={{ backgroundColor: getColor(element.category) }}
      onClick={onClick}
    >
      <div className="text-xs">{element.number}</div>
      <div className="text-xl font-bold">{element.symbol}</div>
      <div className="text-[8px] truncate">{element.name}</div>
      <div className="text-[8px]">{element.mass}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-bold">Chemical Reaction Simulator using AI</h1>
          <p className="text-[20px] text-gray-600">Created By Ashirbad</p>
        </div>

        <div className="grid grid-cols-18 gap-1">
          {elements.map((element) => (
            <div
              key={element.number}
              style={{
                gridColumn: element.group,
                gridRow: element.period,
              }}
            >
              <Element
                element={element}
                onClick={() =>
                  setSelectedElements((prev) => [...prev, element])
                }
              />
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-2">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center gap-2">
              <div
                className="w-4 h-4"
                style={{ backgroundColor: category.color }}
              ></div>
              <span className="text-sm">{category.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-md border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">
            Reactions Arena
          </h2>

          <div className="flex flex-wrap gap-2 min-h-[100px] p-4 border-2 border-dashed border-indigo-300 rounded mb-4 bg-white/50">
            {selectedElements.map((element, index) => (
              <div
                key={`${element.symbol}-${index}`}
                className="p-2 rounded"
                style={{ backgroundColor: getColor(element.category) }}
              >
                {element.symbol}
              </div>
            ))}
          </div>

          <div className="flex gap-4 mb-4">
            <button
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 transition-all shadow-md hover:shadow-lg"
              onClick={handleMixElements}
              disabled={loading || selectedElements.length < 2}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Mixing it by AI
                </span>
              ) : (
                "Mix Elements"
              )}
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all shadow-md hover:shadow-lg"
              onClick={() => {
                setSelectedElements([]);
                setReactionResult(null);
                setError(null);
              }}
            >
              Clear
            </button>
          </div>

          {error && (
            <div className="p-4 bg-red-100 text-red-700 rounded mb-4 flex items-center gap-2">
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </div>
          )}

          {reactionResult && (
            <div className="space-y-4 bg-white rounded p-6 shadow-sm">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  Reaction Result
                </h3>
                <div
                  className={`text-lg ${
                    reactionResult.possibility.possible
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {reactionResult.possibility.explanation}
                </div>
              </div>

              {reactionResult.equation && (
                <div className="bg-gray-50 p-3 rounded">
                  <div className="font-mono text-indigo-600">
                    {reactionResult.equation}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 bg-blue-50 p-4 rounded">
                <div>
                  <div className="font-semibold text-indigo-700">
                    Properties
                  </div>
                  <div className="text-sm">
                    {reactionResult.properties.physicalState}
                  </div>
                  <div className="text-sm">
                    {reactionResult.properties.color}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-indigo-700">
                    Characteristics
                  </div>
                  <div className="text-sm">
                    {reactionResult.properties.characteristics}
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded">
                <div className="font-semibold text-green-700 mb-2">
                  Key Applications
                </div>
                <ul className="list-disc pl-5 text-sm">
                  {reactionResult.applications.slice(0, 2).map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded border border-amber-200">
                <div className="font-semibold text-amber-700 mb-2">
                  <i className="fas fa-shield-alt mr-2"></i>
                  Safety Considerations
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-amber-800 font-medium mb-1">
                      Hazard
                    </div>
                    <div className="text-amber-700">
                      {reactionResult.safety.hazards[0]}
                    </div>
                  </div>
                  <div>
                    <div className="text-amber-800 font-medium mb-1">
                      Precaution
                    </div>
                    <div className="text-amber-700">
                      {reactionResult.safety.precautions[0]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;