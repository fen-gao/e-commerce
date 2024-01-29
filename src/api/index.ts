import gql from "graphql-tag";

export const PRODUCTS_QUERY = gql`
  query AllProducts {
    products {
      id
      name
      description
      price
      createdAt
      updatedAt
      images {
        url
      }
    }
  }
`;

export const FEMALE_PRODUCTS_QUERY = gql`
  query FemaleProducts {
    products(where: { categories_some: { name: "Female" } }) {
      id
      name
      description
      price
      createdAt
      updatedAt
      images {
        url
      }
    }
  }
`;

export const MALE_PRODUCTS_QUERY = gql`
  query MaleProducts {
    products(where: { categories_some: { name: "Male" } }) {
      id
      name
      description
      price
      createdAt
      updatedAt
      images {
        url
      }
    }
  }
`;

export const UNISEX_PRODUCTS_QUERY = gql`
  query UnisexProducts {
    products(where: { categories_some: { name: "Unisex" } }) {
      id
      name
      description
      price
      createdAt
      updatedAt
      images {
        url
      }
    }
  }
`;
