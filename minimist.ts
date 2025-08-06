import minimist from 'minimist';

// Define the type for the parsed arguments
interface Arguments {
  [key: string]: string | boolean | number | undefined;
}

const argv: Arguments = minimist(process.argv.slice(2));