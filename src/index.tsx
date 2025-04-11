import dotenv from 'dotenv';
dotenv.config();

import { getMicrosoftProducts } from './api/arrowsphere';

getMicrosoftProducts().then((products) => {
  console.log('🧾 Microsoft Products:', products);
});