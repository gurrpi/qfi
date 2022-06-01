import { fileURLToPath } from "url"
import fs from "fs"
import path from "path"
import csv from "csvtojson"
import { Converter } from "csvtojson/v2/Converter"

/**
 * Create a new empty directory.
 * @param dirPath <string> - the path where the directory must be created.
 * @returns 
 */
export const makeDir = (dirPath: string) => fs.mkdirSync(dirPath)

/**
 * Check a directory path
 * @param filePath <string> - the absolute or relative path.
 * @returns <boolean> true if the path exists, otherwise false.
 */
export const directoryExists = (filePath: string): boolean => fs.existsSync(filePath)

/**
 * Clean a directory specified at a given path.
 * @param dirPath <string> - the directory path.
 */
export const cleanDir = (dirPath: string): void => {
  fs.rmSync(dirPath, { recursive: true, force: true })
  fs.mkdirSync(dirPath)
}

/**
 * Read a file at given path.
 * @param filePath <string> - the absolute or relative path.
 * @returns <string> 
 */
export const readFileSync = (filePath: string): string => {
  return fs.readFileSync(filePath).toString()
}

/**
 * Read and return an object of a local JSON file located at a specific path.
 * @param filePath <string> - the absolute or relative path.
 * @returns <any>
 */
export const readJSONFile = (filePath: string): any => {
  if (!directoryExists(filePath)) throw new Error(`Oops, looks like that the provided file path does not exist!`)

  return JSON.parse(readFileSync(filePath))
}

/**
 * Read a local .json file at a given path.
 * @param filePath <string>
 * @returns <any>
 */
export const readLocalJsonFile = (filePath: string): any => {
  const filename = fileURLToPath(import.meta.url)
  const dirname = path.dirname(filename)

  return readJSONFile(path.join(dirname, filePath))
}

/**
 * Write data a local .json file at a given path.
 * @param filePath <string> 
 * @param data <JSON>
 */
export const writeLocalJsonFile = (filePath: string, data: JSON) => {
  fs.writeFileSync(filePath, JSON.stringify(data), "utf-8");
}

/**
 *
 * @param dirPath <string> - the path to the directory where the file containing the key will be stored.
 * @param fileName <string> - the name of the file.
 * @param key <string> - the key to be stored.
 */
export const toTextFile = (dirPath: string, fileName: string, key: string): void => {
  // nb. always plaintext here!
  const file = `${dirPath}/${fileName}.txt`

  fs.writeFileSync(file, key)
}

/**
 * Parse a CSV file and returns an array JSON representation.
 * @param filePath <string>
 * @returns Promise<Converter>
 */
export const getCSVFileRecords = async (filePath: string): Promise<Converter> => {
  if (!directoryExists(filePath)) throw new Error(`Oops, looks like that the provided CSV file path does not exist!`)
  return await csv().fromFile(filePath);
};
