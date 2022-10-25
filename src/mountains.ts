import Mountain from "./models/Mountain";

export const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 1931 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (
  arrayOfMountains: Mountain[]
): string => {
  let tallestMountain = arrayOfMountains[0];
  arrayOfMountains.forEach((mtn) => {
    if (mtn.height > tallestMountain.height) {
      tallestMountain = mtn;
    }
  });
  if (arrayOfMountains) {
    return tallestMountain.name;
  } else {
    return "";
  }
};
