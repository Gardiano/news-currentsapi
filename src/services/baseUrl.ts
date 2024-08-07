import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.currentsapi.services/v1',
  })