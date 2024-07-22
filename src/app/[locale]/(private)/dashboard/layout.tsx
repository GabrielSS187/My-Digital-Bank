import { EncapsulatingDashboard } from '@/shared/content/EncapsulatingDashboard';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B. - Dashboard'
};
export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="overflow-hidden">
      <EncapsulatingDashboard pChildren={children} />
    </main>
  );
}
