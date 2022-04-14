import { useRouter } from "next/router";
import { Fragment } from "react";

import styles from "@/styles/layoutsComponents/Header.module.scss";

const Header = () => {
	return (
		<Fragment>
			<header>
				<h1 className={styles.header_title}>Alex Clarke</h1>
			</header>
		</Fragment>
	);
};

export default Header;
