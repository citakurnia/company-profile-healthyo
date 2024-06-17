import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeProductFields {
    contentTypeId: "product";
    fields: {
        productPhoto: Asset;
        title: EntryFields.Symbol;
        productId: EntryFields.Integer;
        price: EntryFields.Integer;
        productDescription: EntryFields.Text;
    };
}

export type TypeProduct = Entry<TypeProductFields>;
