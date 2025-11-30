import axios from 'axios';

export default class clientService {
    static async getClientIncome(clientId: string) {
        const response = await axios.get(`/v1/client/income/${clientId}`);
        return response.data;
    }

    static async getClientSuggestions(clientId: string) {
        const response = await axios.get(`/v1/client/suggestions/${clientId}`);
        return response.data;
    }
}
