/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type AllowDenoms = {
  includes: string[];
} | {
  excludes: string[];
};
export interface InstantiateMsg {
  allow_denoms: AllowDenoms;
  config: ConfigForString;
}
export interface ConfigForString {
  fee_manager: string;
  maker_reward_bps: number;
  max_royalty_fee_bps: number;
  protocol_fee_bps: number;
  royalty_registry: string;
  taker_reward_bps: number;
}
export type ExecuteMsg = {
  update_config: {
    config: ConfigForString;
  };
} | {
  update_allow_denoms: {
    allow_denoms: AllowDenoms;
  };
} | {
  set_ask: {
    collection: string;
    details: OrderDetailsForString;
    token_id: string;
  };
} | {
  sell_nft: {
    collection: string;
    details: OrderDetailsForString;
    token_id: string;
  };
} | {
  remove_ask: {
    id: string;
  };
} | {
  set_offer: {
    collection: string;
    details: OrderDetailsForString;
    token_id: string;
  };
} | {
  buy_specific_nft: {
    collection: string;
    details: OrderDetailsForString;
    token_id: string;
  };
} | {
  remove_offer: {
    id: string;
  };
} | {
  set_collection_offer: {
    collection: string;
    details: OrderDetailsForString;
  };
} | {
  buy_collection_nft: {
    collection: string;
    details: OrderDetailsForString;
  };
} | {
  remove_collection_offer: {
    id: string;
  };
};
export type Uint128 = string;
export interface OrderDetailsForString {
  finder?: string | null;
  price: Coin;
  recipient?: string | null;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {};
} | {
  allow_denoms: {};
} | {
  ask: string;
} | {
  asks: string[];
} | {
  asks_by_collection_denom: {
    collection: string;
    denom: string;
    query_options?: QueryOptionsForPriceOffset | null;
  };
} | {
  asks_by_creator_collection: {
    collection: string;
    creator: string;
    query_options?: QueryOptionsForString | null;
  };
} | {
  offer: string;
} | {
  offers: string[];
} | {
  offers_by_token_price: {
    collection: string;
    denom: string;
    query_options?: QueryOptionsForPriceOffset | null;
    token_id: string;
  };
} | {
  offers_by_creator_collection: {
    collection: string;
    creator: string;
    query_options?: QueryOptionsForString | null;
  };
} | {
  collection_offer: string;
} | {
  collection_offers: string[];
} | {
  collection_offers_by_price: {
    collection: string;
    denom: string;
    query_options?: QueryOptionsForPriceOffset | null;
  };
} | {
  collection_offers_by_creator_collection: {
    collection: string;
    creator: string;
    query_options?: QueryOptionsForString | null;
  };
};
export type QueryBoundForPriceOffset = {
  inclusive: PriceOffset;
} | {
  exclusive: PriceOffset;
};
export type QueryBoundForString = {
  inclusive: string;
} | {
  exclusive: string;
};
export interface QueryOptionsForPriceOffset {
  descending?: boolean | null;
  limit?: number | null;
  max?: QueryBoundForPriceOffset | null;
  min?: QueryBoundForPriceOffset | null;
}
export interface PriceOffset {
  amount: number;
  id: string;
}
export interface QueryOptionsForString {
  descending?: boolean | null;
  limit?: number | null;
  max?: QueryBoundForString | null;
  min?: QueryBoundForString | null;
}
export type NullableAsk = Ask | null;
export type Addr = string;
export interface Ask {
  collection: Addr;
  creator: Addr;
  details: OrderDetailsForAddr;
  id: string;
  token_id: string;
}
export interface OrderDetailsForAddr {
  finder?: Addr | null;
  price: Coin;
  recipient?: Addr | null;
}
export type ArrayOfAsk = Ask[];
export type NullableCollectionOffer = CollectionOffer | null;
export interface CollectionOffer {
  collection: Addr;
  creator: Addr;
  details: OrderDetailsForAddr;
  id: string;
}
export type ArrayOfCollectionOffer = CollectionOffer[];
export interface ConfigForAddr {
  fee_manager: Addr;
  maker_reward_bps: number;
  max_royalty_fee_bps: number;
  protocol_fee_bps: number;
  royalty_registry: Addr;
  taker_reward_bps: number;
}
export type NullableOffer = Offer | null;
export interface Offer {
  collection: Addr;
  creator: Addr;
  details: OrderDetailsForAddr;
  id: string;
  token_id: string;
}
export type ArrayOfOffer = Offer[];