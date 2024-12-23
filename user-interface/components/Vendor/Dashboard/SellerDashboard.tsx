import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { LineChart } from "react-native-chart-kit";

const { width: screenWidth } = Dimensions.get("window");

const SellerDashboard = () => {
  const [timeframe, setTimeframe] = useState("Daily");

  const generateDailyData = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const todayIndex = new Date().getDay() - 1; // Sunday = 0, Monday = 1
    const labels = days.slice(todayIndex).concat(days.slice(0, todayIndex));
    const data = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 10000)
    );
    return { labels, data };
  };

  const generateMonthlyData = () => {
    const currentMonth = new Date().getMonth(); // January = 0
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const labels = months.slice(0, currentMonth + 1);
    const data = Array.from({ length: labels.length }, () =>
      Math.floor(Math.random() * 150000)
    );
    return { labels, data };
  };

  const generateYearlyData = () => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 4;
    const labels = Array.from({ length: 5 }, (_, i) => `${startYear + i}`);
    const data = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 700000)
    );
    return { labels, data };
  };

  const getChartData = () => {
    switch (timeframe) {
      case "Daily":
        return generateDailyData();
      case "Weekly":
        return {
          labels: ["Wk1", "Wk2", "Wk3", "Wk4"],
          data: [20000, 30000, 25000, 35000],
        };
      case "Monthly":
        return generateMonthlyData();
      case "Yearly":
        return generateYearlyData();
      default:
        return { labels: [], data: [] };
    }
  };

  const chartData = {
    labels: getChartData().labels,
    datasets: [
      {
        data: getChartData().data,
        color: () => `#FEC32E`,
        strokeWidth: 2,
      },
    ],
  };

  const dropdownOptions = ["Daily", "Weekly", "Monthly", "Yearly"];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Section */}
        <View style={styles.profileDisplay}>
          <View style={styles.greetingDisplay}>
            <Image source={require("@/assets/images/G3.png")} />
            <View>
              <Text style={styles.welcomeBack}>Welcome Back</Text>
              <Text style={styles.userName}>Ragna Bristol</Text>
            </View>
          </View>
          <View style={styles.greetingDisplay1}>
            <Icon name="notifications-outline" size={28} color="#111" />
            <Image
              source={require("@/assets/images/avatar.jpeg")}
              style={styles.avatar}
            />
          </View>
        </View>

        {/* Location Section */}
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={20} color="#FEC32E" />
          <Text style={styles.locationText}>
            Address 50 block Az Address dfs
          </Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>20</Text>
            <Text style={styles.statLabel}>RUNNING ORDERS</Text>
          </View>
          <View style={styles.statCard1}>
            <Text style={styles.statNumber}>05</Text>
            <Text style={styles.statLabel}>ORDER REQUEST</Text>
          </View>
        </View>

        {/* Revenue Section */}
        <View style={styles.revenueContainer}>
          <View style={styles.revenueHeader}>
            <Text style={styles.revenueTitle}>Total Revenue</Text>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => {
                const currentIndex = dropdownOptions.indexOf(timeframe);
                const nextIndex = (currentIndex + 1) % dropdownOptions.length;
                setTimeframe(dropdownOptions[nextIndex]);
              }}
            >
              <Text style={styles.dropdownText}>{timeframe}</Text>
              <Icon name="chevron-down-outline" size={18} color="#111" />
            </TouchableOpacity>
          </View>
          <Text style={styles.revenueAmount}>NGN200,000</Text>
          <LineChart
            data={chartData}
            width={screenWidth * 0.9}
            height={220}
            chartConfig={{
              backgroundColor: "#F5F8FF",
              backgroundGradientFrom: "#F5F8FF",
              backgroundGradientTo: "#fff",
              color: (opacity = 1) => `rgba(254, 195, 46, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              decimalPlaces: 0,
            }}
            style={styles.chartStyle}
            bezier
          />
        </View>

        {/* Available Requests Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Available Requests</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.requestCard}>{/* Request Details */}</View>
          <View style={styles.requestCard}>{/* Request Details */}</View>
        </ScrollView>

        {/* Reviews Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>See All Reviews</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reviewContainer}>
          <Text style={styles.starRating}>⭐ 4.9</Text>
          <Text style={styles.totalReviews}>Total 20 Reviews</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SellerDashboard;

// Styles remain unchanged

// Add your styles here (styles omitted for brevity)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  // Header Section
  profileDisplay: {
    paddingHorizontal: screenWidth * 0.05,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  greetingDisplay: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  greetingDisplay1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  welcomeBack: {
    fontSize: 16,
    color: "#8C8C8C",
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  // Location Section
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: screenWidth * 0.05,
    marginBottom: 16,
  },
  locationText: {
    fontSize: 14,
    color: "#8C8C8C",
    marginLeft: 8,
  },
  // Stats Section
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: screenWidth * 0.05,
    marginBottom: 16,
  },
  statCard: {
    width: screenWidth * 0.42,
    backgroundColor: "#d4ddff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  statCard1: {
    width: screenWidth * 0.42,
    backgroundColor: "#f5f7ff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },
  statLabel: {
    fontSize: 12,
    color: "#8C8C8C",
  },
  // Revenue Section
  revenueContainer: {
    paddingHorizontal: screenWidth * 0.05,
    marginBottom: 16,
  },
  revenueHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  revenueTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 12,
    color: "#8C8C8C",
    marginRight: 4,
  },
  revenueAmount: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 16,
  },
  chartPlaceholder: {
    backgroundColor: "#F5F8FF",
    height: 100,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  chartText: {
    color: "#8C8C8C",
    fontSize: 12,
  },
  // Available Requests Section
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: screenWidth * 0.05,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  viewAllText: {
    fontSize: 12,
    color: "#FEC32E",
  },
  requestCard: {
    marginRight: 16,
    backgroundColor: "#F5F8FF",
    borderRadius: 8,
    overflow: "hidden",
    width: screenWidth * 0.6,
    height: 120,
  },
  requestImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  // Reviews Section
  reviewContainer: {
    paddingHorizontal: screenWidth * 0.05,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  starRating: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  totalReviews: {
    fontSize: 12,
    color: "#8C8C8C",
  },
  chartStyle: {
    borderRadius: 8,
  },
});
