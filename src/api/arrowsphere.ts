import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = 'https://xsp.arrow.com/index.php/api';

export async function getWhoAmI() {
    const apiKey = process.env.ARROW_API_KEY;

    if (!apiKey) {
        throw new Error('ARROW_API_KEY is not defined in the environment variables.');
    }

    try {
        const response = await axios.get(`${baseURL}/whoami`, {
            headers: {
                'apikey': apiKey,
                'Content-Type': 'application/json',
            },
        });

        console.log('✅ ArrowSphere API Key is valid');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('❌ API call failed:', error);
        throw error;
    }
}