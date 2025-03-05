"use client";

import LazyProductCard from "@/components/LazyProductCard";
import Pagination from "@/components/Pagination";
import SkeletonCard from "@/components/SkeletonCard";
import useProducts from "@/hooks/useProducts";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { products, loading, totalPages } = useProducts(currentPage);

  return (
    <div className="min-h-screen w-screen bg-gray-50 pb-20">
      <header className="flex w-full items-center justify-center p-5 lg:p-10">
        <h1 className="text-3xl font-semibold lg:text-5xl">
          Product Catalogue
        </h1>
      </header>
      <main className="mt-5 px-5 lg:px-10">
        <div className="flex flex-col justify-center gap-5 lg:flex-row lg:flex-wrap">
          {loading
            ? Array.from({ length: 9 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : products.length > 0 &&
              products.map((product) => (
                <LazyProductCard key={product.id} product={product} />
              ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
}
