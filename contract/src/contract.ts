import { NearBindgen, near, call, view, initialize, UnorderedMap, AccountId  ,LookupMap, Vector, Balance  } from 'near-sdk-js'

import { assert } from './utils'
import {  Product, STORAGE_COST  } from './model'
import { User, Owner  } from './model';
import { promiseCreate } from 'near-sdk-js/lib/api';
import { utils } from 'near-api-js'


//dev-1690788952485-16499013319978

@NearBindgen({})
class Digirec {
  // platform_id = near.signerAccountId();
  user_arr  = new  LookupMap<User>('acc_user')  ; 
  owner_arr = new  LookupMap<Owner>('acc_owner')    ; 
  product_arr = new LookupMap<Product>('id_product');
  all_product = new Vector<Product>('loop_product');
  
  // @initialize({ privateFunction: true })
  // init({ beneficiary }: { beneficiary: string }) {
  //   this.beneficiary = beneficiary
  // }

  @view({})
  get_all_product ()  
  {
    return this.all_product.toArray  ; 
  } 
  @view({})
  get_user ({user_id }:{user_id  :AccountId} )  
  {
    return  this.user_arr.get(user_id)  ; 
  }
  @view({})
  get_user_product ({user_id }:{user_id  :AccountId} )  
  {
    return  this.user_arr.get(user_id).used_product.toArray  ; 
  }
  @view({})
  get_owner ({owner_id }:{owner_id  :AccountId} )  
  {
    return  this.owner_arr.get(owner_id)  ; 
  }
  @view({})
  get_owner_product ({owner_id }:{owner_id  :AccountId} )  
  {
    return  this.owner_arr.get(owner_id).own_product.toArray  ; 
  }
  @call({})
  create_owner({ name , desc } : {  name  , desc}) 
  { 
    // get the signin account 
    let owner_id = near.signerAccountId();

    if(this.owner_arr.get(owner_id)){ return this.owner_arr.get(owner_id) }
    // create the owner 
    const owner  = new Owner(owner_id  ,name ,desc )  ;   
    this.owner_arr.set(owner_id , owner)    ;  
    return owner   ; 
  } 
  @call({})
  create_user ({ name , desc } : { name : string   , desc: string} ) 
  {
    
    let user_id = near.signerAccountId();
    if(this.user_arr.get(user_id)){ return this.user_arr.get(user_id) }
    // create the user 
    const user  = new User(user_id  ,name ,desc )  ;  
    this.user_arr.set(user_id , user)    ;  
    return user ;
  }
  @call({})
  create_product({product_id, price , name , desc  , type , timelimit }: { product_id : string , price : number , name : string  , desc :string  , type :string  , timelimit : number}  )  
  { 
    // the price of the product 
    let product_price : Balance  = price as unknown as Balance  ;
    let owner_id = near.predecessorAccountId();
    assert(this.owner_arr.containsKey(owner_id ), "you dont have an owner")  ; 
    const  product  =new Product( product_id ,owner_id  , product_price ,name , desc  ,type  , timelimit) ;
    const owner:Owner  =  this.owner_arr.get(owner_id)  ;  
    owner.own_product.push(product)   ;
    this.all_product.push(product)  ; 
    this.owner_arr.set(owner_id,owner)  ; 
    this.product_arr.set(product_id ,product)  ;  
    return product  ;  
  }

  @call({ payableFunction: true } )
  pay_money( { product_id  , timeused}:{  product_id :string    , timeused : number } )
  { 
    
    let user_id = near.signerAccountId();
    let paymentAmount: bigint = near.attachedDeposit() as bigint;
    assert(this.user_arr.containsKey(user_id), "you dont have an owner")  ;

    const product  = this.product_arr.get(product_id )  ; 
    const  owner_id  = product.product_owner_id   ;
    let price:bigint  = product.price  + STORAGE_COST  ;  
    assert( paymentAmount  > price, `Attach at least ${price} yoctoNEAR`); 

    // Send the money to the product Owner 
    const promise = near.promiseBatchCreate(owner_id)
    near.promiseBatchActionTransfer(promise, price - STORAGE_COST)

    const rent_product = new Product(product_id, owner_id  , price , product.name  , product.desc , product.type , timeused)
    const user:User =  this.user_arr.get(user_id)  ;
    user.used_product.push(product)  ; 
    this.user_arr.set(user_id,user)  ; 
    return rent_product   ; 
  } 
  @call({})
  remove_product({user_id , product_id} : {user_id : AccountId , product_id : string})
  {
    const  user :User  =this.user_arr.get(user_id)  ; 
    let  products : Vector<Product>  = user.used_product  ;
    let remove_product: Product = null ;
    // loop thourght the product that the user own 
    for(let i =0  ; i < products.length   ; i++) 
    {
        if(products.get(i).product_id == product_id)
        {
          remove_product =user.used_product.swapRemove(i)  ; 
        } 
    }
    // update the value in the user hashmap 
    this.user_arr.set(user_id , user)  ; 
    return remove_product ; 
 }
 
}