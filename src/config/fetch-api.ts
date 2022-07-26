const token = "563492ad6f91700001000001b61382187ea546f0a1587d00d525bdca";
const url = new URL("https://api.pexels.com/v1/search");
const pathName = "/v1/";

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
  url.search = new URLSearchParams(params).toString();
  url.pathname = pathName + pathname;
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return response.json();
};
