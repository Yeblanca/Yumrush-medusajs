import {
  type SubscriberConfig,
  type SubscriberArgs,
  OrderService,
} from '@medusajs/medusa';

export default async function handleOrderPlaced({
  data,
  eventName,
  container,
  pluginOptions,
}: SubscriberArgs<Record<string, string>>) {
  // TODO: handle event
  console.info(
    `Order placed event received: ${JSON.stringify(data)}`
  );
}

export const config: SubscriberConfig = {
  event: OrderService.Events.PLACED,
  context: {
    subscriberId: 'order-placed-handler',
  },
};
