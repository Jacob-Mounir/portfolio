// Define the interface for project structure
interface Project {
	title: string;
	description: string;
	image: string;
	technologies: string[];  // Changed to string array
	link: string;
}

// Export the projects array with the defined interface
export const projects: Project[] = [
	{
		image: '/images/oasis.png',
		title: 'Oasis',
		technologies: ['React', 'CSS', 'UI/UX'],
		description: 'Group Project for a fine dining restaurant',
		link: 'https://jacob-mounir.github.io/the-oasis/'
	},
	{
		image: '/images/masafejuja.png',
		title: 'Fine Dining Restaurant',
		technologies: ['React', 'CSS', 'UI/UX'],
		description: 'School project for a fine dining restaurant',
		link: 'https://ha-fed23-js-2.github.io/ruby-bananas/'
	},
	{
		image: '/images/clouds.png',
		title: 'Clouds',
		technologies: ['UI/UX', 'Figma'],
		description: 'Short info about',
		link: ''
	},
	{
		image: '/images/pokemon.jpg',
		title: 'Pokémon Team Manager',
		 technologies: ['HTML', 'CSS', 'JavaScript'],
		description: 'Short info about',
		link: 'https://jacob-mounir.github.io/pokemon/'
	}
];