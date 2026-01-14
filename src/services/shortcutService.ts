import { Story } from '@/types/shortcut';

const TEMP_TOKEN = 'YOUR_API_TOKEN_HERE'; 
const BASE_URL = 'https://api.app.shortcut.com/api/v3';

export const ShortcutService = {
  async getMyStories(): Promise<Story[]> {
    const response = await fetch(`${BASE_URL}/search/stories?query=is:uncompleted`, {
      headers: {
        'Shortcut-Token': TEMP_TOKEN,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Shortcut API Error: ${response.status}`);
    }
    
    const result = await response.json();
    return result.data || [];
  },
};