import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from 'recharts';

export const WaterGraph = () => {
  const data = [
    {
      day: 1,
      volume: 2.4,
    },
    {
      day: 2,
      volume: 1.7,
    },
    {
      day: 3,
      volume: 2.6,
    },
    {
      day: 4,
      volume: 1.9,
    },
    {
      day: 5,
      volume: 1.2,
    },
    {
      day: 6,
      volume: 3.1,
    },
    {
      day: 7,
      volume: 1.4,
    },
  ];

  return (
    <LineChart data={data} height={273} width={588}>
      <defs>
        <linearGradient
          id="linear_gradient"
          x1="189.618"
          y1="207"
          x2="193.11"
          y2="7.79258"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9BE1A0" stopOpacity="0" />
          <stop offset="1" stopColor="#9BE1A0" />
        </linearGradient>
      </defs>

      <XAxis
        dataKey="day"
        interval={0}
        tick
        tickCount={7}
        tickSize={20}
        tickLine={false}
        axisLine={false}
        padding={{ right: 10 }}
      />

      <YAxis
        tick
        tickCount={6}
        tickSize={20}
        tickLine={false}
        axisLine={false}
      />
      <Tooltip cursor={false} />

      <Area
        type="monotone"
        dataKey="volume"
        stroke="none"
        fill="url(#linear_gradient)"
        fillOpacity={1}
      />

      <Line
        dataKey="volume"
        stroke="#87d28d"
        strokeWidth={3}
        type="linear"
        dot={{ r: 9 }}
      />
    </LineChart>
  );
};
