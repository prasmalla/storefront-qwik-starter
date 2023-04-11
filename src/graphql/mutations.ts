import { CreateBackInStockInput } from '~/types';

export const createBackInStockSubscriptionMutation = (input: CreateBackInStockInput) => ({
	variables: { input },
	query: `	
	mutation createBackInStockSubscription($input: CreateBackInStockInput!) {
		createBackInStockSubscription(input: $input) {
			__typename
			... on BackInStock {
				email
			}
			... on BackInStockAlreadySubscribedError {
				message
			}
		}
	}
`,
});
