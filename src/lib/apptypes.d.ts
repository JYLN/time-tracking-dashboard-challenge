export type TimeframeData = {
	title: 'Work' | 'Play' | 'Study' | 'Exercise' | 'Social' | 'Self Care';
	timeframes: {
		daily: { current: number; previous: number };
		weekly: { current: number; previous: number };
		monthly: { current: number; previous: number };
	};
};
