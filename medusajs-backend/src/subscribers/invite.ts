import {
  type SubscriberConfig,
  type SubscriberArgs,
} from '@medusajs/medusa';

export default async function handleInviteCreated({
  data,
  eventName,
  container,
  pluginOptions,
}: SubscriberArgs<Record<string, string>>) {
  const sendGridService = container.resolve('sendgridService');

  sendGridService.sendEmail({
    templateId: 'd-a5fc8f4e6a364b08b4369556783aea99',
    from: 'sales@yum-rush.com',
    to: data.user_email,
    dynamic_template_data: {
      token: data.token,
    },
  });
}

export const config: SubscriberConfig = {
  event: 'invite.created',
  context: {
    subscriberId: 'invite-created-handler',
  },
};
