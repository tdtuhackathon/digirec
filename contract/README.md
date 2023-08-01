# Donation Contract

The smart contract exposes methods to handle donating $NEAR to a `beneficiary`.

```ts
@call
donate() {
  // Get who is calling the method and how much $NEAR they attached
  let donor = near.predecessorAccountId(); 
  let donationAmount: bigint = near.attachedDeposit() as bigint;

  let donatedSoFar = this.donations.get(donor) === null? BigInt(0) : BigInt(this.donations.get(donor) as string)
  let toTransfer = donationAmount;

  // This is the user's first donation, lets register it, which increases storage
  if(donatedSoFar == BigInt(0)) {
    assert(donationAmount > STORAGE_COST, `Attach at least ${STORAGE_COST} yoctoNEAR`);

    // Subtract the storage cost to the amount to transfer
    toTransfer -= STORAGE_COST
  }

  // Persist in storage the amount donated so far
  donatedSoFar += donationAmount
  this.donations.set(donor, donatedSoFar.toString())

  // Send the money to the beneficiary
  const promise = near.promiseBatchCreate(this.beneficiary)
  near.promiseBatchActionTransfer(promise, toTransfer)

  // Return the total amount donated so far
  return donatedSoFar.toString()
}
```

<br />

# Quickstart

1. Make sure you have installed [node.js](https://nodejs.org/en/download/package-manager/) >= 16.
2. Install the [`NEAR CLI`](https://github.com/near/near-cli#setup)

<br />

## 1. Build and Deploy the Contract
You can automatically compile and deploy the contract in the NEAR testnet by running:

```bash
npm run deploy
```

Once finished, check the `neardev/dev-account` file to find the address in which the contract was deployed:

```bash
cat ./neardev/dev-account
# e.g. dev-1659899566943-21539992274727
```

The contract will be automatically initialized with a default `beneficiary`.

To initialize the contract yourself do:

```bash
# Use near-cli to initialize contract (optional)
near call <dev-account> init '{"beneficiary":"<account>"}' --accountId <dev-account>
near call  dev-1690628638889-48269004371528 create_user '{"user_id":"<account>" , "name":"phuc"   , "desc":"animal" } ' --accountId dev-1690617589165-76075219779135

```

## creating the user 
```
near call dev-1690733425207-90364926461961 create_user  '{"name" : "user"   , "desc": "owner" }' --accountId dev-1690733425207-90364926461961

near call dev-1690733425207-90364926461961 create_owner '{"name" : "owner"   , "desc": "user"}' --accountId dev-1690733425207-90364926461961

near call dev-1690733425207-90364926461961 create_product '{ "product_id" : "1"   , "price" : 12 , "name" :"animal"  , "desc" : "asdfs"  , "type" :"dfa"  , "timelimit" : 34}' --accountId dev-1690733425207-90364926461961

 
```

near call  dev-1690629219699-92813206205571 create_product '{"product_id": "1", "price": 10 , "name": "animal","desc": "asdfs","type": "dfa","timelimit": 34 }' --accountId  dev-1690629219699-92813206205571


<br />

## 2. Get Beneficiary
`beneficiary` is a read-only method (`view` method) that returns the beneficiary of the donations.

`View` methods can be called for **free** by anyone, even people **without a NEAR account**!

```bash
near view <dev-account> beneficiary
near view dev-1690617589165-76075219779135  get_user '{"user_id":"<account>"}' 

```

<br />

## 3. Get Number of Donations

`donate` forwards any attached money to the `beneficiary` while keeping track of it.

`donate` is a payable method for which can only be invoked using a NEAR account. The account needs to attach money and pay GAS for the transaction.

```bash
# Use near-cli to donate 1 NEAR
near call <dev-account> donate --amount 1 --accountId <account>
```

**Tip:** If you would like to `donate` using your own account, first login into NEAR using:

```bash
# Use near-cli to login your NEAR account
near login
```

and then use the logged account to sign the transaction: `--accountId <your-account>`.