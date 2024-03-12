import React from 'react';
import Card from "@/components/card";
import Link from 'next/link';

function DefaultNotifications() {
  return (
      <Card>
        <div>DefaultNotifications</div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </Card>
  );
}

export default DefaultNotifications;
