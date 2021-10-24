import axios from 'axios';

export const clientUrl = "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com";

const axiosInstance = axios.create({baseURL: clientUrl});

export default axiosInstance;