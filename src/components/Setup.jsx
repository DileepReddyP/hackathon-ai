import Head from 'next/head'

function Setup() {
	return (
		<Head>
			<title>Learn AI!</title>
			<meta name='description' content='Hackathon Project' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link
				rel='stylesheet'
				href='https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css'
				// Integrating bootstrap
				integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'
				crossOrigin='anonymous'
			></link>
			<script defer src='https://unpkg.com/ml5@latest/dist/ml5.min.js'></script>
		</Head>
	)
}

export default Setup
