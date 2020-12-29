import axios from 'axios';

// iPhone         = 'http://localhost:3333'
// Android Studio = 'http://10.0.2.2:3333'
// Genymotion     = 'http://10.0.3.2:3333'
// Android        = 'http://seu-ip:3333'
const api = axios.create({
  baseURL: 'http://10.0.2.2:3333'
});

export default api;
