import axios from "@/helpers/axios";
import { useEffect, useState } from "react";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function useProducts(page: number) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const productsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/products`);
        setAllProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page]);

  useEffect(() => {
    const startIndex = (page - 1) * productsPerPage;
    const paginatedProducts = allProducts.slice(
      startIndex,
      startIndex + productsPerPage,
    );
    setProducts(paginatedProducts);
  }, [page, allProducts]);

  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  return { products, loading, totalPages };
}
