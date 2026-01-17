import { View, Text, StyleSheet } from "react-native";
import { Clock, TrendingUp, Users, Calendar } from "lucide-react-native";
<InsightsSection />

export default function InsightsSection() {
  return (
    <View style={styles.section}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.titleWhite}>See the wait before you </Text>
          <Text style={styles.titleAccent}>dial</Text>
        </Text>
      </View>

      {/* Card 1 */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.iconWrap}>
            <Clock size={18} color="#22d3ee" />
          </View>
          <Text style={styles.cardTitle}>Best Times to Call</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Weekdays</Text>
          <Text style={styles.good}>10 AM – 2 PM</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Weekends</Text>
          <Text style={styles.good}>11 AM – 3 PM</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Average wait</Text>
          <Text style={styles.accent}>4.2 minutes</Text>
        </View>

        <View style={styles.meta}>
          <TrendingUp size={14} color="#22c55e" />
          <Text style={styles.metaText}>23% faster than average</Text>
        </View>
      </View>

      {/* Card 2 */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.iconWrap}>
            <Users size={18} color="#22d3ee" />
          </View>
          <Text style={styles.cardTitle}>Peak Call Volumes</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Monday mornings</Text>
          <Text style={styles.bad}>High volume</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Friday afternoons</Text>
          <Text style={styles.warn}>Medium volume</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Late evenings</Text>
          <Text style={styles.good}>Low volume</Text>
        </View>

        <View style={styles.metaCyan}>
          <Calendar size={14} color="#22d3ee" />
          <Text style={styles.metaCyanText}>Updated every 15 minutes</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  section: {
    marginTop: 48,
    backgroundColor: "#1a1a1a",
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 24,
  },

  header: {
    alignItems: "center",
    marginBottom: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  titleWhite: {
    color: "#ffffff",
  },
  titleAccent: {
    color: "#22d3ee",
  },

  card: {
    backgroundColor: "#252525",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(34,211,238,0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  label: {
    color: "#9ca3af",
    fontSize: 14,
  },

  good: {
    color: "#22c55e",
    fontWeight: "600",
  },
  warn: {
    color: "#facc15",
    fontWeight: "600",
  },
  bad: {
    color: "#ef4444",
    fontWeight: "600",
  },
  accent: {
    color: "#22d3ee",
    fontWeight: "600",
  },

  meta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#1a1a1a",
    padding: 10,
    borderRadius: 12,
    marginTop: 8,
  },
  metaText: {
    color: "#22c55e",
    fontSize: 12,
    fontWeight: "600",
  },

  metaCyan: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#1a1a1a",
    padding: 10,
    borderRadius: 12,
    marginTop: 8,
  },
  metaCyanText: {
    color: "#22d3ee",
    fontSize: 12,
    fontWeight: "600",
  },
});