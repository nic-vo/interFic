import { PropsWithChildren } from 'react';

import '@/styles/globals.css';
import { manropeClass } from '@/styles/fonts';

const RootLayout = (props: PropsWithChildren) => {
	return (
		<html lang='en'>
			<body className={manropeClass.className + ' '}>{props.children}</body>
		</html>
	);
};

export default RootLayout;
