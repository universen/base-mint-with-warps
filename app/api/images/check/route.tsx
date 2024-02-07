import { ImageResponse } from 'next/og';
import { Card } from '../../../components/Card';
import { CARD_DIMENSIONS } from '../../../config';

export async function GET() {
  return new ImageResponse(
    <Card message="Your mint transaction is in the queue." />,
    CARD_DIMENSIONS,
  );
}

export const dynamic = 'force-dynamic';
