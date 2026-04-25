"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";
import styles from "./Stats.module.css";

const data = [
  { year: "2021", clients: 220 },
  { year: "2022", clients: 380 },
  { year: "2023", clients: 640 },
  { year: "2024", clients: 980 },
  { year: "2025", clients: 1450 },
  { year: "2026", clients: 2100 },
];

export default function StatsChart() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <span>GROWTH ANALYTICS</span>
          <h2>Yearly Client Growth (2021 - 2026)</h2>
          <p>Consistent expansion of our global marine client network</p>
        </div>

        {/* CHART */}
        <div className={styles.chartBox}>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={data}>

              {/* 🌊 LIGHT SEA GRADIENT */}
              <defs>
                <linearGradient id="seaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a5f3fc" />
                  <stop offset="60%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#00aaff" />
                </linearGradient>
              </defs>

              <XAxis dataKey="year" stroke="#94a3b8" />

              <Tooltip
                contentStyle={{
                  background: "#ffffff",
                  borderRadius: "10px",
                  border: "1px solid #eee",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                }}
              />

              {/* BARS */}
              <Bar
                dataKey="clients"
                fill="url(#seaGradient)"
                radius={[10, 10, 0, 0]}
              />

              {/* 🌊 WAVE LINE */}
              <Line
                type="monotone"
                dataKey="clients"
                stroke="#38bdf8"
                strokeWidth={3}
                dot={{ r: 4 }}
              />

            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </section>
  );
}