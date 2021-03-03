import client, { ClientChannel } from './geckos/channel'
import { Data, RawMessage, ChannelId } from '@geckos.io/common/lib/types'

export default client
export { client as geckos }
export type { ClientChannel, Data, RawMessage, ChannelId }
