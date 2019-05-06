export const HttpMethods = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
  PATCH: "PATCH"
};

export const StatusCodes = {
  OK: "200",
  CREATED: "201",
  NO_CONTENT: "204",
  BAD_REQUEST: "400",
  UNAUTHORIZATION: '401',
  FORBIDDEN: "403",
  INTERNAL_SERVER_ERROR: "500"
};

export const MOCKIT_SERVER_URL = process.env.REACT_APP_MOCKIT_SERVER_URL || "localhost:3000";
