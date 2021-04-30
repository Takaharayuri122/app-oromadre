import React from 'react';
import { View } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default StarRating = (props) => {

	const stars = [];
	for (let i = 1; i <= 5; i++) {
		stars.push(<Feather key={i} name="star" color={props.rating >= i ? '#f9b000' : '#b2b2b2'} size={13} />)
	}

	return (
		<View style={{ flexDirection: 'row', marginBottom: 5 }}>
			{stars}
		</View>
	)
}