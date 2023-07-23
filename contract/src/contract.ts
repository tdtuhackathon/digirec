// Find all our documentation at https://docs.near.org
// import { NearBindgen, near, call, view } from 'near-sdk-js';

// @NearBindgen({})
// class HelloNear {
//   message: string = "Hello";

//   @view({}) // This method is read-only and can be called for free
//   get_greeting(): string {
//     return this.message;
//   }

//   @call({}) // This method changes the state, for which it cost gas
//   set_greeting({ message }: { message: string }): void {
//     near.log(`Saving greeting ${message}`);
//     this.message = message;
//   }
// }
// near call dev-1690006589328-41550865698546 set_greeting '{"message":"message ne"}' --account-id konodioda2411.testnet
import { near , LookupMap   , UnorderedMap , NearBindgen , initialize, assert, Vector} from "near-sdk-js"
import { AccountId  , Balance , view  , call } from "near-sdk-js"

type ProductId =  string; 
export class Product 
{
  product_id :  ProductId  ;  
  name : string  ; 
  total_supply : number  ;
  price : Balance; 
  decs  : string   ;  
  owner :AccountId  ; 
  constructor(product_id : ProductId, name: string, total_supply : number , price : Balance ,decs  : string   , owner :AccountId ) {
    this.product_id = product_id ; 
    this.name  = name  ; 
    this.total_supply  = total_supply  ; 
    this.price = price  ; 
    this.decs  = decs  ; 
    this.owner  = owner  ;
  } 
}
export  class Shop 
{
  owner :AccountId     ; 
  name : string  ; 
  desc : string  ; 
  total_product : number ;  
  constructor(owner: AccountId, name: string, desc: string, total_product: number) {
    this.owner = owner;
    this.name = name;
    this.desc = desc;
    this.total_product = total_product;
  }
}
@NearBindgen({})  
class Contrat 
{
  
  platform_name : AccountId = "";   
  products_per_shop = new UnorderedMap <Vector <Product>>('map-uid-1'); 
  product_per_id = new LookupMap <Product> ('product by id') ; 
  products  = new Vector <Product> ('products')    ; 
  shops = new UnorderedMap<Shop> ('shops')  ;    
  allshops  = new Vector <Shop> ('all shop')   ; 
  total :number   = 0  ;
  total_product:number  = 0 
  @initialize({ privateFunction: true })
  init() {
      this.platform_name  = near.currentAccountId();
  }
  @call({})
  new_shop({ name , desc , total_product }: { name: string , desc:string , total_product:number } )
  {
      let  owner:AccountId  = near.currentAccountId()  ;
      assert(!this.shops.get(owner), "shop already exits") ; 
      let shop:Shop = new Shop(owner, name, desc, total_product)  ;  
      
      this.shops.set(owner  , shop )   ; 
      this.allshops.push(shop)   ;
      this.total += 1  ; 

  }
  @view({}) 
  get_shop_by_id( { account_id }: { account_id: string }) : Shop{
    
    return this.shops.get(account_id) ; 
  }
  @view({}) 
  get_all_shops() :  Shop[]
  {
    let ret: Shop[]  = []  ;
    for(let i   =0 ; i< this.allshops.length ; i++ )
    {
      ret.push(this.allshops.get(i));
    }
    return ret ;
  }
  @call ({}) 
  new_product(
    { product_id  , name,total_supply,price ,desc}: { product_id: ProductId,name: string, total_supply: number,price: Balance, desc: string}

  )  : Product{
    let owner = near.currentAccountId();
    assert(this.shops.get(owner), "Your Shop not exists");
    let product = new Product(product_id , name , total_supply ,price , desc , owner);

    let  products_set: Vector <Product> =  this.products_per_shop.get(owner) ?  this.products_per_shop.get(owner) : new Vector<Product>('map-uid-1');
    products_set.push(product);

    this.products_per_shop.set (owner, products_set);
    this.product_per_id.set(product_id, product);
    this.products.push( product);
    return product ; 
  }
  @view({})
  get_all_products() : Product[] {
    let  all_products : Product[] = [];

    for(let i   =0 ; i< this.products.length ; i++ )
    {
      all_products.push(this.products.get(i));
    }

    return  all_products; 
  }
  @view({})
  get_product_by_id({product_id} : {product_id: ProductId}) : Product {
    return this.product_per_id.get(product_id)  ;  
  }
  @call({})
  update_product ({product_id, price} : {product_id: ProductId, price: Balance}) : Product {
    let product = this.get_product_by_id({product_id});
    product.price = price;
    this.product_per_id.set(product_id, product);
    // Product Per Shop
    // Update Products
    return product; 
  }
  @view({})
  get_products_by_owner( owner: AccountId) : Vector<Product> {
    return this.products_per_shop.get(owner) ?  this.products_per_shop.get(owner) : new Vector<Product>('map-uid-1'); 
  }

}


//near deploy --accountId dev-1690020417337-36849238982762 --wasmFile contract/build/hello-near.wasm
//near call dev-1690035120410-76098625316862 init  --accountId dev-1690035120410-76098625316862
//near call dev-1690035120410-76098625316862 new_shop '{"name": "My Shop", "desc": "My Shop Description", "total_product": 10}' --accountId dev-1690035120410-76098625316862
//near view dev-1690035120410-76098625316862 get_all_shops 
//near view konodioda2411.testnet get_shop_by_id --accountId dev-1690025756562-44216038823925 --args '{"owner": "konodioda2411.testnet"}'
//near view dev-1690031882612-66416453543066 get_shop_by_id '{"owner": "dev-1690030274885-34249227738510"}' --accountId dev-1690031882612-66416453543066
