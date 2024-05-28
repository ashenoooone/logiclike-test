import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

export type UseRequestType<Response> = {
  loading: boolean;
  data: Response | null;
  error: string | null;
};

export function useRequest<Params, Response>(
  request: (
    params?: Params,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<Response>>,
  config?: AxiosRequestConfig,
  initialParams?: Params
): UseRequestType<Response> {
  const [data, setData] = useState<Response | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await request(initialParams, config);
      setData(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.message);
      } else {
        setError("Непредвиденная ошибка");
      }
    } finally {
      setLoading(false);
    }
  }, [config, initialParams, request]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
}
