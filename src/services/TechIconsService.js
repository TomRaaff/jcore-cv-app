export default function getTechIcon(techName) {
	const icons = {
		typescript: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
		java: `https://cdn.svgporn.com/logos/java.svg`,
		javascript: 'https://cdn.svgporn.com/logos/javascript.svg',
		mobile: 'https://cdn.svgporn.com/logos/nativescript.svg',
		frontend: 'https://cdn.svgporn.com/logos/html-5.svg',
		scala: 'https://cdn.svgporn.com/logos/scala.svg',
		angular: 'https://cdn.svgporn.com/logos/angular-icon.svg',
		spring: 'https://cdn.svgporn.com/logos/spring-icon.svg',
		react: 'https://cdn.svgporn.com/logos/react.svg',
		aws: 'https://cdn.svgporn.com/logos/aws.svg',
		bash: 'https://cdn.svgporn.com/logos/bash-icon.svg',
		linux: 'https://cdn.svgporn.com/logos/linux-tux.svg'
	}
	return icons[techName.toLowerCase()];
}
