import { User } from "./User";

const fetchJson = <ReqBody = {}, Response = {}>(
  method: "GET" | "POST",
  url: string,
  body: ReqBody
): Promise<Response> => {
  return fetch(url, {
    method,
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }).then((r) => r.json());
};

export const baseUrl = location.origin;

export const api = {
  createUser: (data: {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    password: string;
  }) => fetchJson<typeof data, User>("POST", `${baseUrl}/users/register`, data),
  exchangeCredentialsForToken: (data: { username: string; password: string }) =>
    fetchJson<typeof data, { token: string; expires_at: string }>(
      "POST",
      `${baseUrl}/users/login`,
      data
    ),
  getCurrentUser: (data: { token: string }) =>
    fetchJson<typeof data, User>("GET", `${baseUrl}/users/@me`, data)
};
