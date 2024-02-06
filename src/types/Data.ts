export interface Brand {
  name: string;
}

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  firstYear?: number;
  lastYear?: number;
}

export const brands: Brand[] = [
  {
    name: "Audi"
  },
  {
    name: "BMW"
  },
  { 
    name: "Citroen"
  },
  {
    name: "Cupra"
  },
  {
    name: "Volkswagen"
  }
];

export const vehicles: Vehicle[] = [
  {
    id: 1,
    brand: "Audi",
    model: "e-tron 55 Quattro",
    firstYear: 2018,
    lastYear: 2019
  },
  {
    id: 2,
    brand: "Cupra",
    model: "Born 150 kW 58 kWh",
    firstYear: 2021
  },
  {
    id: 3,
    brand: "Cupra",
    model: "Born 170 kW 58 kWh",
    firstYear: 2021
  },
  {
    id: 4,
    brand: "Cupra",
    model: "Born 170 kW 77 kWh",
    firstYear: 2021
  }
];

export function getVehicle(id: number): Vehicle | null {
  for (const vehicle of vehicles) {
    if (vehicle.id === id)
      return vehicle;
  }
  
  return null;
}

export function getVehicles(brand: string): Vehicle[] {
  let list: Vehicle[] = [];

  for (const vehicle of vehicles) {
    if (vehicle.brand === brand)
      list.push(vehicle);
  }
  
  return list;
}
