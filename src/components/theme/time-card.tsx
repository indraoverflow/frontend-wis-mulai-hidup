import React from 'react';
import { Card } from '../ui/card';

interface TimeCardProps {
  title: string;
  subtitle: string;
  backgroundColorClass?: string;
  textColorClass?: string;
  borderClass?: string;
}

export default function TimeCard({
  title,
  subtitle,
  backgroundColorClass = 'bg-phthalo-green',
  textColorClass = 'text-white',
  borderClass = 'border-none'
}: TimeCardProps) {
  return (
    <Card className={`rounded-[100px] ${backgroundColorClass} ${textColorClass} ${borderClass}`}>
      <div className="px-4 md:px-11 py-8 text-center">
        <h5 className="text-6xl font-bold mb-3">{title}</h5>
        <p className="text-3xl">{subtitle}</p>
      </div>
    </Card>
  );
}