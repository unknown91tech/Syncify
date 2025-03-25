import { ExamplesData } from '../types';
import ethGetBlockByNumberExamples from './eth_getBlockByNumber';
import ethBlockNumberExamples from './eth_blockNumber';
import ethAccountsExamples from './eth_accounts';

/**
 * Combined API examples for all sections
 */
const examples: ExamplesData = {
  eth_getBlockByNumber: ethGetBlockByNumberExamples,
  eth_blockNumber: ethBlockNumberExamples,
  eth_accounts: ethAccountsExamples,
};

export default examples;