// const errorM = {
//   teamsError: 422,
//   teamNot: 404,
// };

enum errorX {
  teamsError = 422,
  teamNot = 404,
}

const mapError = (err: string): number => Number(errorX[err as unknown as number]);

// console.log(mapError('PRODUCT_NOT_FOUND')); Exemplo de como o mapError funciona
export default mapError;
