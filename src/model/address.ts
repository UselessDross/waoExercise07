import { Schema } from "mongoose";

export interface Address {

}

export const schema = new Schema<Address>({
  street_name: { type: String, required: true},
    street_number: { type: String, required: true},
  city: { type: String, required: true }
})