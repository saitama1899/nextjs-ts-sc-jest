import type { ParsedUrlQuery } from "querystring";

import Spinner from "@/components/ui/Spinner/Spinner";
import { useAppContext } from "@/context/AppContext";

import { useRouter } from "next/router";

interface Params extends ParsedUrlQuery {
	id: string;
}

const Demo: React.FC = () => {
	const { loading } = useAppContext();
	const router = useRouter();
	const { id } = router.query as Params;

	if (loading) {
		return <Spinner />;
	}
};


export default Demo;
