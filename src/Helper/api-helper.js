import { API_CHARACTERS } from "../Config/api-url";

export const getAllCharactersUrl = (offset, limit, category, name) => {
  return `${API_CHARACTERS}${offset ? "offset=" + offset + "&" : ""}${
    limit ? "limit=" + limit + "&" : ""
  }${category ? "category=" + category + "&" : ""}${
    name ? "name=" + name : ""
  }`;
};

export const stringParser = (name) => {
  return name.split(" ").join("+");
};

export const historyUrlGenerator = (pathname, page, search, category) => {
  return `${pathname}?${page ? "page=" + page + "&" : ""}${
    search ? "search=" + search + "&" : ""
  }${category ? "category=" + category + "&" : ""}`;
};
