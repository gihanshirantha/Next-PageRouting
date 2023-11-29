import { Product } from "../../../models/Product";

export interface ProductProps{
    products:Product[];
    loading:boolean;
    error:Error|null;
    title:string;
}