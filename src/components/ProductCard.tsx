"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IProduct } from "@/hooks/useProducts";
import { FaStar } from "react-icons/fa";
import StarRating from "./ratingStar";

export default function ProductCard({ product }: { product: IProduct }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex h-full w-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-md transition-all duration-700 ease-out lg:w-[400px] ${isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-95 opacity-0"}`}
    >
      <div className="h-96 overflow-hidden lg:h-[400px]">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="mt-4 flex flex-grow flex-col justify-between">
        <div className="group relative">
          <h1 className="max-w-full truncate text-lg font-bold">
            {product.title}
          </h1>
          <div className="absolute bottom-full left-0 mt-0.5 w-max max-w-xs rounded bg-black px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
            {product.title}
          </div>
        </div>

        <p className="mt-2 text-gray-500 capitalize">{product.category}</p>
        <p className="text-xl font-semibold text-green-600">${product.price}</p>
        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={product.rating.rate} />
          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>
      </div>
    </div>
  );
}
