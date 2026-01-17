import { View, Text, StyleSheet } from "react-native";

interface DemoCardProps {
  companyName?: string;
}

const waitTimeData = [
  { time: "9am", minutes: 12 },
  { time: "10am", minutes: 15 },
  { time: "11am", minutes: 18 },
  { time: "12pm", minutes: 22 },
  { time: "1pm", minutes: 16 },
  { time: "2pm", minutes: 5 },
  { time: "3pm", minutes: 6 },
  { time: "4pm", minutes: 7 },
  { time: "5pm", minutes: 19 },
];

const getBarColor = (minutes: number) => {
  if (minutes < 8) return "#10b981"; // green
  if (minutes <= 15) return "#f59e0b"; // yellow
  return "#ef4444"; // red
};

export default function DemoCard({ companyName = "Sample Company" }: DemoCardProps) {
  const maxMinutes = Math.max(...waitTimeData.map((d) => d.minutes));

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.company}>{companyName}</Text>
        <Text style={styles.subtitle}>Customer Support Wait Times</Text>
      </View>

      {/* Info Blocks */}
      <View style={styles.infoGrid}>
        <View style={[styles.infoBox, styles.goodBox]}>
          <Text style={styles.goodLabel}>Best time to call</Text>
          <Text style={styles.goodValue}>2–4 PM</Text>
        </View>

        <View style={[styles.infoBox, styles.badBox]}>
          <Text style={styles.badLabel}>Avoid calling</Text>
          <Text style={styles.badValue}>7–9 PM</Text>
        </View>
      </View>

      {/* Chart */}
      <Text style={styles.chartTitle}>Wait Time Trends (Today)</Text>

      <View style={styles.chart}>
        {waitTimeData.map((item) => (
          <View key={item.time} style={styles.barItem}>
            <View
              style={[
                styles.bar,
                {
                  height: `${(item.minutes / maxMinutes) * 100}%`,
                  backgroundColor: getBarColor(item.minutes),
                },
              ]}
            />
            <Text style={styles.barLabel}>{item.time}</Text>
          </View>
        ))}
      </View>

      {/* Legend */}
      <View style={styles.legend}>
        <LegendItem color="#10b981" label="Good (< 8m)" />
        <LegendItem color="#f59e0b" label="Fair (9–15m)" />
        <LegendItem color="#ef4444" label="Poor (> 15m)" />
      </View>
    </View>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#252525",
    borderRadius: 20,
    padding: 20,
    marginTop: 24,
  },

  header: {
    marginBottom: 16,
  },
  company: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: "#9ca3af",
    fontSize: 13,
    marginTop: 2,
  },

  infoGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  infoBox: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
  },

  goodBox: {
    backgroundColor: "rgba(16,185,129,0.1)",
    borderColor: "rgba(16,185,129,0.3)",
    borderWidth: 1,
  },
  goodLabel: {
    color: "#6ee7b7",
    fontSize: 12,
  },
  goodValue: {
    color: "#a7f3d0",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 4,
  },

  badBox: {
    backgroundColor: "rgba(239,68,68,0.1)",
    borderColor: "rgba(239,68,68,0.3)",
    borderWidth: 1,
  },
  badLabel: {
    color: "#fca5a5",
    fontSize: 12,
  },
  badValue: {
    color: "#fecaca",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 4,
  },

  chartTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },

  chart: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 160,
    gap: 8,
    marginBottom: 16,
  },

  barItem: {
    flex: 1,
    alignItems: "center",
  },
  bar: {
    width: "100%",
    borderRadius: 6,
  },
  barLabel: {
    color: "#9ca3af",
    fontSize: 11,
    marginTop: 6,
  },

  legend: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 8,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  legendText: {
    color: "#9ca3af",
    fontSize: 12,
  },
});