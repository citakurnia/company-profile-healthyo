import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeTestimonyFields {
    contentTypeId: "testimoni";
    fields: {
        closeUpPhoto: Asset;
        testimonyText: EntryFields.Text;
        name: EntryFields.Symbol;
    };
}

export type TypeTestimony = Entry<TypeTestimonyFields>;
