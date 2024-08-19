import Image from "next/image";
import Link from "next/link";
import { FavCount, HeaderWrapper } from "./Header.style";

const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<Link href={"/"}>
				<Image
					src="/images/logo.svg"
					alt="Movie Logo"
					className="logo"
					width={130}
					height={52}
				/>
			</Link>
			<Link href={"/favorites"}>
				<FavCount>
					<Image
						src={"/images/icons/fav.svg"}
						alt="Fav"
						className="fav"
						width={17}
						height={15}
					/>
				</FavCount>
			</Link>
		</HeaderWrapper>
	);
};

export default Header;
