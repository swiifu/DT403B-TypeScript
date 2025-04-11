// REMOVE the dotenv lines completely
// ✅ Right
import { getMicrosoftProducts } from './api/arrowsphere';

getMicrosoftProducts().then((products) => {
  console.log('📄 Microsoft Products:', products);
});