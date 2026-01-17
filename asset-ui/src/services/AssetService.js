import axios from "axios";

const API_BASE_URL = "http://localhost:8001/api/assets";

class AssetService {

  getAssets(page = 0, size = 5) {
    return axios.get(`${API_BASE_URL}?page=${page}&size=${size}`);
  }

  getAssetById(id) {
    return axios.get(`${API_BASE_URL}/${id}`);
  }

  createAsset(asset) {
    return axios.post(API_BASE_URL, asset);
  }

  updateAsset(id, asset) {
    return axios.put(`${API_BASE_URL}/${id}`, asset);
  }

  deleteAsset(id) {
    return axios.delete(`${API_BASE_URL}/${id}`);
  }
}

export default new AssetService();
