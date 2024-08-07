import { abi as QUOTERV2_ABI } from "@uniswap/v3-periphery/artifacts/contracts/lens/QuoterV2.sol/QuoterV2.json";
import { FeeAmount } from "@uniswap/v3-sdk";
import { BigNumber, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

import { encodePath, forkNetwork, deployContract, ThenArgRecursive } from "./shared/helpers";
import addresses from "./shared/addresses.json";

const { uniswapV3 } = addresses.ethereum.protocols;
const { tokens } = addresses.ethereum;

async function fixture() {
    const [ deployer ] = await ethers.getSigners();
    const reference = await getQuoterV2();
    const quoter = await deployUniswapV3StaticQuoter(deployer);
    return {
        deployer,
        quoter,
        reference
    };
}

async function getQuoterV2() {
    return ethers.getContractAt(QUOTERV2_ABI, uniswapV3.quoterV2);
}

async function deployUniswapV3StaticQuoter(deployer: Signer) {
    return deployContract(
        deployer, 
        "UniswapV3StaticQuoter", 
        [uniswapV3.factory, uniswapV3.initCodeHash]
    )
}

async function ethereumFixture(blockNumber: number) {
    await forkNetwork("mainnet", blockNumber);
    return fixture();
}

describe("quoter", async () => {
    context("ethereum", () => {

        context("15013603", async () => {
            let fix: ThenArgRecursive<ReturnType<typeof ethereumFixture>>;

            beforeEach(async () => {
                fix = await ethereumFixture(15013603);
            });
            
            it("exactInput: weth .3% usdc: 31337 eth", async () => {
                const amountIn = ethers.utils.parseEther("31337");
    
                const params = {
                    tokenIn: tokens.weth,
                    tokenOut: tokens.usdc,
                    amountIn,
                    fee: FeeAmount.MEDIUM,
                    sqrtPriceLimitX96: 0
                };
    
                const referenceOut = await fix.reference.callStatic.quoteExactInputSingle(params);
                const quoterOut = await fix.quoter.quoteExactInputSingle(params);
                expect(quoterOut).equals(referenceOut.amountOut);
            });

            it("exactInput: weth .3% usdc: 1 wei", async () => {
                const amountIn = 1;
    
                const params = {
                    tokenIn: tokens.weth,
                    tokenOut: tokens.usdc,
                    amountIn,
                    fee: FeeAmount.MEDIUM,
                    sqrtPriceLimitX96: 0
                };
    
                const referenceOut = await fix.reference.callStatic.quoteExactInputSingle(params);
                const quoterOut = await fix.quoter.quoteExactInputSingle(params);
                expect(quoterOut).equals(referenceOut.amountOut);
            });

            it("exactInput: weth .3% usdc: max", async () => {
                const params = {
                    tokenIn: tokens.weth,
                    tokenOut: tokens.usdc,
                    amountIn: ethers.constants.MaxUint256,
                    fee: FeeAmount.MEDIUM,
                    sqrtPriceLimitX96: 0
                };
    
                await expect(fix.reference.callStatic.quoteExactInputSingle(params)).reverted;
                await expect(fix.quoter.quoteExactInputSingle(params)).reverted;
            });

            it("invalid token", async () => {
                const params = {
                    tokenIn: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc3",
                    tokenOut: tokens.usdc,
                    amountIn: ethers.utils.parseEther("1337"),
                    fee: FeeAmount.MEDIUM,
                    sqrtPriceLimitX96: 0
                };

                await expect(fix.reference.callStatic.quoteExactInputSingle(params)).reverted;
                await expect(fix.quoter.quoteExactInputSingle(params)).reverted;
            });

            it("exactOutput: weth .3% usdc: 31206401855667 usdc", async () => {
                const amountOut = BigNumber.from("31206401855667");
    
                const params = {
                    tokenIn: tokens.weth,
                    tokenOut: tokens.usdc,
                    amount: amountOut,
                    fee: FeeAmount.MEDIUM,
                    sqrtPriceLimitX96: 0
                };
                
                const referenceIn = await fix.reference.callStatic.quoteExactOutputSingle(params);
    
                const quoterIn = await fix.quoter.quoteExactOutputSingle(params);
                expect(quoterIn).equals(referenceIn.amountIn);
            });

            it("exactOutput: weth .3% usdc: 1 wei", async () => {
                const amountOut = 1;
    
                const params = {
                    tokenIn: tokens.weth,
                    tokenOut: tokens.usdc,
                    amount: amountOut,
                    fee: FeeAmount.MEDIUM,
                    sqrtPriceLimitX96: 0
                };
    
                const referenceIn = await fix.reference.callStatic.quoteExactOutputSingle(params);
                const quoterIn = await fix.quoter.quoteExactOutputSingle(params);
                expect(quoterIn).equals(referenceIn.amountIn);
            });

            it("exactOutput: weth .3% usdc: max", async () => {
                const params = {
                    tokenIn: tokens.weth,
                    tokenOut: tokens.usdc,
                    amount: ethers.constants.MinInt256,
                    fee: FeeAmount.MEDIUM,
                    sqrtPriceLimitX96: 0
                };
    
                await expect(fix.reference.callStatic.quoteExactOutputSingle(params)).reverted;
                await expect(fix.quoter.quoteExactOutputSingle(params)).reverted;
            });
        });

        context("15014353", async () => {
            let fix: ThenArgRecursive<ReturnType<typeof ethereumFixture>>;

            beforeEach(async () => {
                fix = await ethereumFixture(15014353);
            });

            it("exactInput: usdc .05% weth .3% comp: 31337 usdc", async () => {
                const amountIn = ethers.utils.parseUnits("31337", 6);

                const path = encodePath([tokens.usdc, tokens.weth, tokens.comp], [FeeAmount.LOW, FeeAmount.MEDIUM]);

                const referenceOut = await fix.reference.callStatic.quoteExactInput(path, amountIn);
                const quoterOut = await fix.quoter.quoteExactInput(path, amountIn);
                expect(quoterOut).equals(referenceOut.amountOut);
            });

            it("exactOutput: usdc .05% weth .3% comp: 687578004838424621671 comp", async () => {
                const amountOut = BigNumber.from("687578004838424621671");

                const path = encodePath([tokens.comp, tokens.weth, tokens.usdc], [FeeAmount.MEDIUM, FeeAmount.LOW]);

                const referenceIn = await fix.reference.callStatic.quoteExactOutput(path, amountOut);
                const quoterIn = await fix.quoter.quoteExactOutput(path, amountOut);
                expect(quoterIn).equals(referenceIn.amountIn);
            });
        });
    });
});