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
import Loading from "@/app/loading";

interface CompanyDetailsContextProps {
  companyDetails: Entry<TypeCompanyDetailsFields, undefined, string>[];
}

const CompanyDetailsContext = createContext<
  CompanyDetailsContextProps | undefined
>(undefined);

export function CompanyDetailsProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const [companyDetails, setCompanyDetails] = useState<
    Entry<TypeCompanyDetailsFields, undefined, string>[]
  >([]);

  const [isLoading, setIsLoading] = useState(true);

  async function fetchCompanyDetails(): Promise<void> {
    try {
      const data = await client.getEntries<TypeCompanyDetailsFields>({
        content_type: "companyDetails",
      });
      setCompanyDetails(data.items);
    } catch (err) {
      console.error("Unable to fetch company details", err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCompanyDetails();
  }, []);

  return (
    <CompanyDetailsContext.Provider value={{ companyDetails }}>
      {!isLoading ? children : <Loading />}
    </CompanyDetailsContext.Provider>
  );
}

export function useCompanyDetailsContext(): CompanyDetailsContextProps {
  const context = useContext(CompanyDetailsContext);
  if (context === undefined) {
    throw new Error(
      "useCompanyDetailsContext must be used within a CompanyDetailsProvider"
    );
  }
  return context;
}
