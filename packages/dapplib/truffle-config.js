require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note situate urban gesture deposit equal giant'; 
let testAccounts = [
"0x486eb72a7668f0345b5b892153cf9bada6670642ad85e2dd5502a2cf4e740328",
"0xbf85ea1c7571d6cc8df467ddc0d91740af7c48cb2a31cc38d507627e35f48f92",
"0xc67a91224c2d787524c42cc91422a9cccedd3aeda0798e451e0c0a623dca1fde",
"0x9a6b2d25cc38f5f45223da7436c4ba8f62ee8dca2adbb58480cd87f99d97be86",
"0x0f1e5b2f814a4d3402216a7023a59955a4d1614764574d8a8048a9c40851255c",
"0x182d1e39113f7f291756bd2673c3d11abbbf0a5f6f462d7cb9ba60095b472533",
"0x7570eb81e3c1044bad21c699dd02114b265788a0fbdb5afdf2e9a95f8d7e6206",
"0xd2b694090e863f8c47888c8ad65d65cc825e7bed08bd8d2a46bd585c59c982f8",
"0xc7d6b907b4baa55419ae8a41692437f8fb56817a26c0d17d5cf648927d012c8e",
"0x2b811fe383897a56c6850ae8635eb523c80ce1edafa655928d7ab21d1a4a51ff"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

