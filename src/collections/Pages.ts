import { CollectionConfig } from 'payload/types';

const Pages: CollectionConfig = {
	slug: 'pages',
	admin: {
		useAsTitle: 'title',
	},
	access: {
		read: ({ req }) => req.user.roles.includes('admin'), // this now checks req.user on the create-first-user and login page
		update: ({ req }) => req.user.roles.includes('admin'), // this now checks req.user on the create-first-user and login page
		delete: ({ req }) => req.user.roles.includes('admin'), // this now checks req.user on the create-first-user and login page
		create: ({ req }) => req.user.roles.includes('admin'), // this now checks req.user on the create-first-user and login page
	},
	fields: [
		{
			type: 'text',
			name: 'title',
		},
	],
};

export default Pages;
