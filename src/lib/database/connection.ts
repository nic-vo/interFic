import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) throw new Error('Missing MONGODB_URI');

const uri = process.env.MONGODB_URI;

// clientPromise will be awaited downstream wherever its imported
let clientPromise: Promise<typeof mongoose>;

// If in dev, I want to set a global var to preserve connection across reloads
// Define the var
let globalWithMongo = global as typeof globalThis & {
	_mongoClientPromise?: Promise<typeof mongoose>;
};

// If a connection Promise isn't already attached to global, create and attach
if (!globalWithMongo._mongoClientPromise) {
	globalWithMongo._mongoClientPromise = mongoose.connect(uri);
}
// Set promise to
clientPromise = globalWithMongo._mongoClientPromise;

// If not in dev, likely a serverless deployment?
// So create new connection for this specific serverless instance
clientPromise = mongoose.connect(uri);

export default clientPromise;
