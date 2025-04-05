import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';

const ProfileScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window');

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(scrollX, {
        toValue: -width,
        duration: 10000,
        useNativeDriver: true,
      })
    );
    animation.start();
    return () => animation.stop();
  }, [scrollX, width]);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Animated.Image
          source={require('../../assets/images/bg.png')}
          style={[
            styles.backgroundImage,
            { transform: [{ translateX: scrollX }] },
          ]}
          resizeMode="cover"
        />
        <View style={styles.overlay} />
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <View style={styles.yellowStack} />
            <Image
              source={require('../../assets/images/dog.png')}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Share')}>
              <Image
                source={require('../../assets/images/share.png')}
                style={styles.customIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Settings')}>
              <Image
                source={require('../../assets/images/settings.png')}
                style={styles.customIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.userInfo}>
          <View style={styles.usernameContainer}>
            <View style={styles.usernameBadgeContainer}>
              <Text style={styles.username}>@theo_from_hsr</Text>
              <Image
                source={require('../../assets/images/verified_badge.png')}
                style={styles.verifiedBadgeIcon}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity style={styles.editProfileButton}>
              <Text style={styles.editProfileText}>EDIT PROFILE</Text>
              <Image
                source={require('../../assets/images/edit.png')}
                style={styles.editIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.userMeta}>
            <Image
              source={require('../../assets/images/indian-flag.png')}
              style={styles.flagIcon}
            />
            <Text style={styles.metaText}>INDIA</Text>
          </View>
          <Text style={styles.bio}>
            18 y/o with high ambitions. want to build cool stuff!
          </Text>
        </View>
        <View style={styles.followersContainer}>
          <View style={styles.followersIconContainer}>
            {/* Replaced Ionicons with custom PNG image */}
            <Image
              source={require('../../assets/images/check_people.png')}
              style={styles.followersIcon}
              resizeMode="contain"
            />
            <Text style={styles.followersText}>2</Text>
          </View>
          <Text style={styles.followersLabel}>FOLLOWING</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tabItem, styles.activeTab]}
            onPress={() => console.log('Go to Collections')}
          >
            <Image
              source={require('../../assets/images/collections-icon.png')}
              style={styles.tabIcon}
            />
            <Text style={styles.tabTitle}>COLLECTIONS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => console.log('Go to Manage Tags')}
          >
            <Image
              source={require('../../assets/images/manage-tags-icon.png')}
              style={styles.tabIcon}
            />
            <Text style={styles.tabTitle}>MANAGE TAGS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemsGrid}>
          <View style={styles.itemCard}>
            <Image
              source={require('../../assets/images/dog.png')}
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>Liked (32)</Text>
          </View>
          <View style={styles.itemCard}>
            <Image
              source={require('../../assets/images/dog.png')} // Replace with saved.png
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>Saved (23)</Text>
          </View>
          <View style={styles.itemCard}>
            <Image
              source={require('../../assets/images/dog.png')} // Replace with files.png
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>Files (3)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  profileContainer: { position: 'relative', paddingTop: 35, padding: 20 },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width * 2,
    height: Dimensions.get('window').height / 2,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  profileImageContainer: { position: 'relative' },
  yellowStack: {
    position: 'absolute',
    top: 5,
    left: 5,
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    borderRadius: 10,
    ...Platform.select({
      ios: { zIndex: -1 },
      android: { elevation: -1 },
    }),
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    ...Platform.select({
      ios: { zIndex: 1 },
      android: { elevation: 1 },
    }),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
  },
  customIcon: {
    width: 24,
    height: 24,
  },
  userInfo: { marginTop: 10 },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  usernameBadgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: { color: '#ECF0F1', fontSize: 18, fontWeight: 'bold' },
  verifiedBadgeIcon: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
    borderStyle: 'dotted',
  },
  editProfileText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  editIcon: { marginLeft: 5, width: 16, height: 16 },
  userMeta: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  flagIcon: { width: 20, height: 12, marginRight: 5 },
  metaText: { color: '#95A5A6', fontSize: 14 },
  bio: { color: '#ECF0F1', fontSize: 16, marginTop: 5 },
  followersContainer: { marginTop: 10, alignItems: 'flex-start' },
  followersIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  followersIcon: {
    width: 18, // Match the original Ionicons size
    height: 18, // Match the original Ionicons size
    tintColor: 'blue', // Apply blue color if the PNG supports tinting
  },
  followersText: { color: '#ECF0F1', fontSize: 14, marginLeft: 5 },
  followersLabel: { color: '#95A5A6', fontSize: 14, marginTop: 5 },
  contentContainer: { flex: 1, backgroundColor: '#1A2526' },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  tabItem: { alignItems: 'center' },
  activeTab: { borderBottomWidth: 2, borderBottomColor: '#3498DB' },
  tabIcon: { width: 24, height: 24, marginBottom: 5 },
  tabTitle: { color: '#ECF0F1', fontSize: 16, marginTop: 5 },
  itemsGrid: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  itemCard: {
    width: (Dimensions.get('window').width - 60) / 2,
    marginBottom: 10,
    backgroundColor: '#2C3E50',
    borderRadius: 10,
    padding: 10,
  },
  itemImage: { width: '100%', height: 100, resizeMode: 'cover', borderRadius: 10 },
  itemTitle: { color: '#ECF0F1', fontSize: 14, marginTop: 5, textAlign: 'center' },
});

export default ProfileScreen;