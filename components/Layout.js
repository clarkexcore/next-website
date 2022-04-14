import PropTypes from "prop-types";

import Header from "./layoutComponents/Header";
import Footer from "./layoutComponents/Footer";

//Styles
import styles from "@/styles/Layout.module.scss";

Layout.propTypes = {
	children: PropTypes.element,
};

export default function Layout({ children }) {
	return (
		<div className={styles.layout_stack}>
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	);
}
