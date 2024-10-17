"use client";

import TimeCard from "@/components/theme/time-card";
import useCountdown from "@/lib/hooks/use-countdown";

export default function DateCountDown({
  date,
  className,
}: {
  date: Date;
  className?: string;
}) {
  const [days, hours, minutes, seconds] = useCountdown(date);
  return (
    <div className="flex md:justify-center gap-3 md:gap-8">
      <TimeCard title={days?.toString()} subtitle="D" className={className} />
      <TimeCard title={hours.toString()} subtitle="H" className={className} />
      <TimeCard title={minutes.toString()} subtitle="M" className={className} />
      <TimeCard title={seconds.toString()} subtitle="S" className={className} />
    </div>
  );
}
