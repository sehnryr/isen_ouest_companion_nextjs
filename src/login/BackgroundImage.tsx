import Image from 'next/image'

const BackgroundImage = () => {
	return (<Image
		alt='Abstract white wavy pattern'
		src='/jean-philippe-delberghe-75xPHEQBmvA-unsplash.jpg'
		layout='fill'
		objectFit='cover'
		quality={100}
		style={{
			zIndex: -1
		}}
	/>)
}

export default BackgroundImage