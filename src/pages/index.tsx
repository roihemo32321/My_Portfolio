import About from "@/frontend/components/aboutMe/about";
import HomePage from "@/frontend/components/homePage/homePage";
import Skills from "@/frontend/components/skills/skills";
import Resume from "@/frontend/components/resume/resume";
import Head from "next/head";
import styles from "../frontend/styles/index.module.scss";
import Contacts from "@/frontend/components/contacts/contacts";

export default function Home() {
	return (
		<>
			<Head>
				<title>Roie Hemo | Full Stack Developer</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Hey there, welcome to Roie Hemo Full Stack Developer portfolio, enjoy viewing and feel free to contact me at any time."
				></meta>
			</Head>
			<main className={styles.main}>
				<HomePage />
				<Resume />
				<Skills />
				<About />
				<Contacts />
			</main>
		</>
	);
}
