import { CreateBackInStockInput } from '~/types';

export const activeBackInStockSubscriptionForProductVariantWithCustomerQuery = (
	input: CreateBackInStockInput
) => ({
	variables: { input },
	query: `	
	query activeBackInStockSubscriptionForProductVariantWithCustomer($input: CreateBackInStockInput!) {
		activeBackInStockSubscriptionForProductVariantWithCustomer(input: $input) {
			email
		}
	}
`,
});
