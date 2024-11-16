import { z } from 'zod';
import timeData from '../lib/server/data.json';
import type { PageServerLoad } from './$types';

const intervalSchema = z.enum(['daily', 'weekly', 'monthly']).catch('daily');

export const load: PageServerLoad = async ({ url }) => {
	const interval = intervalSchema.parse(url.searchParams.get('interval'));

	return {
		interval,
		timeData
	};
};
