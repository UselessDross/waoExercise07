// middle-were: [  index  ]--<#>[  router-controlls  ]--<#>[  endpoints  ]--<#>[> order <]
import { Schema } from "mongoose";


import { schema as delivery } from "./delivery";
export interface Order {}
export const schema = new Schema<Order>({
                                        material:  { type: String, required: true },
                                        amount:    { type: Number, required: true },
                                        currency:  { type: String, required: true },
                                        price:     { type: Number, required: true },
                                        timestamp: { type: Number, required: true },
                                        delivery: delivery,
                                        })