import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios';

export class HTTPClient {
  private client: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config);
  }

  public get = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return this.client.get(url, config);
  };

  public post = async <T>(url: string, data: any, config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return this.client.post(url, data, config);
  };
}
