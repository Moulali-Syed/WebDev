const band = {
  bandName: 'led zepplin',
  famousSong: 'stairway to heaven',
  year: 1968,
  anotherFamousSong: 'kashmir',
};

const { bandName, famousSong } = band;
console.log(bandName, famousSong);

const bandName1 = band.bandName;
const famousSong1 = band.famousSong;

console.log(bandName1, famousSong1);

// const { bandName: var1, famousSong: var2 } = band;
// console.log(var1, var2);

const { bName, famSong, ...restProps } = band;
console.log(bName, famSong, restProps);
