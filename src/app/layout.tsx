import "./globals.scss";


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

	return (
		<html lang="en">
			<head>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
					crossOrigin="anonymous"
				/>
			</head>
			<body>
				{children}

				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
					integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
					crossOrigin="anonymous"
					async
				/>
			</body>
		</html>
	);
}
