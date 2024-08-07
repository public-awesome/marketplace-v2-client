/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { AllowDenoms, InstantiateMsg, ConfigForString, ExecuteMsg, Uint128, OrderDetailsForString, Coin, QueryMsg, QueryBoundForPriceOffset, QueryBoundForString, QueryOptionsForPriceOffset, PriceOffset, QueryOptionsForString, NullableAsk, Addr, Ask, OrderDetailsForAddr, ArrayOfAsk, NullableBid, Bid, ArrayOfBid, NullableCollectionBid, CollectionBid, ArrayOfCollectionBid, ConfigForAddr } from "./MarketplaceV2.types";
export interface MarketplaceV2ReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigForAddr>;
  allowDenoms: () => Promise<AllowDenoms>;
  ask: () => Promise<NullableAsk>;
  asks: () => Promise<ArrayOfAsk>;
  asksByCollectionDenom: ({
    collection,
    denom,
    queryOptions
  }: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForPriceOffset;
  }) => Promise<ArrayOfAsk>;
  asksByCreatorCollection: ({
    collection,
    creator,
    queryOptions
  }: {
    collection: string;
    creator: string;
    queryOptions?: QueryOptionsForString;
  }) => Promise<ArrayOfAsk>;
  bid: () => Promise<NullableBid>;
  bids: () => Promise<ArrayOfBid>;
  bidsByTokenPrice: ({
    collection,
    denom,
    queryOptions,
    tokenId
  }: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForPriceOffset;
    tokenId: string;
  }) => Promise<ArrayOfBid>;
  bidsByCreatorCollection: ({
    collection,
    creator,
    queryOptions
  }: {
    collection: string;
    creator: string;
    queryOptions?: QueryOptionsForString;
  }) => Promise<ArrayOfBid>;
  collectionBid: () => Promise<NullableCollectionBid>;
  collectionBids: () => Promise<ArrayOfCollectionBid>;
  collectionBidsByPrice: ({
    collection,
    denom,
    queryOptions
  }: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForPriceOffset;
  }) => Promise<ArrayOfCollectionBid>;
  collectionBidsByCreatorCollection: ({
    collection,
    creator,
    queryOptions
  }: {
    collection: string;
    creator: string;
    queryOptions?: QueryOptionsForString;
  }) => Promise<ArrayOfCollectionBid>;
}
export class MarketplaceV2QueryClient implements MarketplaceV2ReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.allowDenoms = this.allowDenoms.bind(this);
    this.ask = this.ask.bind(this);
    this.asks = this.asks.bind(this);
    this.asksByCollectionDenom = this.asksByCollectionDenom.bind(this);
    this.asksByCreatorCollection = this.asksByCreatorCollection.bind(this);
    this.bid = this.bid.bind(this);
    this.bids = this.bids.bind(this);
    this.bidsByTokenPrice = this.bidsByTokenPrice.bind(this);
    this.bidsByCreatorCollection = this.bidsByCreatorCollection.bind(this);
    this.collectionBid = this.collectionBid.bind(this);
    this.collectionBids = this.collectionBids.bind(this);
    this.collectionBidsByPrice = this.collectionBidsByPrice.bind(this);
    this.collectionBidsByCreatorCollection = this.collectionBidsByCreatorCollection.bind(this);
  }

  config = async (): Promise<ConfigForAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  allowDenoms = async (): Promise<AllowDenoms> => {
    return this.client.queryContractSmart(this.contractAddress, {
      allow_denoms: {}
    });
  };
  ask = async (): Promise<NullableAsk> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ask: {}
    });
  };
  asks = async (): Promise<ArrayOfAsk> => {
    return this.client.queryContractSmart(this.contractAddress, {
      asks: {}
    });
  };
  asksByCollectionDenom = async ({
    collection,
    denom,
    queryOptions
  }: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForPriceOffset;
  }): Promise<ArrayOfAsk> => {
    return this.client.queryContractSmart(this.contractAddress, {
      asks_by_collection_denom: {
        collection,
        denom,
        query_options: queryOptions
      }
    });
  };
  asksByCreatorCollection = async ({
    collection,
    creator,
    queryOptions
  }: {
    collection: string;
    creator: string;
    queryOptions?: QueryOptionsForString;
  }): Promise<ArrayOfAsk> => {
    return this.client.queryContractSmart(this.contractAddress, {
      asks_by_creator_collection: {
        collection,
        creator,
        query_options: queryOptions
      }
    });
  };
  bid = async (): Promise<NullableBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bid: {}
    });
  };
  bids = async (): Promise<ArrayOfBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids: {}
    });
  };
  bidsByTokenPrice = async ({
    collection,
    denom,
    queryOptions,
    tokenId
  }: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForPriceOffset;
    tokenId: string;
  }): Promise<ArrayOfBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids_by_token_price: {
        collection,
        denom,
        query_options: queryOptions,
        token_id: tokenId
      }
    });
  };
  bidsByCreatorCollection = async ({
    collection,
    creator,
    queryOptions
  }: {
    collection: string;
    creator: string;
    queryOptions?: QueryOptionsForString;
  }): Promise<ArrayOfBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids_by_creator_collection: {
        collection,
        creator,
        query_options: queryOptions
      }
    });
  };
  collectionBid = async (): Promise<NullableCollectionBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collection_bid: {}
    });
  };
  collectionBids = async (): Promise<ArrayOfCollectionBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collection_bids: {}
    });
  };
  collectionBidsByPrice = async ({
    collection,
    denom,
    queryOptions
  }: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForPriceOffset;
  }): Promise<ArrayOfCollectionBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collection_bids_by_price: {
        collection,
        denom,
        query_options: queryOptions
      }
    });
  };
  collectionBidsByCreatorCollection = async ({
    collection,
    creator,
    queryOptions
  }: {
    collection: string;
    creator: string;
    queryOptions?: QueryOptionsForString;
  }): Promise<ArrayOfCollectionBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collection_bids_by_creator_collection: {
        collection,
        creator,
        query_options: queryOptions
      }
    });
  };
}
export interface MarketplaceV2Interface extends MarketplaceV2ReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateConfig: ({
    config
  }: {
    config: ConfigForString;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateAllowDenoms: ({
    allowDenoms
  }: {
    allowDenoms: AllowDenoms;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  setAsk: ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeAsk: ({
    id
  }: {
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateAsk: ({
    details,
    id
  }: {
    details: OrderDetailsForString;
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  acceptAsk: ({
    finder,
    id,
    maxInput,
    recipient
  }: {
    finder?: string;
    id: string;
    maxInput: Coin;
    recipient?: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  setBid: ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeBid: ({
    id
  }: {
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateBid: ({
    details,
    id
  }: {
    details: OrderDetailsForString;
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  acceptBid: ({
    finder,
    id,
    minOutput,
    recipient
  }: {
    finder?: string;
    id: string;
    minOutput: Coin;
    recipient?: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  setCollectionBid: ({
    collection,
    details
  }: {
    collection: string;
    details: OrderDetailsForString;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeCollectionBid: ({
    id
  }: {
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateCollectionBid: ({
    details,
    id
  }: {
    details: OrderDetailsForString;
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  acceptCollectionBid: ({
    finder,
    id,
    minOutput,
    recipient,
    tokenId
  }: {
    finder?: string;
    id: string;
    minOutput: Coin;
    recipient?: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  sellNft: ({
    collection,
    finder,
    minOutput,
    recipient,
    tokenId
  }: {
    collection: string;
    finder?: string;
    minOutput: Coin;
    recipient?: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  buySpecificNft: ({
    collection,
    finder,
    maxInput,
    recipient,
    tokenId
  }: {
    collection: string;
    finder?: string;
    maxInput: Coin;
    recipient?: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  buyCollectionNft: ({
    collection,
    finder,
    maxInput,
    recipient
  }: {
    collection: string;
    finder?: string;
    maxInput: Coin;
    recipient?: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class MarketplaceV2Client extends MarketplaceV2QueryClient implements MarketplaceV2Interface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateConfig = this.updateConfig.bind(this);
    this.updateAllowDenoms = this.updateAllowDenoms.bind(this);
    this.setAsk = this.setAsk.bind(this);
    this.removeAsk = this.removeAsk.bind(this);
    this.updateAsk = this.updateAsk.bind(this);
    this.acceptAsk = this.acceptAsk.bind(this);
    this.setBid = this.setBid.bind(this);
    this.removeBid = this.removeBid.bind(this);
    this.updateBid = this.updateBid.bind(this);
    this.acceptBid = this.acceptBid.bind(this);
    this.setCollectionBid = this.setCollectionBid.bind(this);
    this.removeCollectionBid = this.removeCollectionBid.bind(this);
    this.updateCollectionBid = this.updateCollectionBid.bind(this);
    this.acceptCollectionBid = this.acceptCollectionBid.bind(this);
    this.sellNft = this.sellNft.bind(this);
    this.buySpecificNft = this.buySpecificNft.bind(this);
    this.buyCollectionNft = this.buyCollectionNft.bind(this);
  }

  updateConfig = async ({
    config
  }: {
    config: ConfigForString;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        config
      }
    }, fee, memo, _funds);
  };
  updateAllowDenoms = async ({
    allowDenoms
  }: {
    allowDenoms: AllowDenoms;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_allow_denoms: {
        allow_denoms: allowDenoms
      }
    }, fee, memo, _funds);
  };
  setAsk = async ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_ask: {
        collection,
        details,
        token_id: tokenId
      }
    }, fee, memo, _funds);
  };
  removeAsk = async ({
    id
  }: {
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_ask: {
        id
      }
    }, fee, memo, _funds);
  };
  updateAsk = async ({
    details,
    id
  }: {
    details: OrderDetailsForString;
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_ask: {
        details,
        id
      }
    }, fee, memo, _funds);
  };
  acceptAsk = async ({
    finder,
    id,
    maxInput,
    recipient
  }: {
    finder?: string;
    id: string;
    maxInput: Coin;
    recipient?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      accept_ask: {
        finder,
        id,
        max_input: maxInput,
        recipient
      }
    }, fee, memo, _funds);
  };
  setBid = async ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_bid: {
        collection,
        details,
        token_id: tokenId
      }
    }, fee, memo, _funds);
  };
  removeBid = async ({
    id
  }: {
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_bid: {
        id
      }
    }, fee, memo, _funds);
  };
  updateBid = async ({
    details,
    id
  }: {
    details: OrderDetailsForString;
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_bid: {
        details,
        id
      }
    }, fee, memo, _funds);
  };
  acceptBid = async ({
    finder,
    id,
    minOutput,
    recipient
  }: {
    finder?: string;
    id: string;
    minOutput: Coin;
    recipient?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      accept_bid: {
        finder,
        id,
        min_output: minOutput,
        recipient
      }
    }, fee, memo, _funds);
  };
  setCollectionBid = async ({
    collection,
    details
  }: {
    collection: string;
    details: OrderDetailsForString;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_collection_bid: {
        collection,
        details
      }
    }, fee, memo, _funds);
  };
  removeCollectionBid = async ({
    id
  }: {
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_collection_bid: {
        id
      }
    }, fee, memo, _funds);
  };
  updateCollectionBid = async ({
    details,
    id
  }: {
    details: OrderDetailsForString;
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_collection_bid: {
        details,
        id
      }
    }, fee, memo, _funds);
  };
  acceptCollectionBid = async ({
    finder,
    id,
    minOutput,
    recipient,
    tokenId
  }: {
    finder?: string;
    id: string;
    minOutput: Coin;
    recipient?: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      accept_collection_bid: {
        finder,
        id,
        min_output: minOutput,
        recipient,
        token_id: tokenId
      }
    }, fee, memo, _funds);
  };
  sellNft = async ({
    collection,
    finder,
    minOutput,
    recipient,
    tokenId
  }: {
    collection: string;
    finder?: string;
    minOutput: Coin;
    recipient?: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      sell_nft: {
        collection,
        finder,
        min_output: minOutput,
        recipient,
        token_id: tokenId
      }
    }, fee, memo, _funds);
  };
  buySpecificNft = async ({
    collection,
    finder,
    maxInput,
    recipient,
    tokenId
  }: {
    collection: string;
    finder?: string;
    maxInput: Coin;
    recipient?: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      buy_specific_nft: {
        collection,
        finder,
        max_input: maxInput,
        recipient,
        token_id: tokenId
      }
    }, fee, memo, _funds);
  };
  buyCollectionNft = async ({
    collection,
    finder,
    maxInput,
    recipient
  }: {
    collection: string;
    finder?: string;
    maxInput: Coin;
    recipient?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      buy_collection_nft: {
        collection,
        finder,
        max_input: maxInput,
        recipient
      }
    }, fee, memo, _funds);
  };
}