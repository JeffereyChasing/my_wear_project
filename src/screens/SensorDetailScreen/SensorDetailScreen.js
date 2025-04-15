import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SensorDetailScreen = () => {
  const navigation = useNavigation();
  
  // Mock sensor data
  const sensorData = {
    heartRate: {
      current: 72,
      min: 65,
      max: 128,
      trend: 'stable',
      unit: 'BPM'
    },
    bloodOxygen: {
      current: 98,
      min: 95,
      max: 99,
      trend: 'normal',
      unit: '% SpO₂'
    },
    temperature: {
      current: 36.6,
      min: 36.1,
      max: 37.2,
      trend: 'normal',
      unit: '°C'
    },
    lastUpdated: '2 mins ago'
  };

  // Simple trend indicator
  const TrendIndicator = ({ trend }) => {
    let icon = '→';
    let color = '#4ECDC4';
    
    if (trend === 'rising') {
      icon = '↑';
      color = '#FF6B6B';
    } else if (trend === 'falling') {
      icon = '↓';
      color = '#3498DB';
    }
    
    return (
      <View style={[styles.trendIndicator, { backgroundColor: color }]}>
        <Text style={styles.trendText}>{icon}</Text>
      </View>
    );
  };

  // Data visualization bar
  const DataBar = ({ current, min, max }) => {
    const range = max - min;
    const position = ((current - min) / range) * 100;
    
    return (
      <View style={styles.dataBarContainer}>
        <View style={styles.dataBarBackground}>
          <View style={[styles.dataBarFill, { width: `${position}%` }]} />
        </View>
        <View style={[styles.dataMarker, { left: `${position}%` }]} />
      </View>
    );
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sensor Details</Text>
        <View style={{ width: 30 }} /> {/* Spacer for balance */}
      </View>

      {/* Last Updated */}
      <Text style={styles.lastUpdated}>Last updated: {sensorData.lastUpdated}</Text>

      {/* Heart Rate Card */}
      <View style={styles.sensorCard}>
        <View style={styles.sensorHeader}>
          <Text style={styles.sensorTitle}>❤️ Heart Rate</Text>
          <TrendIndicator trend={sensorData.heartRate.trend} />
        </View>
        
        <View style={styles.sensorValueContainer}>
          <Text style={styles.sensorValue}>{sensorData.heartRate.current}</Text>
          <Text style={styles.sensorUnit}>{sensorData.heartRate.unit}</Text>
        </View>
        
        <DataBar 
          current={sensorData.heartRate.current}
          min={sensorData.heartRate.min}
          max={sensorData.heartRate.max}
        />
        
        <View style={styles.rangeContainer}>
          <Text style={styles.rangeText}>Min: {sensorData.heartRate.min}</Text>
          <Text style={styles.rangeText}>Max: {sensorData.heartRate.max}</Text>
        </View>
      </View>

      {/* Blood Oxygen Card */}
      <View style={styles.sensorCard}>
        <View style={styles.sensorHeader}>
          <Text style={styles.sensorTitle}>💨 Blood Oxygen</Text>
          <TrendIndicator trend={sensorData.bloodOxygen.trend} />
        </View>
        
        <View style={styles.sensorValueContainer}>
          <Text style={styles.sensorValue}>{sensorData.bloodOxygen.current}</Text>
          <Text style={styles.sensorUnit}>{sensorData.bloodOxygen.unit}</Text>
        </View>
        
        <DataBar 
          current={sensorData.bloodOxygen.current}
          min={sensorData.bloodOxygen.min}
          max={sensorData.bloodOxygen.max}
        />
        
        <View style={styles.rangeContainer}>
          <Text style={styles.rangeText}>Min: {sensorData.bloodOxygen.min}</Text>
          <Text style={styles.rangeText}>Max: {sensorData.bloodOxygen.max}</Text>
        </View>
      </View>

      {/* Temperature Card */}
      <View style={styles.sensorCard}>
        <View style={styles.sensorHeader}>
          <Text style={styles.sensorTitle}>🌡️ Temperature</Text>
          <TrendIndicator trend={sensorData.temperature.trend} />
        </View>
        
        <View style={styles.sensorValueContainer}>
          <Text style={styles.sensorValue}>{sensorData.temperature.current}</Text>
          <Text style={styles.sensorUnit}>{sensorData.temperature.unit}</Text>
        </View>
        
        <DataBar 
          current={sensorData.temperature.current}
          min={sensorData.temperature.min}
          max={sensorData.temperature.max}
        />
        
        <View style={styles.rangeContainer}>
          <Text style={styles.rangeText}>Min: {sensorData.temperature.min}</Text>
          <Text style={styles.rangeText}>Max: {sensorData.temperature.max}</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.buttonText}>Export Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Refresh</Text>
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
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  lastUpdated: {
    color: '#A0A3B1',
    fontSize: 12,
    marginBottom: 16,
    textAlign: 'center',
  },
  sensorCard: {
    backgroundColor: '#1E2545',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  sensorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sensorTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  trendIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trendText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sensorValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 16,
  },
  sensorValue: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
    marginRight: 8,
  },
  sensorUnit: {
    color: '#A0A3B1',
    fontSize: 16,
  },
  dataBarContainer: {
    marginBottom: 12,
    position: 'relative',
    height: 20,
  },
  dataBarBackground: {
    height: 4,
    backgroundColor: '#2D3250',
    borderRadius: 2,
    marginTop: 8,
  },
  dataBarFill: {
    height: '100%',
    backgroundColor: '#4ECDC4',
    borderRadius: 2,
  },
  dataMarker: {
    position: 'absolute',
    top: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    marginLeft: -6,
  },
  rangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rangeText: {
    color: '#A0A3B1',
    fontSize: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  primaryButton: {
    backgroundColor: '#5F27CD',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#1A1F3A',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SensorDetailScreen;