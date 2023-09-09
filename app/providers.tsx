'use client';

// @import Dependencies
import { I18nextProvider } from 'react-i18next';
// @import Translation config
import { i18next } from '@app/i18n';
// @import Types
import { type ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
	return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
