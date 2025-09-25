import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator, RefreshControl, SafeAreaView } from 'react-native';

const UserList = () => {
  // Add your state and logic here, for example:
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [isDark, setIsDark] = useState(false);

  // Dummy functions for illustration
  const load = () => {};
  const loadMore = () => {};
  const onRefresh = () => {};
  const renderItem = () => null;
  const toggle = () => setIsDark(prev => !prev);

  if (loading && users.length === 0) {
	return (
	  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<ActivityIndicator size="large" />
	  </View>
	);
  }

  if (error && users.length === 0) {
	return (
	  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text>{error}</Text>
		<TouchableOpacity onPress={() => load(1, false)}>
		  <Text style={{ marginTop: 12 }}>Retry</Text>
		</TouchableOpacity>
	  </View>
	);
  }

  return (
	<SafeAreaView style={{ flex: 1 }}>
	  <View style={{ padding: 12 }}>
		<TextInput
		  placeholder="Search by name or email"
		  value={query}
		  onChangeText={setQuery}
		  style={{
			height: 44,
			borderWidth: 1,
			borderRadius: 8,
			paddingHorizontal: 12,
			marginBottom: 8
		  }}
		/>
		<TouchableOpacity onPress={toggle} style={{ marginBottom: 8 }}>
		  <Text>{isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</Text>
		</TouchableOpacity>
	  </View>

	  <FlatList
		data={filtered}
		keyExtractor={(item, idx) => item.login.uuid + '_' + idx}
		renderItem={renderItem}
		onEndReached={loadMore}
		onEndReachedThreshold={0.5}
		refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
		ListFooterComponent={() => (loading ? <ActivityIndicator style={{ margin: 12 }} /> : null)}
	  />
	</SafeAreaView>
  );
};

export default UserList;