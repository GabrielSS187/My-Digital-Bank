import { Sidebar } from '@/shared/components/Sidebar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard'
};
export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="overflow-hidden">
      <Sidebar pChildren={children} />
    </main>
  );
}
