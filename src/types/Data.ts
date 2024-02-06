export interface Brand {
  name: string;
  vehicles: Vehicle[];
}

export interface Vehicle {
  model: string;
  firstYear?: number;
  lastYear?: number;
}

export const brands: Brand[] = [
  {
    name: "Audi",
    vehicles: [
      {
        model: "e-tron 55 Quattro",
        firstYear: 2018,
        lastYear: 2019
      }
    ]
  },
  {
    name: "BMW",
    vehicles: []
  },
  { name:
    "Citroen",
    vehicles: []
  },
  { name: "Cupra",
    vehicles: [
      {
        model: "Born 150 kW 58 kWh",
        firstYear: 2021
      },
      {
        model: "Born 170 kW 58 kWh",
        firstYear: 2021
      },
      {
        model: "Born 170 kW 77 kWh",
        firstYear: 2021
      }
    ]
  },
  {
    name: "Volkswagen",
    vehicles: []
  },
];
