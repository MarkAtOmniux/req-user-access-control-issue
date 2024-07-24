import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
	slug: 'users',
	auth: true,
	access: {
		read: ({ req }) => {
			return {
				id: { equals: req.user?.id }, // this now checks req.user.id on the create-first-user and login page
			};
		},
		update: ({ req }) => {
			return {
				id: { equals: req.user?.id }, // this now checks req.user.id on the create-first-user and login page
			};
		},
		delete: ({ req }) => {
			return {
				id: { equals: req.user.id }, // this now checks req.user.id on the create-first-user and login page
			};
		},
		create: ({ req }) => {
			return {
				id: { equals: req.user.id }, // this now checks req.user.id on the create-first-user and login page
			};
		},
		admin: ({ req }) => req.user.roles?.includes('admin'),
	},
	admin: {
		useAsTitle: 'email',
	},
	fields: [
		{
			type: 'text',
			name: 'name',
		},
		{
			type: 'select',
			name: 'roles',
			options: [
				{ label: 'Admin', value: 'admin' },
				{ label: 'Customer', value: 'customer' },
			],
		},
	],
};

export default Users;
