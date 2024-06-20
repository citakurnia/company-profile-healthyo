"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { TypeCompanyDetailsFields } from "@/types/contentful";
import { Entry } from "contentful";
import { client } from "../contentful";

interface CompanyDetailsContextProps {
  companyDetails: Entry<TypeCompanyDetailsFields, undefined, string>[];
}

const CompanyDetailsContext = createContext<
  CompanyDetailsContextProps | undefined
>(undefined);

export function CompanyDetailsProvider({ children }: { children: ReactNode }) {
  const [companyDetails, setCompanyDetails] = useState<
    Entry<TypeCompanyDetailsFields, undefined, string>[]
  >([]);

  useEffect(() => {
    async function fetchCompanyDetails() {
      if (companyDetails.length === 0) {
        try {
          const data = await client.getEntries<TypeCompanyDetailsFields>({
            content_type: "companyDetails",
          });
          setCompanyDetails(data.items);
        } catch (err) {
          console.error("Unable to catch company details", err);
        }
      }
    }

    fetchCompanyDetails();
  }, [companyDetails]);

  return (
    <CompanyDetailsContext.Provider value={{ companyDetails }}>
      {children}
    </CompanyDetailsContext.Provider>
  );
}

export function useCompanyDetailsContext() {
  const context = useContext(CompanyDetailsContext);
  if (context === undefined) {
    throw new Error(
      "useCompanyDetailsContext must be used within a CompanyDetailsProvider"
    );
  }
  return context;
}
