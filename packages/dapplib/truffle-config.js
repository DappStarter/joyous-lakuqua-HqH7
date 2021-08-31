require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy renew mad huge imitate prison equal gasp'; 
let testAccounts = [
"0x4cb1438a39d6e12a62630cece3fbf50d99b083688304681dec25ef1c36128104",
"0x8bb0bc963db13cb8f73e3514cacf1bc578aa3f298d7e9b6ba5b48cfdbf16c2aa",
"0x7ffb26e706a1bcd52fc5f1fd52ee13007b65e417e67f6392db43e2c01d83d229",
"0xd1433cdde69bc3a7f6cbf4aa6d93586d55a8d18268edfa59d809c56ca1b1ed20",
"0x8e34dd0fed701b3eb4e1777aaed88042fbb4abae1db707b8039c2d73e7929f7f",
"0xd2886b36d4251223025b2b14975eb795dad633ad051824b10b18ed0aa0dd8e84",
"0xcec70334fb39fb9f6ddcaf688a1827ad9e4fcfd6995438690babfd6b0998dd2d",
"0x88888c808437f5363912d62d0daf45bb0c41eaff00a8718aed3c88986788c8d0",
"0x8be33775e334e93c0497af1e135cf4bf57219c424b3056a82e71ef85505c32f9",
"0xb514f89cef18594d4546d3fcc306847657540ad32ba9f3b3bc8454c2ba3f1a44"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

