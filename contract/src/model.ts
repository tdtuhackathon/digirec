import { Vector, deserialize } from "near-sdk-js";

export const STORAGE_COST: bigint = BigInt("1000000000000000000000")

type ProductId = string;  
type AccountId  = string    ;

export class  Owner  
{
  account_id :  AccountId   ;
  name : string  ; 
  decs : string  ; 
  own_product  : Vector<Product>   ;
  constructor(account_id : AccountId  , name :string  , decs :string   ) {
    this.account_id  =account_id   ;  
    this.name  =name  ; 
    this.decs  = decs  ; 
    this.own_product = new Vector<Product>('owner-product')  ; 
  } 
}
export  class  User 
{
  account_id : AccountId  ;
  name : string  ;   
  decs : string  ;  
  used_product :  Vector<Product>  ; 
  constructor(account_id : AccountId  , name :string  , decs :string   ) {
    this.account_id  =account_id   ;  
    this.name  =name  ; 
    this.decs  = decs  ; 
    this.used_product = new Vector<Product>('used-product')  ; 
  } 
}

export class  Product  
{
  product_id : ProductId  ; 
  product_owner_id : AccountId  ; 
  price  : bigint  ; 
  name : string   ; 
  desc :string  ; 
  type : string  ; 
  timelimit : number;  
  constructor( product_id : ProductId  , product_owner_id : AccountId  , price :bigint  , name : string   , desc  :string   ,  type :string  , timelimit: number ) {
   this.product_id  = product_id  ;
   this.product_owner_id  = product_owner_id   ; 
   this.price = price   ; 
   this.name = name  ; 
   this.desc = desc  ; 
   this.type = type  ;
   this.timelimit  =timelimit  ; 
  } 
}