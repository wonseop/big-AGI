import { SCoreIcon } from '~/common/components/icons/vendors/SCoreIcon';

import type { IModelVendor } from '../IModelVendor';
import type { OpenAIAccessSchema } from '../../server/openai/openai.router';

import { LLMOptionsOpenAI, ModelVendorOpenAI } from '../openai/openai.vendor';
import { OpenAILLMOptions } from '../openai/OpenAILLMOptions';

import { SCoreSourceSetup } from './SCoreSourceSetup';


export interface SourceSetupSCore {
  oaiHost: string;  // use OpenAI-compatible non-default hosts (full origin path)
}

export const ModelVendorSCore: IModelVendor<SourceSetupSCore, OpenAIAccessSchema, LLMOptionsOpenAI> = {
  id: 'score',
  name: 'S-Core',
  rank: 23,
  location: 'local',
  instanceLimit: 1,

  // components
  Icon: SCoreIcon,
  SourceSetupComponent: SCoreSourceSetup,
  LLMOptionsComponent: OpenAILLMOptions,

  // functions
  initializeSetup: (): SourceSetupSCore => ({
    oaiHost: 'http://172.21.133.99:4444',
  }),
  getTransportAccess: (partialSetup): OpenAIAccessSchema => ({
    dialect: 'score',
    oaiKey: '',
    oaiOrg: '',
    oaiHost: partialSetup?.oaiHost || '',
    heliKey: '',
    moderationCheck: false,
  }),

  // OpenAI transport (s-core dialect in 'access')
  rpcUpdateModelsQuery: ModelVendorOpenAI.rpcUpdateModelsQuery,
  rpcChatGenerateOrThrow: ModelVendorOpenAI.rpcChatGenerateOrThrow,
  streamingChatGenerateOrThrow: ModelVendorOpenAI.streamingChatGenerateOrThrow,
};