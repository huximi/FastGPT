import { StandSubPlanLevelMapType, SubPlanType } from '../../../support/wallet/sub/type';
import type {
  ChatModelItemType,
  FunctionModelItemType,
  LLMModelItemType,
  VectorModelItemType,
  AudioSpeechModels,
  WhisperModelType,
  ReRankModelItemType
} from '../../../core/ai/model.d';
import { SubTypeEnum } from '../../../support/wallet/sub/constants';

/* fastgpt main */
export type FastGPTConfigFileType = {
  feConfigs: FastGPTFeConfigsType;
  systemEnv: SystemEnvType;
  subPlans?: SubPlanType;
  llmModels: ChatModelItemType[];
  vectorModels: VectorModelItemType[];
  reRankModels: ReRankModelItemType[];
  audioSpeechModels: AudioSpeechModelType[];
  whisperModel: WhisperModelType;
};

export type FastGPTFeConfigsType = {
  show_emptyChat?: boolean;
  show_register?: boolean;
  show_appStore?: boolean;
  show_git?: boolean;
  show_pay?: boolean;
  show_openai_account?: boolean;
  show_promotion?: boolean;
  show_team_chat?: boolean;
  hide_app_flow?: boolean;
  concatMd?: string;
  docUrl?: string;
  chatbotUrl?: string;
  openAPIDocUrl?: string;
  systemTitle?: string;
  googleClientVerKey?: string;
  isPlus?: boolean;
  oauth?: {
    github?: string;
    google?: string;
  };
  limit?: {
    exportDatasetLimitMinutes?: number;
    websiteSyncLimitMinuted?: number;
  };
  scripts?: { [key: string]: string }[];
  favicon?: string;
  customApiDomain?: string;
  customSharePageDomain?: string;

  uploadFileMaxSize?: number;
};

export type SystemEnvType = {
  openapiPrefix?: string;
  vectorMaxProcess: number;
  qaMaxProcess: number;
  pgHNSWEfSearch: number;
};

// declare global {
//   var feConfigs: FastGPTFeConfigsType;
//   var systemEnv: SystemEnvType;
//   var systemInitd: boolean;
// }
