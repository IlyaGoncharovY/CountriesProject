/**
 * CountriesType common type for all countries
 * @type CountriesTypeChild array countries
 * @type name CountriesTypeChildName
 * @type tld string[]
 * @type cca2 string
 * @type ccn3 string
 * @type independent boolean
 * @type status string
 * @type unMember boolean
 * @type currencies CountriesTypeChildCurrencies
 * @type CountriesTypeChildIdd idd
 * @type capital string[]
 * @type altSpellings string[]
 * @type region string
 * @type languages CountriesTypeChildLanguages
 * @type translations CountriesTypeChildTranslations
 * @type latlng number[]
 * @type landlocked boolean
 * @type area number
 * @type demonyms CountriesTypeChildDemonyms
 * @type flag string
 * @type maps CountriesTypeChildMaps
 * @type population number
 * @type fifa string
 * @type car CountriesTypeChildCar
 * @type timezones string[]
 * @type continents string[]
 * @type flags CountriesTypeChildFlags
 * @type coatOfArms CountriesTypeChildCoatOfArms
 * @type startOfWeek string
 * @type capitalInfo CountriesTypeChildCapitalInfo
 * @type postalCode CountriesTypeChildPostalCode
 */
export type CountriesType = CountriesTypeChild[];
export type CountriesTypeChildNameNativeNameEng = {
  official: string;
  common: string;
};
export type CountriesTypeChildNameNativeName = {
  eng: CountriesTypeChildNameNativeNameEng;
};
export type CountriesTypeChildName = {
  common: string;
  official: string;
  nativeName: CountriesTypeChildNameNativeName;
};
export type CountriesTypeChildCurrenciesUSD = {
  name: string;
  symbol: string;
};
export type CountriesTypeChildCurrencies = {
  USD: CountriesTypeChildCurrenciesUSD;
};
export type CountriesTypeChildIdd = {
  root: string;
  suffixes: string[];
};
export type CountriesTypeChildLanguages = {
  eng: string;
};
export type CountriesTypeChildTranslationsAra = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsBre = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsCes = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsCym = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsDeu = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsEst = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsFin = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsFra = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsHrv = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsHun = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsIta = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsJpn = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsKor = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsNld = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsPer = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsPol = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsPor = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsRus = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsSlk = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsSpa = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsSrp = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsSwe = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsTur = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsUrd = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslationsZho = {
  official: string;
  common: string;
};
export type CountriesTypeChildTranslations = {
  ara: CountriesTypeChildTranslationsAra;
  bre: CountriesTypeChildTranslationsBre;
  ces: CountriesTypeChildTranslationsCes;
  cym: CountriesTypeChildTranslationsCym;
  deu: CountriesTypeChildTranslationsDeu;
  est: CountriesTypeChildTranslationsEst;
  fin: CountriesTypeChildTranslationsFin;
  fra: CountriesTypeChildTranslationsFra;
  hrv: CountriesTypeChildTranslationsHrv;
  hun: CountriesTypeChildTranslationsHun;
  ita: CountriesTypeChildTranslationsIta;
  jpn: CountriesTypeChildTranslationsJpn;
  kor: CountriesTypeChildTranslationsKor;
  nld: CountriesTypeChildTranslationsNld;
  per: CountriesTypeChildTranslationsPer;
  pol: CountriesTypeChildTranslationsPol;
  por: CountriesTypeChildTranslationsPor;
  rus: CountriesTypeChildTranslationsRus;
  slk: CountriesTypeChildTranslationsSlk;
  spa: CountriesTypeChildTranslationsSpa;
  srp: CountriesTypeChildTranslationsSrp;
  swe: CountriesTypeChildTranslationsSwe;
  tur: CountriesTypeChildTranslationsTur;
  urd: CountriesTypeChildTranslationsUrd;
  zho: CountriesTypeChildTranslationsZho;
};
export type CountriesTypeChildDemonymsEng = {
  f: string;
  m: string;
};
export type CountriesTypeChildDemonyms = {
  eng: CountriesTypeChildDemonymsEng;
};
export type CountriesTypeChildMaps = {
  googleMaps: string;
  openStreetMaps: string;
};
export type CountriesTypeChildCar = {
  signs: string[];
  side: string;
};
export type CountriesTypeChildFlags = {
  png: string;
  svg: string;
};
export type CountriesTypeChildCoatOfArms = {};
export type CountriesTypeChildCapitalInfo = {
  latlng: number[];
};
export type CountriesTypeChildPostalCode = {
  format: string;
  regex: string;
};
export type CountriesTypeChild = {
  name: CountriesTypeChildName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: CountriesTypeChildCurrencies;
  idd: CountriesTypeChildIdd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: CountriesTypeChildLanguages;
  translations: CountriesTypeChildTranslations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: CountriesTypeChildDemonyms;
  flag: string;
  maps: CountriesTypeChildMaps;
  population: number;
  fifa: string;
  car: CountriesTypeChildCar;
  timezones: string[];
  continents: string[];
  flags: CountriesTypeChildFlags;
  coatOfArms: CountriesTypeChildCoatOfArms;
  startOfWeek: string;
  capitalInfo: CountriesTypeChildCapitalInfo;
  postalCode: CountriesTypeChildPostalCode;
};
