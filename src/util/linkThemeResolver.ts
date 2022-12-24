/**
 * 
 * @param url {string} the URL of the request
 * @returns {string} the text thing
 * 
 */

export default function linkThemeResolver(url: string) {
	switch (url) {
		case 'localhost': {
			return {title: 'Localhost testing!', description: 'Poggers!'}
		}
		case 'tlegacy.ml': {
			return {title: 'TL Legacy', description: 'A virus-free TLauncher alternative'}
		}
		case 'web.srizan.ml': {
			return {title: 'Sr Izan\'s beta website.', description: 'It has a blog, videos and stuff like that!'}
		}
	}
}