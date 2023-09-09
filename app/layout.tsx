// @import Providers
import Providers from '@app/providers';
// @import Translation
import { language } from '@app/i18n';
// @import Styles
import '@app/globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Providers>
			<html lang={language}>
				<body>{children}</body>
			</html>
		</Providers>
	);
}
