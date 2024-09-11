// export default function categoryToId(category) {
//   switch (category) {
//     case 'Nuro Disposable - 1ml - Classic':
//       return '2KUADAD6YY7RSGANM3R6L3JP';
//     case 'Nuro Disposable - 1ml - Limited Edition':
//       return 'CVJUQQCFJDBYAMOVTW7CCKKZ';
//     case 'Nuro Disposable - 1ml - Essential':
//       return 'VHM7BI7SFYYEB4E4RBMXYYIO';
//     case 'Nuro Disposable - 3ml - Essential':
//       return 'RKV36EWDODQ5LKCXBCWQIMYK';
//     case 'Nuro Disposable - 3ml - Classic':
//       return 'ER5AFWJOZ6QB6OQBQCPQWRST';
//     case 'Nuro Disposable - 3ml - Super Blend':
//       return '3CEHMD2Z7V4OVXTRK3E75RHU';
//     case 'Nuro Disposable - 3ml - Broad Spec':
//       return '3JHJDPBCHIPNCJF2NATBXTOK';
//     case 'Nuro Cartridge - 1ml - Limited Edition':
//       return 'CVJUQQCFJDBYAMOVTW7CCKKZ';
//     case 'Nuro Cartridge - 1ml - Classic':
//       return 'P3ISA4G7SFKVB2NEUA6QLSXT';
//     case 'Candy Pod - 1ml - Broad Spec':
//       return 'SUDSLEREIATLI5UV7GMLC62O';
//     default:
//       return null;
//   }
// }

// Function to handle subcategory items with a switch-case
export const categoryToId = (subCategory) => {
  switch (subCategory) {
    case '1mL Classic Cart':
      return 'P3ISA4G7SFKVB2NEUA6QLSXT';
    case '1mL THCA Cart':
      return 'CVJUQQCFJDBYAMOVTW7CCKKZ';
    case '1mL Classic Disposable':
      return '2KUADAD6YY7RSGANM3R6L3JP';
    case '1mL Essential Disposable':
      return 'VHM7BI7SFYYEB4E4RBMXYYIO';
    case 'Battery':
      return null;
    case 'Pod Broad Spec':
      return 'SUDSLEREIATLI5UV7GMLC62O';
    case '3mL Super Blend Disposable':
      return '3CEHMD2Z7V4OVXTRK3E75RHU';
    case '3mL Classic Disposable':
      return 'ER5AFWJOZ6QB6OQBQCPQWRST';
    case '3mL Essential Disposable':
      return 'RKV36EWDODQ5LKCXBCWQIMYK';
    case '3mL Broad Spec Disposable':
      return '3JHJDPBCHIPNCJF2NATBXTOK';
    case '5mL Broad Spec Disposable':
      return null;
    case 'Pump':
      return null;
    case 'Crop Kings':
      return null;
    case 'Lemon Tree':
      return null;
    case 'Pop Cones':
      return null;
    case 'Tre House':
      return null;
    default:
      return null;
  }
};
