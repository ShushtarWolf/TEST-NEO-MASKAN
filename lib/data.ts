import listings from '@/data/listings.json';
import users from '@/data/users.json';
import { Listing } from '@/types/listing';

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export async function getListings(): Promise<Listing[]> {
  return listings as Listing[];
}

export async function getListingById(id: string): Promise<Listing | undefined> {
  const all = await getListings();
  return all.find((listing) => listing.id === id);
}

export async function getUsers(): Promise<UserRecord[]> {
  return users as UserRecord[];
}

export async function authenticateUser(
  email: string,
  password: string
): Promise<Omit<UserRecord, 'password'> | null> {
  const all = await getUsers();
  const match = all.find((user) => user.email === email && user.password === password);
  if (!match) {
    return null;
  }
  const { password: _password, ...rest } = match;
  return rest;
}

export async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<Omit<UserRecord, 'password'> & { token: string }> {
  const id = `neo-${Date.now()}`;
  return {
    id,
    name,
    email,
    role: 'buyer',
    token: Buffer.from(`${email}:${password}`).toString('base64')
  };
}
