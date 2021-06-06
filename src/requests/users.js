import request from "./request";

export const getUsers = async () =>
  await request({
    url: "/users",
    method: "GET",
  });
