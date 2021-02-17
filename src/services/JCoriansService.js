import JCorian from "@/models/JCorian.model";

const lorumIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus lorem, rhoncus et auctor in, blandit maximus libero. Mauris eu leo facilisis tellus tincidunt maximus ullamcorper quis dolor. Sed placerat tempor magna sit amet fermentum.';
let service;

class JCoriansService {
	constructor() {
		const jcorians = [
			new JCorian(0, 'Tom Raaff', 'Foobar', '../assets/john_doe.png', 'JCore is awesome', lorumIpsum, ['Frontend', 'TypeScript', 'Angular'], 'tomraaff_cv_1'),
			new JCorian(1, 'Ruud Claessen', 'Foobar', '../assets/john_doe.png', 'Mijn hond is awesome', lorumIpsum, ['Mobile', 'Java', 'Angular'], 'ruudclaessen_cv_1'),
			new JCorian(2, 'Jacob van Lingen', 'Foobar', '../assets/john_doe.png', 'Java is awesome', lorumIpsum, ['Java', 'Scala'], 'jacobvanlingen_cv_1'),
			new JCorian(3, 'Jeroen Slot', 'Delta Squad', '../assets/john_doe.png', 'Gerard van het Reve is awesome', lorumIpsum, ['Java', 'Spring'], 'jeroenslot_cv_1'),
			new JCorian(4, 'Maarten Ottenhof', 'Delta Squad', '../assets/john_doe.png', 'Nieuwegein is awesome', lorumIpsum, ['Java', 'Spring', 'React'], 'maartenottenhof_cv_1'),
			new JCorian(5, 'Sjoerd During', 'Hotfix', '../assets/john_doe.png', 'JCore is awesome', lorumIpsum, ['Java', 'Spring', 'AWS'], 'sjoerdduring_cv_1'),
			new JCorian(6, 'Niels van Nieuwenburg', 'Hotfix', '../assets/john_doe.png', 'JCore is awesome', lorumIpsum, ['Java', 'Bash', 'Linux'], 'nielsvannieuwenburg_cv_1'),
			new JCorian(7, 'Denise Terpstra', 'Foobar', '../assets/john_doe.png', 'Golf is awesome', lorumIpsum, ['Java', 'Bash', 'AWS'], 'deniseterpstra_cv_1'),
		];

		this.getJcorians = () => {
			return [...jcorians];
		}

		this.getTeams = () => {
			return new Set(jcorians.map(jcorian => jcorian.teamName));
		}

		this.getJcoriansByTeam = (teamName) => {
			return jcorians.filter(jcorian => jcorian.teamName === teamName);
		}

		this.getJcorianById = (id) => {
			return jcorians.find((jcorian) => jcorian.id === id);
		}


	}
}

export function JCoriansServiceFactory() {
	return (service) ? service : new JCoriansService();
}
