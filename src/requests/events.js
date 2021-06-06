import request from "./request";

export const getEvents = async () =>
  await request({
    url: "/events",
    method: "GET",
  });

export const addEvent = async (data) =>
  await request({
    url: `/events`,
    method: "POST",
    data: data,
  });

export const getEvent = async (id) =>
  await request({
    url: `/events/${id}`,
    method: "GET",
  });

export const editEvent = async (id, data) =>
  await request({
    url: `/events/${id}`,
    method: "PATCH",
    data: data,
  });

export const deleteEvent = async (id) =>
  await request({
    url: `/events/${id}`,
    method: "DELETE",
  });
