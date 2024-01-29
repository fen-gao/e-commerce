export interface ImagesProps {
  url: string;
}

export interface Products {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  quantity: number;
  subTotal: number;
  images: ImagesProps[];
}

export interface ProductsResponse {
  products: Products[];
  cacheName: string;
  isLoading: boolean;
  error: Error | null;
}
