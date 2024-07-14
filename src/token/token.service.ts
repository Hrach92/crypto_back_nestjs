import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
import { tokenABI } from './contract';

dotenv.config();

@Injectable()
export class TokenService {
  private provider: ethers.JsonRpcProvider;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(process.env.RPC_PROVIDER_URL);
  }

  async getTokenDetails(address: string): Promise<object> {
    const contract = new ethers.Contract(address, tokenABI, this.provider);
    const [name, symbol, totalSupply] = await Promise.all([
      contract.name(),
      contract.symbol(),
      contract.totalSupply(),
    ]);
    const bigInt = BigInt(totalSupply);
    const serializedTotalSupply = bigInt.toString();
    return { name, symbol, serializedTotalSupply };
  }
}
