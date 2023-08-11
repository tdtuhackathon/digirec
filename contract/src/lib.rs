use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::{LookupMap, UnorderedMap, Vector};
use near_sdk::serde::__private::ser::FlatMapSerializeStruct;
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::{env, near_bindgen, AccountId, Balance, PanicOnDefault};

pub type ProductId = String;

#[derive(BorshDeserialize, BorshSerialize, Deserialize, Serialize, Clone)]
#[serde(crate = "near_sdk::serde")]
pub struct Product {
  pub product_id: ProductId,
  pub product_owner_id: AccountId,
  pub name: String,
  pub price: Balance,
  pub desc: String, // description
  pub categories: String,
  pub images: Vec<String>,
  pub timelimit: u16
}

#[derive(BorshDeserialize, BorshSerialize, Deserialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct Owner {
  pub account_id: AccountId,
  pub name: String,
  pub desc: String,
  pub own_product: Vec<Product>,
  pub total_product: u64
}

#[derive(BorshDeserialize, BorshSerialize, Deserialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct User {
  pub account_id: AccountId,
  pub name: String,
  pub desc: String,
  pub used_product: Vec<Product>,
  pub total_used: u64
}

// Define the contract structure
#[near_bindgen]
#[derive(PanicOnDefault, BorshDeserialize, BorshSerialize)]
pub struct Contract {
  pub platform_name: AccountId,
  pub product_by_id: LookupMap<ProductId, Product>,
  pub products: UnorderedMap<u128, Product>,
  pub users: LookupMap<AccountId, User>,
  pub all_users: UnorderedMap<u128, User>,
  pub total_users: u128,
  pub owners: LookupMap<AccountId, Owner>,
  pub all_owners: UnorderedMap<u128, Owner>,
  pub total_owners: u128,
  pub total_products: u128,
}

#[near_bindgen]
impl Contract {
  #[init]
  pub fn init() -> Self {
    Self {
      platform_name: env::signer_account_id(),
      product_by_id: LookupMap::new(b"product by id".try_to_vec().unwrap()),
      products: UnorderedMap::new(b"products".try_to_vec().unwrap()),
      users: LookupMap::new(b"shops".try_to_vec().unwrap()),
      all_users: UnorderedMap::new(b"all shops".try_to_vec().unwrap()),
      total_users: 0,
      owners: LookupMap::new(b"shops".try_to_vec().unwrap()),
      all_owners: UnorderedMap::new(b"all shops".try_to_vec().unwrap()),
      total_owners: 0,
      total_products: 0,
    }
  }
  // get all the product in the products Unordermap using the product postion as  a key  
  pub fn get_all_product(&self) ->Vec<Product>   
  {
    let mut all_products : Vec<Product> = Vec::new()   ;
    
    for i in  1..self.products.len( ) + 1  { 
      if let Some(product) = self.products.get(&(i as u128)) 
      {all_products.push(product)} 
    }
    all_products  
  } 

  pub fn get_product_by_id(&self , produdct_id : ProductId) -> Product  
  {
    self.product_by_id.get(&produdct_id).unwrap() 
  }  
  // get the user account id  unwrap to create an error if there is no user 
  pub fn get_user(&self , user_id :AccountId  ) -> User
  {
    self.users.get(&user_id).unwrap()  
  }
  // get all the user product return an empty vector if there is no user
  pub fn get_user_product(&self ,  user_id: AccountId ) ->Vec<Product> 
  {
    self.get_user(user_id).used_product 
  }
  // 

  // get the user account id  unwrap to create an error if there is no user 
  pub fn get_owner(&self , owner_id :AccountId  ) -> Owner
  {
    self.owners.get(&owner_id).unwrap()  
  }
  // get all the user product return an empty vector if there is no user
  pub fn get_owner_product(&self ,  owner_id: AccountId ) ->Vec<Product> 
  {
    self.get_owner(owner_id).own_product
  }
// code to push all the user that were created 
  pub fn get_all_user(&self ) ->Vec<User>
  { 

    let mut all_users : Vec<User> = Vec::new()   ;
    
    for i in  1..self.all_users.len() + 1  { 
      if let Some(user) = self.all_users.get(&(i as u128)) 
      {all_users.push(user)} 
    }
    all_users  
  }

  // code to push all the owner that were created 
  pub fn get_all_owner(&self ) ->Vec<Owner>
  { 

    let mut all_owners : Vec<Owner> = Vec::new()   ;
    
    for i in  1..self.all_owners.len() + 1  { 
      if let Some(owner) = self.all_owners.get(&(i as u128)) 
      {all_owners.push(owner)} 
    }
    all_owners  
  }




  pub fn create_owner(&mut self, name: String, desc: String) -> Owner {
    let owner_id = env::signer_account_id();
    assert!(!self.owners.contains_key(&owner_id), "Owner already exists");
    let total_owners = self.total_owners + 1;
    let mut own_product = Vec::new();
    let owner = Owner { account_id: env::signer_account_id(), name, desc, own_product, total_product: 0 };

    // self.owners.insert(&owner_id, &owner);
    // self.all_owners.insert(&total_owners, &owner);

    return owner
  }
  pub fn create_user(&mut self, name: String, desc: String) -> User {
    let user_id: AccountId = env::signer_account_id();
    assert!(!self.users.contains_key(&user_id), "User already exists");
    let total_users = self.total_users + 1;
    let mut used_product = Vec::new();
    let user = User { account_id: env::signer_account_id(), name, desc, used_product, total_used: 0 };

    self.users.insert(&user_id, &user);
    self.all_users.insert(&total_users, &user);

    return user
  }

  pub fn create_product(&mut self, product_id: ProductId , price: Balance , name: String , desc: String  , categories: String, images: Vec<String>, timelimit: u16) {
    
  }



}