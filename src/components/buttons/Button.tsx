import { $, component$, PropFunction, Slot } from '@builder.io/qwik';

type Props = {
	disabled?: boolean;
	extraClass?: string;
	onClick$?: PropFunction<() => void>;
};

export const Button = component$<Props>(({ extraClass = '', disabled = false, onClick$ }) => {
	return (
		<button
			type="button"
			disabled={disabled}
			class={`flex items-center justify-around bg-gray-100 border rounded-md py-2 px-4 text-base font-medium text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-800 ${extraClass} disabled:cursor-not-allowed`}
			onClick$={$(async () => {
				if (onClick$) {
					onClick$();
				}
			})}
		>
			<Slot />
		</button>
	);
});
