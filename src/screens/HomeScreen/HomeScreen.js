import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Environmental data
  const envData = {
    temperature: 22,
    humidity: 65,
    windSpeed: 12,
    airQuality: 'Good',
    location: 'San Francisco'
  };

  // Simple icon component using text emoji
  const Icon = ({ emoji, color }) => (
    <View style={[styles.icon, { backgroundColor: color }]}>
      <Text style={styles.iconText}>{emoji}</Text>
    </View>
  );

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.userName}>Alex</Text>
        </View>
        <TouchableOpacity 
          style={styles.notificationIcon}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Text style={styles.notificationText}>🔔</Text>
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      {/* Weather Stats Row */}
      <View style={styles.healthRow}>
        <View style={styles.healthCard}>
          <Icon emoji="🌡️" color="#FF6B6B20" />
          <Text style={styles.healthValue}>{envData.temperature}°</Text>
          <Text style={styles.healthLabel}>Temperature</Text>
        </View>

        <View style={styles.healthCard}>
          <Icon emoji="💧" color="#4ECDC420" />
          <Text style={styles.healthValue}>{envData.humidity}%</Text>
          <Text style={styles.healthLabel}>Humidity</Text>
        </View>

        <View style={styles.healthCard}>
          <Icon emoji="🌬️" color="#FFA50220" />
          <Text style={styles.healthValue}>{envData.windSpeed}km/h</Text>
          <Text style={styles.healthLabel}>Wind</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Access</Text>
      <View style={styles.actionRow}>
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: '#5F27CD' }]}
          onPress={() => navigation.navigate('WeatherDetails')}
        >
          <Icon emoji="⛅" color="transparent" />
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: '#1ABC9C' }]}
        >
          <Icon emoji="🗺️" color="transparent" />
          <Text style={styles.buttonText}>City Map</Text>
        </TouchableOpacity>
      </View>

      {/* Features List */}
      <View style={styles.featureList}>
        <TouchableOpacity 
          style={styles.featureItem}
          onPress={() => navigation.navigate('AirQuality')}
        >
          <Icon emoji="🍃" color="#4ECDC420" />
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>Air Quality</Text>
            <Text style={styles.featureSubtitle}>{envData.airQuality} - PM2.5: 12</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.featureItem}
          onPress={() => navigation.navigate('LocationDetails')}
        >
          <Icon emoji="📍" color="#A55EEA20" />
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>Current Location</Text>
            <Text style={styles.featureSubtitle}>{envData.location}</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.featureItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Icon emoji="⚙️" color="#FAB00520" />
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>Environment Settings</Text>
            <Text style={styles.featureSubtitle}>Units: Metric</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F24',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    color: '#A0A3B1',
    fontSize: 14,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 4,
  },
  notificationIcon: {
    position: 'relative',
    padding: 8,
  },
  notificationText: {
    fontSize: 24,
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4757',
  },
  healthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  healthCard: {
    backgroundColor: '#1A1F3A',
    borderRadius: 16,
    padding: 16,
    width: '30%',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconText: {
    fontSize: 20,
  },
  healthValue: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 4,
  },
  healthLabel: {
    color: '#A0A3B1',
    fontSize: 12,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    width: '48%',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
  },
  featureList: {
    marginBottom: 24,
  },
  featureItem: {
    backgroundColor: '#1E2545',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  featureTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  featureSubtitle: {
    color: '#A0A3B1',
    fontSize: 12,
    marginTop: 4,
  },
  chevron: {
    color: '#A0A3B1',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;