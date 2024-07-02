/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { AllowDenoms, InstantiateMsg, ConfigForString, ExecuteMsg, Uint128, OrderDetailsForString, Coin, QueryMsg, QueryBoundForPriceOffset, QueryBoundForString, QueryOptionsForPriceOffset, PriceOffset, QueryOptionsForString, NullableAsk, Addr, Ask, OrderDetailsForAddr, ArrayOfAsk, NullableCollectionOffer, CollectionOffer, ArrayOfCollectionOffer, ConfigForAddr, NullableOffer, Offer, ArrayOfOffer } from "./MarketplaceV2.types";
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
  offer: () => Promise<NullableOffer>;
  offers: () => Promise<ArrayOfOffer>;
  offersByTokenPrice: ({
    collection,
    denom,
    queryOptions,
    tokenId
  }: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForPriceOffset;
    tokenId: string;
  }) => Promise<ArrayOfOffer>;
  offersByCreatorCollection: ({
    collection,
    creator,
    queryOptions
  }: {
    collection: string;
    creator: string;
    queryOptions?: QueryOptionsForString;
  }) => Promise<ArrayOfOffer>;
  collectionOffer: () => Promise<NullableCollectionOffer>;
  collectionOffers: () => Promise<ArrayOfCollectionOffer>;
  collectionOffersByPrice: ({
    collection,
    denom,
    queryOptions
  }: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForPriceOffset;
  }) => Promise<ArrayOfCollectionOffer>;
  collectionOffersByCreatorCollection: ({
    collection,
    creator,
    queryOptions
  }: {
    collection: string;
    creator: string;
    queryOptions?: QueryOptionsForString;
  }) => Promise<ArrayOfCollectionOffer>;
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
    this.offer = this.offer.bind(this);
    this.offers = this.offers.bind(this);
    this.offersByTokenPrice = this.offersByTokenPrice.bind(this);
    this.offersByCreatorCollection = this.offersByCreatorCollection.bind(this);
    this.collectionOffer = this.collectionOffer.bind(this);
    this.collectionOffers = this.collectionOffers.bind(this);
    this.collectionOffersByPrice = this.collectionOffersByPrice.bind(this);
    this.collectionOffersByCreatorCollection = this.collectionOffersByCreatorCollection.bind(this);
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
  offer = async (): Promise<NullableOffer> => {
    return this.client.queryContractSmart(this.contractAddress, {
      offer: {}
    });
  };
  offers = async (): Promise<ArrayOfOffer> => {
    return this.client.queryContractSmart(this.contractAddress, {
      offers: {}
    });
  };
  offersByTokenPrice = async ({
    collection,
    denom,
    queryOptions,
    tokenId
  }: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForPriceOffset;
    tokenId: string;
  }): Promise<ArrayOfOffer> => {
    return this.client.queryContractSmart(this.contractAddress, {
      offers_by_token_price: {
        collection,
        denom,
        query_options: queryOptions,
        token_id: tokenId
      }
    });
  };
  offersByCreatorCollection = async ({
    collection,
    creator,
    queryOptions
  }: {
    collection: string;
    creator: string;
    queryOptions?: QueryOptionsForString;
  }): Promise<ArrayOfOffer> => {
    return this.client.queryContractSmart(this.contractAddress, {
      offers_by_creator_collection: {
        collection,
        creator,
        query_options: queryOptions
      }
    });
  };
  collectionOffer = async (): Promise<NullableCollectionOffer> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collection_offer: {}
    });
  };
  collectionOffers = async (): Promise<ArrayOfCollectionOffer> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collection_offers: {}
    });
  };
  collectionOffersByPrice = async ({
    collection,
    denom,
    queryOptions
  }: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForPriceOffset;
  }): Promise<ArrayOfCollectionOffer> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collection_offers_by_price: {
        collection,
        denom,
        query_options: queryOptions
      }
    });
  };
  collectionOffersByCreatorCollection = async ({
    collection,
    creator,
    queryOptions
  }: {
    collection: string;
    creator: string;
    queryOptions?: QueryOptionsForString;
  }): Promise<ArrayOfCollectionOffer> => {
    return this.client.queryContractSmart(this.contractAddress, {
      collection_offers_by_creator_collection: {
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
  sellNft: ({
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
  setOffer: ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  buySpecificNft: ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeOffer: ({
    id
  }: {
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  setCollectionOffer: ({
    collection,
    details
  }: {
    collection: string;
    details: OrderDetailsForString;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  buyCollectionNft: ({
    collection,
    details
  }: {
    collection: string;
    details: OrderDetailsForString;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeCollectionOffer: ({
    id
  }: {
    id: string;
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
    this.sellNft = this.sellNft.bind(this);
    this.removeAsk = this.removeAsk.bind(this);
    this.setOffer = this.setOffer.bind(this);
    this.buySpecificNft = this.buySpecificNft.bind(this);
    this.removeOffer = this.removeOffer.bind(this);
    this.setCollectionOffer = this.setCollectionOffer.bind(this);
    this.buyCollectionNft = this.buyCollectionNft.bind(this);
    this.removeCollectionOffer = this.removeCollectionOffer.bind(this);
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
  sellNft = async ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      sell_nft: {
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
  setOffer = async ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_offer: {
        collection,
        details,
        token_id: tokenId
      }
    }, fee, memo, _funds);
  };
  buySpecificNft = async ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      buy_specific_nft: {
        collection,
        details,
        token_id: tokenId
      }
    }, fee, memo, _funds);
  };
  removeOffer = async ({
    id
  }: {
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_offer: {
        id
      }
    }, fee, memo, _funds);
  };
  setCollectionOffer = async ({
    collection,
    details
  }: {
    collection: string;
    details: OrderDetailsForString;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_collection_offer: {
        collection,
        details
      }
    }, fee, memo, _funds);
  };
  buyCollectionNft = async ({
    collection,
    details
  }: {
    collection: string;
    details: OrderDetailsForString;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      buy_collection_nft: {
        collection,
        details
      }
    }, fee, memo, _funds);
  };
  removeCollectionOffer = async ({
    id
  }: {
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_collection_offer: {
        id
      }
    }, fee, memo, _funds);
  };
}