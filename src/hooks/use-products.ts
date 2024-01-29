import { useLocation } from "react-router-dom";

const useProductsPathName = () => {
  const { pathname } = useLocation();
  let queryNameValue: string;

  switch (pathname) {
    case "/":
      queryNameValue = "all";
      break;

    case "/masculino":
      queryNameValue = "male";
      break;

    case "/feminino":
      queryNameValue = "female";
      break;

    case "/unisex":
      queryNameValue = "accessory";
      break;

    default:
      return "";
  }

  return queryNameValue;
};

export default useProductsPathName;
