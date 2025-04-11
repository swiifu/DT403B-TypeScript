import { mockMicrosoftProducts } from './mockData';

export async function getMicrosoftProducts() {
  console.log('🧪 Using mock Microsoft product data...');
  return mockMicrosoftProducts;
}