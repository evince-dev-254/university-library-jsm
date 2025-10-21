import { Client } from "@upstash/workflow";
import config from "@/lib/config";

export const workflowClient = new Client({
    baseUrl: config.env.upstash.qstackUrl!,
    token: config.env.upstash.qstackToken!,
    
});