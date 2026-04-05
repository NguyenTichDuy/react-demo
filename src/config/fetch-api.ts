const PEXELS_API_ORIGIN = "https://api.pexels.com";
const token = process.env.PEXELS_API_KEY ?? "";

type MethodType = "GET" | "POST";

interface FetchDataType {
  method: MethodType;
  params: Record<string, string>;
  pathname: string;
}

export const fetchData = async ({
  method,
  params,
  pathname,
}: FetchDataType) => {
  if (!token) {
    throw new Error(
      "Missing PEXELS_API_KEY. Set it in the environment before building, or rely on the webpack default."
    );
  }

  const url = new URL(`${PEXELS_API_ORIGIN}/v1/${pathname}`);
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Pexels API ${response.status}: ${body}`);
  }

  return response.json() as Promise<unknown>;
};
