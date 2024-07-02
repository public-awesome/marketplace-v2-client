import codegen from '@cosmwasm/ts-codegen'

codegen({
  contracts: [
    {
      name: 'MarketplaceV2',
      dir: '../../protocols/marketplace/schema/stargaze-marketplace-v2/',
    },
  ],
  outPath: './src/types',

  options: {
    bundle: {
      bundleFile: 'index.ts',
      scope: 'contracts',
    },
    types: {
      enabled: true,
    },
    client: {
      enabled: true,
    },
    reactQuery: {
      enabled: true,
      optionalClient: true,
      version: 'v3',
      mutations: true,
      queryKeys: true,
      queryFactory: true,
    },
    recoil: {
      enabled: false,
    },
    messageComposer: {
      enabled: true,
    },
  },
}).then(() => {
  console.log('✨ all done!')
})
