type userType = {
  id: number;
  name: string;
  username: string;
  email: string;
  purchases: number;
  active: boolean;
  icon: string;
}[];

type allDataType = {
  name: string;
  newYear: number;
  lastYear: number;
  amt: number;
}[];

type visitDataType = {
  name: string;
  visit: number;
}[];

type productType = {
  id: number;
  title: string;
  price: number;
  img: string;
  salesNumber: number;
}[];

type detailsType = {
  numbers:number,
  title:string,
  icon:JSX.Element
  percent:string
}