import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
	const { data, status } = useSession();
	console.log(status);
	return (
		<div>
			<div>asdasd</div>
		</div>
	);
};

export default Home;
