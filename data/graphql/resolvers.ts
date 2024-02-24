import { typeDefs } from './typeDefs.js';
import { readFile } from 'fs/promises';

async function readMockData() {
  try {
    const mockData = await readFile("./MOCK_DATA_MATERIALS.json", "utf-8");
    return JSON.parse(mockData);
  } catch (error) {
    console.error('Error reading mock data:', error);
    throw error;
  }
}

const resolvers = {
  Query: {
    materials: async () => {
      const mockData = await readMockData();
      return mockData.map(mapMaterial);
    },
  },
};

function mapMaterial(material: any): any {
  return {
    material: material.material,
    amount: material.amount,
    currency: material.currency,
    price: material.price,
    delivery: mapDelivery(material.delivery),
    timestamp: material.timestamp,
  };
}

function mapDelivery(delivery: any): any {
  return {
    first_name: delivery.first_name,
    last_name: delivery.last_name,
    address: mapDeliveryAddress(delivery.address),
  };
}

function mapDeliveryAddress(address: any): any {
  return {
    street_name: address.street_name,
    street_number: address.street_number,
    city: address.city,
    postal_code: address.postal_code,
  };
}

export default resolvers;
