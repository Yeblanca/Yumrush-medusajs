import {
  type SubscriberConfig,
  type SubscriberArgs,
  OrderService,
} from '@medusajs/medusa';

import { Logger } from '@medusajs/medusa';

export default async function handleOrderPlaced({
  data,
  eventName,
  container,
  pluginOptions,
}: SubscriberArgs<Record<string, string>>) {
  const logger = container.resolve<Logger>('logger');
  const sendGridService = container.resolve('sendgridService');

  console.log(data);
  logger.info(`Order placed event received: ${JSON.stringify(data)}`);

  sendGridService.sendEmail({
    templateId: 'd-10abf51e747540fb83900cac8099348e',
    from: 'sales@yum-rush.com',
    to: 'juanpa92008@gmail.com',
    dynamic_template_data: {
      data,
    },
  });
}

export const config: SubscriberConfig = {
  event: 'order.placed',
  context: {
    subscriberId: 'order-placed-handler-2',
  },
};
