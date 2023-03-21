import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const useModelLatency = () => {
  const { data, error } = useSWR(`/api/latency`, fetcher,  { refreshInterval: 1000 });
  console.log("UML data", data)

  return {
    latency: data,
    isLoading: !error && !data,
    isError: error,
  };
};


export default useModelLatency;