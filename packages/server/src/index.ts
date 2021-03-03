import iceServers from '@geckos.io/common/lib/iceServers'
import server, { GeckosServer, ServerChannel } from './geckos/server'
import { Data, RawMessage, ChannelId } from '@geckos.io/common/lib/types'

export default server
export { server as geckos, iceServers }
export type { GeckosServer, ServerChannel, Data, RawMessage, ChannelId }
