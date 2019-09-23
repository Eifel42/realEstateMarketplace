const Verifier = artifacts.require('Verifier');
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const proof = require('../../zokrates/code/square/proof.json');

contract('SolnSquareVerifier', accounts => {
    const account_one = accounts[0];
    const A = proof["proof"]["A"];
    const B = proof["proof"]["B"];
    const C = proof["proof"]["C"];
    const correctProofInput = proof["input"];
    let propertyName = "Manish Properties";
    let propertySymbol = "*";
    let propertyBaseURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

    describe('match Test SolnSquareVerifier spec', function () {
        beforeEach(async function () {
            this.VerifierContract = await Verifier.new({from: account_one});
            this.SolnSquareVerifierContract = await SolnSquareVerifier.new(this.VerifierContract.address, propertyName, propertySymbol, propertyBaseURI, {from: account_one});
        });

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('Test if a new solution can be added for contract', async function () {
            let txObject = await this.SolnSquareVerifierContract.addSolution(A, B, C, correctProofInput, account_one);
            let event = txObject.logs[0].event;
            assert.equal("solutionAdded", event, "Unable to add new solution");
        });

        it('Test if only unique solutions can be added for contract', async function () {
            await this.SolnSquareVerifierContract.addSolution(A, B, C, correctProofInput, account_one);
            let isUniqueSolution = true;
            try {
                await this.SolnSquareVerifierContract.addSolution(A, B, C, correctProofInput, account_one);
            } catch (error) {
                isUniqueSolution = false;
            }
            assert.equal(isUniqueSolution, false, "Only unique solutions can be added");
        });

        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('Test if an ERC721 token can be minted for contract', async function () {
            let txObject = await this.SolnSquareVerifierContract.mintNewToken(A, B, C, correctProofInput, account_one, 1);
            let event = txObject.logs[1].event;
            assert.equal("Transfer", event, "Unable to mint a new token");
        });

    });
});