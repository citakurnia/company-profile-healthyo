import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCompanyDetailsFields {
    contentTypeId: "companyDetails";
    fields: {
        section: EntryFields.Symbol;
        photoRepresentation?: Asset;
        summary: EntryFields.Text;
        description: EntryFields.RichText;
    };
}

export type TypeCompanyDetails = Entry<TypeCompanyDetailsFields>;
