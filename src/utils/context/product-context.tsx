"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { TypeProductFields } from "@/types/contentful";
import { Entry } from "contentful";
import { client } from "../contentful";

interface ProductContextProps {
  products: Entry<TypeProductFields, undefined, string>[];
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<
    Entry<TypeProductFields, undefined, string>[]
  >([]);

  useEffect(() => {
    async function fetchProduct() {
      if (products.length === 0) {
        try {
          const data = await client.getEntries<TypeProductFields>({
            content_type: "product",
          });
          setProducts(data.items);
        } catch (err) {
          console.error("Unable to set product information", err);
        }
      }
    }

    fetchProduct();
  }, [products]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}
