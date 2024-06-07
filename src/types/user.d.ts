export interface IUser {
	id: string;
	name: string;
	email: string;
}

export type TUserCreate = Omit<IUser, "id">;
