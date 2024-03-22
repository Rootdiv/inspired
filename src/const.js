export const API_URL = 
  import.meta.env.DEV ? 'http://localhost:8024' : 'https://api.rootdiv.ru/inspired';
export const GOODS_URL = `${API_URL}/api/goods`;
export const CATEGORY_URL = `${API_URL}/api/categories`;
export const COLORS_URL = `${API_URL}/api/colors`;
export const ORDER_URL = `${API_URL}/api/order`;
