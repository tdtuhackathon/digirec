import { NearBindgen, near, call, view, initialize, UnorderedMap, AccountId  ,LookupMap, Vector  } from 'near-sdk-js'

import { assert } from './utils'
import { Donation, Product, STORAGE_COST  } from './model'
import { User, Owner  } from './model';
import { promiseCreate } from 'near-sdk-js/lib/api';




@NearBindgen({})
class DonationContract {
  beneficiary: string = "v1.faucet.nonofficial.testnet";
  donations = new UnorderedMap<bigint>('map-uid-1');
  user_arr  = new  LookupMap<User>('acc_user')  ; 
  owner_arr = new LookupMap<Owner>('acc_owner')    ; 
  all_product = new  LookupMap<Product>('id_product')



  @initialize({ privateFunction: true })
  init({ beneficiary }: { beneficiary: string }) {
    this.beneficiary = beneficiary
  }
  @call({})
  create_owner({owner_id , name , desc } : { owner_id : AccountId  , name  , desc}) 
  {
    if(this.owner_arr.get(owner_id)){ return this.owner_arr.get(owner_id) }
    const owner  = new Owner(owner_id  ,name ,desc )  ;   
    this.owner_arr.set(owner_id , owner)    ;  
    return owner   ; 
  } 
  @call({})
  create_user ({user_id , name , desc } : {user_id : AccountId  , name : string   , desc: string} ) 
  {
    if(this.owner_arr.get(user_id)){ return this.owner_arr.get(user_id) }

    const user  = new User(user_id  ,name ,desc )  ;
       
    this.user_arr.set(user_id , user)    ;  
    return user ;
  }
  @call({})
  create_product({owner_id ,product_id, price , name , desc  , type , timelimit }: {owner_id : AccountId  , product_id : string   , price : bigint  , name : string  , desc :string  , type :string  , timelimit : number}  )  
  {
   assert(this.owner_arr.containsKey(owner_id ), "you dont have an owner")  ; 
    const  product  =new Product( product_id ,owner_id  ,price  ,name , desc  ,type  , timelimit) ;
    const owner:Owner  =  this.owner_arr.get(owner_id)  ;  
    owner.own_product.push(product)   ;
    this.owner_arr.set(owner_id,owner)  ; 
    this.all_product.set(product_id ,product)  ;  
    return product  ;  
  }
  @call({ payableFunction: true } )
  pay_money( {user_id , product_id  , payment , timeused}:{user_id:AccountId ,  product_id :string   ,  payment : bigint , timeused : number } )
  { 
    

    assert(this.user_arr.containsKey(user_id), "you dont have an owner")  ;
    const product  = this.all_product.get(product_id )  ; 
    const  owner_id  = product.product_owner_id   ;
    let price:bigint  = product.price  + STORAGE_COST  ;  
    assert( payment  > price, `Attach at least ${price} yoctoNEAR`); 

    // Send the money to the beneficiary
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
    for(let i =0  ; i < products.length   ; i++) 
    {
        if(products.get(i).product_id == product_id)
        {
          remove_product =user.used_product.swapRemove(i)  ; 
        } 
    }
    return remove_product ; 


  }
 
}