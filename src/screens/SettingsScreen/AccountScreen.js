import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();

  // User data
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    memberSince: 'March 2023',
    device: 'SmartWatch Pro v2',
    lastSync: '2 minutes ago'
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
          <Text style={styles.greeting}>Your Account</Text>
          <Text style={styles.userName}>{userData.name}</Text>
        </View>
        <TouchableOpacity 
          style={styles.notificationIcon}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Text style={styles.notificationText}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editAvatarButton}>
            <Text style={styles.editAvatarText}>✏️</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.userInfo}>
          <Text style={styles.userEmail}>{userData.email}</Text>
          <Text style={styles.userMemberSince}>Member since {userData.memberSince}</Text>
        </View>
      </View>

      {/* Account Details */}
      <Text style={styles.sectionTitle}>Account Details</Text>
      <View style={styles.detailsList}>
        <View style={styles.detailItem}>
          <Icon emoji="⌚" color="#4ECDC420" />
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailTitle}>Connected Device</Text>
            <Text style={styles.detailValue}>{userData.device}</Text>
          </View>
        </View>

        <View style={styles.detailItem}>
          <Icon emoji="🔄" color="#A55EEA20" />
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailTitle}>Last Sync</Text>
            <Text style={styles.detailValue}>{userData.lastSync}</Text>
          </View>
        </View>

        <View style={styles.detailItem}>
          <Icon emoji="📧" color="#FAB00520" />
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailTitle}>Email Notifications</Text>
            <Text style={styles.detailValue}>Enabled</Text>
          </View>
        </View>
      </View>

      {/* Settings Options */}
      <Text style={styles.sectionTitle}>Settings</Text>
      <View style={styles.settingsList}>
        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => navigation.navigate('Privacy')}
        >
          <Icon emoji="🔒" color="#FF6B6B20" />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Privacy Settings</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => navigation.navigate('NotificationsSettings')}
        >
          <Icon emoji="🔔" color="#1ABC9C20" />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Notification Preferences</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => navigation.navigate('Help')}
        >
          <Icon emoji="❓" color="#5F27CD20" />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Help & Support</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
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
    padding: 8,
  },
  notificationText: {
    fontSize: 24,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#4ECDC4',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#1A1F3A',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4ECDC4',
  },
  editAvatarText: {
    fontSize: 12,
  },
  userInfo: {
    flex: 1,
  },
  userEmail: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  userMemberSince: {
    color: '#A0A3B1',
    fontSize: 12,
    marginTop: 4,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  detailsList: {
    backgroundColor: '#1E2545',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  detailTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  detailTitle: {
    color: '#A0A3B1',
    fontSize: 12,
  },
  detailValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
  },
  settingsList: {
    marginBottom: 24,
  },
  settingItem: {
    backgroundColor: '#1E2545',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  settingTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  settingTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  chevron: {
    color: '#A0A3B1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF475710',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF475740',
  },
  logoutButtonText: {
    color: '#FF4757',
    fontSize: 16,
    fontWeight: '600',
  },
  // Reused from home screen
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
  },
});

export default AccountScreen;