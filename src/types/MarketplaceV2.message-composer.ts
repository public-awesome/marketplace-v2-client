/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { AllowDenoms, InstantiateMsg, ConfigForString, ExecuteMsg, Uint128, OrderDetailsForString, Coin, QueryMsg, QueryBoundForPriceOffset, QueryBoundForString, QueryOptionsForPriceOffset, PriceOffset, QueryOptionsForString, NullableAsk, Addr, Ask, OrderDetailsForAddr, ArrayOfAsk, NullableCollectionOffer, CollectionOffer, ArrayOfCollectionOffer, ConfigForAddr, NullableOffer, Offer, ArrayOfOffer } from "./MarketplaceV2.types";
export interface MarketplaceV2Message {
  contractAddress: string;
  sender: string;
  updateConfig: ({
    config
  }: {
    config: ConfigForString;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateAllowDenoms: ({
    allowDenoms
  }: {
    allowDenoms: AllowDenoms;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setAsk: ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  sellNft: ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeAsk: ({
    id
  }: {
    id: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setOffer: ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  buySpecificNft: ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeOffer: ({
    id
  }: {
    id: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setCollectionOffer: ({
    collection,
    details
  }: {
    collection: string;
    details: OrderDetailsForString;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  buyCollectionNft: ({
    collection,
    details
  }: {
    collection: string;
    details: OrderDetailsForString;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeCollectionOffer: ({
    id
  }: {
    id: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class MarketplaceV2MessageComposer implements MarketplaceV2Message {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
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

  updateConfig = ({
    config
  }: {
    config: ConfigForString;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_config: {
            config
          }
        })),
        funds: _funds
      })
    };
  };
  updateAllowDenoms = ({
    allowDenoms
  }: {
    allowDenoms: AllowDenoms;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_allow_denoms: {
            allow_denoms: allowDenoms
          }
        })),
        funds: _funds
      })
    };
  };
  setAsk = ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_ask: {
            collection,
            details,
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  sellNft = ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          sell_nft: {
            collection,
            details,
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  removeAsk = ({
    id
  }: {
    id: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_ask: {
            id
          }
        })),
        funds: _funds
      })
    };
  };
  setOffer = ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_offer: {
            collection,
            details,
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  buySpecificNft = ({
    collection,
    details,
    tokenId
  }: {
    collection: string;
    details: OrderDetailsForString;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          buy_specific_nft: {
            collection,
            details,
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  removeOffer = ({
    id
  }: {
    id: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_offer: {
            id
          }
        })),
        funds: _funds
      })
    };
  };
  setCollectionOffer = ({
    collection,
    details
  }: {
    collection: string;
    details: OrderDetailsForString;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_collection_offer: {
            collection,
            details
          }
        })),
        funds: _funds
      })
    };
  };
  buyCollectionNft = ({
    collection,
    details
  }: {
    collection: string;
    details: OrderDetailsForString;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          buy_collection_nft: {
            collection,
            details
          }
        })),
        funds: _funds
      })
    };
  };
  removeCollectionOffer = ({
    id
  }: {
    id: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_collection_offer: {
            id
          }
        })),
        funds: _funds
      })
    };
  };
}