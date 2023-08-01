import { utils } from 'near-api-js'

export class Contract {

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;
  }

  async getAllProduct() {
    return product_arr = await this.wallet.viewMethod({ contractId: this.contractId, method: "get_all_product" })
  }


}