import request from "./request";

export const register = async (credentials) =>
  await request({
    url: "/auth/register",
    method: "POST",
    data: credentials,
  });

export const login = async (credentials) =>
  await request({
    url: "/auth/login",
    method: "POST",
    data: credentials,
  });
