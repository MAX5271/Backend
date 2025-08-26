export function linearSearch(){};
export function binarySearch(){};

//only the files which import it will be able to use it.
// module.exports = {
//     linear: linearSearch,
//     binarry: binarySearch
// };


//this is known as default export, any file can use it
// export default function fun(){};

// // this is named export
// export function linear(){};

//or

export default{
    linearSearch,
    binarySearch
}

/**
 * export {
 * functions:name,
 * }
 */
