
const express = require('express');
const cors = require('cors')
const {Web3} = require('web3');
const ABI =require('./ABI.json')
const socketIO = require('socket.io');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());

const web3=new Web3(process.env.API);
const contractAddress="0x2841469D6fFfda7eafc718Cd95481fa13d0e1108";
const contract=new web3.eth.Contract(ABI,contractAddress);

const fetchNfts=async(account)=>{
    try{
    const nftBalances=await contract.methods.balanceOf(account).call();
    const num=Number(nftBalances);
    return {userNfts:num};
    }
    catch(error){
        console.log("error in fetching nft",error);

    }

}
app.post('/members',async(req,res)=>{
    try{
        const account=req.body.from;
        
        const numNFT=await fetchNfts(account);
    
        if(numNFT.userNfts>0){
            res.status(200).json({status:200,numNFT});
        }
        else{
            res.status(400).json({status:400,message:"you have zero nft"});
        }

    }
    catch(error){
        res.status(500).json({error:"internal server account"});
    }
})


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})