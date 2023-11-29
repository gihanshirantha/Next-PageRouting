import { Product } from "@/models/Product";


export interface HomeProductProps{
    products:Product[];
    loading:boolean;
    error:Error|null;
}