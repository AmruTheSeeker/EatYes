const API_VER = "v1";
export const API_URL =
  process.env.NODE_ENV === "development"
    ? `${process.env.DEV_API_URL}/${API_VER}/auth`
    : `${process.env.PROD_API_URL}/${API_VER}`;
