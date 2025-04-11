import { mockMicrosoftProducts } from './mockData.ts';

export async function getMicrosoftProducts() {
  console.log('🧪 Using mock Microsoft product data...');
  return mockMicrosoftProducts;
}