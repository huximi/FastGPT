import { FastGPTConfigFileType } from '@fastgpt/global/common/system/types';
import { isIPv6 } from 'net';

export const SERVICE_LOCAL_PORT = `${process.env.PORT || 3000}`;
export const SERVICE_LOCAL_HOST =
  process.env.HOSTNAME && isIPv6(process.env.HOSTNAME)
    ? `[${process.env.HOSTNAME}]:${SERVICE_LOCAL_PORT}`
    : `${process.env.HOSTNAME || 'localhost'}:${SERVICE_LOCAL_PORT}`;

export const initFastGPTConfig = (config?: FastGPTConfigFileType) => {
  if (!config) return;

  global.feConfigs = config.feConfigs;
  global.subPlans = config.subPlans;

  global.llmModels = config.llmModels;
  global.vectorModels = config.vectorModels;
  global.audioSpeechModels = config.audioSpeechModels;
  global.whisperModel = config.whisperModel;
  global.reRankModels = config.reRankModels;
};
